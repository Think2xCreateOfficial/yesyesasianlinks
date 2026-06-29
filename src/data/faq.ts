/**
 * src/data/faq.ts
 * Centralized FAQ data for all pages.
 * Use the categorized arrays to feed the reusable FAQSection component.
 */

export interface FaqItem {
  id: string;
  title: string;
  description: string;
  category: "general" | "services" | "tours" | "contact";
}

// ─── General FAQs ────────────────────────────────────────────────────────────

export const generalFaqData: FaqItem[] = [
  {
    id: "faq-gen-1",
    title: "What does YES YES ASIAN LINK do?",
    description:
      "We are a full-service China sourcing and business consulting agency. We help international businesses find reliable manufacturers, verify suppliers, manage quality control, arrange factory visits, and guide business tours in China.",
    category: "general",
  },
  {
    id: "faq-gen-2",
    title: "How do you verify suppliers?",
    description:
      "We conduct comprehensive background checks including business license verification, financial health audits, and on-site factory inspections to ensure you are dealing with legitimate manufacturers — not trading companies or fraudulent agents.",
    category: "general",
  },
  {
    id: "faq-gen-3",
    title: "Do you help with shipping and logistics?",
    description:
      "Yes. We partner with reliable freight forwarders to offer end-to-end logistics solutions including sea, air, and rail freight, as well as full customs clearance assistance and door-to-door delivery.",
    category: "general",
  },
  {
    id: "faq-gen-4",
    title: "What are your fees?",
    description:
      "Our fees depend on the specific services required. We offer transparent pricing — a flat fee for factory audits, commission-based models for full-service sourcing, and fixed packages for business tours. Contact us for a custom quote.",
    category: "general",
  },
  {
    id: "faq-gen-5",
    title: "Which countries do you serve?",
    description:
      "We primarily serve importers from India, UK, UAE, South Africa, and Southeast Asia. However, we work with businesses globally. If you need products sourced from China, we can help regardless of your location.",
    category: "general",
  },
];

// ─── Services FAQs ────────────────────────────────────────────────────────────

export const servicesFaqData: FaqItem[] = [
  {
    id: "faq-svc-1",
    title: "What is the typical import process from China?",
    description:
      "The process involves: (1) Sharing your product requirements, (2) Supplier research and shortlisting, (3) Supplier verification and audit, (4) Price negotiation and sampling, (5) Quality inspection before shipment, (6) Freight booking and customs clearance, (7) Final delivery to your warehouse.",
    category: "services",
  },
  {
    id: "faq-svc-2",
    title: "What is the minimum order quantity (MOQ)?",
    description:
      "MOQ depends entirely on the factory and product category. We negotiate directly with manufacturers to achieve the lowest possible MOQ for new buyers. For sampling, most factories allow small quantities of 50–200 units.",
    category: "services",
  },
  {
    id: "faq-svc-3",
    title: "How do you ensure product quality before shipment?",
    description:
      "We conduct pre-production material checks, in-line production inspections, and pre-shipment inspections (PSI) at the factory. We use standardized AQL sampling methods and can provide full QC reports with photos.",
    category: "services",
  },
  {
    id: "faq-svc-4",
    title: "How are payments secured when ordering from China?",
    description:
      "We guide you through secure payment terms such as T/T (telegraphic transfer) with milestone-based releases, Letters of Credit (LC), and escrow-style arrangements. We never advise full advance payment to an unverified supplier.",
    category: "services",
  },
  {
    id: "faq-svc-5",
    title: "How long does product sourcing typically take?",
    description:
      "A typical sourcing cycle — from requirement to receiving samples — takes 3–6 weeks. Mass production timelines vary by product complexity, typically 30–60 days after sample approval. We keep you updated throughout.",
    category: "services",
  },
  {
    id: "faq-svc-6",
    title: "Can you source custom or OEM products?",
    description:
      "Absolutely. We have extensive experience managing custom product development, OEM manufacturing, and private label sourcing. We handle design, tooling, sample iteration, and production oversight.",
    category: "services",
  },
];

// ─── Tours FAQs ───────────────────────────────────────────────────────────────

