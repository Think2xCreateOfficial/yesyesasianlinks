export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const HOW_IT_WORKS_DATA: HowItWorksStep[] = [
  {
    id: "hiw-1",
    step: 1,
    title: "Share Your Requirements",
    description:
      "Tell us what you need — product type, quantity, target price, and quality standards. Use our WhatsApp or contact form for a quick start.",
    icon: "MessageSquare",
  },
  {
    id: "hiw-2",
    step: 2,
    title: "Supplier Research & Matching",
    description:
      "Our on-the-ground team in China researches and identifies the best-fit factories from our verified network of 500+ manufacturers.",
    icon: "Search",
  },
  {
    id: "hiw-3",
    step: 3,
    title: "Supplier Verification & Audit",
    description:
      "We conduct thorough background checks, financial audits, and on-site factory inspections to confirm legitimacy before you commit.",
    icon: "ShieldCheck",
  },
  {
    id: "hiw-4",
    step: 4,
    title: "Negotiation & Sampling",
    description:
      "We negotiate pricing, MOQs, and payment terms on your behalf and arrange product samples for your approval before mass production.",
    icon: "Handshake",
  },
  {
    id: "hiw-5",
    step: 5,
    title: "Quality Control & Inspection",
    description:
      "Before shipment, we carry out pre-production and pre-shipment inspections to ensure every unit meets your exact specifications.",
    icon: "ClipboardCheck",
  },
  {
    id: "hiw-6",
    step: 6,
    title: "Shipping & Customs Clearance",
    description:
      "We coordinate with our freight forwarding partners for sea, air, or rail freight and handle all customs documentation for smooth delivery.",
    icon: "Ship",
  },
];

/** /how-it-works page heading content. */
export const HOW_IT_WORKS_PAGE_HEADER = {
  heading: "How It",
  headingHighlight: "Works",
  description:
    "A simple, proven 6-step process that takes you from idea to delivered products — with zero guesswork.",
};

/** HowItWorksSection section header. */
export const HOW_IT_WORKS_SECTION_HEADER = {
  eyebrow: "The Process",
  heading: "How It Works",
  description:
    "Our proven 6-step process takes you from requirement to delivery — safely, transparently, and efficiently.",
};
