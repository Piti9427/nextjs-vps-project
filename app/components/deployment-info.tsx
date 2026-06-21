import { formatBuildTime, getDeployInfo } from "@/lib/deploy";

export function DeploymentInfo() {
  const deploy = getDeployInfo();

  return (
    <section
      className="rounded-2xl border border-accent/30 bg-surface p-6 sm:p-8"
      aria-labelledby="deploy-heading"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2
            id="deploy-heading"
            className="text-lg font-semibold tracking-tight text-ink text-balance"
          >
            Deployment fingerprint
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
            Refresh after deploy. If build time and build ID change, the new
            production bundle is live.
          </p>
        </div>
        <p className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          v{deploy.version}
        </p>
      </div>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Build ID
          </dt>
          <dd className="mt-2 font-mono text-sm font-medium text-accent">
            {deploy.buildId}
          </dd>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Built at (UTC)
          </dt>
          <dd className="mt-2 font-mono text-sm text-ink">
            {formatBuildTime(deploy.buildTime)}
          </dd>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Git commit
          </dt>
          <dd className="mt-2 font-mono text-sm text-ink">
            {deploy.gitSha ?? "—"}
          </dd>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-4">
          <dt className="font-mono text-xs uppercase tracking-wide text-muted">
            Environment
          </dt>
          <dd className="mt-2 font-mono text-sm text-ink">
            {process.env.NODE_ENV ?? "unknown"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
