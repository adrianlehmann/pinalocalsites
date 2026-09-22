interface AuditCategoryProps {
  name: string;
  score?: number;
  summary?: string;
  className?: string;
}

export function AuditCategory({
  name,
  score,
  summary,
  className = "",
}: AuditCategoryProps) {
  return (
    <div className={`rounded-2xl border bg-background p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold">{name}</h3>
        {typeof score === "number" && (
          <span className="text-sm font-bold text-primary shrink-0">
            {score}/100
          </span>
        )}
      </div>
      {summary && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {summary}
        </p>
      )}
    </div>
  );
}
