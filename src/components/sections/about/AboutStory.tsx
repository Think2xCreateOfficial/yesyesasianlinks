"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT_STORY_CONTENT, ABOUT_MILESTONES } from "@/data/about";

export function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about-story"
      className="py-8 bg-white overflow-hidden"
      aria-label="Company Story"
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Top Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {ABOUT_STORY_CONTENT.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] leading-tight">
            {ABOUT_STORY_CONTENT.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {ABOUT_STORY_CONTENT.headingHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-2">
          {/* Left: Story text */}
          <div>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed mb-6 font-medium"
            >
              {ABOUT_STORY_CONTENT.description}
            </motion.p> */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-500 leading-relaxed mb-6"
            >
              {ABOUT_STORY_CONTENT.bodyText}
            </motion.p>

            {/* Milestones */}
            <div className="mt-4 space-y-0">
              {ABOUT_MILESTONES.map((milestone, i) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  {/* Timeline column */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-brand-primary)]/10 border-2 border-[var(--color-brand-primary)]/30 group-hover:bg-[var(--color-brand-primary)]/20 group-hover:border-[var(--color-brand-primary)] flex items-center justify-center transition-all shrink-0">
                      <span className="text-xs font-black text-[var(--color-brand-primary)]">
                        {milestone.year.slice(2)}
                      </span>
                    </div>
                    {i < ABOUT_MILESTONES.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-[var(--color-brand-primary)]/30 to-transparent min-h-[40px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-wider mb-1">
                      {milestone.year}
                    </div>
                    <h4 className="text-lg font-bold text-[var(--color-brand-black)] mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image — equal height, centered */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5", maxHeight: "600px" }}>
              <img
                src={ABOUT_STORY_CONTENT.image}
                alt={ABOUT_STORY_CONTENT.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl bg-[var(--color-brand-primary)]/8 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-xl bg-[var(--color-brand-black)]/5 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
