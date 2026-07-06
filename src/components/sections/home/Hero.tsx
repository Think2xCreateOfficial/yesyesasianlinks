"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ChevronRight, ChevronLeft } from "lucide-react";
import { Icons } from "../../common/Icons";
import { getConsultationUrl } from "@/lib/whatsapp";
import { heroData, heroSliderData } from "@/data/hero";
import { HERO_CONTENT } from "@/data/home";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSliderData.length - 1 : prev - 1));

  return (
    <section className="relative pt-24 pb-6 lg:pt-36 lg:pb-8 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-2 lg:px-">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* Left Side (30%) - Business Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 order-2 lg:order-1 flex flex-col space-y-6 px-2 md:px-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm w-fit">
              <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)]" />
              <span className="text-sm font-semibold text-gray-700">{HERO_CONTENT.badge}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-brand-black)] leading-tight">
              {heroData[0].title} <br />
              <span className="text-[var(--color-brand-primary)]">{HERO_CONTENT.headingHighlight}</span>
            </h1>

            <p className="text-md text-gray-600 leading-relaxed">
              {heroData[0].description} {HERO_CONTENT.descriptionSuffix}
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href={getConsultationUrl()}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-4 rounded-xl font-medium transition-transform active:scale-[0.98] shadow-lg shadow-[#25D366]/30"
              >
                <Icons.WhatsApp className="w-5 h-5" />
                {HERO_CONTENT.primaryCta}
              </Link>
              <Link
                href={HERO_CONTENT.secondaryHref}
                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-[var(--color-brand-primary)] text-[var(--color-brand-black)] px-8 py-4 rounded-xl font-medium transition-all"
              >
                {HERO_CONTENT.secondaryCta}
              </Link>
            </div>
          </motion.div>

          {/* Right Side (70%) - Interactive Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 order-1 lg:order-2 relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[16/9] shadow-2xl group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: .8 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 "
              >
                <Link href="/tours" className="absolute inset-0 block">
                  <div className="absolute inset-0 z-10" />
                  <Image
                    src={heroSliderData[currentSlide].image || '/placeholder.jpg'}
                    alt={heroSliderData[currentSlide].title}
                    fill
                    priority={currentSlide === 0}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />

                  {/* Slide Content Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-12 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl lg:text-3xl font-bold text-white"
                    >
                      {heroSliderData[currentSlide].title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-200 text-sm lg:text-lg max-w-xl mb-8 lg:mb-0"
                    >
                      {heroSliderData[currentSlide].description ?? HERO_CONTENT.sliderFallbackDescription}
                    </motion.p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute right-6 bottom-6 z-30 flex gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-colors"
              >
                <ChevronLeft className="w-3 md:w-6 h-3 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-colors"
              >
                <ChevronRight className="w-3 md:w-6 h-3 md:h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute top-6 right-6 z-30 flex gap-2">
              {heroSliderData.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
