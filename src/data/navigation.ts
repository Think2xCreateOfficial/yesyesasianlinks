import { ContentItem } from "@/types/data";

export const navigationData: ContentItem[] = [
  {
    id: "nav-home",
    title: "Home",
    href: "/",
  },
  {
    id: "nav-about",
    title: "About Us",
    href: "/about",
  },
  {
    id: "nav-services",
    title: "Services",
    href: "/services",
  },
  {
    id: "nav-tours",
    title: "China Tours",
    href: "/tours",
  }, 
  {
    id: "nav-contact",
    title: "Contact",
    href: "/contact",
  }
];

export const footerNavigation = {
  company: [
    { id: "foot-nav-about", title: "About Us", href: "/about" },
    { id: "foot-nav-careers", title: "Careers", href: "/careers" },
    { id: "foot-nav-contact", title: "Contact", href: "/contact" },
  ] as ContentItem[],
  services: [
    { id: "foot-nav-sourcing", title: "Product Sourcing", href: "/services#product-sourcing" },
    { id: "foot-nav-verification", title: "Supplier Verification", href: "/services#supplier-verification" },
    { id: "foot-nav-visits", title: "Factory Visits", href: "/services#factory-visits" },
  ] as ContentItem[],
  resources: [
    { id: "foot-nav-blog", title: "Blog", href: "/blog" },
    { id: "foot-nav-faq", title: "FAQ", href: "/faq" },
    { id: "foot-nav-terms", title: "Terms & Conditions", href: "/terms" },
    { id: "foot-nav-privacy", title: "Privacy Policy", href: "/privacy" },
  ] as ContentItem[]
};
