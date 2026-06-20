type StackItem = {
  name: string;
  role: string;
  detail: string;
};

const STACK: StackItem[] = [
  {
    name: "Oracle Cloud Infrastructure",
    role: "Compute",
    detail: "VPS host for the Next.js application runtime.",
  },
  {
    name: "Cloudflare",
    role: "DNS / Proxy",
    detail: "Edge DNS, caching, and DDoS protection in front of the origin.",
  },
  {
    name: "DigitalPlat",
    role: "Domain",
    detail: "Registrar and domain management for production hostname.",
  },
  {
    name: "Nginx",
    role: "Reverse proxy",
    detail: "Terminates HTTP, forwards traffic to the Node process.",
  },
  {
    name: "PM2",
    role: "Process manager",
    detail: "Keeps the Next.js server running with restarts on failure.",
  },
  {
    name: "Certbot",
    role: "SSL / TLS",
    detail: "Issues and renews certificates for HTTPS on the VPS.",
  },
];

export function InfrastructureStack() {
  return (
    <section aria-labelledby="stack-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="stack-heading"
            className="text-2xl font-semibold tracking-tight text-ink text-balance sm:text-3xl"
          >
            Infrastructure stack
          </h2>
          <p className="mt-2 max-w-prose text-muted">
            Services wired together for this production deployment.
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          {STACK.length} components
        </p>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((item, index) => (
          <li
            key={item.name}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-primary/40 hover:bg-surface-raised"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p className="font-mono text-xs uppercase tracking-wide text-primary">
              {item.role}
            </p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-ink">
              {item.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
