import { ContentItem } from "@/types/data";

export const footerData = {
  description: "Your Premium China Sourcing & Business Partner. We bridge the gap between global businesses and Chinese manufacturers.",
  socials: [
    { id: "social-whatsapp", title: "WhatsApp", href: "#", icon: "whatsapp" },
    { id: "social-facebook", title: "Facebook", href: "#", icon: "facebook" },
    { id: "social-instagram", title: "Instagram", href: "#", icon: "instagram" },
    { id: "social-youtube", title: "YouTube", href: "#", icon: "youtube" }
  ] as ContentItem[],
  contact: [
    { id: "footer-address", title: "Guangzhou, China", icon: "MapPin", href: "#" },
    { id: "footer-phone", title: "+86 123 4567 8900", icon: "Phone", href: "tel:+8612345678900" },
    { id: "footer-email", title: "contact@yesyesasianlink.com", icon: "Mail", href: "mailto:contact@yesyesasianlink.com" }
  ] as ContentItem[],
  copyright: `© ${new Date().getFullYear()} YES YES ASIAN LINK. All rights reserved.`
};
