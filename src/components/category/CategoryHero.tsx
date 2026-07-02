import { CategoryBreadcrumb } from "./CategoryBreadcrumb";
import { generateCategoryStats } from "@/lib/productHelpers";
import { ShieldCheck, Globe, Award, CheckCircle } from "lucide-react";

interface CategoryHeroProps {
  categoryName: string;
  categoryValue: string;
}

export function CategoryHero({ categoryName, categoryValue }: CategoryHeroProps) {
  const stats = generateCategoryStats(categoryValue);

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50/50 to-gray-100/50 pt-24 md:pt-36 pb-8 md:pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl" />
        
        {/* Secondary accent orbs */}
        <div className="hidden md:block absolute top-1/2 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-0 right-1/3 w-48 h-48 bg-amber-400/5 rounded-full blur-2xl" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <CategoryBreadcrumb categoryName={categoryName} />
        
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-black)] mb-2">
            {categoryName}
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl">
            Explore our premium selection of {categoryName.toLowerCase()}. 
            Sourced for quality and designed for professional B2B export globally.
          </p>
        </div>
      </div>
    </section>
  );
}