import Image from "next/image";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88svh] sm:min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-[#061A0E]"
    >
      {/* Full-bleed Architectural Photography */}
      <div className="hero-media absolute inset-0">
        <Image
          src="/images/hero-residence.jpg"
          alt="Modern contemporary residence nestled amid mature green trees and manicured lawn in soft golden light"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered Deep Forest Scrim for Editorial Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A0E]/92 via-[#082714]/70 to-[#061A0E]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061A0E]/88 via-transparent to-[#061A0E]/55" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-10">
        <div className="max-w-3xl">
          <div className="hero-animate mb-5 sm:mb-6 inline-flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-10 bg-[#D4AF6A]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#E5CA8C]">
              GreenSky Homes · Live Green, Live Better
            </span>
          </div>

          <h1 className="hero-animate font-serif text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium leading-[1.08] tracking-tight text-[#FAF8F3]">
            Find a Place Where{" "}
            <span className="italic text-[#E5CA8C]">Life Feels Better.</span>
          </h1>

          <p className="hero-animate mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#FAF8F3]/85">
            Discover thoughtfully selected properties and better opportunities for
            modern living with GreenSky Homes.
          </p>

          <div className="hero-animate mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#properties"
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm bg-[#D4AF6A] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#082714] shadow-lg transition-all duration-300 hover:bg-[#E5CA8C] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA8C]"
            >
              <span>Explore Properties</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-sm border border-[#FAF8F3]/35 bg-[#082714]/50 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FAF8F3] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF6A] hover:bg-[#0F3D21]/75 hover:text-[#E5CA8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
            >
              <MessageCircle className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
              <span>Talk to Our Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Anchor Cue */}
      <a
        href="#about"
        aria-label="Scroll to About GreenSky Homes"
        className="hero-animate absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#FAF8F3]/70 transition-colors hover:text-[#E5CA8C]"
      >
        <span>Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
