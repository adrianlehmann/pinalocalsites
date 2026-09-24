import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Laptop,
  Search,
  MapPin,
  CheckCircle2,
  Globe,
  Megaphone,
  MousePointerClick,
  ListChecks,
  Wrench,
} from "lucide-react";
import logoPath from "@/assets/images/logo.avif";
import heroImg from "../assets/images/hero.avif";
import imgFiti from "../assets/images/portfolio-fiti.avif";
import imgComedy from "../assets/images/portfolio-comedy.avif";
import imgLpm from "../assets/images/portfolio-lpm.avif";
import imgConversion from "../assets/images/portfolio-conversion.avif";
import imgLivingOcean from "../assets/images/portfolio-livingocean.avif";
import imgSnorkelTurtleCanyon from "../assets/images/portfolio-snorkelturtlecanyon.avif";
import imgSunsetSail from "../assets/images/portfolio-sunsetsail.avif";
import imgWaikiki from "../assets/images/portfolio-waikiki.avif";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AuditScore, AuditFinding } from "@/components/audit";
import { Seo } from "@/components/Seo";
import {
  HOME_FAQS,
  PAGE_SEO,
  faqPageJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  BUSINESS,
  CALENDLY_URL,
} from "@/lib/seo";

// --- Types & Data ---

const portfolioItems = [
  {
    id: "fiti",
    name: "FITI PRM",
    type: "Custom Application",
    description:
      "A custom AI-powered revenue execution platform for professional service firms — built as a full web application with outreach workflows and relationship activation.",
    image: imgFiti,
    iconColor: "#000000",
    website: "https://fitiprm.com",
    tags: ["Web", "Mobile", "AI", "React", "Tailwind", "Next.js", "Azure"],
  },
  {
    id: "comedy",
    name: "Comedy Bus Tours",
    type: "Booking-Focused Tour Site",
    description:
      "A high-energy sightseeing website with integrated booking funnels and dynamic itinerary layouts for Comedy on Deck Tours' live-entertainment excursions.",
    image: imgComedy,
    iconColor: "#ffffff",
    website: "https://comedybustours.com/",
    tags: ["Web", "Mobile", "WordPress", "Elementor", "Booking"],
  },
  {
    id: "lpm",
    name: "Local Pack Monster",
    type: "Local SEO Software Site",
    description:
      "A product marketing site for Local Pack Monster, showcasing ranking trackers and AI-driven Google Maps visibility tools for local SEO.",
    image: imgLpm,
    iconColor: "#ffffff",
    website: "https://localpackmonster.com/",
    tags: ["Web", "Mobile", "WordPress", "Elementor", "Local SEO"],
  },
  {
    id: "conversion",
    name: "Conversion Consulting",
    type: "Conversion-Focused Marketing Site",
    description:
      "A conversion-focused marketing site for tour operators and water sports companies, with clear CTAs, free audits, and case-driven storytelling.",
    image: imgConversion,
    iconColor: "#ffffff",
    website: "https://increasewebconversions.com/",
    tags: ["Web", "Mobile", "WordPress", "Hosting", "Conversions"],
  },
  {
    id: "livingocean",
    name: "Living Ocean Tours",
    type: "Service & Booking Website",
    description:
      "A booking-focused snorkel and sunset cruise site for Oahu, featuring tour packages, wildlife experiences, and easy online reservations.",
    image: imgLivingOcean,
    iconColor: "#ffffff",
    website: "https://livingoceantours.com/",
    tags: ["Web", "Mobile", "WordPress", "Hosting", "Booking"],
  },
  {
    id: "snorkelturtlecanyon",
    name: "Snorkel Turtle Canyon",
    type: "Local Service Website",
    description:
      "A focused booking site for Turtle Canyon snorkel tours in Waikiki, built to showcase tours, marine life, and guided boat adventures.",
    image: imgSnorkelTurtleCanyon,
    iconColor: "#ffffff",
    website: "https://snorkelturtlecanyon.com/",
    tags: ["Web", "Mobile", "WordPress", "Hosting", "Local SEO"],
  },
  {
    id: "sunsetsail",
    name: "Sunset Sail",
    type: "Multi-Location Booking Site",
    description:
      "A sailing experience website covering Key West and Salem, with shared sails, private charters, and clear booking paths for dusk adventures.",
    image: imgSunsetSail,
    iconColor: "#ffffff",
    website: "https://sunsetsailusa.com/",
    tags: ["Web", "Mobile", "WordPress", "Hosting", "Booking"],
  },
  {
    id: "waikiki",
    name: "Sunset Cruise Waikiki",
    type: "Booking Funnel Website",
    description:
      "A Waikiki sunset cruise site with BYOB and cash bar options, Friday fireworks sailings, and straightforward online booking.",
    image: imgWaikiki,
    iconColor: "#ffffff",
    website: "https://sunsetcruisewaikiki.com/",
    tags: ["Web", "Mobile", "WordPress", "Hosting", "Booking"],
  },
];

