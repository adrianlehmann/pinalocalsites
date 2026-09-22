import { useState, type FormEvent } from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  createAudit,
  isValidWebsiteUrl,
  normalizeWebsiteUrl,
} from "@/lib/audit";

interface WebsiteUrlFormProps {
  className?: string;
  inputClassName?: string;
  buttonLabel?: string;
  size?: "default" | "large";
}

export function WebsiteUrlForm({
  className = "",
  inputClassName = "",
  buttonLabel = "Analyze My Website",
  size = "large",
}: WebsiteUrlFormProps) {
  const [, setLocation] = useLocation();
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!isValidWebsiteUrl(url)) {
      setError("Enter a valid website URL, like https://yourbusiness.com");
      return;
    }

    setSubmitting(true);

    try {
      const { auditId } = await createAudit({
        websiteUrl: normalizeWebsiteUrl(url),
      });
      setLocation(`/website-analysis/${auditId}`);
    } catch {
      // API is not live yet — send visitors to the analysis page with the URL
      // so the form experience is ready without fabricating audit results.
      const params = new URLSearchParams({
        url: normalizeWebsiteUrl(url),
      });
      setLocation(`/website-analysis?${params.toString()}`);
    } finally {
      setSubmitting(false);
    }
  };

  const isLarge = size === "large";

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div
        className={`flex flex-col sm:flex-row gap-3 ${
          isLarge ? "sm:items-stretch" : "sm:items-center"
        }`}
      >
        <Input
          type="url"
          name="websiteUrl"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourbusiness.com"
          aria-label="Website URL"
          className={`bg-background border-border ${
            isLarge
              ? "h-14 rounded-full px-6 text-base md:text-base"
              : "h-11 rounded-full px-5"
          } ${inputClassName}`}
          disabled={submitting}
        />
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className={`rounded-full font-bold shrink-0 border-0 hover:text-black ${
            isLarge ? "h-14 px-8 text-base" : "h-11 px-6"
          }`}
          data-testid="button-analyze-submit"
        >
          {submitting ? "Starting…" : buttonLabel}
          {!submitting && <ArrowRight className="ml-2 w-5 h-5" />}
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive mt-3" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
