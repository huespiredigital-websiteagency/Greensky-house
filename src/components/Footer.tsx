import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#061A0E] text-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-24 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-[#D4AF6A]/50 bg-[#082714]">
                <Image
                  src={SITE_CONFIG.logo.src}
                  alt={SITE_CONFIG.logo.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-2xl font-medium text-[#FAF8F3]">
                  {SITE_CONFIG.companyName}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.22em] text-[#D4AF6A]">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#FAF8F3]/70">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF6A]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-[#FAF8F3]/80">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#E5CA8C]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="inline-flex min-h-[44px] items-center transition-colors hover:text-[#E5CA8C]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF6A]">
              Contact Details
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-[#FAF8F3]/80">
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-[#D4AF6A]"
                  aria-hidden="true"
                />
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="inline-flex min-h-[44px] items-center hover:text-[#E5CA8C]"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF6A]"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF6A]"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.contact.officeAddress}</span>
              </li>
            </ul>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F3]/55">
                Connect
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {SITE_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.handle}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-[#D4AF6A]/25 px-3.5 py-2 text-xs text-[#FAF8F3]/80 transition-colors hover:border-[#D4AF6A] hover:text-[#E5CA8C]"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#D4AF6A]/18 pt-8 text-xs text-[#FAF8F3]/55 sm:flex-row sm:items-center">
          <p>
            &copy; 2026 {SITE_CONFIG.companyName}. All rights reserved.
          </p>
          <p className="tracking-wide text-[#D4AF6A]/80">
            {SITE_CONFIG.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
