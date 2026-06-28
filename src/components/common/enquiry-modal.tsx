"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";
import { companyInfo } from "@/data/company";
import { toast } from "sonner";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  serviceName?: string;
}

export function EnquiryModal({ isOpen, onClose, productName, serviceName }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "Importer/Distributor",
    requirement: ""
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.requirement) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Construct WhatsApp message
    let message = `Hello YES YES ASIAN LINK! I have an enquiry:\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    message += `*Business Type:* ${formData.businessType}\n`;

    if (productName) message += `*Interested In Product:* ${productName}\n`;
    if (serviceName) message += `*Interested In Service:* ${serviceName}\n`;

    message += `\n*Requirement Details:*\n${formData.requirement}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

    toast.success("Redirecting to WhatsApp...");

    // Close modal and open WhatsApp
    setTimeout(() => {
      onClose();
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {productName ? `Enquire about ${productName}` : serviceName ? `Enquire about ${serviceName}` : "Submit an Enquiry"}
            </h3>
            <p className="text-sm text-gray-500">We will respond shortly via WhatsApp</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-all"
                placeholder="+1 234 567 890"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="Importer/Distributor">Importer/Distributor</option>
                <option value="E-commerce Seller">E-commerce Seller</option>
                <option value="Retailer">Retailer</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Requirements Details *</label>
            <textarea
              name="requirement"
              required
              rows={4}
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Please describe your sourcing needs, target price, quantities, etc."
            ></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--color-brand-primary)] text-white font-medium hover:bg-[var(--color-brand-primary)]/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              By submitting, you will be redirected to WhatsApp to complete your enquiry.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
