"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import { TOURS_HERO_CONTENT, TOURS_HERO_HIGHLIGHTS } from "@/data/tours";
import { ArrowRight, MapPin, Clock, Users, Building2, ShieldCheck, Star } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Clock,
  Users,
  Building2,
  ShieldCheck,
  Star,
};

export function ToursHero() {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.65, 0.85]);

  return (
    <section
      ref={ref}
      className="relative pt-8 pb-4 md:pt-20 md:pb-10 min-h-screen flex flex-col overflow-hidden"
      aria-label="China Business Tours Hero"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={TOURS_HERO_CONTENT.backgroundImage}
          alt="China business tour"
          className="w-full h-[115%] object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-[var(--color-brand-black)]"
          style={{ opacity: overlayOpacity }}
        />
        {/* Color tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/0 via-transparent to-black/80" />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Content */}
      <motion.div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-center min-h-screen container mx-auto px-4 lg:px-8"
      >
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-[var(--color-brand-black)]/20 backdrop-blur-md border-2 border-[var(--color-brand-primary)]/90 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
            {TOURS_HERO_CONTENT.badge}
          </motion.div>

          {/* Headline — Large editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-[0.95] mb-4 tracking-tight"
          >
            {TOURS_HERO_CONTENT.headingLine1}
            <span className="text-[var(--color-brand-primary)]">
              {TOURS_HERO_CONTENT.headingLine2}
            </span>
            <br />
            <span className="text-white/50 text-4xl md:text-5xl font-bold">
              From China.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-6"
          >
            {TOURS_HERO_CONTENT.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.35)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(37,211,102,0.5)]"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              {TOURS_HERO_CONTENT.primaryCta}
            </Link>
            <Link
              href={TOURS_HERO_CONTENT.secondaryHref}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all"
            >
              {TOURS_HERO_CONTENT.secondaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scrolling marquee of highlights */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-[var(--color-brand-primary)]/90 to-orange-500/90 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...TOURS_HERO_HIGHLIGHTS, ...TOURS_HERO_HIGHLIGHTS].map(
            ({ id, icon, label }, i) => {
              const Icon = iconMap[icon] ?? MapPin;
              return (
                <div
                  key={`${id}-${i}`}
                  className="inline-flex items-center gap-2.5 text-white font-semibold text-sm"
                >
                  <Icon className="w-4 h-4 text-white/80 shrink-0" />
                  <span>{label}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40 ml-4" />
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}
