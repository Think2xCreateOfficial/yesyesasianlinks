"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { companyInfo } from "@/data/company";
import { footerData } from "@/data/footer";
import { navigationData } from "@/data/navigation";
import { Icons } from "@/components/common/Icons";
import { getConsultationUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-black)] text-white pt-10 pb-4 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-6 border-b border-gray-800">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="rounded-xl">
                <Image 
                  src="/logo.png" 
                  alt={companyInfo.title} 
                  width={60} 
                  height={60} 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">{companyInfo.title}</span>
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              {footerData.description}
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[var(--color-brand-primary)]" />
                </div>
                <div className="pt-2">
                  <a href={`tel:${companyInfo.contact.phone.replace(/\\s+/g, '')}`} className="hover:text-[var(--color-brand-primary)] transition-colors">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[var(--color-brand-primary)]" />
                </div>
                <div className="pt-2">
                  <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-[var(--color-brand-primary)] transition-colors">
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[var(--color-brand-primary)]" />
                </div>
                <div className="pt-2 max-w-[250px]">
                  <span>{companyInfo.contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {navigationData.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href || '#'} 
                    className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing Hubs */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Sourcing Hubs</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors">Guangzhou Operations</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors">Yiwu Market Sourcing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors">Shenzhen Electronics</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[var(--color-brand-primary)] transition-colors">Foshan Furniture</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href={getConsultationUrl()} target="_blank" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all">
              <Icons.WhatsApp className="w-5 h-5" />
            </Link>
            <Link href={companyInfo.socials.facebook} target="_blank" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all">
              <Icons.Facebook className="w-5 h-5" />
            </Link>
            <Link href={companyInfo.socials.instagram} target="_blank" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E4405F] hover:text-white transition-all">
              <Icons.Instagram className="w-5 h-5" />
            </Link>
            {/* <Link href={companyInfo.socials.youtube} target="_blank" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FF0000] hover:text-white transition-all">
              <Icons.YouTube className="w-5 h-5" />
            </Link> */}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          
          <p className="text-gray-500 text-sm text-center md:text-right">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
