import { Link } from "wouter";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { CALENDLY_URL, PAGE_SEO } from "@/lib/seo";
import logoPath from "@/assets/images/logo.avif";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <Seo {...PAGE_SEO.notFound} />

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
          <span className="font-serif font-bold text-lg tracking-tight">
            piña local sites
          </span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            404
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            That page doesn't exist — or it may have moved. Try one of these
            instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full border-0 hover:text-black">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Search className="w-4 h-4 mr-2" />
                Free Website Analysis
              </a>
            </Button>
          </div>
          <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/#how-i-can-help" className="text-primary hover:underline">
              What I Do
            </Link>
            <Link href="/#portfolio" className="text-primary hover:underline">
              Portfolio
            </Link>
            <Link href="/#book" className="text-primary hover:underline">
              Book a Call
            </Link>
            <Link href="/privacy-policy" className="text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
