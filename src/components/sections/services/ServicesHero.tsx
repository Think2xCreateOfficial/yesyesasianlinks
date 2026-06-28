"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyInfo } from "@/data/company";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import { ArrowRight, ShieldCheck, Globe, TrendingUp } from "lucide-react";
import { SERVICES_HERO_CONTENT, SERVICES_HERO_BADGES } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Globe,
  TrendingUp,
};

const BG_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop";

export function ServicesHero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_IMAGE}
          alt="China sourcing services background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50" />
        {/* Brand color tint */}
        <div className="absolute inset-0 bg-[var(--color-brand-primary)]/10 mix-blend-multiply" />
      </div>

      {/* Decorative grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.06) 40px,rgba(255,255,255,0.06) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.06) 40px,rgba(255,255,255,0.06) 41px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-36 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-sm mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)]" />
            <span className="text-sm font-semibold text-white">
              {companyInfo.shortName} — {SERVICES_HERO_CONTENT.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            {SERVICES_HERO_CONTENT.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {SERVICES_HERO_CONTENT.headingHighlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            {SERVICES_HERO_CONTENT.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
          >
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] hover:-translate-y-1"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              {SERVICES_HERO_CONTENT.primaryCta}
            </Link>
            <Link
              href={SERVICES_HERO_CONTENT.secondaryHref}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium transition-all"
            >
              {SERVICES_HERO_CONTENT.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6"
          >
            {SERVICES_HERO_BADGES.map(({ id, icon, label }) => {
              const Icon = iconMap[icon] ?? ShieldCheck;
              return (
                <div
                  key={id}
                  className="flex items-center gap-2 text-sm text-white/80 font-medium"
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)]/30 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
                  </div>
                  {label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
