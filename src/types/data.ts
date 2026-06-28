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
