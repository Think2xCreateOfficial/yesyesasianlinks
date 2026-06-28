"use client";

import Link from "next/link";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Icons } from "@/components/common/Icons";
import { getConsultationUrl } from "@/lib/whatsapp";
import { MapPin, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { ctaData, CTA_LOCATIONS, CTA_TRUST_BADGES, CTA_BUTTON_TEXT } from "@/data/cta";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F1] text-gray-900 py-8 lg:py-10 rounded-tl-4xl rounded-tr-4xl">

      {/* Background World Map Pattern (Conceptual) */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#E07B1A]/10 to-transparent"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-[#C8262E]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollAnimation className="max-w-5xl mx-auto text-center">

          <div className="flex items-center justify-between md:justify-center gap-4 md:gap-8 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#E07B1A]/10 flex items-center justify-center border border-[#E07B1A]/30 mb-3 shadow-[0_0_30px_rgba(224,123,26,0.15)]">
                <MapPin className="w-6 h-6 text-[#E07B1A]" />
              </div>
              <span className="font-bold text-lg tracking-wider text-gray-900">{CTA_LOCATIONS.origin.label}</span>
              <span className="text-xs text-gray-500 font-medium">{CTA_LOCATIONS.origin.sublabel}</span>
            </div>

            <div className="flex-1 max-w-[200px] relative block">
              <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-300"></div>
              <PlaneTakeoff className="w-8 h-8 text-[#E07B1A] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF8F1] px-1" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#C8262E]/10 flex items-center justify-center border border-[#C8262E]/30 mb-3 shadow-[0_0_30px_rgba(200,38,46,0.15)]">
                <MapPin className="w-6 h-6 text-[#C8262E]" />
              </div>
              <span className="font-bold text-lg tracking-wider text-gray-900">{CTA_LOCATIONS.destination.label}</span>
              <span className="text-xs text-gray-500 font-medium">{CTA_LOCATIONS.destination.sublabel}</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            {ctaData.headline.split(".")[0]}.&nbsp;
            <span className="text-[#E07B1A]">{ctaData.headline.split(".")[1]?.trim()}</span>
          </h2>

          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            {ctaData.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:-translate-y-1"
            >
              <Icons.WhatsApp className="w-6 h-6" />
              {CTA_BUTTON_TEXT}
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
