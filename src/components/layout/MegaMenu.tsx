"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Package, Box, Monitor, Shirt, Settings } from "lucide-react";

const categories = [
  { id: "machinery", name: "Industrial Machinery", icon: <Settings className="w-4 h-4" /> },
  { id: "electronics", name: "Consumer Electronics", icon: <Monitor className="w-4 h-4" /> },
  { id: "apparel", name: "Apparel & Accessories", icon: <Shirt className="w-4 h-4" /> },
  { id: "packaging", name: "Packaging & Printing", icon: <Box className="w-4 h-4" /> },
  { id: "vehicles", name: "Vehicles & Parts", icon: <Package className="w-4 h-4" /> },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[var(--color-brand-black)] hover:text-[var(--color-brand-primary)] transition-colors">
        <span>Categories</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-[800px] bg-white rounded-xl shadow-[var(--shadow-hover)] border border-gray-100 flex overflow-hidden z-50"
          >
            {/* Sidebar */}
            <div className="w-1/3 bg-[var(--color-brand-gray-light)] py-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-6 py-3 flex items-center justify-between transition-colors ${activeCategory === cat.id
                      ? "bg-white text-[var(--color-brand-primary)] font-semibold border-l-4 border-[var(--color-brand-primary)]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[var(--color-brand-black)]"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    {cat.icon}
                    <span>{cat.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-2/3 p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                {categories.find(c => c.id === activeCategory)?.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-sm text-gray-600 hover:text-[var(--color-brand-primary)] flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span>Subcategory {i + 1}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
