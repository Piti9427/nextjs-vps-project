type StatusBadgeProps = Readonly<{
  label?: string;
}>;

export function StatusBadge({
  label = "Status: Active (Production)",
}: StatusBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-raised px-4 py-2 text-sm font-medium text-ink"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex size-2.5" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-status-pulse rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
      </span>
      <span>{label}</span>
    </div>
  );
}
