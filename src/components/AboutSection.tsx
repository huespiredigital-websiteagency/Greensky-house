import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    label: "Thoughtful Selection",
    detail: "Residences chosen for natural light, greenery, and livability.",
  },
  {
    label: "Honest Advisory",
    detail: "Clear communication without pressure or overstated claims.",
  },
  {
    label: "Nature Connection",
    detail: "Calm residential settings where everyday life feels grounded.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#FAF8F3] py-16 sm:py-24 lg:py-32 text-[#17221B]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Architectural Courtyard Photography */}
          <div className="reveal-up lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 hidden sm:block h-full w-full rounded-sm border border-[#D4AF6A]/45"
                aria-hidden="true"
              />
              <div className="image-reveal relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#E7E2D6] shadow-[0_24px_60px_-20px_rgba(8,39,20,0.22)]">
                <Image
                  src="/images/about-courtyard.jpg"
                  alt="Modern residential pavilion opening onto a sunlit stone courtyard and lush green garden"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Editorial Narrative */}
          <div className="reveal-up lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#B38E4D]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F3D21]">
                About GreenSky Homes
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.15] text-[#082714]">
              More Than Just a Place to Live.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-[1.05rem] leading-relaxed text-[#4A594F]">
              <p>
                GreenSky Homes is built around a straightforward belief: choosing
                a home should feel calm, informed, and genuinely rewarding. We
                help buyers discover modern residential properties surrounded by
                greenery, light, and thoughtful neighborhood design.
              </p>
              <p>
                Rather than overwhelming you with endless listings, our focus is
                on quality over volume—guiding you toward residences that align
                with how you live today and how you want to grow tomorrow.
              </p>
            </div>

            {/* Subtle Editorial Pillars */}
            <div className="mt-9 grid grid-cols-1 gap-5 border-t border-[#082714]/12 pt-8 sm:grid-cols-3">
              {PILLARS.map((pillar) => (
                <div key={pillar.label}>
                  <h3 className="font-serif text-base font-semibold text-[#082714]">
                    {pillar.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4A594F]">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#082714] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FAF8F3] transition-all duration-300 hover:bg-[#0F3D21] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082714]"
              >
                <span>Connect With Our Advisors</span>
                <ArrowRight className="h-4 w-4 text-[#D4AF6A]" aria-hidden="true" />
              </a>
              <a
                href="#why-choose-us"
                className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold tracking-wide text-[#082714] underline decoration-[#D4AF6A] decoration-2 underline-offset-8 transition-colors hover:text-[#0F3D21]"
              >
                Why Choose Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
