import Link from "next/link";
import { Icons } from "@/components/common/Icons";
import { getConsultationUrl } from "@/lib/whatsapp";
import { Mail } from "lucide-react";

interface CategoryCTAProps {
  categoryName: string;
}

export function CategoryCTA({ categoryName }: CategoryCTAProps) {
  return (
    <section className="py-16 bg-[var(--color-brand-primary)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Order {categoryName}?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Get in touch with our sourcing experts for bulk pricing, customized catalogs, and sample requests.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href={getConsultationUrl()}
            target="_blank"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[var(--color-brand-primary)] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Icons.WhatsApp className="w-5 h-5 text-[#25D366]" />
            Request Quote
          </Link>
          
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--color-brand-primary)] border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
