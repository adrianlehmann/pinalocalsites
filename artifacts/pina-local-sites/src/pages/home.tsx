import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Laptop,
  Smartphone,
  Wrench,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import logoPath from "@/assets/images/logo.avif";
import heroImg from "../assets/images/hero.avif";
import imgRestaurant from "../assets/images/portfolio-restaurant.png";
import imgBoutique from "../assets/images/portfolio-boutique.png";
import imgPlumber from "../assets/images/portfolio-plumber.png";
import imgYoga from "../assets/images/portfolio-yoga.png";
import imgBakery from "../assets/images/portfolio-bakery.png";
import imgLandscaper from "../assets/images/portfolio-landscaper.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// --- Types & Data ---

const portfolioItems = [
  {
    id: "restaurant",
    name: "Osteria Local",
    type: "Restaurant",
    description:
      "A luxury dining experience with integrated reservation system and dynamic menus. We built Osteria Local to capture the warmth of their physical space.",
    image: imgRestaurant,
    tags: ["React", "Tailwind", "Reservation API"],
  },
  {
    id: "boutique",
    name: "Thread & Thread",
    type: "Boutique",
    description:
      "A trendy fashion boutique e-commerce platform that loads instantly on mobile and handles complex inventory seamlessly.",
    image: imgBoutique,
    tags: ["E-commerce", "Stripe", "Next.js"],
  },
  {
    id: "plumber",
    name: "Reliable Pipes",
    type: "Plumbing Service",
    description:
      "A high-conversion service website designed to get leads fast. Clear pricing, easy contact forms, and local SEO optimized.",
    image: imgPlumber,
    tags: ["SEO", "Lead Gen", "HTML/CSS"],
  },
  {
    id: "yoga",
    name: "Zenith Yoga",
    type: "Yoga Studio",
    description:
      "A serene studio portal offering class schedules, member portals, and virtual class streaming.",
    image: imgYoga,
    tags: ["Webflow", "Memberstack", "Video API"],
  },
  {
    id: "bakery",
    name: "Crust & Crumb",
    type: "Artisanal Bakery",
    description:
      "Showcasing artisanal breads with rich photography and a smooth online pre-ordering system.",
    image: imgBakery,
    tags: ["Shopify", "Custom Design"],
  },
  {
    id: "landscaper",
    name: "Green Horizons",
    type: "Landscaping",
    description:
      "A robust portfolio site for a high-end landscaping company highlighting their best projects with before-and-after galleries.",
    image: imgLandscaper,
    tags: ["CMS", "Gallery", "Animation"],
  },
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  businessName: z.string().min(2, "Business name is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("what-we-do")}
            className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
            data-testid="link-nav-what-we-do"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="text-sm font-bold hover:text-primary transition-colors cursor-pointer"
            data-testid="link-nav-portfolio"
          >
            Portfolio
          </button>
          <Button
            onClick={() => scrollTo("book")}
            className="rounded-full px-6 border-0 cursor-pointer hover:text-black"
            data-testid="button-nav-book"
          >
            Book
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4 md:hidden"
          >
            <button
              onClick={() => scrollTo("what-we-do")}
              className="text-lg font-medium p-2 text-left hover:cursor-pointer hover:text-primary rounded-md transition-colors"
              data-testid="link-mobile-what-we-do"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollTo("portfolio")}
              className="text-lg font-medium p-2 text-left hover:cursor-pointer hover:text-primary rounded-md transition-colors"
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </button>
            <Button
              onClick={() => scrollTo("book")}
              className="w-full mt-2 hover:cursor-pointer hover:text-black transition-colors"
              size="lg"
              data-testid="button-mobile-book"
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
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Creative workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30 dark:from-background dark:via-background/90 dark:to-background/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6">
            Boutique Web Design Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight mb-6">
            Beautiful websites for{" "}
            <span className="text-primary italic">local businesses</span>.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
            We are your talented neighbors building custom, mobile-first
            websites that turn local visitors into loyal customers. No
            templates, just craft.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:cursor-pointer hover:text-black"
            onClick={() =>
              document
                .getElementById("book")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-testid="button-hero-cta"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const services = [
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: "Custom Website Design",
      description:
        "We design beautiful, unique websites tailored to your brand and local audience. Your business isn't generic, your site shouldn't be either.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Mobile-First Development",
      description:
        "Every site we build looks perfect on phones, tablets, and desktops. We ensure your customers have a seamless experience anywhere.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Ongoing Support & Maintenance",
      description:
        "We don't just launch and leave — we're here to keep your site running smooth, updated, and secure.",
    },
  ];

  return (
    <section id="what-we-do" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We handle the technical heavy lifting so you can focus on running
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-background border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  // For the infinite scroll, we duplicate the array
  const scrollItems = [...portfolioItems, ...portfolioItems];

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of recent websites crafted for local businesses.
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full pb-8">
        {/* Gradients for smooth edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll">
          {scrollItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="w-[300px] md:w-[400px] shrink-0 px-4"
              onClick={() => setSelectedProject(item)}
            >
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border bg-card"
                data-testid={`card-portfolio-${item.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
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
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-muted border-none shadow-2xl rounded-2xl">
          {selectedProject && (
            <div className="flex flex-col h-[85vh] md:h-auto md:max-h-[85vh]">
              {/* Image Header */}
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-muted shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                {/* Simulated gallery arrows */}
                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                  <button className="pointer-events-auto bg-background/50 hover:bg-background backdrop-blur p-2 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button className="pointer-events-auto bg-background/50 hover:bg-background backdrop-blur p-2 rounded-full transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <DialogTitle className="text-3xl font-serif font-bold mb-2">
                  {selectedProject.name}
                </DialogTitle>
                <div className="text-primary font-medium mb-6">
                  {selectedProject.type}
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProject.description} Working closely with their team,
                  we designed a digital experience that reflects their physical
                  storefront and makes it incredibly easy for customers to
                  engage with them.
                </p>

                <div className="mb-8">
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h4>
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
                    className="rounded-full"
                    onClick={() => window.open("#", "_blank")}
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

function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="book" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Ready to stand out locally?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation today. We'll discuss your business goals,
              review your current online presence, and show you how a custom
              website can drive more local traffic.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-medium">
                  Free 30-minute discovery call
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-medium">No pressure, honest advice</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-medium">
                  Custom proposal within 48 hours
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-background rounded-3xl p-8 shadow-xl border relative"
          >
            {isSubmitted ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                data-testid="form-success"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. We'll be in touch within 24 hours to
                  schedule your consultation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane Doe"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane's Bakery"
                              {...field}
                              data-testid="input-business"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us a bit about what you're looking for..."
                              className="resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-full py-6 text-base font-bold mt-2"
                      data-testid="button-submit"
                    >
                      Send Request
                    </Button>
                  </form>
                </Form>
              </>
            )}
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
              We build beautiful, fast, and highly-converting custom websites
              for local businesses. Your digital business card, crafted with
              care.
            </p>
            <p className="text-sm text-muted mt-4">
              Piña Local Sites is operated by HealthyDigital LLC.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-primary">
              Company
            </h4>
            <div className="flex flex-col gap-2 justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("what-we-do")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted hover:text-primary transition-colors hover:cursor-pointer text-left"
              >
                What We Do
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
            <div className="flex items-center gap-4">
              <a
                className="hover:text-primary transition-colors"
                href="mailto:adrian@pinalocalsites.com"
              >
                adrian@pinalocalsites.com
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
            <a
              href="/privacy-policy"
              className="hover:text-background transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-background transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Portfolio />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
