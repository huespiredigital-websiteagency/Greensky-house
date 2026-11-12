"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { TESTIMONIALS } from "@/config/content";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="bg-[#0B2D18] py-16 sm:py-24 lg:py-32 text-[#FAF8F3]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal-up flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E5CA8C]">
                Client Perspectives
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.15] text-[#FAF8F3]">
              Words From Our Clients
            </h2>
          </div>

          <div className="inline-flex items-start gap-2 rounded-sm border border-[#D4AF6A]/25 bg-[#082714]/80 px-4 py-2.5 text-xs text-[#FAF8F3]/75 max-w-sm">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF6A]"
              aria-hidden="true"
            />
            <span>
              Placeholder layout ready for verified client reviews in{" "}
              <code className="font-mono text-[11px] text-[#E5CA8C]">
                src/config/content.ts
              </code>
              .
            </span>
          </div>
        </div>

        {/* Featured Carousel Card */}
        <div className="reveal-up mt-10 sm:mt-12 rounded-sm border border-[#D4AF6A]/25 bg-[#082714]/70 p-6 sm:p-12 lg:p-14">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <Quote
                className="h-8 w-8 sm:h-9 sm:w-9 text-[#D4AF6A]/75"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <blockquote className="mt-5 font-serif text-lg sm:text-2xl lg:text-[1.7rem] font-normal italic leading-relaxed text-[#FAF8F3]/95">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[#D4AF6A]/20 pt-5">
                <span className="text-sm font-semibold tracking-wide text-[#E5CA8C]">
                  {current.attributionLabel}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#FAF8F3]/55">
                  · {current.contextLabel}
                </span>
              </div>
            </div>

            {/* Carousel Controls + Touch-Friendly Indicator Dots */}
            <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#D4AF6A]/35 text-[#FAF8F3] transition-colors hover:border-[#D4AF6A] hover:bg-[#D4AF6A] hover:text-[#082714] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#D4AF6A]/35 text-[#FAF8F3] transition-colors hover:border-[#D4AF6A] hover:bg-[#D4AF6A] hover:text-[#082714] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator Dots with 44px touch wrappers */}
          <div className="mt-4 sm:mt-6 flex items-center gap-1" role="tablist" aria-label="Testimonial slides">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                suppressHydrationWarning
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`View testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-sm"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-[#D4AF6A]"
                      : "w-2.5 bg-[#FAF8F3]/25 hover:bg-[#FAF8F3]/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
