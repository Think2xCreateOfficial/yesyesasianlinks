"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Home, Info, Briefcase, Map, Phone, ChevronRight } from "lucide-react";
import { Icons } from "../common/Icons";
import { navigationData } from "@/data/navigation";
import { companyInfo } from "@/data/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icon map per nav id
const navIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "nav-home": Home,
  "nav-about": Info,
  "nav-services": Briefcase,
  "nav-tours": Map,
  "nav-contact": Phone,
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Slide Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-[100] flex flex-col lg:hidden overflow-hidden"
            style={{ background: "linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)" }}
          >
            {/* ── Gradient Header ── */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-gray-light)] px-5 pt-2 pb-2 border-b-[.4px] border-[var(--color-brand-primary)]/30">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[var(--color-brand-primary)]/15 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-[var(--color-brand-secondary)]/10 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex items-center justify-between">
                {/* Logo + Company name */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                    <Image
                      src="/logo.png"
                      alt={companyInfo.title}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[var(--color-brand-black)] font-bold text-sm leading-tight">
                      {companyInfo.title}
                    </p>
                    <p className="text-[var(--color-brand-black)]/50 text-xs">China Sourcing Experts</p>
                  </div>
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/50 hover:bg-[var(--color-brand-primary)]/80 border border-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ── Navigation Links ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 mb-3">
                Navigation
              </p>
              <nav className="space-y-1">
                {navigationData.map((item, index) => {
                  const Icon = navIconMap[item.id] ?? Home;
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href || "#"}
                        onClick={onClose}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all group ${isActive
                            ? "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20"
                            : "text-gray-700 hover:bg-gray-100 hover:text-[var(--color-brand-black)]"
                          }`}
                      >
                        {/* Icon box */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive
                              ? "bg-[var(--color-brand-primary)] text-white shadow-md shadow-[var(--color-brand-primary)]/30"
                              : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                            }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="flex-1">{item.title}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)]" />
                        ) : (
                          <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* ── Sticky Bottom CTAs ── */}
            <div className="p-4 border-t border-gray-100 space-y-2.5 bg-white/80 backdrop-blur">
              <Link
                href={`tel:${companyInfo.contact.phone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[var(--color-brand-primary)] border border-gray-200 text-[var(--color-brand-gray-light)] py-3 rounded-xl font-semibold text-sm shadow-sm hover:border-[var(--color-brand-primary)]/30 hover:text-[var(--color-brand-primary)] transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </Link>
              <Link
                href={companyInfo.contact.whatsapp}
                target="_blank"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all active:scale-[0.98]"
              >
                <Icons.WhatsApp className="w-5 h-5" />
                Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
