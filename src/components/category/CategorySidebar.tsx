"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { productCategories, productsData } from "@/data/products";
import { generateSlug } from "@/utils/slug";
import { Download, Phone } from "lucide-react";
import { getConsultationUrl } from "@/lib/whatsapp";

export function CategorySidebar() {
  const pathname = usePathname();
  const allCategories = productCategories.filter(c => c.value !== "all");

  return (
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        
        {/* Categories Menu */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="text-lg font-bold text-[var(--color-brand-black)] mb-4">Categories</h3>
          <ul className="space-y-1">
            {allCategories.map(cat => {
              const slug = generateSlug(cat.value);
              const href = `/categories/${slug}`;
              const isActive = pathname === href;
              const count = productsData.filter(p => p.category === cat.value).length;

              return (
                <li key={cat.id}>
                  <Link 
                    href={href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      isActive 
                        ? "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-[var(--color-brand-black)]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive 
                        ? "bg-[var(--color-brand-primary)]/20"
                        : "bg-gray-100"
                    }`}>
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Catalogue */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-colors">
          <div>
            <h4 className="font-bold text-sm text-[var(--color-brand-black)]">E-Catalogue</h4>
            <p className="text-xs text-gray-500">Download PDF (4.2MB)</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform text-[var(--color-brand-primary)]">
            <Download className="w-4 h-4" />
          </div>
        </div>

      </div>
    </div>
  );
}