export const toursFaqData: FaqItem[] = [
  {
    id: "faq-tour-1",
    title: "Can you guide us at the Canton Fair?",
    description:
      "Absolutely. We offer VIP guided tours for the Canton Fair, including pre-screened supplier meetings, bilingual Mandarin-English translation, and negotiation support. We ensure you spend your time on the right suppliers.",
    category: "tours",
  },
  {
    id: "faq-tour-2",
    title: "What is included in the business tour package?",
    description:
      "Our tours typically include: airport transfers, accommodation, bilingual guide throughout, factory visit arrangements, wholesale market navigation, supplier negotiation support, and a post-tour sourcing summary report.",
    category: "tours",
  },
  {
    id: "faq-tour-3",
    title: "Do you assist with the China visa process?",
    description:
      "Yes. We provide an invitation letter from our registered Chinese business entity, which is a key document for business visa applications. We also guide you on the complete visa application process for your country.",
    category: "tours",
  },
  {
    id: "faq-tour-4",
    title: "Which cities are covered in the business tours?",
    description:
      "Our tours cover Guangzhou (Canton Fair, wholesale markets), Yiwu (world's largest small commodity market), and Shenzhen (electronics and tech hub). Custom multi-city itineraries can be arranged on request.",
    category: "tours",
  },
  {
    id: "faq-tour-5",
    title: "Can I visit specific factories during the tour?",
    description:
      "Yes. Factory visits are a core part of our tours. You can either select from our network of 100+verified factories or share specific factory names/categories and we will arrange visits in advance.",
    category: "tours",
  },
];

// ─── Contact FAQs ─────────────────────────────────────────────────────────────

export const contactFaqData: FaqItem[] = [
  {
    id: "faq-con-1",
    title: "What is the fastest way to reach your team?",
    description:
      "WhatsApp is our preferred communication channel for fastest response. We typically respond within 30 minutes during business hours (9AM–7PM CST, Monday–Saturday). You can also email us for detailed written enquiries.",
    category: "contact",
  },
  {
    id: "faq-con-2",
    title: "How soon can I expect a response after enquiry?",
    description:
      "For WhatsApp messages, we respond within 30–60 minutes during business hours. Email enquiries are typically answered within 4–8 hours. For urgent matters, please use WhatsApp and mark your message as urgent.",
    category: "contact",
  },
  {
    id: "faq-con-3",
    title: "Do you offer a free initial consultation?",
    description:
      "Yes. We offer a free 30-minute consultation via WhatsApp or video call to understand your sourcing needs, discuss your budget, and outline how we can best help your business. No obligation, no commitment required.",
    category: "contact",
  },
  {
    id: "faq-con-4",
    title: "Can I visit your office in China?",
    description:
      "Yes, by appointment. Our base is in Guangzhou, China. If you are planning to visit China for business, we can arrange an in-person meeting at our office or meet you at the factory, market, or trade fair directly.",
    category: "contact",
  },
];

// ─── Legacy alias (backward compatibility) ───────────────────────────────────
export const faqData = generalFaqData;

// ─── Page/Section Headers ─────────────────────────────────────────────────────

export const FAQ_PAGE_HEADER = {
  heading: "Frequently Asked",
  headingHighlight: "Questions",
  description:
    "Everything you need to know about working with YES YES ASIAN LINK and importing from China.",
};

export const FAQ_SECTION_HEADER = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  description:
    "Everything you need to know about importing from China with YES YES ASIAN LINK.",
};

export const SERVICES_FAQ_HEADER = {
  eyebrow: "Common Questions",
  heading: "Sourcing & Import FAQs",
  description:
    "Real answers to the questions businesses ask before starting their China import journey.",
};

export const TOURS_FAQ_HEADER = {
  eyebrow: "Tour Questions",
  heading: "China Business Tour FAQs",
  description:
    "Everything you need to know before joining our guided China business tours.",
};

export const CONTACT_FAQ_HEADER = {
  eyebrow: "Getting Started",
  heading: "Common Questions",
  description:
    "Quick answers to help you connect with the right person on our team.",
};
