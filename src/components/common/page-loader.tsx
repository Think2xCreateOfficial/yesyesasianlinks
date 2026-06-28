"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/data/company";
import { Plane } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathname = useRef(pathname);
  const prevSearchParams = useRef(searchParams?.toString());

  useEffect(() => {
    // Hide loader after a short delay on initial load
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentParams = searchParams?.toString();
    if (pathname !== prevPathname.current || currentParams !== prevSearchParams.current) {
      prevPathname.current = pathname;
      prevSearchParams.current = currentParams;
      
      setLoading(true);
      
      // Simulate network delay for route change
      const timer = setTimeout(() => {
        setLoading(false);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center max-w-sm w-full px-6">
            
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Image 
                src="/logo.png" 
                alt={companyInfo.title} 
                width={120} 
                height={120} 
                className="object-contain"
              />
            </motion.div>
            
            {/* Trade Route Concept */}
            <div className="w-full relative h-12 flex items-center justify-between">
              
              {/* China Point */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-primary)] animate-pulse shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
                <span className="text-xs font-bold text-gray-400 absolute top-6">CHINA</span>
              </div>

              {/* Dotted Line */}
              <div className="absolute left-4 right-4 h-[2px] border-t-2 border-dashed border-gray-200" />

              {/* Animated Plane */}
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: "95%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                className="absolute rotate-45 top-1/2 -translate-y-1/2 -ml-3 bg-white px-2 z-10"
              >
                <Plane className="w-6 h-6 text-[var(--color-brand-primary)]" />
              </motion.div>

              {/* India Point */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                <span className="text-xs font-bold text-gray-400 absolute top-6">INDIA</span>
              </div>

            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <h2 className="text-xl font-bold text-[var(--color-brand-black)] tracking-tight mb-2">
                {companyInfo.title}
              </h2>
              <p className="text-sm text-gray-500 animate-pulse">
                Focuses on buying and sourcing...
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
