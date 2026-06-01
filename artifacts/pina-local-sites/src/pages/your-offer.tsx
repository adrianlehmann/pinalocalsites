import { Link } from "wouter";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@/assets/images/logo.avif";
import heroImg from "../assets/images/hero.avif";

const includedFeatures = [
  "Fully custom website design tailored to your brand",  
  "Mobile-friendly, fully responsive layout",
  "Testimonials & Reviews displayed on website",
  "Contact form with email notifications",
  "Basic on-page SEO setup",
  "Fast load times — optimized images and clean code",
  "SSL security certificate",
  "Domain connection setup",
  "Launch setup",
];

const optionalEnhancements = [
  "Online Booking Calendar",
  "Testimonials & Reviews Section",
  "Google Reviews Integration",
  "Custom Logo Design",
];

const tiers = [
  {
    name: "Essential",
    tagline: "Perfect for getting online fast",
    price: "$30",
    period: "/ month",
    highlight: false,
    highlightFirst: false,
    features: [
      "Hosting",
      "Domain Renewal",
      "Custom email address",
      "Website Monitoring",
      "Backups",
      "Technical Maintenance",
    ],
  },
  {
    name: "Growth",
    tagline: "Most popular for local businesses",
    price: "$50",
    period: "/ month",
    highlight: true,
    highlightFirst: true,
    features: [
      "Everything in Essential",
      "Monthly content edits",
      "Monthly image updates/replacements",
      "Monthly website health check",
      "Priority support",
      "48-hour turnaround on update requests",
      "Performance optimization checks",
    ],
  },
  {
    name: "Premium",
    tagline: "For businesses ready to scale",
    price: "$75",
    period: "/ month",
    features: [
      "Everything in Growth",
      "24-hour turnaround on update requests",
      "Monthly SEO improvement recommendations",
      "Monthly website improvement recommendations",
      "Google Business Profile optimization",
    ],
    highlight: false,
    highlightFirst: true,
  },
];

export default function YourOffer() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Minimal header */}
      <header className="absolute top-0 left-0 w-full z-20 py-4 px-6 flex items-center">
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
          <span className="font-bold text-lg tracking-tight text-white drop-shadow">
            piña local sites
          </span>
        </Link>
      </header>

      {/* Hero — ~50vh, full width */}
      <div
        className="relative w-full"
        style={{ height: "50vh", minHeight: "280px" }}
      >
        <img
          src={heroImg}
          alt="Your personal offer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <p className="text-white/70 text-sm uppercase tracking-widest mb-3 font-medium">
              Prepared exclusively for you
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-md">
              Your Personal Offer
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 px-4 md:px-8 py-14 max-w-6xl mx-auto w-full space-y-10">
        {/* Row 1 — Full-width offer box */}
        <section aria-labelledby="offer-heading">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <div className="max-w-2xl mb-2">
              <h2 className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                What's included
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-end justify-end gap-3 mt-6">
              <span className="text-2xl md:text-4xl font-bold tracking-tight">
                $500
              </span>

              <span className="text-muted-foreground mb-1">
                one-time website package
              </span>
            </div>
            <div className="flex items-end justify-end">
              <p className="text-xs text-muted-foreground mt-2">
                Monthly care plan required after launch.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="enhancements-heading">
          <div className="bg-card border rounded-3xl p-8 shadow-sm">
            <div className="max-w-2xl mb-2">
              <h2
                id="enhancements-heading"
                className="inline-block bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
              >
                Optional Enhancements
              </h2>
            </div>

            <p className="text-muted-foreground mb-6 max-w-3xl">
              If you need additional
              functionality, we can incorporate custom features such as:
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {optionalEnhancements.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground max-w-3xl mt-6">

              Additional features and functionality can be quoted and added to your
              project as needed.
            </p>
          </div>
        </section>

        {/* Row 2 — Three pricing tiers */}
        <section aria-labelledby="tiers-heading">
          <div className="mb-8 text-center">
            <h2
              id="tiers-heading"
              className="text-3xl md:text-4xl font-serif font-bold mb-3"
            >
              Choose your plan
            </h2>
            <p className="text-muted-foreground text-lg">
              All plans include a custom design — pick the scope that fits where
              you are right now.
            </p>
          </div>

          {/* Desktop: 3 columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>

          {/* Mobile: scroll-snap slider, middle card centered */}
          <div
            className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{
              paddingLeft: "10%",
              paddingRight: "10%",
              scrollPaddingLeft: "10%",
            }}
            data-testid="slider-tiers"
          >
            {tiers.map((tier, idx) => (
              <div key={tier.name} className="snap-center shrink-0 w-[80vw]">
                <TierCard tier={tier} />
              </div>
            ))}
          </div>

          {/* Mobile swipe hint */}
          <p className="md:hidden text-center text-sm text-muted-foreground mt-3">
            Swipe to see all plans
          </p>

          {/* Custom redesign hint */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Custom functionality and major redesigns quoted separately.
          </p>
        </section>
      </main>

      <footer className="border-t py-6 px-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Piña Local Sites. All rights
          reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <Link
            href="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

function TierCard({ tier }: { tier: (typeof tiers)[0] }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 shadow-sm h-full ${
        tier.highlight
          ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02]"
          : "bg-card"
      }`}
      data-testid={`card-tier-${tier.name.toLowerCase()}`}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-2xl font-bold mb-1 ${tier.highlight ? "text-primary-foreground" : ""}`}
        >
          {tier.name}
        </h3>
        <p
          className={`text-sm ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {tier.tagline}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f, idx) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                tier.highlight ? "text-primary-foreground" : "text-primary"
              }`}
            />
            <span
              className={`text-sm ${
                tier.highlight
                  ? "text-primary-foreground/90"
                  : "text-muted-foreground"
              } ${tier.highlightFirst && idx === 0 ? "font-bold" : ""}`}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="mb-4">
          <span
            className={`text-3xl font-bold ${tier.highlight ? "text-primary-foreground" : ""}`}
          >
            {tier.price}
          </span>
          <span
            className={`text-sm ml-1 ${
              tier.highlight
                ? "text-primary-foreground/70"
                : "text-muted-foreground"
            }`}
          >
            {tier.period}
          </span>
        </div>

        <Button
          className={`w-full rounded-full font-bold ${
            tier.highlight
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              : ""
          }`}
          variant={tier.highlight ? "outline" : "default"}
          size="lg"
          data-testid={`button-choose-${tier.name.toLowerCase()}`}
        >
          Choose this plan
        </Button>
      </div>
    </div>
  );
}
