import { LucideIcon } from "lucide-react";

export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  href?: string;
  icon?: string | LucideIcon;
  image?: string;
  cta?: string;
  [key: string]: any;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  cta: string;
  isNew: boolean;
}

export interface Category {
  id: string;
  label: string;
  value: string;
  image?: string;
}

export interface ProductCardProps {
  product: Product;
  index: number;
}

export interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  productCount: number;
}