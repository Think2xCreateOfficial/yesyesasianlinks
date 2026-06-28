"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TOURS_GALLERY_HEADER, TOURS_GALLERY_IMAGES } from "@/data/tours";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ToursGalleryCTA() {
  return (
    <section className="py-8 bg-white" aria-label="Tour Gallery and CTA">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <ScrollAnimation className="text-center max-w-2xl mx-auto mb-4">
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {TOURS_GALLERY_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] leading-tight">
            {TOURS_GALLERY_HEADER.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {TOURS_GALLERY_HEADER.headingHighlight}
            </span>
          </h2>
        </ScrollAnimation>

        {/* Masonry-style gallery */}
        <div className="columns-2 md:columns-none md:grid md:grid-cols-3 gap-4 mb-6 md:auto-rows-[200px] md:grid-flow-dense">
          {TOURS_GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative overflow-hidden rounded-xl group mb-4 break-inside-avoid md:mb-0 ${image.span === "wide"
                  ? "aspect-video md:aspect-auto md:col-span-2 md:row-span-2"
                  : image.span === "tall"
                    ? "aspect-[3/4] md:aspect-auto md:row-span-2"
                    : "aspect-square md:aspect-auto md:col-span-1 md:row-span-1"
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enquiry CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[var(--color-brand-black)] rounded-xl text-center md:text-left p-6 md:p-16"
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1.5px, transparent 1.5px)`,
              backgroundSize: "32px 32px",
            }}
          />
          {/* Orange glow accent */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[var(--color-brand-primary)]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-[var(--color-brand-primary)] text-sm font-bold uppercase tracking-widest mb-3">
                Limited Group Sizes
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {TOURS_GALLERY_HEADER.ctaText}
              </h3>
              <p className="text-gray-400 text-lg">
                {TOURS_GALLERY_HEADER.ctaSubtext}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href={getConsultationUrl()}
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-lg font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(37,211,102,0.4)] whitespace-nowrap"
              >
                <Icons.WhatsApp className="w-5 h-5" />
                Enquire on WhatsApp
              </Link>
              <Link
                href="#tours-grid"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-lg font-medium text-lg transition-all whitespace-nowrap"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
