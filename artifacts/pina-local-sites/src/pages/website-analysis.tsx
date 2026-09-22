import { Link, useSearch } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoPath from "@/assets/images/logo.avif";
import { WebsiteUrlForm } from "@/components/audit";
import { Seo } from "@/components/Seo";
import {
  PAGE_SEO,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export default function WebsiteAnalysis() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const submittedUrl = params.get("url");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageJsonLd({
        title: PAGE_SEO.websiteAnalysis.title,
        description: PAGE_SEO.websiteAnalysis.description,
        path: PAGE_SEO.websiteAnalysis.path,
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Website Analysis", path: "/website-analysis" },
      ]),
    ],
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Seo {...PAGE_SEO.websiteAnalysis} jsonLd={jsonLd} />
      <header className="border-b py-4 px-6 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          data-testid="link-home-logo"
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

      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          Free website analysis
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Enter your website URL and I'll look at SEO, performance, content, and
          local search opportunities. No credit card. No commitment.
        </p>

        {submittedUrl ? (
          <div className="rounded-3xl border bg-card p-8 shadow-sm mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
              Analysis coming soon
            </p>
            <h2 className="text-2xl font-serif font-bold mb-3">
              Thanks — I received your site
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The automated analysis engine isn't connected yet. Your URL was
              captured so we can wire this up next:
            </p>
            <p className="font-medium break-all mb-6 bg-muted rounded-xl px-4 py-3">
              {submittedUrl}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Prefer to talk through it now? Book a free discovery call and I'll
              walk through your online presence with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/pinalocalsites/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold px-6 py-3 hover:opacity-90 transition-opacity"
              >
                Book a Call
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border font-bold px-6 py-3 hover:bg-muted transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <WebsiteUrlForm />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              No credit card. No commitment.
            </p>
          </div>
        )}

        <p className="text-sm text-muted-foreground mt-8 leading-relaxed">
          Automated reports are coming soon. Until then, you can still book a
          call and I'll review your site with you directly.
        </p>
      </main>

      <footer className="border-t py-6 px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Piña Local Sites. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
