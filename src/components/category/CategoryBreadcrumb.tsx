import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface CategoryBreadcrumbProps {
  categoryName: string;
}

export function CategoryBreadcrumb({ categoryName }: CategoryBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
      <Link href="/" className="hover:text-[var(--color-brand-primary)] transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-gray-400">Products</span>
      <ChevronRight className="w-4 h-4" />
      <span className="text-[var(--color-brand-primary)] font-medium">{categoryName}</span>
    </nav>
  );
}
