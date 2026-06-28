"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { Icons } from "../common/Icons";
import { companyInfo } from "@/data/company";
import { navigationData } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-[var(--shadow-soft)] py-2"
            : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt={companyInfo.title} 
                width={52} 
                height={52} 
                className="object-contain"
              />
              <span className="text-2xl font-bold text-[var(--color-brand-black)] hidden sm:block">
                {companyInfo.title}
              </span>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href={companyInfo.contact.whatsapp} target="_blank" className="flex flex-col items-center text-gray-600 hover:text-[#25D366] transition-colors">
                <Icons.WhatsApp className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">WhatsApp</span>
              </Link>
              <Link href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} className="flex flex-col items-center text-gray-600 hover:text-[var(--color-brand-primary)] transition-colors">
                <Icons.Phone className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">Call Us</span>
              </Link>
              <Link
                href="/contact"
                className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-white)] border-1 border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md"
              >
                Get Quotes
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[var(--color-brand-black)]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center mt-2 space-x-6 border-t border-gray-100 pt-2">
            <MegaMenu />
            {navigationData.slice(0).map((item) => (
              <Link 
                key={item.id} 
                href={item.href || '#'} 
                className="text-sm font-medium text-gray-600 hover:text-[var(--color-brand-primary)] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
