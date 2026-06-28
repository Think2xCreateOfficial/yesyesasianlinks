"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  MapPin,
  Languages,
  FileCheck,
  Handshake,
} from "lucide-react";
import { ABOUT_TRUST_HEADER, ABOUT_TRUST_REASONS } from "@/data/about";
import Link from "next/link";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Languages,
  FileCheck,
  Handshake,
};

export function AboutTrust() {
  return (
    <section className="py-8 bg-[var(--color-surface)] overflow-hidden" aria-label="Why Trust YYAL">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <ScrollAnimation className="max-w-3xl mb-6">
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {ABOUT_TRUST_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] mb-2 leading-tight">
            {ABOUT_TRUST_HEADER.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {ABOUT_TRUST_HEADER.headingHighlight}
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {ABOUT_TRUST_HEADER.description}
          </p>
        </ScrollAnimation>

        {/* Trust Reasons — 2x2 grid with stat callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {ABOUT_TRUST_REASONS.map((reason, index) => {
            const Icon = iconMap[reason.icon] ?? MapPin;
            return (
              <ScrollAnimation key={reason.id} delay={index * 0.1}>
                <div className="bg-white h-full rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 p-8 group relative overflow-hidden">
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-[var(--color-brand-primary)]/4 group-hover:bg-[var(--color-brand-primary)]/8 transition-colors" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[var(--color-brand-primary)]" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-brand-black)] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2 text-sm">
                    {reason.description}
                  </p>

                  {/* Stat callout */}
                  {reason.stat && (
                    <div className="flex items-baseline gap-2 pt-2 border-t border-gray-100">
                      <span className="text-md font-black text-[var(--color-brand-primary)]">
                        {reason.stat}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {reason.statLabel}
                      </span>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[var(--color-brand-primary)] to-orange-500 rounded-3xl p-10 md:p-14 overflow-hidden text-center"
        >
    
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation and let our team design your China sourcing strategy.
            </p>
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-brand-primary)] hover:bg-gray-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              Book Free Consultation
            </Link>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
