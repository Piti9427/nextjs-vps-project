"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type HydrationProofProps = Readonly<{
  serverRenderedAt: string;
}>;

function formatTimestamp(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(iso));
}

let clientBootTimestamp: string | undefined;

function getClientBootTimestamp(): string {
  clientBootTimestamp ??= new Date().toISOString();
  return clientBootTimestamp;
}

function subscribeToHydration() {
  return () => {};
}

export function HydrationProof({ serverRenderedAt }: HydrationProofProps) {
  const hydratedAt = useSyncExternalStore(
    subscribeToHydration,
    getClientBootTimestamp,
    () => null,
  );
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const interval = globalThis.setInterval(() => {
      setNow(new Date().toISOString());
    }, 1000);

    return () => globalThis.clearInterval(interval);
  }, []);

  const liveClock = now ?? hydratedAt;

  return (
    <section
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
      aria-labelledby="hydration-heading"
    >
      <h2
        id="hydration-heading"
        className="text-lg font-semibold tracking-tight text-ink text-balance"
      >
        Render verification
      </h2>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
        Timestamps below confirm server rendering on the VPS and client
        hydration in the browser.
      </p>

      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Server render (UTC)
          </dt>
          <dd className="mt-2 font-mono text-sm text-ink">
            {formatTimestamp(serverRenderedAt)}
          </dd>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Client hydration (UTC)
          </dt>
          <dd className="mt-2 font-mono text-sm text-ink">
            {hydratedAt ? (
              formatTimestamp(hydratedAt)
            ) : (
              <span className="text-muted">Awaiting hydration…</span>
            )}
          </dd>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Live clock (UTC)
          </dt>
          <dd className="mt-2 font-mono text-sm text-accent">
            {liveClock ? formatTimestamp(liveClock) : "—"}
          </dd>
        </div>
      </dl>

      <p className="mt-4 font-mono text-xs text-muted">
        Hydration state:{" "}
        <span className={hydratedAt ? "text-accent" : "text-muted"}>
          {hydratedAt ? "complete" : "pending"}
        </span>
      </p>
    </section>
  );
}
