/**
 * src/data/tours.ts
 * All static content for the /tours page.
 */

export const toursData = [
  {
    id: "canton-fair-tour",
    title: "Canton Fair VIP Tour",
    description:
      "A fully guided VIP experience at the world's largest trade fair. Includes translation, negotiation support, and logistics.",
    duration: "7 Days",
    location: "Guangzhou, China",
    badge: "VIP",
    badgeColor: "from-amber-500 to-orange-500",
    price: "Custom Quote",
    highlights: [
      "VIP Access to Canton Fair",
      "Dedicated Bilingual Guide",
      "Pre-screened Supplier Meetings",
      "5-Star Accommodation",
    ],
    inclusions: [
      "Airport Transfers",
      "Visa Invitation Letter",
      "Hotel (5-Star)",
      "Daily Meals",
      "Sourcing Report",
    ],
    image: "/images/canton-fair.jpg",
  },
  {
    id: "yiwu-market-tour",
    title: "Yiwu Wholesale Market Tour",
    description:
      "Explore the world's largest small commodity wholesale market with expert guides to find the best deals.",
    duration: "5 Days",
    location: "Yiwu, China",
    badge: "Popular",
    badgeColor: "from-blue-500 to-cyan-500",
    price: "Custom Quote",
    highlights: [
      "Guided Market Navigation",
      "MOQ Negotiation",
      "Consolidation Services",
      "Logistics Planning",
    ],
    inclusions: [
      "Airport Transfers",
      "Visa Invitation Letter",
      "Hotel (4-Star)",
      "Daily Meals",
      "Sourcing Report",
    ],
    image: "/images/yiwu-market.jpg",
  },
  {
    id: "shenzhen-electronics-tour",
    title: "Shenzhen Electronics Sourcing",
    description:
      "Dive deep into the tech capital of the world. Source the latest electronics directly from manufacturers.",
    duration: "4 Days",
    location: "Shenzhen, China",
    badge: "Best Value",
    badgeColor: "from-green-500 to-emerald-500",
    price: "Custom Quote",
    highlights: [
      "Huaqiangbei Market Tour",
      "Factory Visits",
      "Tech Trend Analysis",
      "Quality Control Setup",
    ],
    inclusions: [
      "Airport Transfers",
      "Visa Invitation Letter",
      "Hotel (4-Star)",
      "Daily Meals",
      "Tech Sourcing Report",
    ],
    image: "/images/shenzhen-tech.jpg",
  },
];

/** Shared image map for tour IDs → Unsplash URLs. */
export const TOURS_IMAGE_MAP: Record<string, string> = {
  "canton-fair-tour":
    "/poster1.webp",
  "yiwu-market-tour":
    "/poster2.webp",
  "shenzhen-electronics-tour":
    "/poster3.webp",
  default:
    "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
};

export interface ToursHighlight {
  id: string;
  icon: string;
  label: string;
}

/** /tours page hero highlights badges. */
export const TOURS_HERO_HIGHLIGHTS: ToursHighlight[] = [
  { id: "hl-1", icon: "MapPin", label: "Guangzhou, Yiwu & Shenzhen" },
  { id: "hl-2", icon: "Clock", label: "4 to 7 Day Guided Tours" },
  { id: "hl-3", icon: "Users", label: "Bilingual Experts On-Ground" },
  { id: "hl-4", icon: "Building2", label: "100+Verified Factory Partners" },
  { id: "hl-5", icon: "ShieldCheck", label: "Visa Invitation Letter" },
  { id: "hl-6", icon: "Star", label: "Canton Fair VIP Access" },
];

/** /tours page hero section content. */
export const TOURS_HERO_CONTENT = {
  badge: "Exclusive China Business Tours",
  headingLine1: "Source. Connect.",
  headingLine2: "Trade Directly.",
  description:
    "Join our fully-managed China business tours. Factory visits, wholesale markets, Canton Fair, and supplier negotiations — all handled by bilingual experts who know China's manufacturing heartland inside-out.",
  primaryCta: "Enquire About Tours",
  secondaryCta: "View Tour Packages",
  secondaryHref: "#tours-grid",
  backgroundImage:
    "https://images.unsplash.com/photo-1778824257599-92799d64c92b?w=600&auto=format&fit=crop",
};

/** /tours page grid section header. */
export const TOURS_GRID_HEADER = {
  eyebrow: "Our Tours",
  heading: "Choose Your China Business Experience",
  description:
    "Every tour is fully guided, expertly managed, and designed to help you build supplier relationships and source products with confidence.",
};

// ─── Tours Benefits Section ──────────────────────────────────────────────────

export interface TourBenefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const TOURS_BENEFITS_HEADER = {
  eyebrow: "Why Join Our Tours",
  heading: "Everything Handled,",
  headingHighlight: "Nothing Left to Chance",
  description:
    "Our business tours are designed to maximize your time and results in China — from the moment you land to the moment you leave.",
};