// --- Components ---

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-3 cursor-pointer shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="link-home"
        >
          <img
            src={logoPath}
            alt="Piña Local Sites"
            className="w-10 h-10 object-contain rounded-lg"
          />
          <span className="font-serif font-bold text-xl tracking-tight text-foreground">
            piña local sites
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scrollTo("how-i-can-help")}
            className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
            data-testid="link-nav-what-i-do"
          >
            What I Do
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
            data-testid="link-nav-portfolio"
          >
            Portfolio
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-primary border border-primary/30 bg-primary/10 hover:bg-primary/15 px-4 py-2 rounded-full transition-colors"
            data-testid="link-nav-analyze"
          >
            Analyze My Site
          </a>
          <Button
            onClick={() => scrollTo("book")}
            className="rounded-full px-6 border-0 cursor-pointer hover:text-black"
            data-testid="button-nav-book"
          >
            Book
          </Button>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-3 lg:hidden"
          >
            <button
              onClick={() => scrollTo("how-i-can-help")}
              className="text-lg font-medium p-2 text-left hover:cursor-pointer hover:text-primary rounded-md transition-colors"
            >
              What I Do
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="text-lg font-medium p-2 text-left hover:cursor-pointer hover:text-primary rounded-md transition-colors"
            >
              Portfolio
            </button>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold p-3 text-center text-primary border border-primary/30 bg-primary/10 rounded-full"
            >
              Analyze My Site
            </a>
            <Button
              onClick={() => scrollTo("book")}
              className="w-full mt-1 hover:cursor-pointer hover:text-black transition-colors border-0"
              size="lg"
            >
              Book a Consultation
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40 dark:from-background dark:via-background/90 dark:to-background/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Websites · SEO · Google
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Is your business getting{" "}
            <span className="text-primary italic">found online</span>?
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
            Your website, Google Business Profile, and Google Ads all affect how
            customers find and choose your business. I can analyze what's
            working, find what's holding you back, and help you improve it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-black border-0"
              data-testid="button-hero-analyze"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Website Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg bg-background/70 backdrop-blur hover:cursor-pointer"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-testid="button-hero-portfolio"
            >
              View My Work
            </Button>
          </div>
          <p className="text-sm text-foreground/70">
            No commitment. Find out what could be improved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HoldingYouBack() {
  const problems = [
    {
      icon: <Globe className="w-7 h-7 text-primary" />,
      title: "Website & SEO",
      description:
        "Your website may look great but still have technical SEO, content, structure or local-search problems.",
    },
    {
      icon: <MapPin className="w-7 h-7 text-primary" />,
      title: "Google Business Profile",
      description:
        "Your Google Business Profile is often one of the first things customers see when they search for a local business.",
    },
    {
      icon: <Megaphone className="w-7 h-7 text-primary" />,
      title: "Google Ads",
      description:
        "Paid traffic can get expensive when campaigns, keywords, search terms or landing pages aren't working together.",
    },
    {
      icon: <MousePointerClick className="w-7 h-7 text-primary" />,
      title: "Conversions",
      description:
        "Getting someone to your website is only half the job. The site also needs to make it easy for them to call, book, request a quote or buy.",
    },
  ];

  return (
    <section id="holding-you-back" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Your website is only part of the picture.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Having a website doesn't necessarily mean customers can find you —
            or that the people who do find you become customers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border rounded-2xl p-7 shadow-sm"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowICanHelp() {
  return (
    <section id="how-i-can-help" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            How I Can Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sometimes you need a new website. Sometimes you just need to know
            what's wrong with the one you already have.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Service 1 — Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Laptop className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Build a Website</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I design and build custom, mobile-first websites for local
              businesses — with SEO, performance and conversions built in from
              the start.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {[
                "Custom design",
                "Mobile-first",
                "SEO foundations",
                "Fast performance",
                "Conversion-focused",
                "Ongoing support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full rounded-full font-bold border-0 hover:text-black"
              onClick={() =>
                document
                  .getElementById("book")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Build My Website
            </Button>
          </motion.div>

          {/* Service 2 — Analysis (emphasized) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-primary text-primary-foreground border border-primary rounded-3xl p-8 shadow-xl flex flex-col"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
              Start here · Free initial analysis
            </span>
            <div className="bg-primary-foreground/15 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-2">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Analyze My Website</h3>
            <p className="text-primary-foreground/85 leading-relaxed mb-6">
              Already have a website? I'll look at what's working, what's not,
              and where you have opportunities to improve.
            </p>
            <ul className="space-y-2 mb-8 flex-1">
              {[
                "Technical SEO",
                "Search visibility",
                "Content & structure",
                "Performance",
                "Local SEO",
                "Conversion opportunities",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 opacity-90" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full rounded-full font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Analysis
              </a>
            </Button>
          </motion.div>

          {/* Service 3 — Google Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card border rounded-3xl p-8 shadow-sm flex flex-col"
          >
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Improve Your Google Presence
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your website isn't the only thing customers see. I can also
              analyze the parts of Google that drive local visibility and paid
              traffic.
            </p>

            <div className="space-y-5 mb-8 flex-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Google Business Profile
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Profile optimization",
                    "Categories",
                    "Services",
                    "Reviews",
                    "Photos",
                    "Local visibility",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Google Ads
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Campaign structure",
                    "Keywords",
                    "Search terms",
                    "Landing pages",
                    "Conversion opportunities",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              className="w-full rounded-full font-bold border-0 hover:text-black"
              onClick={() =>
                document
                  .getElementById("book")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Improve My Google Presence
            </Button>
          </motion.div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          Behind every service: custom design, mobile-first development, SEO &
          local visibility, website performance, and ongoing support when you
          need it.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Analyze",
      description:
        "I look at your website and online presence to identify problems and opportunities.",
      icon: <Search className="w-6 h-6 text-primary" />,
    },
    {
      num: "02",
      title: "Prioritize",
      description:
        "Not every SEO issue matters equally. I'll focus on the changes that are actually worth making.",
      icon: <ListChecks className="w-6 h-6 text-primary" />,
    },
    {
      num: "03",
      title: "Improve",
      description:
        "You can make the changes yourself, or I can take care of them for you.",
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 max-w-3xl mx-auto">
            Find the problem. Prioritize the opportunity. Fix it.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center bg-primary/10 w-12 h-12 rounded-xl mb-5">
                {step.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Step {step.num}
              </p>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalysisTool() {
  return (
    <section id="analyze" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Not sure what's wrong with your website?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Book a free look. On the scheduling page, paste your website into
            the analysis field and I'll review SEO, performance, content, and
            local search before we talk.
          </p>

          <div className="rounded-3xl border bg-card p-6 md:p-8 shadow-sm">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 font-bold border-0 hover:text-black"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Website Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card. No commitment. Just pick a time and add your URL.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExampleAudit() {
  return (
    <section id="example-audit" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Example Website Analysis
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            See what an analysis looks like
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clear view of what's working, what isn't, and what to fix first —
            without the jargon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border bg-background p-6 md:p-10 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b">
            <div>
              <h3 className="text-2xl font-bold">ABC Plumbing</h3>
              <p className="text-muted-foreground">abcplumbing.com</p>
            </div>
            <p className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-full w-fit">
              Fictional example for demonstration
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <AuditScore score={67} />
            <div className="flex flex-col gap-3">
              {[
                { n: "3", l: "High priority issues" },
                { n: "6", l: "Improvements" },
                { n: "12", l: "Things working well" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="rounded-2xl border bg-card px-4 py-3 flex items-center gap-4 min-w-0"
                >
                  <p className="text-2xl font-bold text-primary shrink-0 tabular-nums w-10 text-center">
                    {stat.n}
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <AuditFinding
              priority="high"
              title="Your service pages aren't targeting local searches effectively"
            />
            <AuditFinding
              priority="medium"
              title="Mobile performance could be improved"
            />
            <AuditFinding
              priority="medium"
              title="Important pages have weak internal linking"
            />
          </div>

          <p className="text-xs text-muted-foreground mb-6 text-center">
            Example results shown for demonstration purposes.
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-bold border-0 hover:text-black"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get My Free Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  const loopSet = Array.from({ length: 4 }, () => portfolioItems).flat();

  const renderCards = (keyPrefix: string, ariaHidden = false) =>
    loopSet.map((item, i) => (
      <div
        key={`${keyPrefix}-${item.id}-${i}`}
        className="w-[300px] md:w-[400px] shrink-0 px-4"
        onClick={() => setSelectedProject(item)}
        onKeyDown={(e) => {
          if (!ariaHidden && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setSelectedProject(item);
          }
        }}
        role={ariaHidden ? undefined : "button"}
        tabIndex={ariaHidden ? undefined : 0}
        aria-hidden={ariaHidden || undefined}
      >
        <div
          className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border bg-card"
          data-testid={ariaHidden ? undefined : `card-portfolio-${item.id}`}
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={item.image}
              alt={ariaHidden ? "" : `${item.name} website screenshot`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
              {item.type}
            </div>
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Websites built for real businesses.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From local service businesses to tour operators and digital
            products, here's some of the work I've built.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full pb-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll">
          <div className="flex shrink-0">{renderCards("a")}</div>
          <div className="flex shrink-0" aria-hidden="true">
            {renderCards("b", true)}
          </div>
        </div>
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent
          className="max-w-4xl p-0 overflow-hidden bg-muted border-none shadow-2xl rounded-2xl"
          closeIconColor={selectedProject?.iconColor}
        >
          {selectedProject && (
            <div className="flex flex-col h-[85vh] md:h-auto md:max-h-[85vh]">
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-muted shrink-0">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.name} website screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <DialogTitle className="text-3xl font-serif font-bold mb-2">
                  {selectedProject.name}
                </DialogTitle>
                <div className="text-primary font-medium mb-6">
                  {selectedProject.type}
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-end">
                  <Button
                    size="lg"
                    className="rounded-full cursor-pointer hover:text-black border-0"
                    onClick={() =>
                      window.open(selectedProject.website, "_blank")
                    }
                    data-testid="button-visit-site"
                  >
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-center">
            Common questions
          </h2>
          <p className="text-muted-foreground text-lg text-center mb-12">
            Straight answers about websites, analysis, and improving your online
            presence.
          </p>

          <div className="space-y-4">
            {HOME_FAQS.map((faq, i) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border bg-card px-6 py-5 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-bold text-lg flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    className="text-primary shrink-0 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground leading-relaxed mt-4 pr-8">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Not sure what your website needs?
          </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's take a look. Book a free analysis, add your website on the
            scheduling page, and I'll show you where it could improve.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-bold border-0 hover:text-black"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Free Website Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-bold"
              onClick={() =>
                document
                  .getElementById("book")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Already know you need help?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Book a free discovery call
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you already know you need a new website, local SEO help, or a
              Google presence review — let's talk. I'll walk through your goals
              and recommend the right next step.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                <span className="font-medium">
                  Free 30-minute discovery call
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                <span className="font-medium">No pressure, honest advice</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                <span className="font-medium">
                  Clear next steps after the call
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-card rounded-3xl p-8 shadow-xl border relative flex flex-col justify-center min-h-[280px]"
          >
            <h3 className="text-2xl font-bold mb-4">Book a Consultation</h3>
            <p className="text-muted-foreground mb-8">
              Pick a time that works for you. You'll be taken to my Calendly
              page to schedule your free 30-minute discovery call.
            </p>
            <Button
              asChild
              className="w-full rounded-full py-6 text-base font-bold hover:shadow-xl transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-black border-0"
              data-testid="button-book-calendly"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule on Calendly
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-5 text-center">
              Want a website review? Add your URL in the analysis field when
              you book.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoPath}
                alt="Piña Local Sites"
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="font-serif font-bold text-xl tracking-tight">
                piña local sites
              </span>
            </div>
            <p className="text-muted max-w-sm">
              I help local businesses understand and improve their online
              presence — websites, SEO, Google Business Profile, and more. Build
              it, analyze it, improve it.
            </p>
            <address className="not-italic text-sm text-muted mt-4 space-y-1">
              <p>{BUSINESS.founder}</p>
              <p>
                <a
                  className="hover:text-primary transition-colors"
                  href={`mailto:${BUSINESS.email}`}
                >
                  {BUSINESS.email}
                </a>
              </p>
              <p>
                <a
                  className="hover:text-primary transition-colors"
                  href={`tel:${BUSINESS.phone}`}
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <p>
                {BUSINESS.streetAddress}
                <br />
                {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{" "}
                {BUSINESS.postalCode}
              </p>
            </address>
            <p className="text-sm text-muted mt-4">
              Piña Local Sites is operated by HealthyDigital LLC.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-primary">
              Explore
            </h4>
            <div className="flex flex-col gap-2 justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("how-i-can-help")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted hover:text-primary transition-colors hover:cursor-pointer text-left"
              >
                What I Do
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted hover:text-primary transition-colors hover:cursor-pointer text-left"
              >
                Portfolio
              </button>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors text-left"
              >
                Analyze My Site
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("book")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted hover:text-primary transition-colors hover:cursor-pointer text-left"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-primary">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                className="hover:text-primary transition-colors"
                href={`mailto:${BUSINESS.email}`}
              >
                {BUSINESS.email}
              </a>
              <a
                className="hover:text-primary transition-colors"
                href={`tel:${BUSINESS.phone}`}
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} Piña Local Sites. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...organizationJsonLd()["@graph"],
      webPageJsonLd({
        title: PAGE_SEO.home.title,
        description: PAGE_SEO.home.description,
        path: PAGE_SEO.home.path,
      }),
      faqPageJsonLd([...HOME_FAQS]),
    ],
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Seo {...PAGE_SEO.home} jsonLd={homeJsonLd} />
      <Header />
      <main className="flex-1">
        <Hero />
        <HoldingYouBack />
        <HowICanHelp />
        <HowItWorks />
        <AnalysisTool />
        <ExampleAudit />
        <Portfolio />
        <Faq />
        <FinalCTA />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
