"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollAnimation className={`max-w-3xl mb-6 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-sm mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      )}
    </ScrollAnimation>
  );
}
