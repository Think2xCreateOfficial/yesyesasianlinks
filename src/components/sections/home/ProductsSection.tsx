"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { productsData, productCategories } from "@/data/products";
import { HOME_PRODUCTS_HEADER } from "@/data/home";
import { CheckCircle, FileText, Plus } from "lucide-react";
import { Icons } from "@/components/common/Icons";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-[2px] md:px-4">
        
        <ScrollAnimation className="px-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] mb-6">
            {HOME_PRODUCTS_HEADER.heading}
          </h2>
          
          {/* Category Labels */}
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible whitespace-nowrap hide-scrollbar gap-2 md:gap-3 border-b border-gray-100 pb-4">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value 
                    ? "bg-[var(--color-brand-primary)] text-white shadow-md" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Product Grid - HKTDC Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-2">
          {filteredProducts.map((product, index) => (
            <ScrollAnimation key={product.id} delay={index * 0.1}>
              <div className="group bg-white rounded border border-gray-100 shadow-sm hover:shadow-[var(--shadow-hover)] transition-all overflow-hidden flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative aspect-square p-3 md:p-6 bg-gray-50 flex items-center justify-center">
                  <Image 
                    src={product.image || '/placeholder.jpg'} 
                    alt={product.title} 
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 flex gap-2">
                    <span className="bg-white/90 backdrop-blur text-[10px] md:text-xs font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded text-gray-600 border border-gray-200">
                      {HOME_PRODUCTS_HEADER.verifiedLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-5 flex flex-col flex-1">
                  <h3 className="text-xs md:text-sm font-semibold text-[var(--color-brand-black)] mb-1 md:mb-2 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-500 line-clamp-2 mb-2 truncate">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-1 md:gap-2 mb-3 md:mb-4">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" />
                      <span className="text-[10px] md:text-xs text-gray-500 truncate">{HOME_PRODUCTS_HEADER.verifiedSupplierLabel}</span>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2">
                      <button aria-label="View Product Details" className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shrink-0">
                        <Plus className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <Link 
                        href={getProductEnquiryUrl(product.title, product.category)}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-1 md:gap-2 border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium transition-colors"
                      >
                        <Icons.WhatsApp className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                        <span className="truncate">{HOME_PRODUCTS_HEADER.enquireLabel}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
