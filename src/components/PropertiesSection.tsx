"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowUpRight, Info } from "lucide-react";
import { SAMPLE_PROPERTIES, type SampleProperty } from "@/config/content";
import { PropertyModal } from "@/components/PropertyModal";

interface PropertiesSectionProps {
  onSelectPropertyForEnquiry: (propertyTitle: string) => void;
}

export function PropertiesSection({
  onSelectPropertyForEnquiry,
}: PropertiesSectionProps) {
  const [selectedProperty, setSelectedProperty] = useState<SampleProperty | null>(
    null
  );

  const handleEnquire = (propertyTitle: string) => {
    setSelectedProperty(null);
    onSelectPropertyForEnquiry(propertyTitle);
    const contactEl = document.getElementById("contact");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="properties"
      className="bg-[#F2EFE6] py-16 sm:py-24 lg:py-32 text-[#17221B]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="reveal-up flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#B38E4D]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F3D21]">
                Featured Selection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.15] text-[#082714]">
              Our Properties
            </h2>
            <p className="mt-3 text-base text-[#4A594F]">
              An editorial preview of the residential styles we represent—ranging
              from private garden villas to green-terrace apartments.
            </p>
          </div>

          <div className="inline-flex items-start gap-2.5 rounded-sm border border-[#082714]/15 bg-[#FAF8F3] px-4 py-3 text-xs text-[#4A594F] max-w-md">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-[#B38E4D]"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-[#082714]">
                Sample Portfolio:
              </strong>{" "}
              Listings below illustrate the presentation layout and can be
              replaced directly in{" "}
              <code className="font-mono text-[11px] text-[#0F3D21]">
                src/config/content.ts
              </code>
              .
            </span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="mt-6 text-xs font-medium tracking-wide text-[#4A594F] md:hidden">
          Swipe horizontally to browse sample properties &rarr;
        </p>

        {/* Property Cards: Horizontal Swipe Snap on Mobile, Editorial Grid on Tablet/Desktop */}
        <div className="stagger-grid no-scrollbar mt-4 md:mt-12 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-5 px-5 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {SAMPLE_PROPERTIES.map((property) => (
            <article
              key={property.id}
              className="stagger-card group w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none flex flex-col overflow-hidden rounded-sm border border-[#082714]/12 bg-[#FAF8F3] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF6A] hover:shadow-[0_24px_50px_-20px_rgba(8,39,20,0.2)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#082714]">
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes="(max-width: 768px) 84vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082714]/50 via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-sm border border-[#D4AF6A]/45 bg-[#082714]/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E5CA8C]">
                  Sample Listing
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F3D21]">
                  <span>{property.propertyType}</span>
                </div>

                <h3 className="mt-2 font-serif text-xl sm:text-2xl font-medium text-[#082714] transition-colors group-hover:text-[#0F3D21]">
                  {property.title}
                </h3>

                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#4A594F]">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-[#B38E4D]"
                    aria-hidden="true"
                  />
                  <span>{property.location}</span>
                </p>

                <p className="mt-3 sm:mt-4 flex-1 text-sm leading-relaxed text-[#4A594F]">
                  {property.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#082714]/10 pt-4">
                  <span className="text-xs font-medium text-[#4A594F]">
                    {property.areaOrLayout}
                  </span>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedProperty(property)}
                    className="inline-flex min-h-[44px] px-2 -mr-2 shrink-0 whitespace-nowrap items-center gap-1.5 text-sm font-semibold text-[#082714] transition-colors hover:text-[#B38E4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-sm"
                  >
                    <span>View Details</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
}
