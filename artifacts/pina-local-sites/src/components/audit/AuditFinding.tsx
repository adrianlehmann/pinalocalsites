import type { AuditPriority } from "@/lib/audit";

const PRIORITY_STYLES: Record<
  AuditPriority,
  { label: string; className: string }
> = {
  high: {
    label: "High priority",
    className: "bg-destructive/10 text-destructive",
  },
  medium: {
    label: "Medium",
    className: "bg-secondary/20 text-secondary-foreground",
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground",
  },
  positive: {
    label: "Working well",
    className: "bg-primary/10 text-primary",
  },
};

interface AuditFindingProps {
  priority: AuditPriority;
  title: string;
  description?: string;
  className?: string;
}

export function AuditFinding({
  priority,
  title,
  description,
  className = "",
}: AuditFindingProps) {
  const style = PRIORITY_STYLES[priority];

  return (
    <article
      className={`rounded-2xl border bg-background p-5 ${className}`}
    >
      <span
        className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${style.className}`}
      >
        {style.label}
      </span>
      <h3 className="font-bold text-base mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </article>
  );
}
