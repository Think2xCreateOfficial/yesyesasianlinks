/**
 * src/data/about.ts
 * All static content for the /about page sections.
 * To update any about page text, edit this file only — never touch the components.
 */

// ─── About Page Hero Section ────────────────────────────────────────────────

export const ABOUT_HERO_CONTENT = {
  badge: "10+ Years On The Ground in China",
  headingLine1: "Where Indian Ambition",
  headingLine2: "Meets Chinese Manufacturing",
  description:
    "We are the bridge that global businesses trust. On-the-ground in Guangzhou with 100+ verified factories, bilingual experts, and a decade of proven results.",
  primaryCta: "Start a Conversation",
  primaryHref: "whatsapp",
  secondaryCta: "Our Story",
  secondaryHref: "#about-story",
  backgroundImage:
    "https://images.unsplash.com/photo-1554901106-54163e748979?w=600&auto=format&fit=crop",
  stats: [
    { value: "10+", label: "Years in China" },
    { value: "$50M+", label: "Sourced Value" },
    { value: "500+", label: "Verified Factories" },
    { value: "100%", label: "Quality Assured" },
  ],
};

// ─── About Page Story Section ────────────────────────────────────────────────

export interface AboutMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const ABOUT_STORY_CONTENT = {
  eyebrow: "Our Journey",
  heading: "Built on Trust,",
  headingHighlight: "Proven by Results",
  description:
    "YES YES ASIAN LINK was founded by entrepreneurs who experienced firsthand how difficult it was to import from China without trustworthy on-the-ground support. We built the company we wished existed.",
  image:
    "/Hotel.webp",
  imageAlt: "Our team at work in Guangzhou",
  bodyText:
    "Starting in Guangzhou's manufacturing heartland, we embedded ourselves in the industry — visiting factories, building supplier relationships, and understanding the nuances of Chinese business culture. Today, we serve importers across India, UK, UAE, and beyond with the same personal commitment we started with.",
};

export const ABOUT_MILESTONES: AboutMilestone[] = [
  {
    id: "milestone-1",
    year: "2012",
    title: "Founded in Guangzhou",
    description:
      "Started with a mission to make China sourcing transparent and safe for international importers.",
  },
  {
    id: "milestone-2",
    year: "2015",
    title: "100+Factory Network",
    description:
      "Built a verified network of manufacturers across Guangzhou, Yiwu, Shenzhen, and Foshan.",
  },
  {
    id: "milestone-3",
    year: "2018",
    title: "China Business Tours Launched",
    description:
      "Launched guided business tours to Canton Fair and wholesale markets, serving 100+ business delegations.",
  },
  {
    id: "milestone-4",
    year: "2023",
    title: "$10M+ Sourced Value",
    description:
      "Crossed $10 million in total sourced value for clients across 15+ countries.",
  },
];

// ─── About Page Stats ───────────────────────────────────────────────────────

export interface AboutStat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { id: "stat-1", icon: "Clock", value: "10+", label: "Years in China" },
  { id: "stat-2", icon: "TrendingUp", value: "$50M+", label: "Sourced Value" },
  { id: "stat-3", icon: "ShieldCheck", value: "500+", label: "Verified Factories" },
  { id: "stat-4", icon: "Award", value: "100%", label: "Quality Assured" },
];

// ─── About Page Mission, Vision & Values ────────────────────────────────────

export interface AboutValue {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_MISSION_VISION = {
  eyebrow: "Purpose & Direction",
  heading: "Mission, Vision &",
  headingHighlight: "Business Values",
  mission: {
    label: "Our Mission",
    text:
      "To eliminate the risk and complexity of international trade by providing transparent, on-the-ground China sourcing support that empowers businesses to scale confidently.",
  },
  vision: {
    label: "Our Vision",
    text:
      "To become the most trusted China business partner for importers across Asia, the Middle East, Africa, and Europe — known for integrity, expertise, and results.",
  },
};

export const ABOUT_VALUES_HEADER = {
  eyebrow: "Our Values",
  heading: "What Drives",
  headingHighlight: "Everything We Do",
  description:
    "These are not corporate buzzwords — they are the commitments we make to every client, every day.",
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    id: "val-1",
    icon: "ShieldCheck",
    title: "Radical Transparency",
    description:
      "No hidden markups, no undisclosed commissions. We show you everything — supplier quotes, inspection reports, freight costs — so you make fully informed decisions.",
  },
  {
    id: "val-2",
    icon: "Globe",
    title: "On-The-Ground Presence",
    description:
      "Unlike desk-based agents, our team is physically in China. We walk factory floors, attend markets, and negotiate face-to-face — giving you an unfair advantage.",
  },
  {
    id: "val-3",
    icon: "Users",
    title: "Client-First Partnership",
    description:
      "We measure our success by your success. Our Mandarin-English team becomes an extension of your business, protecting your interests at every step of the supply chain.",
  },
  {
    id: "val-4",
    icon: "Award",
    title: "Quality Without Compromise",
    description:
      "Every product sourced through us goes through rigorous quality inspection. We reject substandard goods before they leave the factory — protecting your brand and your customers.",
  },
];

// ─── About Page Trust Section ─────────────────────────────────────────────────

export interface TrustReason {
  id: string;
  icon: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export const ABOUT_TRUST_HEADER = {
  eyebrow: "Why Choose YYAL",
  heading: "Why Businesses Trust",
  headingHighlight: "YES YES ASIAN LINK",
  description:
    "We've earned the trust of importers across 15+ countries through consistent results, honest communication, and unmatched on-the-ground expertise.",
};

export const ABOUT_TRUST_REASONS: TrustReason[] = [
  {
    id: "trust-1",
    icon: "MapPin",
    title: "Physically Based in China",
    description:
      "Our team is stationed in Guangzhou — China's manufacturing heartland. We are not a remote desk agent. We visit factories personally so you don't have to.",
    stat: "10+",
    statLabel: "Years on the ground",
  },
  {
    id: "trust-2",
    icon: "Languages",
    title: "Bilingual Negotiation Power",
    description:
      "Our Mandarin-English speaking team negotiates directly in Chinese, unlocking factory pricing that English-only buyers rarely access.",
    stat: "20-40%",
    statLabel: "Average cost savings",
  },
  {
    id: "trust-3",
    icon: "FileCheck",
    title: "Documented QC Process",
    description:
      "Every order comes with a comprehensive QC report — photos, measurements, test results — before a single unit ships. No surprises on delivery.",
    stat: "100%",
    statLabel: "Orders inspected",
  },
  {
    id: "trust-4",
    icon: "Handshake",
    title: "Relationship-Based Sourcing",
    description:
      "We have long-standing relationships with factory owners — built over a decade. This gives our clients priority production slots and better terms.",
    stat: "500+",
    statLabel: "Verified factory partners",
  },
];
