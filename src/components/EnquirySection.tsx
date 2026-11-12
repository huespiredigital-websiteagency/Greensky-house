"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SAMPLE_PROPERTIES, SERVICES } from "@/config/content";

interface EnquirySectionProps {
  selectedInterest: string;
  onInterestChange: (value: string) => void;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

type FormField = keyof FormState | "propertyInterest";

type SubmissionStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "unconfigured"; message: string; whatsappMessage: string }
  | { state: "error"; message: string };

export const ENQUIRY_INTEREST_OPTIONS = [
  "General Property Enquiry",
  ...SAMPLE_PROPERTIES.map((p) => `${p.title} (Sample Listing)`),
  ...SERVICES.map((s) => s.title),
  "Schedule a Private Site Visit",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquirySection({
  selectedInterest,
  onInterestChange,
}: EnquirySectionProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({});
  const [status, setStatus] = useState<SubmissionStatus>({ state: "idle" });

  const matchedInterest =
    ENQUIRY_INTEREST_OPTIONS.find((opt) =>
      opt.toLowerCase().includes(selectedInterest.toLowerCase())
    ) ?? selectedInterest;

  const validateClient = (): boolean => {
    const nextErrors: Partial<Record<FormField, string>> = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (form.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Please enter a valid contact phone number.";
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!matchedInterest.trim()) {
      nextErrors.propertyInterest = "Please choose an area of interest.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message =
        "Please share a few details about what you are looking for (10+ characters).";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateClient()) {
      setStatus({
        state: "error",
        message: "Please check the highlighted fields before submitting.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const response = await fetch(SITE_CONFIG.integration.enquiryApiRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          propertyInterest: matchedInterest,
        }),
      });

      const data = (await response.json()) as {
        ok: boolean;
        mode?: string;
        message?: string;
        fieldErrors?: Partial<Record<FormField, string>>;
      };

      if (data.fieldErrors) {
        setErrors(data.fieldErrors);
      }

      if (response.ok && data.ok) {
        setStatus({
          state: "success",
          message:
            data.message ??
            "Thank you. Your enquiry has been received by GreenSky Homes.",
        });
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        onInterestChange(ENQUIRY_INTEREST_OPTIONS[0]);
        setErrors({});
        return;
      }

      if (data.mode === "unconfigured") {
        const composedWhatsApp = `Hello GreenSky Homes,\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterest: ${matchedInterest}\nMessage: ${form.message}`;
        setStatus({
          state: "unconfigured",
          message:
            data.message ??
            "No backend webhook is connected yet. Connect ENQUIRY_WEBHOOK_URL or continue via WhatsApp.",
          whatsappMessage: composedWhatsApp,
        });
        return;
      }

      setStatus({
        state: "error",
        message:
          data.message ??
          "We could not submit your enquiry right now. Please try again or reach us on WhatsApp.",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "Network error while sending your enquiry. Please verify your connection or use WhatsApp.",
      });
    }
  };

  const inputBaseClass =
    "mt-2 w-full rounded-sm border bg-[#FAF8F3] px-4 py-3 text-base sm:text-sm text-[#17221B] placeholder:text-[#4A594F]/60 transition-colors focus:border-[#0F3D21] focus:outline-none focus:ring-2 focus:ring-[#D4AF6A]/40";

  return (
    <section
      id="contact"
      className="bg-[#F2EFE6] py-16 sm:py-24 lg:py-32 text-[#17221B]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & WhatsApp CTA */}
          <div className="reveal-up lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#B38E4D]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F3D21]">
                Get in Touch
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#082714]">
              Speak With Our Property Team
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4A594F]">
              Whether you are exploring residences, scheduling a site visit, or
              seeking guidance on where to begin, we are ready to help.
            </p>

            <div className="mt-8 space-y-5 border-t border-[#082714]/12 pt-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#082714] text-[#D4AF6A]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A594F]">
                    Phone
                  </p>
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="inline-flex min-h-[44px] items-center text-sm font-semibold text-[#082714] hover:text-[#B38E4D]"
                  >
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#082714] text-[#D4AF6A]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A594F]">
                    Email
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#082714]">
                    {SITE_CONFIG.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#082714] text-[#D4AF6A]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A594F]">
                    Office
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-[#082714]">
                    {SITE_CONFIG.contact.officeAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#082714] text-[#D4AF6A]">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4A594F]">
                    Hours
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-[#082714]">
                    {SITE_CONFIG.contact.officeHours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-sm border border-[#082714]/15 bg-[#FAF8F3] p-6">
              <p className="font-serif text-lg font-medium text-[#082714]">
                Prefer an instant conversation?
              </p>
              <p className="mt-1.5 text-sm text-[#4A594F]">
                Connect directly with our team on WhatsApp for quick availability
                questions or visit coordination.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-[#082714] px-5 py-3 text-sm font-semibold text-[#FAF8F3] transition-colors hover:bg-[#0F3D21]"
              >
                <MessageCircle
                  className="h-4 w-4 text-[#D4AF6A]"
                  aria-hidden="true"
                />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="reveal-up lg:col-span-7">
            <div className="rounded-sm border border-[#082714]/15 bg-[#FAF8F3] p-7 sm:p-10 shadow-[0_24px_60px_-24px_rgba(8,39,20,0.16)]">
              <h3 className="font-serif text-2xl font-medium text-[#082714]">
                Send an Enquiry
              </h3>
              <p className="mt-1.5 text-sm text-[#4A594F]">
                Share your contact details and property preferences below.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#082714]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      type="text"
                      suppressHydrationWarning
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`${inputBaseClass} ${
                        errors.name ? "border-red-600" : "border-[#082714]/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-700">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#082714]"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      suppressHydrationWarning
                      required
                      autoComplete="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone)
                          setErrors({ ...errors, phone: undefined });
                      }}
                      className={`${inputBaseClass} ${
                        errors.phone ? "border-red-600" : "border-[#082714]/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#082714]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      suppressHydrationWarning
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email)
                          setErrors({ ...errors, email: undefined });
                      }}
                      className={`${inputBaseClass} ${
                        errors.email ? "border-red-600" : "border-[#082714]/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-interest"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#082714]"
                    >
                      Property Interest *
                    </label>
                    <select
                      id="enquiry-interest"
                      name="propertyInterest"
                      suppressHydrationWarning
                      value={matchedInterest}
                      onChange={(e) => {
                        onInterestChange(e.target.value);
                        if (errors.propertyInterest)
                          setErrors({ ...errors, propertyInterest: undefined });
                      }}
                      className={`${inputBaseClass} ${
                        errors.propertyInterest
                          ? "border-red-600"
                          : "border-[#082714]/20"
                      }`}
                    >
                      {ENQUIRY_INTEREST_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                      {!ENQUIRY_INTEREST_OPTIONS.includes(matchedInterest) && (
                        <option value={matchedInterest}>
                          {matchedInterest}
                        </option>
                      )}
                    </select>
                    {errors.propertyInterest && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {errors.propertyInterest}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#082714]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={4}
                    suppressHydrationWarning
                    required
                    placeholder="Tell us about the type of residence, location, or visit schedule you have in mind..."
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    className={`${inputBaseClass} resize-y ${
                      errors.message ? "border-red-600" : "border-[#082714]/20"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Banners */}
                {status.state === "success" && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-sm border border-[#0F3D21]/30 bg-[#0F3D21]/10 p-4 text-sm text-[#082714]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0F3D21]"
                      aria-hidden="true"
                    />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.state === "unconfigured" && (
                  <div
                    role="status"
                    className="space-y-3 rounded-sm border border-[#B38E4D]/50 bg-[#D4AF6A]/15 p-4 text-sm text-[#082714]"
                  >
                    <div className="flex items-start gap-3">
                      <Info
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#8F6E32]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold">
                          Backend Integration Point Ready
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#4A594F]">
                          {status.message}
                        </p>
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl(status.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-[#082714] px-4 py-2 text-xs font-semibold text-[#FAF8F3] hover:bg-[#0F3D21]"
                    >
                      <MessageCircle
                        className="h-3.5 w-3.5 text-[#D4AF6A]"
                        aria-hidden="true"
                      />
                      <span>Send These Details via WhatsApp</span>
                    </a>
                  </div>
                )}

                {status.state === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-sm border border-red-300 bg-red-50 p-4 text-sm text-red-800"
                  >
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-700"
                      aria-hidden="true"
                    />
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[#4A594F]">
                    Integration route:{" "}
                    <code className="font-mono text-[11px] text-[#0F3D21]">
                      /api/enquiry
                    </code>{" "}
                    (configured in{" "}
                    <code className="font-mono text-[11px] text-[#0F3D21]">
                      src/config/site.ts
                    </code>
                    ).
                  </p>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={status.state === "submitting"}
                    className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-[#D4AF6A] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#082714] transition-all duration-300 hover:bg-[#E5CA8C] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082714]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {status.state === "submitting"
                        ? "Validating..."
                        : "Submit Enquiry"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
