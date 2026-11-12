import Image from "next/image";
import { Leaf, Sun, TreePine } from "lucide-react";

const LIFESTYLE_NOTES = [
  {
    icon: TreePine,
    title: "Tree-Canopied Neighbourhoods",
    text: "Quiet, leafy surroundings that bring restorative calm to daily routines.",
  },
  {
    icon: Sun,
    title: "Light & Ventilation",
    text: "Modern architectural proportions designed around daylight and open air.",
  },
  {
    icon: Leaf,
    title: "Balanced Living",
    text: "Spaces that connect indoor comfort with landscaped outdoor sanctuaries.",
  },
];

export function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="relative overflow-hidden bg-[#061A0E] py-16 sm:py-28 lg:py-36 text-[#FAF8F3]"
    >
      {/* Background Architectural Landscape Photography */}
      <div className="image-parallax absolute inset-0">
        <Image
          src="/images/lifestyle-sanctuary.jpg"
          alt="Peaceful stone walkway through lush mature trees and contemporary low-slung residences in dappled morning sunlight"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061A0E]/82 via-[#082714]/72 to-[#061A0E]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[#E5CA8C]">
              Brand Philosophy
            </span>
            <span className="h-[1px] w-8 bg-[#D4AF6A]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-[#FAF8F3]">
            Live Green. <span className="italic text-[#E5CA8C]">Live Better.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#FAF8F3]/85">
            True comfort begins outside your front door. When architecture
            respects natural light, mature greenery, and peaceful open spaces,
            home becomes a place where you genuinely breathe easier.
          </p>
        </div>

        <div className="stagger-grid mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {LIFESTYLE_NOTES.map((note) => {
            const Icon = note.icon;
            return (
              <div
                key={note.title}
                className="stagger-card rounded-sm border border-[#D4AF6A]/30 bg-[#061A0E]/75 p-5 sm:p-7 backdrop-blur-sm"
              >
                <Icon
                  className="h-5 w-5 text-[#D4AF6A]"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-serif text-xl font-medium text-[#FAF8F3]">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAF8F3]/75">
                  {note.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