export const TOURS_BENEFITS: TourBenefit[] = [
  {
    id: "benefit-1",
    icon: "Globe",
    title: "All-Inclusive Planning",
    description:
      "Visa invitation letters, airport transfers, accommodation, and daily itineraries — we handle all logistics so you focus on business.",
  },
  {
    id: "benefit-2",
    icon: "Languages",
    title: "Bilingual Expert Guides",
    description:
      "Our Mandarin-English speaking guides navigate markets and translate negotiations in real-time, giving you a decisive advantage.",
  },
  {
    id: "benefit-3",
    icon: "Building2",
    title: "Curated Factory Visits",
    description:
      "We pre-screen and arrange visits to verified factories matched to your product categories — no cold walking, no wasted time.",
  },
  {
    id: "benefit-4",
    icon: "ShieldCheck",
    title: "Verified Supplier Meetings",
    description:
      "Every supplier you meet has been background-checked. We set up structured meetings with decision-makers, not sales staff.",
  },
  {
    id: "benefit-5",
    icon: "TrendingUp",
    title: "Negotiation Support",
    description:
      "Our team negotiates alongside you — price, MOQ, payment terms, and lead times — leveraging our long-standing factory relationships.",
  },
  {
    id: "benefit-6",
    icon: "FileText",
    title: "Post-Tour Sourcing Report",
    description:
      "After every tour, you receive a comprehensive sourcing summary with supplier contacts, quotes, and recommended next steps.",
  },
];

// ─── Tours Experience Section ─────────────────────────────────────────────────

export interface TourExperienceItem {
  id: string;
  day: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const TOURS_EXPERIENCE_HEADER = {
  eyebrow: "The Experience",
  heading: "A Week That",
  headingHighlight: "Changes Your Business",
  description:
    "Here's what a typical 7-day China Business Tour looks like with YES YES ASIAN LINK — every day designed for maximum commercial value.",
};

export const TOURS_EXPERIENCE_ITEMS: TourExperienceItem[] = [
  {
    id: "exp-1",
    day: "Day 1–2",
    title: "Arrival & Canton Fair",
    description:
      "Arrive in Guangzhou, settle into your hotel, and dive straight into the Canton Fair with your dedicated guide. Pre-booked supplier meetings and VIP hall access await.",
    image:
      "/cantonfair2.jpg",
    tags: ["Canton Fair", "Supplier Meetings", "VIP Access"],
  },
  {
    id: "exp-2",
    day: "Day 3–4",
    title: "Guangzhou Wholesale Markets",
    description:
      "Guided tours through Guangzhou's major wholesale districts — furniture, textiles, electronics, and more. Meet factory owners directly and negotiate at source.",
    image:
      "/image3.jpeg",
    tags: ["Wholesale Markets", "Direct Negotiation", "Factory Visits"],
  },
  {
    id: "exp-3",
    day: "Day 5–6",
    title: "Factory & Shenzhen Tech",
    description:
      "Pre-arranged visits to verified factories matching your product requirements. Day 6 option: explore Shenzhen's Huaqiangbei electronics district for tech sourcing.",
    image:
      "/tour5.webp",
    tags: ["Factory Floor Visits", "Electronics Hub", "Quality Review"],
  },
  {
    id: "exp-4",
    day: "Day 7",
    title: "Debrief & Next Steps",
    description:
      "Final sourcing debrief with your YYAL consultant. We compile your contact list, quotes received, and a recommended action plan — so you leave with clarity, not confusion.",
    image:
      "/tour6.webp",
    tags: ["Sourcing Report", "Action Plan", "Follow-Up Support"],
  },
];

// ─── Tours Gallery Section ─────────────────────────────────────────────────────

export interface TourGalleryImage {
  id: string;
  src: string;
  alt: string;
  span: "wide" | "tall" | "normal";
}

export const TOURS_GALLERY_HEADER = {
  eyebrow: "Gallery",
  heading: "See the Experience",
  headingHighlight: "First-Hand",
  ctaText: "Book Your China Business Tour",
  ctaSubtext:
    "Limited spots per tour group. Enquire now to secure your place.",
};

export const TOURS_GALLERY_IMAGES: TourGalleryImage[] = [
  {
    id: "gal-1",
    src: "/tour1.webp",
    alt: "Canton Fair Exhibition Hall",
    span: "wide",
  },
  {
    id: "gal-2",
    src: "/tour2.webp",
    alt: "Guangzhou Wholesale Market",
    span: "normal",
  },
  {
    id: "gal-3",
    src: "/tour3.webp",
    alt: "Factory Visit",
    span: "normal",
  },
  {
    id: "gal-4",
    src: "/tour4.webp",
    alt: "Shenzhen Electronics Market",
    span: "normal",
  },
  {
    id: "gal-5",
    src: "/tour5.webp",
    alt: "Business Negotiation Session",
    span: "normal",
  },
  {
    id: "gal-6",
    src: "/tour6.webp",
    alt: "Business Negotiation Session",
    span: "normal",
  },
];
