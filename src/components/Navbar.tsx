"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        mobileOpen
          ? "bg-[#061A0E] border-b border-[#D4AF6A]/20 py-3"
          : scrolled
            ? "bg-[#082714]/96 backdrop-blur-md border-b border-[#D4AF6A]/20 shadow-[0_10px_30px_-10px_rgba(4,20,10,0.45)] py-3"
            : "bg-gradient-to-b from-[#061A0E]/80 via-[#061A0E]/40 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand Identity (Original logo preserved without distortion) */}
        <a
          href="#home"
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] rounded-sm"
          aria-label="GreenSky Homes — Home"
        >
          <div className="relative h-12 w-12 sm:h-13 sm:w-13 shrink-0 overflow-hidden rounded-full ring-1 ring-[#D4AF6A]/55 bg-[#082714] transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src={SITE_CONFIG.logo.src}
              alt={SITE_CONFIG.logo.alt}
              fill
              sizes="52px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-[#FAF8F3]">
              {SITE_CONFIG.companyName}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF6A]">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
          {SITE_CONFIG.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium tracking-wide text-[#FAF8F3]/90 transition-colors duration-200 hover:text-[#E5CA8C] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#D4AF6A] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:text-[#E5CA8C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-[#D4AF6A] px-5 py-2.5 text-sm font-semibold tracking-wide text-[#082714] shadow-sm transition-all duration-300 hover:bg-[#E5CA8C] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#082714]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-sm border border-[#D4AF6A]/35 bg-[#082714]/70 text-[#FAF8F3] transition-colors hover:border-[#D4AF6A] hover:text-[#E5CA8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] z-40 bg-[#061A0E]/98 backdrop-blur-lg transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-3"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex h-full flex-col justify-between px-6 py-6 pb-[max(2rem,env(safe-area-inset-bottom))] overflow-y-auto"
        >
          <div className="flex flex-col divide-y divide-[#D4AF6A]/15 border-t border-b border-[#D4AF6A]/15">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[54px] items-center justify-between py-3.5 font-serif text-2xl text-[#FAF8F3] transition-colors hover:text-[#D4AF6A]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-5 w-5 text-[#D4AF6A]/70" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-[#D4AF6A] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#082714] transition-colors hover:bg-[#E5CA8C]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-center text-xs tracking-wider text-[#FAF8F3]/60">
              {SITE_CONFIG.companyName} · {SITE_CONFIG.tagline}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
