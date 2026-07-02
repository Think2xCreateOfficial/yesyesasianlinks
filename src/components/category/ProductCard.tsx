"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Icons } from "@/components/common/Icons";
import { getProductEnquiryUrl } from "@/lib/whatsapp";
import { Product } from "@/types/data";
import { HOME_PRODUCTS_HEADER } from "@/data/home";

export function ProductCard({ 
  product, 
  index 
}: { 
  product: Product; 
  index: number; 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
      className="group bg-white rounded border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
    >
      <div className="relative bg-gray-50 flex items-center justify-center overflow-hidden aspect-square p-4">
        <Image 
          src={product.image || '/placeholder.jpg'} 
          alt={product.title} 
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="flex items-center gap-1 bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
              <span className="hidden sm:inline">NEW</span>
            </span>
          )}
          <span className="flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[10px] font-semibold px-2 py-1 rounded-full text-gray-600 border border-gray-200 shadow-sm">
            <CheckCircle className="w-3 h-3 text-green-500" />
            <span className="hidden sm:inline">Verified</span>
          </span>
        </div>

        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
          <Link 
            href={getProductEnquiryUrl(product.title, product.category)}
            target="_blank"
            className="bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
          >
            <Icons.WhatsApp className="w-4 h-4 text-[#25D366]" />
            Quick Enquire
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-3 md:p-4">
        <h3 className="font-semibold text-[var(--color-brand-black)] mb-1 leading-tight text-sm line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <CheckCircle className="w-3 h-3 text-gray-400 shrink-0" />
          <span className="text-[10px] text-gray-400 truncate">
            {HOME_PRODUCTS_HEADER?.verifiedSupplierLabel || "Verified Supplier"}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-auto">
          <Link 
            href={getProductEnquiryUrl(product.title, product.category)}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-black)] py-1.5 md:py-2 rounded-full text-xs font-medium transition-colors duration-300"
          >
            <Icons.WhatsApp className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{HOME_PRODUCTS_HEADER?.enquireLabel || "Enquire"}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
