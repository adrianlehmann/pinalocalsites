import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPath from "@/assets/images/logo.avif";
import { AuditProgress, AuditCTA } from "@/components/audit";
import { getAudit, type AuditResult, type AuditStatus } from "@/lib/audit";

const POLL_INTERVAL_MS = 2500;

export default function WebsiteAnalysisResult() {
  const params = useParams<{ auditId: string }>();
  const auditId = params.auditId ?? "";
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<AuditStatus>("queued");

  useEffect(() => {
    if (!auditId) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const poll = async () => {
      try {
        const result = await getAudit(auditId);
        if (cancelled) return;
        setAudit(result);
        setStatus(result.status);
        setError(null);

        if (
          result.status !== "completed" &&
          result.status !== "failed"
        ) {
          timer = setTimeout(poll, POLL_INTERVAL_MS);
        }
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error
            ? err.message
            : "Could not load this analysis yet.",
        );
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [auditId]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <header className="border-b py-4 px-6 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src={logoPath}
            alt="Piña Local Sites logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-bold text-lg tracking-tight font-serif">
            piña local sites
          </span>
        </Link>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <Link
          href="/website-analysis"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Start another analysis
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
          Website analysis
        </h1>
        <p className="text-muted-foreground mb-8">
          Audit ID: <span className="font-mono text-sm">{auditId}</span>
        </p>

        {error ? (
          <div className="rounded-3xl border bg-card p-8 shadow-sm space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
                Analysis coming soon
              </p>
              <h2 className="text-2xl font-serif font-bold mb-3">
                Analysis results aren't available yet
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This results page is ready for the audit engine. Once it's
                connected, you'll see progress and findings here automatically.
              </p>
            </div>
            <AuditProgress status="queued" />
            <AuditCTA
              headline="Want help now?"
              description="Book a free call and I'll review your website and online presence with you directly."
            />
          </div>
        ) : (
          <div className="rounded-3xl border bg-card p-8 shadow-sm space-y-8">
            <AuditProgress status={audit?.status ?? status} />
            {audit?.status === "completed" && (
              <p className="text-muted-foreground">
                Completed analysis rendering will live here once the API returns
                findings.
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
