"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Check, ArrowRight } from "lucide-react";
import type { SampleProperty } from "@/config/content";

interface PropertyModalProps {
  property: SampleProperty | null;
  onClose: () => void;
  onEnquire: (propertyTitle: string) => void;
}

export function PropertyModal({
  property,
  onClose,
  onEnquire,
}: PropertyModalProps) {
  useEffect(() => {
    if (!property) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#061A0E]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-xl sm:rounded-sm border border-[#D4AF6A]/35 bg-[#FAF8F3] text-[#17221B] shadow-2xl pb-[env(safe-area-inset-bottom)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close property details"
          className="absolute right-3.5 top-3.5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#082714]/90 text-[#FAF8F3] transition-colors hover:bg-[#082714] hover:text-[#D4AF6A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/10] w-full bg-[#082714]">
          <Image
            src={property.image}
            alt={property.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <span className="absolute left-5 top-5 rounded-sm bg-[#082714]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5CA8C] border border-[#D4AF6A]/40">
            {property.sampleNotice}
          </span>
        </div>

        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D21]">
              {property.propertyType}
            </span>
            <span className="text-xs font-medium text-[#4A594F]">
              {property.areaOrLayout}
            </span>
          </div>

          <h3
            id="property-modal-title"
            className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-[#082714]"
          >
            {property.title}
          </h3>

          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#4A594F]">
            <MapPin className="h-4 w-4 text-[#B38E4D]" aria-hidden="true" />
            <span>{property.location}</span>
          </p>

          <p className="mt-5 text-base leading-relaxed text-[#4A594F]">
            {property.description}
          </p>

          <div className="mt-6 border-t border-[#082714]/12 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#082714]">
              Key Architectural Highlights (Sample Specification)
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {property.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#17221B]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F3D21]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#082714]/12 pt-6">
            <p className="text-xs text-[#4A594F]">
              Sample showcase card—availability and pricing confirmed on enquiry.
            </p>
            <button
              type="button"
              onClick={() => onEnquire(property.title)}
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-[#D4AF6A] px-6 py-3 text-sm font-semibold tracking-wide text-[#082714] transition-colors hover:bg-[#E5CA8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082714]"
            >
              <span>Enquire About This Property</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
