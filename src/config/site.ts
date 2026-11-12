/**
 * Central site configuration for GreenSky Homes.
 * Update contact numbers, email addresses, WhatsApp settings, office location,
 * social URLs, and enquiry integration endpoints here.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  handle: string;
}

export const SITE_CONFIG = {
  companyName: "GreenSky Homes",
  tagline: "Live Green, Live Better",
  description:
    "Discover thoughtfully selected properties and better opportunities for modern, nature-connected living with GreenSky Homes.",
  logo: {
    src: "/images/greensky-logo.jpg",
    alt: "GreenSky Homes — Live Green, Live Better",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Properties", href: "#properties" },
    { label: "Our Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ] as NavItem[],
  contact: {
    // Replace these placeholders with verified GreenSky Homes contact details
    phoneDisplay: "+1 (555) 014-8920 [Placeholder]",
    phoneHref: "tel:+15550148920",
    email: "hello@greenskyhomes.example [Placeholder]",
    officeAddress: "Suite 200, Botanical Avenue [Address Placeholder]",
    officeHours: "Mon – Sat, 9:30 AM – 6:30 PM",
    whatsappNumber: "15550148920", // Country code + number, digits only (placeholder)
    whatsappDefaultMessage:
      "Hello GreenSky Homes team, I would like to enquire about your residential properties and advisory services.",
  },
  integration: {
    /**
     * Form submission endpoint.
     * By default points to `/api/enquiry`, which checks `process.env.ENQUIRY_WEBHOOK_URL`
     * on the server. Set `ENQUIRY_WEBHOOK_URL` in `.env.local` to connect your CRM,
     * Formspree, Resend, or custom backend webhook.
     */
    enquiryApiRoute: "/api/enquiry",
    webhookEnvVarName: "ENQUIRY_WEBHOOK_URL",
  },
  socialLinks: [
    { name: "Instagram", href: "#contact", handle: "@greenskyhomes (placeholder)" },
    { name: "LinkedIn", href: "#contact", handle: "GreenSky Homes (placeholder)" },
    { name: "Facebook", href: "#contact", handle: "GreenSky Homes (placeholder)" },
  ] as SocialLink[],
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage ?? SITE_CONFIG.contact.whatsappDefaultMessage;
  const number = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
