"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ChevronDown } from "lucide-react";
import { FaqItem, generalFaqData, FAQ_SECTION_HEADER } from "@/data/faq";

interface FAQSectionProps {
  items?: FaqItem[];
  eyebrow?: string;
  heading?: string;
  description?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function FAQSection({
  items = generalFaqData,
  eyebrow = FAQ_SECTION_HEADER.eyebrow,
  heading = FAQ_SECTION_HEADER.heading,
  description = FAQ_SECTION_HEADER.description,
  className = "",
  theme = "light",
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const isDark = theme === "dark";

  return (
    <section
      className={`py-6 ${isDark ? "bg-[var(--color-brand-black)]" : "bg-white"} ${className}`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Header */}
        <ScrollAnimation className="text-center mb-12">
          <span
            className={`text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block`}
          >
            {eyebrow}
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-[var(--color-brand-black)]"}`}
          >
            {heading}
          </h2>
          {description && (
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              {description}
            </p>
          )}
        </ScrollAnimation>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((faq, index) => (
            <ScrollAnimation key={faq.id} delay={index * 0.04}>
              <div
                className={`rounded-xl overflow-hidden border transition-all duration-200 ${isDark
                    ? openId === faq.id
                      ? "border-[var(--color-brand-primary)]/40 bg-white/5"
                      : "border-gray-800 bg-white/[0.02] hover:border-gray-700"
                    : openId === faq.id
                      ? "border-[var(--color-brand-primary)]/30 bg-orange-50/50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-[var(--color-brand-primary)]/30"
                  }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span
                    className={`font-semibold text-base leading-snug transition-colors ${isDark
                        ? openId === faq.id
                          ? "text-[var(--color-brand-primary)]"
                          : "text-white"
                        : openId === faq.id
                          ? "text-[var(--color-brand-primary)]"
                          : "text-[var(--color-brand-black)]"
                      }`}
                  >
                    {faq.title}
                  </span>
                  <motion.span
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDark
                        ? openId === faq.id
                          ? "bg-[var(--color-brand-primary)] text-white"
                          : "bg-gray-800 text-gray-400"
                        : openId === faq.id
                          ? "bg-[var(--color-brand-primary)] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div
                        className={`px-6 pb-5 leading-relaxed border-t pt-4 ${isDark
                            ? "text-gray-400 border-gray-800"
                            : "text-gray-600 border-gray-100"
                          }`}
                      >
                        {faq.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
