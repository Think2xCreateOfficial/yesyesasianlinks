import Link from "next/link";
import { companyInfo } from "@/data/company";
import { Home, MessageCircle, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center border border-gray-100">

        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-[var(--color-brand-primary)]" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Page Not Found</h2>

        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[var(--color-brand-primary)] text-white font-medium hover:bg-[var(--color-brand-primary)]/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>

          <a
            href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-green-500" />
            WhatsApp Support
          </a>
        </div>

      </div>
    </div>
  );
}
