interface AuditScoreProps {
  score: number;
  label?: string;
  className?: string;
}

export function AuditScore({
  score,
  label = "Website Health",
  className = "",
}: AuditScoreProps) {
  const clamped = Math.max(0, Math.min(100, score));

  return (
    <div
      className={`rounded-2xl border bg-background p-6 text-center ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
        {label}
      </p>
      <p className="text-5xl font-serif font-bold tracking-tight">
        {clamped}
        <span className="text-2xl text-muted-foreground font-sans font-medium">
          {" "}
          / 100
        </span>
      </p>
    </div>
  );
}
