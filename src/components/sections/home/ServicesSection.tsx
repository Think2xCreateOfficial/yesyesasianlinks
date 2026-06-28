"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { servicesData, SERVICES_IMAGE_MAP, HOME_SERVICES_SECTION_HEADER } from "@/data/services";
import { Icons } from "@/components/common/Icons";
import { getServiceEnquiryUrl } from "@/lib/whatsapp";
import { Search, ShieldCheck, Building2, FileText, Ship, Map } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  ShieldCheck,
  Building2,
  FileText,
  Ship,
  Map,
};

function ServiceCard({ service, index, isActive, onClick }: { service: (typeof servicesData)[0]; index: number; isActive: boolean; onClick: () => void }) {
  const IconComponent = iconMap[service.icon as string] ?? FileText;
  const bgImage = SERVICES_IMAGE_MAP[service.id] ?? SERVICES_IMAGE_MAP.default;

  return (
    <ScrollAnimation delay={index * 0.1}>
      <div 
        className="relative w-full h-[420px] rounded-[15px] cursor-pointer overflow-hidden group bg-[var(--color-brand-black)] shadow-xl border border-[var(--color-brand-primary)"
        data-active={isActive ? "true" : undefined}
        onClick={onClick}
      >

        {/* Base image */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <img
            src={bgImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-data-[active=true]:scale-110 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        </div>

        {/* Base Text (Initial) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-0 transition-all duration-300 group-hover:opacity-0 group-data-[active=true]:opacity-0 group-hover:scale-95 group-data-[active=true]:scale-95 p-6">
          <div className="w-20 h-20 bg-[var(--color-brand-primary)]/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(224,123,26,0.15)] border border-[var(--color-brand-primary)]/20">
            <IconComponent className="w-10 h-10 text-[var(--color-brand-primary)]" />
          </div>
          <h3 className="text-2xl font-bold text-center tracking-tight">{service.title}</h3>
        </div>

        {/* Visual Hover Backgrounds */}
        <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-white rounded-tr-[15px] rounded-bl-[100%] transition-all duration-500 ease-out group-hover:w-full group-data-[active=true]:w-full group-hover:h-full group-data-[active=true]:h-full group-hover:rounded-[15px] group-data-[active=true]:rounded-[15px] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-white rounded-bl-[15px] rounded-tr-[100%] transition-all duration-500 ease-out group-hover:w-full group-data-[active=true]:w-full group-hover:h-full group-data-[active=true]:h-full group-hover:rounded-[15px] group-data-[active=true]:rounded-[15px] z-10 pointer-events-none" />

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col items-center p-8 z-20 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-opacity duration-300 delay-[150ms] pointer-events-none group-hover:pointer-events-auto group-data-[active=true]:pointer-events-auto">
          <div className="w-14 h-14 bg-[#FFF8F1] rounded-xl flex items-center justify-center mb-4 shrink-0 shadow-sm border border-orange-50">
            <IconComponent className="w-7 h-7 text-[var(--color-brand-primary)]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
          <p className="text-sm text-gray-600 mb-6 line-clamp-4 leading-relaxed text-center">{service.description}</p>

          <div className="flex flex-col gap-3 w-full mt-auto">
            <Link
              href={getServiceEnquiryUrl(service.title)}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-0.5"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              {HOME_SERVICES_SECTION_HEADER.enquireLabel}
            </Link>
            <Link
              href={service.href ?? "/services"}
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[var(--color-brand-primary)] border-2 border-[var(--color-brand-primary)]/20 hover:border-[var(--color-brand-primary)] py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              {HOME_SERVICES_SECTION_HEADER.viewDetailsLabel}
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export function ServicesSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <section className="py-6 bg-gray-50" id="services">
      <div className="container mx-auto px-4 lg:px-8">

        <ScrollAnimation className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-2 block">
            {HOME_SERVICES_SECTION_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            {HOME_SERVICES_SECTION_HEADER.heading}
          </h2>
          <p className="text-gray-600 text-lg">
            {HOME_SERVICES_SECTION_HEADER.description}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              isActive={activeCardId === service.id}
              onClick={() => setActiveCardId(activeCardId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
