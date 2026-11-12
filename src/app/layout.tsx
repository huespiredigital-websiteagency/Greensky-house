import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#082714",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: `${SITE_CONFIG.companyName} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.companyName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "GreenSky Homes",
    "Live Green Live Better",
    "premium real estate",
    "modern residential properties",
    "luxury villas",
    "nature-inspired living",
    "property advisory",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.companyName,
    title: `${SITE_CONFIG.companyName} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/hero-residence.jpg",
        width: 1600,
        height: 900,
        alt: "GreenSky Homes — Contemporary residence surrounded by lush greenery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.companyName} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/images/hero-residence.jpg"],
  },
  icons: {
    icon: "/images/greensky-logo.jpg",
    apple: "/images/greensky-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#17221B] font-sans">
        {children}
      </body>
    </html>
  );
}
