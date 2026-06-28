"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  ShieldCheck,
  Globe,
  Users,
  Award,
  TrendingUp,
  Clock,
  Target,
  Eye,
} from "lucide-react";
import {
  ABOUT_MISSION_VISION,
  ABOUT_VALUES,
  ABOUT_VALUES_HEADER,
} from "@/data/about";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  TrendingUp,
  ShieldCheck,
  Award,
  Globe,
  Users,
  Target,
  Eye,
};

export function AboutValues() {
  return (
    <section id="about-values" className="py-8 bg-[var(--color-brand-black)]">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Values Grid */}
        <ScrollAnimation>
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {ABOUT_VALUES_HEADER.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {ABOUT_VALUES_HEADER.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {ABOUT_VALUES_HEADER.headingHighlight}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-4">
            {ABOUT_VALUES_HEADER.description}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ABOUT_VALUES.map((value, index) => {
            const Icon = iconMap[value.icon] ?? Award;
            return (
              <ScrollAnimation key={value.id} delay={index * 0.1}>
                <div className="flex flex-col h-full gap-5 p-5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 hover:border-[var(--color-brand-primary)]/30 rounded-xl transition-all group cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[var(--color-brand-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
