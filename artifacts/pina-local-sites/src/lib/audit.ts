export type AuditStatus =
  | "queued"
  | "crawling"
  | "analyzing"
  | "generating_report"
  | "completed"
  | "failed";

export type AuditPriority = "high" | "medium" | "low" | "positive";

export interface AuditFindingData {
  id: string;
  priority: AuditPriority;
  title: string;
  description?: string;
  category?: string;
}

export interface AuditCategoryData {
  id: string;
  name: string;
  score?: number;
  summary?: string;
}

export interface AuditResult {
  id: string;
  websiteUrl: string;
  status: AuditStatus;
  score?: number;
  businessName?: string;
  highPriorityCount?: number;
  improvementCount?: number;
  workingWellCount?: number;
  findings?: AuditFindingData[];
  categories?: AuditCategoryData[];
  createdAt?: string;
  updatedAt?: string;
  errorMessage?: string;
}

export interface CreateAuditRequest {
  websiteUrl: string;
}

export interface CreateAuditResponse {
  auditId: string;
}

const STATUS_LABELS: Record<AuditStatus, string> = {
  queued: "Queued",
  crawling: "Crawling your site",
  analyzing: "Analyzing findings",
  generating_report: "Generating report",
  completed: "Completed",
  failed: "Failed",
};

export function getAuditStatusLabel(status: AuditStatus): string {
  return STATUS_LABELS[status];
}

export function normalizeWebsiteUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function isValidWebsiteUrl(raw: string): boolean {
  try {
    const url = new URL(normalizeWebsiteUrl(raw));
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

/**
 * Creates an audit via the future backend.
 * Throws if the API is unavailable — callers should show a clear temporary state.
 */
export async function createAudit(
  payload: CreateAuditRequest,
): Promise<CreateAuditResponse> {
  const response = await fetch("/api/audit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      websiteUrl: normalizeWebsiteUrl(payload.websiteUrl),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Audit API returned ${response.status}. The analysis engine is not available yet.`,
    );
  }

  return response.json() as Promise<CreateAuditResponse>;
}

export async function getAudit(auditId: string): Promise<AuditResult> {
  const response = await fetch(`/api/audit/${auditId}`);

  if (!response.ok) {
    throw new Error(`Could not load audit ${auditId} (${response.status}).`);
  }

  return response.json() as Promise<AuditResult>;
}
