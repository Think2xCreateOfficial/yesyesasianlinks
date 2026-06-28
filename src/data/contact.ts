/**
 * src/data/contact.ts
 * All static content for the /contact page.
 */

import { ContentItem } from "@/types/data";

export const contactData: ContentItem[] = [
  {
    id: "contact-whatsapp",
    title: "WhatsApp",
    description: "Chat with our sourcing experts instantly.",
    href: "https://wa.me/861234567890",
    icon: "MessageCircle",
    cta: "Chat Now",
  },
  {
    id: "contact-email",
    title: "Email Us",
    description: "Send us your detailed sourcing requirements.",
    href: "mailto:contact@yesyesasianlink.com",
    icon: "Mail",
    cta: "Send Email",
  },
  {
    id: "contact-phone",
    title: "Call Us",
    description: "Speak directly to our representatives.",
    href: "tel:+8612345678900",
    icon: "Phone",
    cta: "Call Now",
  },
  {
    id: "contact-office",
    title: "Visit Our Office",
    description: "Guangzhou, China (By Appointment)",
    href: "https://maps.google.com",
    icon: "MapPin",
    cta: "Get Directions",
  },
];

// ─── Contact Page Hero ────────────────────────────────────────────────────────

export const CONTACT_HERO_CONTENT = {
  eyebrow: "Get In Touch",
  headingLine1: "Let's Build Your",
  headingLine2: "China Supply Chain",
  description:
    "Ready to source from China with confidence? Share your requirements and our team will craft a tailored strategy — from factory selection to doorstep delivery.",
  backgroundImage:
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1920&auto=format&fit=crop",
  trustBadges: [
    { icon: "Clock", text: "Reply within 24hrs" },
    { icon: "ShieldCheck", text: "Free initial consultation" },
    { icon: "Globe", text: "Serving 10+ countries" },
  ],
};

// ─── Contact Form Options ─────────────────────────────────────────────────────

export const CONTACT_FORM_OPTIONS = {
  businessTypes: [
    "Importer / Distributor",
    "E-commerce Seller",
    "Retailer / Wholesaler",
    "Manufacturer (Raw Materials)",
    "Startup / New Business",
    "Other",
  ],
  productCategories: [
    "Electronics & Gadgets",
    "Textiles & Apparel",
    "Furniture & Home Décor",
    "Industrial Machinery & Parts",
    "Food & Agriculture",
    "Plastics & Packaging",
    "Automotive Parts",
    "Toys & Baby Products",
    "Beauty & Personal Care",
    "Construction Materials",
    "Other / Custom Product",
  ],
  servicesRequired: [
    "Product Sourcing",
    "Supplier Verification & Audit",
    "Factory Visits",
    "Import Consulting",
    "Shipping & Freight",
    "China Business Tour",
    "Quality Inspection",
    "OEM / Private Label",
  ],
  budgetRanges: [
    "Under $5,000",
    "$5,000 – $20,000",
    "$20,000 – $50,000",
    "$50,000 – $100,000",
    "$100,000 – $500,000",
    "Above $500,000",
  ],
  // Currency-specific budget ranges
  budgetRangesByCurrency: {
    USD: [
      "Under $5,000",
      "$5,000 – $20,000",
      "$20,000 – $50,000",
      "$50,000 – $100,000",
      "$100,000 – $500,000",
      "Above $500,000",
    ],
    EUR: [
      "Under €5,000",
      "€5,000 – €18,000",
      "€18,000 – €45,000",
      "€45,000 – €90,000",
      "€90,000 – €450,000",
      "Above €450,000",
    ],
    INR: [
      "Under ₹4 Lakh",
      "₹4 – ₹16 Lakh",
      "₹16 – ₹40 Lakh",
      "₹40 – ₹80 Lakh",
      "₹80 Lakh – ₹4 Crore",
      "Above ₹4 Crore",
    ],
    AED: [
      "Under AED 18,000",
      "AED 18,000 – 73,000",
      "AED 73,000 – 1,83,000",
      "AED 1,83,000 – 3,67,000",
      "AED 3,67,000 – 18,35,000",
      "Above AED 18,35,000",
    ],
    GBP: [
      "Under £4,000",
      "£4,000 – £16,000",
      "£16,000 – £40,000",
      "£40,000 – £80,000",
      "£80,000 – £400,000",
      "Above £400,000",
    ],
  } as Record<string, string[]>,

  contactMethods: ["WhatsApp", "Phone Call", "Email", "Video Call"],
  importQuantityPlaceholder: "e.g. 500 units per month",
};

export const CONTACT_FORM_CONTENT = {
  heading: "Tell Us About Your Business",
  subheading:
    "The more details you share, the better we can tailor our support for you.",
  submitLabel: "Send Enquiry via WhatsApp",
  submittingLabel: "Preparing your message...",
  successMessage: "Redirecting to WhatsApp...",
  fields: {
    fullName: { label: "Full Name", placeholder: "John Smith", required: true },
    companyName: {
      label: "Company Name",
      placeholder: "Acme Imports Ltd.",
      required: false,
    },
    mobile: {
      label: "Mobile / WhatsApp Number",
      placeholder: "+91 98765 43210",
      required: true,
    },
    email: {
      label: "Email Address",
      placeholder: "john@acmeimports.com",
      required: true,
    },
    businessType: { label: "Business Type", required: true },
    productCategory: { label: "Product Category", required: true },
    servicesRequired: { label: "Services Required", required: true },
    importQuantity: {
      label: "Estimated Import Quantity",
      placeholder: "e.g. 1000 units/month",
      required: false,
    },
    budgetRange: { label: "Budget Range (USD)", required: false },
    preferredContact: { label: "Preferred Contact Method", required: false },
    message: {
      label: "Additional Message",
      placeholder:
        "Tell us more about your product requirements, target markets, or any specific challenges...",
      required: false,
    },
  },
};

// ─── Contact Info ─────────────────────────────────────────────────────────────

export const CONTACT_INFO_CONTENT = {
  heading: "Reach Us Directly",
  subheading: "We are based in Guangzhou, China — available Mon–Sat, 9AM–7PM CST.",
  whatsappLabel: "WhatsApp",
  phoneLabel: "Phone",
  emailLabel: "Email",
  addressLabel: "Office Address",
  hoursLabel: "Business Hours",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM (China Standard Time)",
};

// ─── Contact Map ─────────────────────────────────────────────────────────────

export const CONTACT_MAP_CONTENT = {
  heading: "Find Us in Guangzhou",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468757.8776394394!2d112.85622115!3d23.13897935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403d46e94e8b329%3A0x99e3e66a1aae4b31!2sGuangzhou%2C%20Guangdong%2C%20China!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin",
};
