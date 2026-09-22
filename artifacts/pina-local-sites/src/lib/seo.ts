export const SITE_URL = "https://pinalocalsites.com";
export const SITE_NAME = "Piña Local Sites";
export const SITE_LEGAL_NAME = "HealthyDigital LLC";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

export const BUSINESS = {
  email: "adrian@pinalocalsites.com",
  phone: "+1-808-515-5573",
  phoneDisplay: "+1 (808) 515-5573",
  founder: "Adrian Lehmann",
  streetAddress: "1209 Mountain Road Pl NE, Ste N",
  addressLocality: "Albuquerque",
  addressRegion: "NM",
  postalCode: "87110",
  addressCountry: "US",
  areaServed: "United States",
  description:
    "Independent developer helping local businesses analyze, build, and improve their online presence — custom websites, SEO, Google Business Profile, and Google Ads.",
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
};

export const PAGE_SEO = {
  home: {
    title: "Piña Local Sites | Website Analysis, SEO & Local Websites",
    description:
      "I help local businesses get found online — free website analysis, custom websites, SEO, Google Business Profile, and Google Ads improvements.",
    path: "/",
  },
  websiteAnalysis: {
    title: "Free Website Analysis | Piña Local Sites",
    description:
      "Enter your website URL for a free look at SEO, performance, content, and local search opportunities. No credit card required.",
    path: "/website-analysis",
  },
  websiteAnalysisResult: {
    title: "Website Analysis Results | Piña Local Sites",
    description: "View the status and findings of your website analysis.",
    path: "/website-analysis",
    noindex: true,
  },
  privacy: {
    title: "Privacy Policy | Piña Local Sites",
    description:
      "How Piña Local Sites and HealthyDigital LLC collect, use, and protect personal information.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms of Service | Piña Local Sites",
    description:
      "Terms of service for Piña Local Sites website design, hosting, subscriptions, and related digital services.",
    path: "/terms-of-service",
  },
  yourOffer: {
    title: "Your Personal Offer | Piña Local Sites",
    description: "A personal website and care-plan offer prepared for you.",
    path: "/your-offer",
    noindex: true,
  },
  notFound: {
    title: "Page Not Found | Piña Local Sites",
    description: "The page you requested could not be found.",
    path: "/",
    noindex: true,
  },
} as const satisfies Record<string, PageSeo>;

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        legalName: SITE_LEGAL_NAME,
        url: `${SITE_URL}/`,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        description: BUSINESS.description,
        image: DEFAULT_OG_IMAGE,
        logo: `${SITE_URL}/favicon.svg`,
        founder: {
          "@type": "Person",
          name: BUSINESS.founder,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.addressLocality,
          addressRegion: BUSINESS.addressRegion,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.addressCountry,
        },
        areaServed: {
          "@type": "Country",
          name: BUSINESS.areaServed,
        },
        knowsAbout: [
          "Website design",
          "Local SEO",
          "Website analysis",
          "Google Business Profile optimization",
          "Google Ads analysis",
          "Website performance",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Local business online presence services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom website design and development",
                description:
                  "Custom, mobile-first websites for local businesses with SEO and performance built in.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website and SEO analysis",
                description:
                  "Analysis of technical SEO, content, performance, local search, and conversion opportunities.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google presence improvement",
                description:
                  "Google Business Profile and Google Ads analysis and improvement for local businesses.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: BUSINESS.description,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-US",
      },
    ],
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-US",
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const HOME_FAQS = [
  {
    question: "Do I need a brand-new website?",
    answer:
      "Not always. Sometimes a new website is the right move. Other times the bigger opportunity is improving SEO, performance, conversions, or your Google Business Profile. I can help you figure out which path makes sense.",
  },
  {
    question: "What does the free website analysis cover?",
    answer:
      "The analysis looks at opportunities across SEO, performance, content, structure, local search, and conversions — so you can see what is working and what could be improved before committing to a project.",
  },
  {
    question: "Can you help if I already have a website?",
    answer:
      "Yes. I work with businesses that need a new site and with businesses that already have one. I can analyze what you have, prioritize the highest-impact fixes, and implement the improvements if you want help.",
  },
  {
    question: "Do you only build websites, or help with Google too?",
    answer:
      "I build custom websites and also help with the rest of your online presence — including local SEO, Google Business Profile, and Google Ads analysis — so customers can find and choose your business more easily.",
  },
] as const;
