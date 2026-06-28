"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TOURS_EXPERIENCE_HEADER, TOURS_EXPERIENCE_ITEMS } from "@/data/tours";

export function ToursExperience() {
  return (
    <section className="py-8 bg-[var(--color-brand-black)] overflow-hidden" aria-label="Tour Experience">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <ScrollAnimation className="mb-6">
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {TOURS_EXPERIENCE_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {TOURS_EXPERIENCE_HEADER.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {TOURS_EXPERIENCE_HEADER.headingHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-md mt-2 max-w-2xl leading-relaxed">
            {TOURS_EXPERIENCE_HEADER.description}
          </p>
        </ScrollAnimation>

        {/* Experience items — alternating editorial layout */}
        <div className="flex flex-col gap-12">
          {TOURS_EXPERIENCE_ITEMS.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" /> */}

                    {/* Day label overlay */}
                    <div className="absolute top-5 left-5 bg-[var(--color-brand-primary)] text-white text-sm font-black px-4 py-2 rounded-xl uppercase tracking-wide">
                      {item.day}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 ${!isEven ? "lg:order-1" : ""} ${isEven ? "lg:pl-8" : "lg:pr-8"}`}
                >
                  {/* Day pill */}
                  <div className="text-[var(--color-brand-primary)] text-sm font-bold uppercase tracking-widest mb-3">
                    {item.day}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-gray-300 text-sm font-medium px-4 py-2 rounded-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
