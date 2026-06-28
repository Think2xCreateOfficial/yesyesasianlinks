import { ContentItem } from "@/types/data";

export const productsData: ContentItem[] = [
  {
    id: "prod-1",
    title: "Industrial Machinery",
    description: "High-quality industrial machinery for manufacturing.",
    href: "/products/industrial-machinery",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
    cta: "Inquire Now",
    category: "Machinery"
  },
  {
    id: "prod-2",
    title: "Electronics & Components",
    description: "Sourced from verified top-tier manufacturers.",
    href: "/products/electronics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    cta: "Inquire Now",
    category: "Electronics"
  },
  {
    id: "prod-3",
    title: "Construction Materials",
    description: "Durable building materials at wholesale prices.",
    href: "/products/construction",
    image: "https://images.unsplash.com/photo-1546827209-a218e99fdbe9?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Inquire Now",
    category: "Materials"
  },
  {
    id: "prod-4",
    title: "Textiles & Apparel",
    description: "Premium fabrics and garments.",
    href: "/products/textiles",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
    cta: "Inquire Now",
    category: "Textiles"
  }
];

export const productCategories = [
  { id: "cat-1", label: "All Products", value: "all" },
  { id: "cat-2", label: "Machinery", value: "Machinery" },
  { id: "cat-3", label: "Electronics", value: "Electronics" },
  { id: "cat-4", label: "Materials", value: "Materials" },
  { id: "cat-5", label: "Textiles", value: "Textiles" },
];
