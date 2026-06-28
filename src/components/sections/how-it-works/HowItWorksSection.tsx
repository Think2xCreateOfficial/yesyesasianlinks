"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HOW_IT_WORKS_DATA } from "@/data/howItWorks";
import {
  MessageSquare,
  Search,
  ShieldCheck,
  Handshake,
  ClipboardCheck,
  Ship,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Search,
  ShieldCheck,
  Handshake,
  ClipboardCheck,
  Ship,
};

// Step Images - Contextually matched to content
const STEP_IMAGES: Record<string, string> = {
  "1": "/poster1.webp",
  "2": "/tour6.webp",
  "3": "/tour5.webp",
  "4": "/tour2.webp",
  "5": "/homeabout.webp",
  "6": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
};

// ─── Step Slide ──────────────────────────────────────────────────────────────────
function StepSlide({
  step,
  index,
  isActive,
}: {
  step: (typeof HOW_IT_WORKS_DATA)[0];
  index: number;
  isActive: boolean;
}) {
  const IconComponent = iconMap[step.icon] ?? Search;
  const imageUrl = STEP_IMAGES[String(step.step)];

  return (
    <motion.div
      className={`flex-shrink-0 w-full px-4 transition-all duration-700 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      style={{ width: "100%", maxWidth: "100%" }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 lg:h-[420px] overflow-hidden">
            <Image
              src={imageUrl}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Step Number Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-white text-sm font-bold flex items-center justify-center shadow-lg">
                {step.step}
              </div>
              <span className="text-white/80 text-xs font-medium tracking-wider uppercase bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                Step {step.step} of {HOW_IT_WORKS_DATA.length}
              </span>
            </div>

            {/* Floating Icon */}
            <div className="absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-8 lg:p-12 bg-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-wider">
                {step.title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="w-8 h-px bg-[var(--color-brand-primary)]/30" />
              <span className="text-[10px] text-gray-400">Step {step.step}</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-brand-black)] mb-3 leading-tight">
              {step.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-base">
              {step.description}
            </p>

            {/* Progress dots */}
            <div className="flex gap-1.5 mt-4">
              {HOW_IT_WORKS_DATA.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${i === index
                      ? "w-8 bg-[var(--color-brand-primary)]"
                      : i < index
                        ? "w-3 bg-[var(--color-brand-primary)]/30"
                        : "w-3 bg-gray-200"
                    }`}
                />
              ))}
            </div>

            {/* Checkmark */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-[var(--color-brand-primary)]" />
              <span>Verified process</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function HowItWorksSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalSlides = HOW_IT_WORKS_DATA.length;

  // Auto-slide logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Pause on hover
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  // Navigation functions
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // Dot indicators
  const renderDots = () => {
    return (
      <div className="flex items-center justify-center gap-2 mt-4">
        {HOW_IT_WORKS_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 bg-[var(--color-brand-primary)]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-8 bg-[var(--color-surface)]" id="how-it-works">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[var(--color-brand-primary)]" />
            <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-xs">
              The Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] leading-tight mb-4">
            From Requirement to{" "}
            <span className="text-[var(--color-brand-primary)] relative">
              Delivery
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            {HOW_IT_WORKS_DATA.length} transparent steps from requirement to delivery —
            no guesswork, no hidden surprises.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Next step"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Auto-play indicator */}
          <div className="absolute top-5 right-8 z-20">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-gray-200 shadow-md flex items-center justify-center hover:bg-white transition-colors"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <Pause className="w-3.5 h-3.5 text-gray-600" />
              ) : (
                <Play className="w-3.5 h-3.5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {HOW_IT_WORKS_DATA.map((step, index) => (
                <StepSlide
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={index === currentIndex}
                />
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {renderDots()}

          {/* Step counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400 font-medium">
              {currentIndex + 1} / {totalSlides}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm text-gray-600 font-medium">
              Ready to start your sourcing journey?
            </p>
            <Link
              href={getConsultationUrl()}
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}