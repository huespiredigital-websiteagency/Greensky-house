"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/config/content";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#FAF8F3] py-16 sm:py-24 lg:py-32 text-[#17221B]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Intro Column */}
          <div className="reveal-up lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#B38E4D]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F3D21]">
                  Common Questions
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#082714]">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#4A594F]">
                Clear answers about how to reach GreenSky Homes, schedule a
                viewing, and get tailored assistance selecting a home.
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold tracking-wide text-[#082714] underline decoration-[#D4AF6A] decoration-2 underline-offset-8 transition-colors hover:text-[#0F3D21]"
              >
                Have another question? Ask our team
              </a>
            </div>
          </div>

          {/* Interactive Accordion Column */}
          <div className="reveal-up lg:col-span-7">
            <div className="divide-y divide-[#082714]/15 border-t border-b border-[#082714]/15">
              {FAQS.map((faq) => {
                const isOpen = openId === faq.id;
                const panelId = `faq-panel-${faq.id}`;
                const buttonId = `faq-button-${faq.id}`;

                return (
                  <div key={faq.id} className="py-3.5 sm:py-5">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        suppressHydrationWarning
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(faq.id)}
                        className="flex min-h-[48px] w-full items-center justify-between gap-4 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-sm"
                      >
                        <span className="font-serif text-lg sm:text-xl font-medium text-[#082714]">
                          {faq.question}
                        </span>
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isOpen
                              ? "border-[#082714] bg-[#082714] text-[#D4AF6A]"
                              : "border-[#082714]/20 text-[#082714] hover:border-[#D4AF6A]"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-3.5"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pr-10 text-sm sm:text-base leading-relaxed text-[#4A594F]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
