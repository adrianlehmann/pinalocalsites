import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/seo";

interface AuditCTAProps {
  headline?: string;
  description?: string;
  className?: string;
}

export function AuditCTA({
  headline = "Ready for your own analysis?",
  description = "Book a time and add your website in the analysis field. I'll look at where your online presence could improve.",
  className = "",
}: AuditCTAProps) {
  return (
    <div
      className={`rounded-3xl border bg-card p-8 md:p-10 text-center ${className}`}
    >
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
        {headline}
      </h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        {description}
      </p>
      <Button
        asChild
        size="lg"
        className="rounded-full px-8 font-bold border-0 hover:text-black"
      >
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Get My Free Analysis
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
    </div>
  );
}
