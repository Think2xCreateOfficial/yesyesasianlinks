export const ctaData = {
  headline: "Ready to scale your business with reliable China sourcing?",
  description:
    "Get in touch with our experts today for a free consultation. We'll help you find the best suppliers and optimize your supply chain.",
  primaryButton: {
    label: "Book Free Consultation",
    href: "/contact",
  },
  secondaryButton: {
    label: "Chat on WhatsApp",
    href: "#",
  },
};

export interface CTALocation {
  label: string;
  sublabel: string;
}

export const CTA_LOCATIONS: { origin: CTALocation; destination: CTALocation } = {
  origin: { label: "CHINA", sublabel: "Guangzhou Hub" },
  destination: { label: "INDIA", sublabel: "Doorstep Delivery" },
};

export interface CTATrustBadge {
  id: string;
  text: string;
}

export const CTA_TRUST_BADGES: CTATrustBadge[] = [
  { id: "trust-1", text: "No Upfront Fees for RFQ" },
  { id: "trust-2", text: "100% Quality Guarantee" },
  { id: "trust-3", text: "Customs Cleared" },
];

export const CTA_BUTTON_TEXT = "Chat With Experts";

