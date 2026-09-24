import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import logoPath from "@/assets/images/logo.avif";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import {
  CALENDLY_URL,
  PAGE_SEO,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export default function WebsiteAnalysis() {
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
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          I'll look at SEO, performance, content, and local search — then walk
          you through what could be improved.
        </p>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Booking opens my calendar. There's a field for your website — paste
          the URL there so I can review it before the call. No credit card. No
          commitment.
        </p>

        <Button
          asChild
          size="lg"
          className="rounded-full px-8 font-bold border-0 hover:text-black"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Schedule the analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
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
