"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Icons } from "@/components/common/Icons";
import { toursData, TOURS_IMAGE_MAP, TOURS_GRID_HEADER } from "@/data/tours";
import { getTourEnquiryUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Package,
  ArrowRight,
  Star,
} from "lucide-react";

export function ToursGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tours-grid" className="py-16 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow={TOURS_GRID_HEADER.eyebrow}
          heading={TOURS_GRID_HEADER.heading}
          description={TOURS_GRID_HEADER.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map((tour, index) => {
            const tourImage =
              TOURS_IMAGE_MAP[tour.id] ?? TOURS_IMAGE_MAP.default;
            const isExpanded = expandedId === tour.id;

            return (
              <ScrollAnimation key={tour.id} delay={index * 0.12}>
                <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-1">
                  {/* ── Image Area ── */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tourImage}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge — top left */}
                    {tour.badge && (
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${tour.badgeColor ?? "from-amber-500 to-orange-500"} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}
                        >
                          <Star className="w-3 h-3" />
                          {tour.badge}
                        </span>
                      </div>
                    )}

                    {/* Duration + Location — top right */}
                    <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                      <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-[var(--color-brand-primary)]" />
                        {tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {tour.location}
                      </span>
                    </div>

                    {/* Title overlay — bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white leading-tight drop-shadow">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Content Area ── */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {tour.description}
                    </p>

                    {/* Highlights */}
                    {tour.highlights && (
                      <div className="mb-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                          Highlights
                        </p>
                        <ul className="space-y-2">
                          {(tour.highlights as string[]).map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Inclusions — expandable */}
                    {tour.inclusions && (
                      <div className="border-t border-gray-100 pt-4 mb-5">
                        <button
                          onClick={() => toggleExpand(tour.id)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <Package className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
                            What's Included
                          </span>
                          <span className="text-[var(--color-brand-primary)]">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              key="inclusions"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-3 space-y-1.5">
                                {(tour.inclusions as string[]).map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                  >
                                    <span className="w-4 h-4 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                                      <CheckCircle className="w-2.5 h-2.5 text-green-500" />
                                    </span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Price + CTA */}
                    <div className="border-t border-gray-100 pt-4 mt-2">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-400 font-medium">
                            Starting from
                          </p>
                          <p className="text-lg font-bold text-[var(--color-brand-primary)]">
                            {tour.price ?? "Custom Quote"}
                          </p>
                        </div>
                        <Link
                          href="#tours-grid"
                          className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors"
                        >
                          Details
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <Link
                        href={getTourEnquiryUrl()}
                        target="_blank"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-0.5 text-sm"
                      >
                        <Icons.WhatsApp className="w-4 h-4" />
                        Enquire About This Tour
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Need a custom itinerary? We tailor tours to your product categories.
            </p>
            <Link
              href={getTourEnquiryUrl()}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[var(--color-brand-primary)]/30 hover:-translate-y-0.5"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              Plan a Custom China Tour
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
