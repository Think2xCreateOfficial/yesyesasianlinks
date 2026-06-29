/**
 * src/data/home.ts
 * All static content for home page sections.
 * To update any home page text, edit this file only — never touch the components.
 */

// ─── Hero Section ──────────────────────────────────────────────────────────

export const HERO_CONTENT = {
  badge: "Verified Suppliers Only",
  headingHighlight: "Without Risk",
  descriptionSuffix:
    "Join hundreds of businesses optimizing their global supply chain with us.",
  primaryCta: "Start Sourcing",
  secondaryCta: "Our Services",
  secondaryHref: "/services",
  sliderFallbackDescription:
    "Experience premium B2B consulting with on-the-ground support in China.",
};

// ─── About Section (Home Page) ─────────────────────────────────────────────

export interface HomeFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HomeStat {
  id: string;
  value: string;
  label: string;
}

export const HOME_ABOUT_CONTENT = {
  badge: "About YYAL",
  heading: "Your Trusted Bridge Between",
  headingHighlight: "India and China",
  description:
    "With over a decade of on-the-ground experience in Guangzhou, we eliminate the risks of international trade. We are not just agents; we are your dedicated sourcing partners, ensuring every product meets your exact specifications before it leaves the factory.",
  image: "/homeabout.webp",
  imageAlt: "Our Team in China",
  linkText: "Learn More About",
  linkHref: "/about",
};

export const HOME_ABOUT_FEATURES: HomeFeature[] = [
  {
    id: "feat-1",
    icon: "ShieldCheck",
    title: "Verified Supplier Network",
    description:
      "Direct access to 100+pre-audited factories across major Chinese manufacturing hubs.",
  },
  {
    id: "feat-2",
    icon: "Globe",
    title: "End-to-End Logistics",
    description:
      "From quality inspection to customs clearance and door-to-door delivery in India.",
  },
];

export const HOME_ABOUT_STATS: HomeStat[] = [
  { id: "stat-1", value: "10+", label: "Years in China" },
  { id: "stat-2", value: "$50M+", label: "Sourced Value" },
  { id: "stat-3", value: "100%", label: "Quality Assured" },
];

// ─── Services Section Header (Home Page) ───────────────────────────────────

export const HOME_SERVICES_HEADER = {
  eyebrow: "Our Services",
  heading: "End-to-End China Sourcing Solutions",
  description:
    "We handle everything from finding the right factory to delivering the goods to your doorstep.",
};

// ─── Products Section (Home Page) ──────────────────────────────────────────

export const HOME_PRODUCTS_HEADER = {
  heading: "Products",
  verifiedLabel: "Verified",
  verifiedSupplierLabel: "Verified Supplier",
  enquireLabel: "Enquire",
};

// ─── RFQ Banner Section ─────────────────────────────────────────────────────

export interface RFQStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const HOME_RFQ_CONTENT = {
  badge: "Safe & Secure Sourcing",
  heading: "Quick to Product Sourcing",
  headingHighlight: "Yes Yes Asian Links",
  description:
    "To contact the Yes Yes Asian Links WhatsApp via contact to sourcing China products.",
  formTitle: "Quick RFQ",
  submitLabel: "Get Quotes on WhatsApp",
  defaultUnit: "Pieces",
  units: ["Pieces", "Sets", "Tons", "CBM"],
  labels: {
    product: "Product Name *",
    productPlaceholder: "e.g. Industrial Machinery Parts",
    quantity: "Quantity *",
    quantityPlaceholder: "1000",
    unit: "Unit",
    company: "Company Name (Optional)",
    companyPlaceholder: "e.g. Acme Corp",
  },
};

export const HOME_RFQ_STEPS: RFQStep[] = [
  {
    id: "rfq-step-1",
    icon: "FileText",
    title: "Tell us what you need",
    description: "Specify product details, target price, and volume.",
  },
  {
    id: "rfq-step-2",
    icon: "Send",
    title: "Get Quotes via WhatsApp",
    description: "Receive detailed factory quotes and negotiations fast.",
  },
];

// ─── Testimonials Section Header (Home Page) ────────────────────────────────

export const HOME_TESTIMONIALS_HEADER = {
  eyebrow: "Success Stories",
  heading: "Trusted by Global Importers",
  description:
    "Don't just take our word for it. See how we've helped businesses scale their operations through reliable China sourcing.",
  businessTypeLabel: "Business Type",
  resultsLabel: "Results",
};
