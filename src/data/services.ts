import { ContentItem } from "@/types/data";

export const servicesData: ContentItem[] = [
  {
    id: "product-sourcing",
    title: "Product Sourcing",
    description: "Find the best manufacturers for your products with our expert sourcing team in China. We negotiate prices, check quality, and manage the entire supply chain.",
    href: "/services#product-sourcing",
    icon: "Search", 
    benefits: ["Direct Factory Prices", "Quality Assurance", "Time Savings"],
    process: ["Requirement Analysis", "Supplier Matching", "Sample Production", "Mass Production"]
  },
  {
    id: "supplier-verification",
    title: "Supplier Verification",
    description: "Ensure you are dealing with legitimate factories, not trading companies. We conduct thorough background checks and on-site audits.",
    href: "/services#supplier-verification",
    icon: "ShieldCheck",
    benefits: ["Risk Mitigation", "Authentic Factories", "Financial Security"],
    process: ["Business License Check", "Financial Audit", "On-site Inspection", "Detailed Report"]
  },
  {
    id: "factory-visits",
    title: "Factory Visits",
    description: "We visit factories on your behalf or accompany you to verify production capabilities, working conditions, and quality control systems.",
    href: "/services#factory-visits",
    icon: "Building2",
    benefits: ["First-hand Verification", "Relationship Building", "Production Transparency"],
    process: ["Schedule Appointment", "Guided Tour", "Process Evaluation", "Audit Report"]
  },
  {
    id: "import-consulting",
    title: "Import Consulting",
    description: "Navigate complex import regulations, customs duties, and compliance requirements with our expert consulting services.",
    href: "/services#import-consulting",
    icon: "FileText",
    benefits: ["Compliance Assured", "Cost Optimization", "Smooth Customs Clearance"],
    process: ["Regulatory Research", "Documentation Prep", "Duty Calculation", "Compliance Strategy"]
  },
  {
    id: "shipping-assistance",
    title: "Shipping Assistance",
    description: "Optimize your logistics with our freight forwarding partners. We handle sea, air, and rail freight to get your products delivered safely.",
    href: "/services#shipping-assistance",
    icon: "Ship",
    benefits: ["Competitive Rates", "Real-time Tracking", "Hassle-free Logistics"],
    process: ["Route Optimization", "Carrier Selection", "Customs Clearance", "Final Delivery"]
  },
  {
    id: "china-business-tours",
    title: "China Business Tours",
    description: "Join our exclusive, fully-guided business tours to major wholesale markets and trade shows like the Canton Fair.",
    href: "/services#china-business-tours",
    icon: "Map",
    benefits: ["Guided Experience", "Translation Services", "Market Insights"],
    process: ["Itinerary Planning", "Visa Assistance", "Market Tours", "Supplier Negotiation"]
  }
];

/**
 * Shared image map for service IDs → Unsplash image URLs.
 * Used by both home ServicesSection and /services ServicesGrid.
 */
export const SERVICES_IMAGE_MAP: Record<string, string> = {
  "product-sourcing":
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop",
  "supplier-verification":
    "/tour6.webp",
  "factory-visits":
    "/tour5.webp",
  "import-consulting":
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  "shipping-assistance":
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop",
  "china-business-tours":
    "/tour1.webp",
  default:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
};

/** Section header for home page ServicesSection and /services page ServicesGrid. */
export const SERVICES_GRID_HEADER = {
  eyebrow: "What We Offer",
  heading: "End-to-End China Sourcing Solutions",
  description:
    "Every service is designed to eliminate risk, save time, and maximize value for your import business.",
};

/** /services page hero section content. */
export interface ServicesBadge {
  id: string;
  icon: string;
  label: string;
}

export const SERVICES_HERO_BADGES: ServicesBadge[] = [
  { id: "badge-1", icon: "ShieldCheck", label: "500+ Verified Factories" },
  { id: "badge-2", icon: "Globe", label: "10+ Years in China" },
  { id: "badge-3", icon: "TrendingUp", label: "$50M+ Sourced Value" },
];

export const SERVICES_HERO_CONTENT = {
  badge: "End-to-End China Sourcing",
  heading: "Our",
  headingHighlight: "Services",
  description:
    "From product sourcing and supplier verification to factory visits and business tours — we handle everything so you can import from China with confidence.",
  primaryCta: "Book Free Consultation",
  secondaryCta: "Explore Services",
  secondaryHref: "#services-grid",
};

/** Home page ServicesSection section header. */
export const HOME_SERVICES_SECTION_HEADER = {
  eyebrow: "Our Services",
  heading: "End-to-End China Sourcing Solutions",
  description:
    "We handle everything from finding the right factory to delivering the goods to your doorstep.",
  enquireLabel: "Enquire",
  viewDetailsLabel: "View Details",
};
