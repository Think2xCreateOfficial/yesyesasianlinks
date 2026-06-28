"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { companyInfo } from "@/data/company";
import { ShieldCheck, Globe, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HOME_ABOUT_CONTENT,
  HOME_ABOUT_FEATURES,
  HOME_ABOUT_STATS,
} from "@/data/home";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Globe,
};

export function AboutSection() {
  return (
    <section className="py-6 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-brand-gray-light)] rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-16 items-center">

          {/* Left Content */}
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-2 border border-blue-100">
              <Award className="w-4 h-4" />
              {HOME_ABOUT_CONTENT.badge}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-black)] mb-2 leading-tight">
              {HOME_ABOUT_CONTENT.heading} <br/>
              <span className="text-[var(--color-brand-primary)]">{HOME_ABOUT_CONTENT.headingHighlight}</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              {HOME_ABOUT_CONTENT.description}
            </p>

            <div className="space-y-4 mb-4">
              {HOME_ABOUT_FEATURES.map((feature) => {
                const Icon = iconMap[feature.icon] ?? ShieldCheck;
                return (
                  <div key={feature.id} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-primary)]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-brand-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-brand-black)]">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 mb-4 pt-4">
              {HOME_ABOUT_STATS.map((stat) => (
                <div key={stat.id}>
                  <div className="text-3xl font-black text-[var(--color-brand-black)]">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex">
              <Link
                href={HOME_ABOUT_CONTENT.linkHref}
                className="flex items-center justify-center gap-2 text-[var(--color-brand-primary)] py-4 rounded-xl font-medium transition-all hover:translate-x-1"
              >
                <ArrowRight className="rounded border-1 w-5 h-5" />
                {HOME_ABOUT_CONTENT.linkText}
              </Link>
            </div>
          </ScrollAnimation>

          {/* Right Image */}
          <ScrollAnimation delay={0.2} className="relative">
            <div className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={HOME_ABOUT_CONTENT.image}
                alt={HOME_ABOUT_CONTENT.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
