"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import {
  Globe,
  Languages,
  Building2,
  ShieldCheck,
  TrendingUp,
  FileText,
} from "lucide-react";
import {
  TOURS_BENEFITS_HEADER,
  TOURS_BENEFITS,
} from "@/data/tours";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Languages,
  Building2,
  ShieldCheck,
  TrendingUp,
  FileText,
};

export function ToursBenefits() {
  return (
    <section className="py-8 bg-white" aria-label="Tour Benefits">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="max-w-3xl mb-6">
          <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-3 block">
            {TOURS_BENEFITS_HEADER.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] leading-tight mb-2">
            {TOURS_BENEFITS_HEADER.heading}{" "}
            <span className="text-[var(--color-brand-primary)]">
              {TOURS_BENEFITS_HEADER.headingHighlight}
            </span>
          </h2>
          <p className="text-md text-gray-600 leading-relaxed">
            {TOURS_BENEFITS_HEADER.description}
          </p>
        </ScrollAnimation>

        {/* Benefits Grid — 3x2 with alternating accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOURS_BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] ?? Globe;
            const isAccent = index === 0 || index === 4; // Accent cards
            return (
              <ScrollAnimation key={benefit.id} delay={index * 0.08}>
                <div
                  className={`relative rounded-3xl p-8 h-full group transition-all duration-400 overflow-hidden ${isAccent
                      ? "bg-[var(--color-brand-black)] text-white"
                      : "bg-[var(--color-surface)] border border-gray-100 hover:border-[var(--color-brand-primary)]/30 hover:shadow-lg"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 ${isAccent
                        ? "bg-[var(--color-brand-primary)]/20 border border-[var(--color-brand-primary)]/30"
                        : "bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors"
                      }`}
                  >
                    <Icon className="w-7 h-7 text-[var(--color-brand-primary)]" />
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${isAccent ? "text-white" : "text-[var(--color-brand-black)]"
                      }`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-sm ${isAccent ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    {benefit.description}
                  </p>

                  {/* Decorative element */}
                  {isAccent && (
                    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full bg-[var(--color-brand-primary)]/10" />
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
