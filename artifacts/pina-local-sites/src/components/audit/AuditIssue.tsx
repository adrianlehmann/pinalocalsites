import { AuditFinding } from "./AuditFinding";
import type { AuditPriority } from "@/lib/audit";

interface AuditIssueProps {
  priority: Exclude<AuditPriority, "positive">;
  title: string;
  description?: string;
  className?: string;
}

/** Alias for issue-style findings (high / medium / low). */
export function AuditIssue(props: AuditIssueProps) {
  return <AuditFinding {...props} />;
}
