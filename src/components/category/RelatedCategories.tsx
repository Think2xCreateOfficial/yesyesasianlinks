// src/components/categories/RelatedCategories.tsx
"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Category } from "@/types/data";
import { productsData } from "@/data/products";
import { generateSlug } from "@/utils/slug";
import { ArrowRight, Package, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedCategoriesProps {
  categories: Category[];
}

// ─── Animation Variants ──────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// ─── Individual Category Card ─────────────────────────────────────────────────
function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  const slug = generateSlug(cat.value);
  const count = productsData.filter((p) => p.category === cat.value).length;

  return (
    <motion.div variants={cardVariants}>
      <Link
        href={`/categories/${slug}`}
        className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white hover:border-[var(--color-brand-primary)]/40 hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
      >
        {/* Gradient accent on hover */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-brand-primary)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        <div className="flex items-center gap-3 min-w-0">
          {/* Icon */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-50 group-hover:bg-[var(--color-brand-primary)]/10 flex items-center justify-center shrink-0 transition-colors duration-300">
            <Package className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-primary)] transition-colors duration-300" />
          </div>

          {/* Label + Count */}
          <div className="min-w-0">
            <p className="font-semibold text-gray-800 group-hover:text-[var(--color-brand-primary)] transition-colors text-sm sm:text-base leading-tight line-clamp-2">
              {cat.label}
            </p>
            <span className="text-xs text-gray-400 mt-0.5 block">
              {count} products
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-[var(--color-brand-primary)] flex items-center justify-center shrink-0 ml-3 transition-colors duration-300">
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Mobile Scroll Card (larger, enhanced) ───────────────────────────────────
function MobileScrollCard({ cat }: { cat: Category }) {
  const slug = generateSlug(cat.value);
  const count = productsData.filter((p) => p.category === cat.value).length;

  return (
    <Link
      href={`/categories/${slug}`}
      className="group flex flex-col items-start gap-2 shrink-0 w-[180px] sm:w-[200px] p-5 rounded-2xl border border-gray-100 bg-white hover:border-[var(--color-brand-primary)]/40 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[var(--color-brand-primary)]/10 flex items-center justify-center transition-colors duration-300">
        <Package className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-primary)] transition-colors duration-300" />
      </div>
      <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--color-brand-primary)] transition-colors leading-tight line-clamp-2">
        {cat.label}
      </p>
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 group-hover:bg-[var(--color-brand-primary)]/10 text-xs text-gray-500 group-hover:text-[var(--color-brand-primary)] transition-colors font-medium">
        {count} items
      </span>
    </Link>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function RelatedCategories({ categories }: RelatedCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  if (!categories || categories.length === 0) return null;

  // Check scroll position for arrows
  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  }, []);

  // Scroll to direction
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  }, []);

  // Mouse drag handlers for mobile scroll
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftPos(scrollRef.current?.scrollLeft || 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  }, [isDragging, startX, scrollLeftPos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftPos(scrollRef.current?.scrollLeft || 0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  }, [isDragging, startX, scrollLeftPos]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Check scroll on mount and resize
  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    <section className="py-6 sm:py-8 bg-gray-50/70 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ─── Section Header ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <LayoutGrid className="w-4 h-4 text-[var(--color-brand-primary)]" />
              <span className="text-xs font-bold text-[var(--color-brand-primary)] tracking-widest uppercase">
                Browse More
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-brand-black)]">
              Explore Other Categories
            </h2>
          </div>
        </div>

        {/* ─── Mobile View: Horizontal Scroll Carousel with Arrows ────── */}
        <div className="sm:hidden relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-3 top-20 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 ${
              showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollPosition}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {categories.map((cat) => (
              <MobileScrollCard key={cat.id} cat={cat} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute -right-3 top-20 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 ${
              showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Mobile: View All link */}
          <div className="mt-2 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white hover:border-[var(--color-brand-primary)] transition-all duration-200 shadow-sm"
            >
              View All Categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ─── Tablet + Desktop View: Responsive Grid ──────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          {categories.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} />
          ))}
        </motion.div>
        
        {/* Desktop View All */}
        <div className="mt-2 text-center">
          <Link
            href="/categories"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-[var(--color-brand-primary)] text-md font-medium text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white hover:border-[var(--color-brand-primary)] transition-all duration-200 shrink-0 shadow-sm"
          >
            Browse All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ─── Styles ──────────────────────────────────────────────────────────── */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
}