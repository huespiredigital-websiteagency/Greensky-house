"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/config/content";

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export function ServicesSection({
  onSelectServiceForEnquiry,
}: ServicesSectionProps) {
  const handleServiceClick = (serviceTitle: string) => {
    onSelectServiceForEnquiry(serviceTitle);
    const contactEl = document.getElementById("contact");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="bg-[#FAF8F3] py-16 sm:py-24 lg:py-32 text-[#17221B]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal-up flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#B38E4D]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F3D21]">
                How We Help
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.15] text-[#082714]">
              Our Services
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#4A594F]">
            Focused real estate guidance designed to make finding, viewing, and
            evaluating your next home clear and effortless.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-6 text-xs font-medium tracking-wide text-[#4A594F] md:hidden">
          Swipe horizontally to explore our services &rarr;
        </p>

        <div className="stagger-grid no-scrollbar mt-4 md:mt-12 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="stagger-card group w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none flex flex-col overflow-hidden rounded-sm border border-[#082714]/12 bg-[#F2EFE6]/65 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF6A] hover:bg-[#FAF8F3] hover:shadow-[0_24px_50px_-20px_rgba(8,39,20,0.18)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#082714]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 84vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38E4D]">
                  {service.subtitle}
                </span>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#082714]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A594F]">
                  {service.description}
                </p>

                <div className="mt-5 border-t border-[#082714]/10 pt-4">
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#082714] transition-colors hover:text-[#B38E4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-sm"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight
                      className="h-4 w-4 text-[#B38E4D] transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
