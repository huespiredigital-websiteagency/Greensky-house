import { Compass, Home, HeartHandshake, ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_BENEFITS, type BenefitItem } from "@/config/content";

const ICON_MAP: Record<BenefitItem["iconName"], typeof Compass> = {
  compass: Compass,
  home: Home,
  heartHandshake: HeartHandshake,
  shieldCheck: ShieldCheck,
};

export function WhyChooseSection() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-[#082714] py-16 sm:py-24 lg:py-32 text-[#FAF8F3]"
    >
      {/* Subtle Architectural Hairline Top Divider */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF6A]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal-up mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E5CA8C]">
              The GreenSky Standard
            </span>
            <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-medium leading-[1.15] text-[#FAF8F3]">
            Why Choose GreenSky Homes?
          </h2>
          <p className="mt-4 text-base text-[#FAF8F3]/75">
            Every recommendation is grounded in clarity, personal attention, and
            a genuine commitment to how a home feels to live in.
          </p>
        </div>

        <div className="stagger-grid mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_BENEFITS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <div
                key={item.id}
                className="stagger-card group relative flex flex-col rounded-sm border border-[#D4AF6A]/22 bg-[#0F3D21]/45 p-5 sm:p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[#D4AF6A]/65 hover:bg-[#0F3D21]/80"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-[#D4AF6A]/35 bg-[#082714] text-[#D4AF6A] transition-colors duration-300 group-hover:bg-[#D4AF6A] group-hover:text-[#082714]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className="font-serif text-sm tracking-widest text-[#D4AF6A]/60">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium text-[#FAF8F3]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#FAF8F3]/75">
                  {item.description}
                </p>

                <div
                  className="mt-6 h-[1px] w-10 bg-[#D4AF6A]/35 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D4AF6A]"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
