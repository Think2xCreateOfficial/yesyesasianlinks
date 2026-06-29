"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { productsData, productCategories, FEATURED_PRODUCT_IDS } from "@/data/products";
import { HOME_PRODUCTS_HEADER } from "@/data/home";
import { Product, Category } from "@/types/data";
import { ChevronLeft, ChevronRight, CheckCircle, Plus, Sparkles } from "lucide-react";
import { Icons } from "@/components/common/Icons";
import { getProductEnquiryUrl } from "@/lib/whatsapp";

export interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  productCount: number;
}

export interface ProductCardProps {
  product: Product;
  index: number;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  productCount,
}: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState({ left: false, right: false });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowScroll({
        left: scrollLeft > 20,
        right: scrollLeft < scrollWidth - clientWidth - 20,
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const amount = direction === "left" ? -200 : 200;
      el.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      {showScroll.left && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth py-2 px-1 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.value;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.value)}
              className={`relative flex-shrink-0 px-2 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? "bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/20"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
              }`}
              aria-pressed={isActive}
            >
              {category.label}
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {category.value === "all" ? productCount : 5}
              </span>
            </button>
          );
        })}
      </div>

      {showScroll.right && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Scroll categories right"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      )}
    </div>
  );
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const delay = Math.min(index * 0.05, 0.4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-white rounded border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
            <CheckCircle className="w-3 h-3" />
            Verified
          </span>
          {product.isNew && (
            <span className="flex items-center gap-1 bg-[var(--color-brand-primary)] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-pulse">
              <Sparkles className="w-3 h-3" />
              New
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/60 backdrop-blur text-white text-[9px] font-medium px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Quick Action Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href={getProductEnquiryUrl(product.title, product.category)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
          >
            <Icons.WhatsApp className="w-4 h-4 text-[#25D366]" />
            Quick Enquire
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3 className="text-sm md:text-base font-semibold text-[var(--color-brand-black)] mb-1 line-clamp-2 leading-tight">
          {product.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mb-3 flex-1">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mt-auto">
          <Link
            href={getProductEnquiryUrl(product.title, product.category)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-black)] py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-md"
          >
            <Icons.WhatsApp className="w-3.5 h-3.5" />
            <span>Get Quote</span>
          </Link>
          <button
            aria-label="View product details"
            className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // ─── Filter Logic ──────────────────────────────────────────────────────────
  const filteredProducts = useMemo(() => {
    // All Products → Show only featured products (1 from each category)
    if (activeCategory === "all") {
      return productsData.filter((product) =>
        FEATURED_PRODUCT_IDS.includes(product.id)
      );
    }

    // Specific category → Show all 5 products
    return productsData.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  // ─── Category Count ────────────────────────────────────────────────────────
  const getCategoryCount = (categoryValue: string): number => {
    if (categoryValue === "all") {
      return FEATURED_PRODUCT_IDS.length;
    }
    return productsData.filter((p) => p.category === categoryValue).length;
  };

  const totalProducts = getCategoryCount(activeCategory);

  return (
    <section className="py-8 bg-white" id="products">
      <div className="container mx-auto ">
        {/* Header */}
        <div className="px-4 mb-4 ">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[var(--color-brand-primary)]" />
            <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-xs">
              Our Collection
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-brand-black)]">
            {HOME_PRODUCTS_HEADER.heading}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {totalProducts} products available
            {activeCategory !== "all" && ` in ${activeCategory}`}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            categories={productCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            productCount={totalProducts}
          />
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2">
                {filteredProducts.map((product: Product, index: number) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}