"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_HERO_CONTENT } from "@/data/contact";
import { Clock, ShieldCheck, Globe } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  ShieldCheck,
  Globe,
};

export function ContactHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="relative py-16 min-h-[95vh] flex flex-col justify-end overflow-hidden"
      aria-label="Contact Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={CONTACT_HERO_CONTENT.backgroundImage}
          alt="Business contact"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-[var(--color-brand-black)]/60" />
      </div>

      {/* Diagonal grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 container mx-auto px-4 lg:px-8"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)]/40 text-[var(--color-brand-primary)] text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
            {CONTACT_HERO_CONTENT.eyebrow}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-white leading-[1.0] mb-4 tracking-tight"
          >
            {CONTACT_HERO_CONTENT.headingLine1}
            <br />
            <span className="text-[var(--color-brand-primary)]">
              {CONTACT_HERO_CONTENT.headingLine2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-gray-300 max-w-xl leading-relaxed mb-4"
          >
            {CONTACT_HERO_CONTENT.description}
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {CONTACT_HERO_CONTENT.trustBadges.map((badge, i) => {
              const Icon = iconMap[badge.icon] ?? Clock;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-full"
                >
                  <Icon className="w-4 h-4 text-[var(--color-brand-primary)]" />
                  {badge.text}
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
