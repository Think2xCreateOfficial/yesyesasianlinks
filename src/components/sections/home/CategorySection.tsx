"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { productCategories, productsData } from "@/data/products";
import { generateSlug } from "@/utils/slug";

export function CategorySection() {
  const categories = productCategories.filter((c) => c.value !== "all");

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-2 lg:px-8 max-w-7xl">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-2">
            Product Catalogue
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] mb-2">
            Explore Categories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Browse our comprehensive range of premium B2B products sourced directly from verified manufacturers across China's top industrial hubs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const slug = generateSlug(category.value);
            const firstProduct = productsData.find(p => p.category === category.value);
            const displayImage = firstProduct?.image || "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop";

            return (
              <Link key={category.id} href={`/categories/${slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group flex flex-col bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl hover:border-[var(--color-brand-primary)]/30 transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                    <Image
                      src={displayImage}
                      alt={category.label}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-3 text-center flex flex-col justify-center flex-1">
                    <h3 className="text-sm md:text-base font-bold text-[var(--color-brand-black)] group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-2">
                      {category.label}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
