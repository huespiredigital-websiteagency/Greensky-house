import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#082714] py-16 sm:py-24 lg:py-28 text-[#FAF8F3]">
      {/* Subtle Decorative Hairlines */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF6A]/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF6A]/35 to-transparent"
        aria-hidden="true"
      />

      <div className="reveal-up relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="mb-4 inline-flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#E5CA8C]">
            Begin With Clarity
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-medium leading-[1.1] text-[#FAF8F3]">
          Your Next Chapter{" "}
          <span className="italic text-[#E5CA8C]">Starts Here.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#FAF8F3]/80">
          Let&apos;s help you find a place that feels like home.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm bg-[#D4AF6A] px-8 py-3.5 text-sm font-semibold tracking-wide text-[#082714] shadow-lg transition-all duration-300 hover:bg-[#E5CA8C] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA8C]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm border border-[#D4AF6A]/50 bg-[#0F3D21]/50 px-8 py-3.5 text-sm font-semibold tracking-wide text-[#FAF8F3] transition-all duration-300 hover:border-[#D4AF6A] hover:bg-[#0F3D21] hover:text-[#E5CA8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
          >
            <MessageCircle className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
