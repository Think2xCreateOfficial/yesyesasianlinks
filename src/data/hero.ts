import { ContentItem } from "@/types/data";

export const heroData: ContentItem[] = [
  {
    id: "hero-1",
    title: "China Import Expert",
    description: "Your reliable partner for sourcing, verifying, and importing from China.",
    href: "/services",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=2070&auto=format&fit=crop",
    cta: "Start Sourcing Now",
    badges: ["Verified Suppliers", "Quality Assured", "Direct Factory Prices"]
  },
  {
    id: "hero-2",
    title: "Supplier Verification",
    description: "Ensure you are dealing with legitimate factories, not trading companies.",
    href: "/services#supplier-verification",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    cta: "Verify a Supplier",
    badges: ["On-site Audits", "Financial Checks", "Detailed Reports"]
  },
  {
    id: "hero-3",
    title: "China Business Tours",
    description: "Join our exclusive, fully-guided business tours to major wholesale markets.",
    href: "/tours",
    icon: "Map",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    cta: "Book a Tour",
    badges: ["Guided Experience", "Translation Services", "Market Insights"]
  }
];

export const heroSliderData: ContentItem[] = [
  { id: "slide-1", title: "Business Tours", image: "/poster2.webp" },
  { id: "slide-2", title: "Canton Fair", image: "/poster3.webp" },
  { id: "slide-3", title: "Factory Visits", image: "/poster1.webp" },
  { id: "slide-4", title: "Client Meetings", image: "/poster3.webp" },
  { id: "slide-5", title: "China Markets", image: "/poster1.webp" },
];