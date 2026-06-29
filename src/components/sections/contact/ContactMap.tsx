"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CONTACT_MAP_CONTENT } from "@/data/contact";
import { companyInfo } from "@/data/company";
import { MapPin, Clock, Navigation, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

const landmarks = [
  "5 min from Guangzhou South Railway",
  "Near Canton Fair Exhibition Center",
  "Tianhe Business District",
];

export function ContactMap() {
  return (
    <section
      id="contact-map"
      className="py-8 bg-white overflow-hidden"
      aria-label="Office Location Map"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section label */}
        <ScrollAnimation className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[var(--color-brand-primary)] font-bold tracking-wider uppercase text-xs mb-3 px-4 py-1.5 bg-[var(--color-brand-primary)]/8 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            Our Location
          </span>
          <h2 className="text-3xl font-bold text-[var(--color-brand-black)] mt-2">
            {CONTACT_MAP_CONTENT.heading}
          </h2>
        </ScrollAnimation>

        {/* Split panel */}
        <ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] rounded-xl overflow-hidden shadow-2xl border border-gray-100">

            {/* ── Left Info Panel ── */}
            <div className="order-2 md:order-1 bg-gradient-to-br from-[var(--color-brand-black)] to-[#1a1a2e] text-white p-8 flex flex-col gap-2 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[var(--color-brand-primary)]/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[var(--color-brand-secondary)]/10 translate-y-1/2 -translate-x-1/2" />

              {/* Pin icon header */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-primary)] flex items-center justify-center shadow-lg shadow-[var(--color-brand-primary)]/30 mb-2">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {companyInfo.title}
                </h3>
              </div>

              {/* Address */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[var(--color-brand-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
                      Office Address
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
                      Business Hours
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      Mon – Sat
                      <br />
                      9:00 AM – 7:00 PM CST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
                      Contact
                    </p>
                    <p className="text-sm text-white/90">{companyInfo.contact.phone}</p>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div className="relative z-10">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">
                  Nearby Landmarks
                </p>
                <ul className="space-y-2">
                  {landmarks.map((lm) => (
                    <li key={lm} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] shrink-0" />
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Directions CTA */}
              <Link
                href={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center justify-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/90 text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-[var(--color-brand-primary)]/30 hover:-translate-y-0.5 mt-4"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>

            {/* ── Right Map Panel ── */}
            <div className="order-1 md:order-2 relative min-h-[400px] lg:min-h-0">
              <iframe
                src={CONTACT_MAP_CONTENT.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YES YES ASIAN LINK — Office Location in Guangzhou, China"
                className="w-full h-full"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
