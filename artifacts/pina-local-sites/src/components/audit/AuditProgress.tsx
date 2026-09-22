import { getAuditStatusLabel, type AuditStatus } from "@/lib/audit";

const STEPS: AuditStatus[] = [
  "queued",
  "crawling",
  "analyzing",
  "generating_report",
  "completed",
];

interface AuditProgressProps {
  status: AuditStatus;
  className?: string;
}

export function AuditProgress({ status, className = "" }: AuditProgressProps) {
  if (status === "failed") {
    return (
      <div className={`rounded-2xl border border-destructive/30 bg-destructive/5 p-6 ${className}`}>
        <p className="font-bold text-destructive mb-1">Analysis failed</p>
        <p className="text-sm text-muted-foreground">
          Something went wrong while analyzing this website. Please try again
          later or book a call.
        </p>
      </div>
    );
  }

  const activeIndex = STEPS.indexOf(status);

  return (
    <div className={`space-y-4 ${className}`} aria-live="polite">
      <p className="text-sm font-medium text-muted-foreground">
        Status:{" "}
        <span className="text-foreground">{getAuditStatusLabel(status)}</span>
      </p>
      <ol className="space-y-3">
        {STEPS.map((step, index) => {
          const done = index < activeIndex || status === "completed";
          const current = index === activeIndex && status !== "completed";
          return (
            <li key={step} className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                  done
                    ? "bg-primary"
                    : current
                      ? "bg-primary animate-pulse"
                      : "bg-border"
                }`}
                aria-hidden
              />
              <span
                className={`text-sm ${
                  done || current
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {getAuditStatusLabel(step)}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
