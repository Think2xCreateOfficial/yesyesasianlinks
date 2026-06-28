"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import { ABOUT_HERO_CONTENT } from "@/data/about";
import { ArrowDown } from "lucide-react";

export function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={ref}
      className="relative pt-8 pb-4 md:pt-20 md:pb-10 flex flex-col overflow-hidden"
      aria-label="About Hero"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" >
        <img
          src={ABOUT_HERO_CONTENT.backgroundImage}
          alt="China manufacturing and business"
          className="w-full h-[100%] object-cover object-center"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        ref={containerRef}
        className="relative z-10 flex flex-col justify-end min-h-[90vh] container mx-auto px-4 lg:px-8"
        style={{ y: textY }}
      >
        <div className="max-w-4xl">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-primary)] animate-pulse" />
            {ABOUT_HERO_CONTENT.badge}
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-white leading-[1.05] mb-4 tracking-tight"
          >
            {ABOUT_HERO_CONTENT.headingLine1}
            <br />
            <span className="text-[var(--color-brand-primary)]">
              {ABOUT_HERO_CONTENT.headingLine2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-4"
          >
            {ABOUT_HERO_CONTENT.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(37,211,102,0.4)]"
            >
              <Icons.WhatsApp className="w-5 h-5" />
              {ABOUT_HERO_CONTENT.primaryCta}
            </Link>
            <Link
              href={ABOUT_HERO_CONTENT.secondaryHref}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all"
            >
              {ABOUT_HERO_CONTENT.secondaryCta}
              <ArrowDown className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats Row */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm"
          >
            {ABOUT_HERO_CONTENT.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                className="bg-white/5 px-6 py-5 text-center"
              >
                <div className="text-3xl font-black text-[var(--color-brand-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
