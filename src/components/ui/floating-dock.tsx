"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { companyInfo } from "@/data/company";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";

export function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceToBottom = scrollHeight - scrollY - clientHeight;

      const pastThreshold = scrollY > 300;
      const notInFooterZone = distanceToBottom > 200;

      // Show on BOTH scroll directions — visible whenever user has scrolled
      // past 300px and is not near the footer zone.
      setIsVisible(pastThreshold && notInFooterZone);

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(checkVisibility);
        ticking.current = true;
      }
    };

    // Run on mount to set correct initial state
    checkVisibility();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-center gap-2.5 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* WhatsApp Button — primary */}
      <a
        href={getConsultationUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp"
        style={{ width: "52px", height: "52px" }}
      >
        <Icons.WhatsApp className="w-6 h-6" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          WhatsApp Us
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, "")}`}
        className="group relative flex items-center justify-center rounded-full bg-white text-[var(--color-brand-primary)] border border-gray-200 shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Call Us"
        style={{ width: "44px", height: "44px" }}
      >
        <Phone className="w-4.5 h-4.5" style={{ width: "18px", height: "18px" }} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Call Us
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center rounded-full bg-white text-gray-500 border border-gray-200 shadow-sm hover:shadow-md hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)]/30 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Scroll to top"
        style={{ width: "38px", height: "38px" }}
      >
        <ArrowUp className="w-4 h-4" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Back to Top
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </button>
    </div>
  );
}
