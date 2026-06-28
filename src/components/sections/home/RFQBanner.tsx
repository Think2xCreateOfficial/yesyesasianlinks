"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Send, FileText, ShieldCheck } from "lucide-react";
import { Icons } from "@/components/common/Icons";
import { getRFQUrl } from "@/lib/whatsapp";
import { toast } from "sonner";
import { HOME_RFQ_CONTENT, HOME_RFQ_STEPS } from "@/data/home";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Send,
};

export function RFQBanner() {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    unit: HOME_RFQ_CONTENT.defaultUnit,
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.product || !formData.quantity) {
      toast.error("Please fill in all required fields");
      return;
    }

    const whatsappUrl = getRFQUrl(
      formData.product,
      formData.quantity,
      formData.unit,
      "Standard Request",
      formData.company || "Not Provided"
    );

    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section className="py-4 bg-white relative overflow-hidden" id="rfq">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50 rounded-l-[100px] -z-10" />

      <div className="container mx-auto px-0 md:px-6">
        <div className="bg-[var(--color-brand-black)] rounded-none md:rounded-[1rem] overflow-hidden shadow-2xl relative">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[var(--color-brand-primary)] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 p-4 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">

            <div className="lg:w-1/2 text-white">
              <ScrollAnimation animation="slide-left" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)]" />
                  <span className="text-sm font-medium">{HOME_RFQ_CONTENT.badge}</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {HOME_RFQ_CONTENT.heading} <br />
                  <span className="text-[var(--color-brand-primary)]">{HOME_RFQ_CONTENT.headingHighlight}</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {HOME_RFQ_CONTENT.description}
                </p>

                <div className="space-y-6">
                  {HOME_RFQ_STEPS.map((step) => {
                    const IconComponent = iconMap[step.icon] ?? FileText;
                    return (
                      <div key={step.id} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)]/20 flex items-center justify-center shrink-0">
                          <IconComponent className="w-5 h-5 text-[var(--color-brand-primary)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{step.title}</h4>
                          <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>

            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
              <ScrollAnimation animation="slide-right" delay={0.2}>
                <div className="bg-white rounded-xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-black)] mb-6">{HOME_RFQ_CONTENT.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{HOME_RFQ_CONTENT.labels.product}</label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        placeholder={HOME_RFQ_CONTENT.labels.productPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] outline-none transition-all"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{HOME_RFQ_CONTENT.labels.quantity}</label>
                        <input
                          type="number"
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder={HOME_RFQ_CONTENT.labels.quantityPlaceholder}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] outline-none transition-all"
                        />
                      </div>
                      <div className="w-2/3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{HOME_RFQ_CONTENT.labels.unit}</label>
                        <select
                          name="unit"
                          value={formData.unit}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] outline-none transition-all bg-white"
                        >
                          {HOME_RFQ_CONTENT.units.map(u => (
                            <option key={u}>{u}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{HOME_RFQ_CONTENT.labels.company}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={HOME_RFQ_CONTENT.labels.companyPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-primary)] focus:ring-1 focus:ring-[var(--color-brand-primary)] outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 mt-4"
                    >
                      <Icons.WhatsApp className="w-5 h-5" />
                      {HOME_RFQ_CONTENT.submitLabel}
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
