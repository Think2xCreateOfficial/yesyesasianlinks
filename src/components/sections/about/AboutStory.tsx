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
          <div className="order-2 md: order-1">
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed mb-6 font-medium"
            >
              {ABOUT_STORY_CONTENT.description}
            </motion.p> */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-500 leading-relaxed mb-6"
            >
              {ABOUT_STORY_CONTENT.bodyText}
            </motion.p> */}

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

          {/* Right: Images — two owners */}
          <div className="order-1 md:order-2 relative h-full w-full flex items-center mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full relative z-10">
              {/* Owner 1 Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-xl aspect-[3/4] group"
              >
                <img
                  src="/image1.jpeg"
                  alt="Owner 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              </motion.div>
              
              {/* Owner 2 Image */}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative mb-8 md:mb-12 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group"
              >
                <img
                  src="/image2.jpeg"
                  alt="Owner 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              </motion.div>
            </div>

            {/* Decorative accents */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-32 md:w-48 h-32 md:h-48 rounded-[2rem] bg-[var(--color-brand-primary)]/10 -z-10" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-24 md:w-32 h-24 md:h-32 rounded-xl bg-[var(--color-brand-black)]/5 -z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
