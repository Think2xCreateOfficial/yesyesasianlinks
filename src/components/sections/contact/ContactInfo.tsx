"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CONTACT_INFO_CONTENT } from "@/data/contact";
import { companyInfo } from "@/data/company";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Icons } from "@/components/common/Icons";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  const contactItems = [
    {
      id: "ci-whatsapp",
      label: CONTACT_INFO_CONTENT.whatsappLabel,
      value: companyInfo.contact.whatsapp,
      href: getConsultationUrl(),
      icon: Icons.WhatsApp,
      isExternal: true,
      accent: "bg-[#25D366]/10 border-[#25D366]/20 text-[#25D366]",
    },
    {
      id: "ci-phone",
      label: CONTACT_INFO_CONTENT.phoneLabel,
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone.replace(/\s+/g, "")}`,
      icon: Phone,
      isExternal: false,
      accent: "bg-[var(--color-brand-primary)]/10 border-[var(--color-brand-primary)]/20 text-[var(--color-brand-primary)]",
    },
    {
      id: "ci-email",
      label: CONTACT_INFO_CONTENT.emailLabel,
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
      icon: Mail,
      isExternal: false,
      accent: "bg-blue-500/10 border-blue-500/20 text-blue-600",
    },
    {
      id: "ci-address",
      label: CONTACT_INFO_CONTENT.addressLabel,
      value: companyInfo.contact.address,
      href: "#contact-map",
      icon: MapPin,
      isExternal: false,
      accent: "bg-red-500/10 border-red-500/20 text-red-500",
    },
  ];

  return (
    <ScrollAnimation>
      <div className="space-y-5">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--color-brand-black)] mb-2">
            {CONTACT_INFO_CONTENT.heading}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {CONTACT_INFO_CONTENT.subheading}
          </p>
        </div>

        {/* Contact Cards */}
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-brand-primary)]/20 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${item.accent} group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-[var(--color-brand-black)] truncate">
                  {item.value}
                </div>
              </div>
            </Link>
          );
        })}

        {/* Business Hours */}
        <div className="flex items-start gap-4 p-5 bg-[var(--color-white)] rounded-xl border border-gray-200 mt-2">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              {CONTACT_INFO_CONTENT.hoursLabel}
            </div>
            <div className="text-sm font-medium text-gray-700 leading-relaxed">
              {CONTACT_INFO_CONTENT.hours}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
