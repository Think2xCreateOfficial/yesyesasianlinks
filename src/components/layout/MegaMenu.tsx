// src/components/navigation/MegaMenu.tsx
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronRight, 
  Package,
  LayoutGrid,
  X,
  ArrowRight
} from "lucide-react";
import { productCategories, productsData } from "@/data/products";
import { generateSlug } from "@/utils/slug";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Category {
  id: string;
  label: string;
  value: string;
}

// ─── Utils ──────────────────────────────────────────────────────────────────
const getProductCount = (categoryValue: string): number => {
  return productsData.filter(p => p.category === categoryValue).length;
};

// ─── Main Component ──────────────────────────────────────────────────────────
export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get all categories except "all"
  const categories = productCategories.filter(c => c.value !== "all");

  // Handle mouse enter with delay
  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  // Handle mouse leave with delay
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, []);

  // Handle click toggle (for both desktop and mobile)
  const handleToggle = useCallback(() => {
    // For desktop: toggle dropdown
    if (window.innerWidth >= 1024) {
      setIsOpen(!isOpen);
    }
    // For mobile: toggle mobile menu
    else {
      setIsMobileOpen(!isMobileOpen);
    }
  }, [isOpen, isMobileOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      {/* ─── Desktop Mega Menu ────────────────────────────────────────────── */}
      <div
        ref={menuRef}
        className="hidden lg:block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger Button with Grid Icon */}
        <button
          ref={buttonRef}
          onClick={handleToggle}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--color-brand-black)] hover:text-[var(--color-brand-primary)] transition-colors rounded-xl hover:bg-gray-50 group"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Categories</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 mt-2 w-[600px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
              style={{ boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15)' }}
            >
              <div className="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {/* Header */}
                <div className="flex items-center justify-between px-2 pb-3 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                    Browse Categories
                  </span>
                  <Link
                    href="/categories"
                    className="text-xs font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-black)] transition-colors flex items-center gap-1"
                  >
                    View All
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Category Grid - Using single icon */}
                <div className="grid grid-cols-2 gap-1 pt-3">
                  {categories.map((category) => {
                    const count = getProductCount(category.value);
                    const slug = generateSlug(category.value);

                    return (
                      <Link
                        key={category.id}
                        href={`/categories/${slug}`}
                        className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[var(--color-brand-primary)]/10 flex items-center justify-center transition-colors">
                            <Package className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-brand-primary)] transition-colors" />
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[var(--color-brand-primary)] transition-colors">
                            {category.label}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-[var(--color-brand-primary)]/10 group-hover:text-[var(--color-brand-primary)] transition-colors">
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <Link
                    href="/categories"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-black)] transition-colors py-2 rounded-xl hover:bg-gray-50"
                  >
                    <span>Explore All Categories</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Mobile Menu Button ────────────────────────────────────────────── */}
      <div className="lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--color-brand-black)] hover:text-[var(--color-brand-primary)] transition-colors rounded-xl hover:bg-gray-50"
          aria-expanded={isMobileOpen}
          aria-haspopup="true"
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Categories</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileOpen ? "rotate-180" : ""}`} />
        </button>

        {/* ─── Mobile Full-Screen Menu ────────────────────────────────────── */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 w-[85vw] max-w-[380px] h-full bg-white z-50 lg:hidden shadow-2xl flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white">
                  <h3 className="text-lg font-bold text-[var(--color-brand-black)]">
                    Categories
                  </h3>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Category List - Using single icon */}
                <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                  {categories.map((category) => {
                    const count = getProductCount(category.value);
                    const slug = generateSlug(category.value);

                    return (
                      <Link
                        key={category.id}
                        href={`/categories/${slug}`}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Package className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">
                            {category.label}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-4 bg-gray-50/50">
                  <Link
                    href="/categories"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] hover:text-[var(--color-brand-black)] transition-colors py-3 rounded-xl hover:bg-white"
                  >
                    <span>View All Categories</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Styles ──────────────────────────────────────────────────────────── */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #d1d5db transparent;
        }
      `}</style>
    </>
  );
}