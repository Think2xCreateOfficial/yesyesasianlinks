"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CONTACT_FORM_OPTIONS, CONTACT_FORM_CONTENT } from "@/data/contact";
import { whatsappData } from "@/data/whatsapp";
import { Icons } from "@/components/common/Icons";
import { Send, CheckSquare, Square, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD" },
  { code: "EUR", symbol: "€", label: "EUR" },
  { code: "INR", symbol: "₹", label: "INR" },
  { code: "AED", symbol: "AED", label: "AED" },
  { code: "GBP", symbol: "£", label: "GBP" },
];

interface FormState {
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  businessType: string;
  productCategory: string;
  servicesRequired: string[];
  importQuantity: string;
  currency: string;
  budgetRange: string;
  preferredContact: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  companyName: "",
  mobile: "",
  email: "",
  businessType: "",
  productCategory: "",
  servicesRequired: [],
  importQuantity: "",
  currency: "INR",
  budgetRange: "",
  preferredContact: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-3 bg-[var(--color-surface)] border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/30 focus:border-[var(--color-brand-primary)] transition-all text-sm";

const selectClass =
  "w-full px-4 py-3 bg-[var(--color-surface)] border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]/30 focus:border-[var(--color-brand-primary)] transition-all text-sm appearance-none cursor-pointer";

const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset budget when currency changes
      if (name === "currency") updated.budgetRange = "";
      return updated;
    });
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      servicesRequired: prev.servicesRequired.includes(service)
        ? prev.servicesRequired.filter((s) => s !== service)
        : [...prev.servicesRequired, service],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.businessType) newErrors.businessType = "Please select your business type";
    if (!form.productCategory) newErrors.productCategory = "Please select a product category";
    if (form.servicesRequired.length === 0)
      newErrors.servicesRequired = "Please select at least one service" as any;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    const budgetWithCurrency = form.budgetRange
      ? `${form.budgetRange} (${form.currency})`
      : undefined;

    const message = whatsappData.templates.contactForm({
      fullName: form.fullName,
      companyName: form.companyName || undefined,
      mobile: form.mobile,
      email: form.email,
      businessType: form.businessType,
      productCategory: form.productCategory,
      servicesRequired: form.servicesRequired,
      importQuantity: form.importQuantity || undefined,
      budgetRange: budgetWithCurrency,
      preferredContact: form.preferredContact || undefined,
      message: form.message || undefined,
    });

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappData.businessNumber}?text=${encodedMessage}`;

    toast.success(CONTACT_FORM_CONTENT.successMessage);

    setTimeout(() => {
      setSubmitting(false);
      window.open(url, "_blank");
    }, 800);
  };

  // Dynamic budget ranges based on selected currency
  const budgetRanges =
    CONTACT_FORM_OPTIONS.budgetRangesByCurrency?.[form.currency] ??
    CONTACT_FORM_OPTIONS.budgetRanges;

  return (
    <ScrollAnimation>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-primary)] px-6 py-5">
          <h2 className="text-md md:text-xl font-bold text-white mb-1">
            {CONTACT_FORM_CONTENT.heading}
          </h2>
          <p className="text-white/80 text-xs md:text-md">
            {CONTACT_FORM_CONTENT.subheading}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          {/* Row 1: Name + Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.fullName.label}
                <span className="text-red-500 ml-1 normal-case">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder={CONTACT_FORM_CONTENT.fields.fullName.placeholder}
                className={`${inputClass} ${errors.fullName ? "border-red-400 focus:ring-red-200" : ""}`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.companyName.label}
              </label>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder={CONTACT_FORM_CONTENT.fields.companyName.placeholder}
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Mobile + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.mobile.label}
                <span className="text-red-500 ml-1 normal-case">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder={CONTACT_FORM_CONTENT.fields.mobile.placeholder}
                className={`${inputClass} ${errors.mobile ? "border-red-400 focus:ring-red-200" : ""}`}
              />
              {errors.mobile && (
                <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.email.label}
                <span className="text-red-500 ml-1 normal-case">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={CONTACT_FORM_CONTENT.fields.email.placeholder}
                className={`${inputClass} ${errors.email ? "border-red-400 focus:ring-red-200" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 3: Business Type + Product Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.businessType.label}
                <span className="text-red-500 ml-1 normal-case">*</span>
              </label>
              <div className="relative">
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className={`${selectClass} ${errors.businessType ? "border-red-400" : ""} pr-10`}
                >
                  <option value="">Select business type</option>
                  {CONTACT_FORM_OPTIONS.businessTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.businessType && (
                <p className="mt-1 text-xs text-red-500">{errors.businessType}</p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.productCategory.label}
                <span className="text-red-500 ml-1 normal-case">*</span>
              </label>
              <div className="relative">
                <select
                  name="productCategory"
                  value={form.productCategory}
                  onChange={handleChange}
                  className={`${selectClass} ${errors.productCategory ? "border-red-400" : ""} pr-10`}
                >
                  <option value="">Select product category</option>
                  {CONTACT_FORM_OPTIONS.productCategories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {errors.productCategory && (
                <p className="mt-1 text-xs text-red-500">{errors.productCategory}</p>
              )}
            </div>
          </div>

          {/* Services Required — multi-select checkboxes */}
          <div>
            <label className={labelClass}>
              {CONTACT_FORM_CONTENT.fields.servicesRequired.label}
              <span className="text-red-500 ml-1 normal-case">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
              {CONTACT_FORM_OPTIONS.servicesRequired.map((service) => {
                const isSelected = form.servicesRequired.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`flex items-start gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all leading-snug ${isSelected
                        ? "bg-[var(--color-brand-primary)]/10 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)]"
                        : "bg-[var(--color-surface)] border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    ) : (
                      <Square className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    )}
                    <span className="break-words">{service}</span>
                  </button>
                );
              })}
            </div>
            {errors.servicesRequired && (
              <p className="mt-1 text-xs text-red-500">{errors.servicesRequired as string}</p>
            )}
          </div>

          {/* Row 4: Import Quantity + Currency + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.importQuantity.label}
              </label>
              <input
                type="text"
                name="importQuantity"
                value={form.importQuantity}
                onChange={handleChange}
                placeholder={CONTACT_FORM_CONTENT.fields.importQuantity.placeholder}
                className={inputClass}
              />
            </div>

            {/* Currency selector */}
            <div className="sm:col-span-1">
              <label className={labelClass}>Currency</label>
              <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-[var(--color-surface)]">
                {CURRENCIES.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() =>
                      handleChange({
                        target: { name: "currency", value: c.code },
                      } as any)
                    }
                    className={`flex-1 py-3 text-xs font-bold transition-all ${form.currency === c.code
                        ? "bg-[var(--color-brand-primary)] text-white"
                        : "text-gray-500 hover:bg-gray-100"
                      }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic budget range */}
            <div className="sm:col-span-1">
              <label className={labelClass}>
                {CONTACT_FORM_CONTENT.fields.budgetRange.label.replace(
                  "(USD)",
                  `(${form.currency})`
                )}
              </label>
              <div className="relative">
                <select
                  name="budgetRange"
                  value={form.budgetRange}
                  onChange={handleChange}
                  className={`${selectClass} pr-10`}
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Preferred Contact */}
          <div>
            <label className={labelClass}>
              {CONTACT_FORM_CONTENT.fields.preferredContact.label}
            </label>
            <div className="flex flex-wrap gap-2">
              {CONTACT_FORM_OPTIONS.contactMethods.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, preferredContact: method }))}
                  className={`px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${form.preferredContact === method
                      ? "bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] text-white"
                      : "bg-[var(--color-surface)] border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass}>
              {CONTACT_FORM_CONTENT.fields.message.label}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder={CONTACT_FORM_CONTENT.fields.message.placeholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-gray-300 text-white py-4 px-2 rounded-xl font-medium text-sm transition-all shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)]"
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                {CONTACT_FORM_CONTENT.submittingLabel}
              </>
            ) : (
              <>
                <Icons.WhatsApp className="w-5 h-5" />
                {CONTACT_FORM_CONTENT.submitLabel}
              </>
            )}
          </motion.button>
          <p className="text-center text-xs text-gray-400">
            Your details will be sent directly via WhatsApp — no spam, no cold calls.
          </p>
        </form>
      </div>
    </ScrollAnimation>
  );
}
