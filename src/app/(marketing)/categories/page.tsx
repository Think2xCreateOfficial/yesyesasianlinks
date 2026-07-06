import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { productCategories, productsData } from "@/data/products";
import { generateSlug } from "@/utils/slug";
import { Package, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Categories | Premium B2B Products",
  description:
    "Browse all product categories sourced directly from verified Chinese manufacturers. From Textile & Garment to Consumer Electronics — explore our full B2B catalogue.",
  openGraph: {
    title: "All Product Categories | Yes Yes Asian Link",
    description:
      "Explore 10+ premium B2B product categories sourced from verified manufacturers in China.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "All Product Categories",
  description: "Browse all B2B product categories from Yes Yes Asian Link.",
};

export default function CategoriesIndexPage() {
  const categories = productCategories.filter((c) => c.value !== "all");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* ─── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative pt-24 md:pt-36 pb-8 md:pb-12 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-gray-100/50">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Primary gradient orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl" />
            
            {/* Secondary accent orbs */}
            <div className="hidden md:block absolute top-1/3 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
            <div className="hidden md:block absolute bottom-0 right-1/4 w-56 h-56 bg-amber-400/5 rounded-full blur-2xl" />
            
            {/* Subtle grid pattern */}
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
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-gray-400 mb-4"
            >
              <Link href="/" className="hover:text-[var(--color-brand-primary)] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[var(--color-brand-black)] font-medium">
                Categories
              </span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-[var(--color-brand-primary)]" />
                <span className="text-[var(--color-brand-primary)] font-bold tracking-widest uppercase text-xs">
                  Product Catalogue
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-brand-black)] mb-4">
                All Categories
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
                Browse our complete range of B2B product categories — sourced
                directly from verified manufacturers across China&apos;s top
                industrial hubs.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Categories Grid ─────────────────────────────────────────────── */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {categories.map((category) => {
                const slug = generateSlug(category.value);
                const categoryProducts = productsData.filter(
                  (p) => p.category === category.value
                );
                const count = categoryProducts.length;
                const displayImage = categoryProducts[0]?.image || "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop";

                return (
                  <Link
                    key={category.id}
                    href={`/categories/${slug}`}
                    className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--color-brand-primary)]/30 transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-brand-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={displayImage}
                        alt={category.label}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      {/* Header with Icon and Count */}
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <h2 className="text-base font-bold text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-primary)] transition-colors leading-snug line-clamp-2">
                          {category.label}
                        </h2>
                        <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[var(--color-brand-primary)]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                          <Package className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-primary)] transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Count */}
                      <p className="text-sm text-gray-500 mb-auto">
                        {count} products available
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                        <span className="text-xs font-semibold text-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          Browse products
                        </span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[var(--color-brand-primary)] flex items-center justify-center transition-colors duration-300 ml-auto">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA Banner ──────────────────────────────────────────────────── */}
        <section className="py-14 bg-[var(--color-brand-primary)] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact our sourcing experts and we&apos;ll find the right product
              from our verified supplier network across China.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--color-brand-primary)] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
