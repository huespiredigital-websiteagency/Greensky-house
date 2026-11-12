import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp GreenSky Homes"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-5 sm:right-5 z-40 inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2.5 rounded-full border border-[#D4AF6A]/65 bg-[#082714] p-2 sm:px-4 sm:py-3 text-sm font-semibold text-[#FAF8F3] shadow-[0_14px_34px_-8px_rgba(4,20,10,0.65)] transition-all duration-300 hover:bg-[#0F3D21] hover:border-[#E5CA8C] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF6A] text-[#082714]">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="hidden sm:inline pr-1">WhatsApp Us</span>
    </a>
  );
}
