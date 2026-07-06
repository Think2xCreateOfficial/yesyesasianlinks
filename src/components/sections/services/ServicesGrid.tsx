"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Icons } from "@/components/common/Icons";
import { servicesData, SERVICES_IMAGE_MAP, SERVICES_GRID_HEADER } from "@/data/services";
import { getServiceEnquiryUrl } from "@/lib/whatsapp";
import {
  Search,
  ShieldCheck,
  Building2,
  FileText,
  Ship,
  Map,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  ShieldCheck,
  Building2,
  FileText,
  Ship,
  Map,
};

export function ServicesGrid() {
  return (
    <section id="services-grid" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow={SERVICES_GRID_HEADER.eyebrow}
          heading={SERVICES_GRID_HEADER.heading}
          description={SERVICES_GRID_HEADER.description}
        />

        <div className="space-y-20">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as string] ?? FileText;
            const bgImage =
              SERVICES_IMAGE_MAP[service.id] ?? SERVICES_IMAGE_MAP.default;
            const isEven = index % 2 === 0;

            return (
              <ScrollAnimation key={service.id} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Image — left for even, right for odd */}
                  <div
                    className={`relative rounded-xl overflow-hidden shadow-xl ${isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    style={{ aspectRatio: "4/3" }}
                  >
                    <img
                      src={bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Service badge on image */}
                    <div className="absolute bottom-5 left-5">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                        <IconComponent className="w-4 h-4 text-[var(--color-brand-primary)]" />
                        <span className="text-sm font-bold text-gray-900">
                          {service.title}
                        </span>
                      </div>
                    </div>
                    {/* Step number */}
                    <div className="absolute top-5 right-5">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white font-black text-sm flex items-center justify-center shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Content — right for even, left for odd */}
                  <div
                    className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    {/* Icon + title */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-[var(--color-brand-primary)]" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-brand-black)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    {service.benefits && (
                      <div className="mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Key Benefits
                        </p>
                        <ul className="space-y-2.5">
                          {(service.benefits as string[]).map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-center gap-3 text-gray-700 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Process steps */}
                    {service.process && (
                      <div className="mb-8">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Our Process
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(service.process as string[]).map((step, i) => (
                            <span
                              key={step}
                              className="flex items-center gap-1.5 text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full"
                            >
                              <span className="w-4 h-4 rounded-full bg-[var(--color-brand-primary)] text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                                {i + 1}
                              </span>
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={getServiceEnquiryUrl(service.title)}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-0.5"
                      >
                        <Icons.WhatsApp className="w-4 h-4" />
                        Enquire via WhatsApp
                      </Link>
                      <Link
                        href={"/contact"}
                        className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[var(--color-brand-primary)] text-gray-700 hover:text-[var(--color-brand-primary)] px-6 py-3 rounded-xl font-medium transition-all"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
