import { DeploymentInfo } from "./components/deployment-info";
import { HydrationProof } from "./components/hydration-proof";
import { InfrastructureStack } from "./components/infrastructure-stack";
import { StatusBadge } from "./components/status-badge";

export const dynamic = "force-dynamic";

export default function Home() {
  const serverRenderedAt = new Date().toISOString();

  return (
    <div className="relative min-h-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--glow),transparent)]"
        aria-hidden="true"
      />

      <header className="relative border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <p className="font-mono text-xs tracking-wide text-muted">
            VPS deployment test
          </p>
          <StatusBadge />
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="animate-fade-up max-w-3xl">
          <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
            nextjs-vps-project
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted text-pretty">
            Production homepage for validating Next.js App Router on a
            self-hosted Oracle Cloud VPS behind Nginx, PM2, and Cloudflare.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          <DeploymentInfo />
          <InfrastructureStack />
          <HydrationProof serverRenderedAt={serverRenderedAt} />
        </div>
      </main>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Built with Next.js App Router on a self-hosted VPS</p>
          <p className="font-mono text-xs">
            Node {process.version} · Rendered {serverRenderedAt.slice(0, 19)}Z
          </p>
        </div>
      </footer>
    </div>
  );
}
