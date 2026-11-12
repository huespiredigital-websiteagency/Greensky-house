"use client";

import { useState } from "react";
import { GsapAnimations } from "@/components/GsapAnimations";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PropertiesSection } from "@/components/PropertiesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { LifestyleSection } from "@/components/LifestyleSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { EnquirySection, ENQUIRY_INTEREST_OPTIONS } from "@/components/EnquirySection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export function HomeClientShell() {
  const [selectedInterest, setSelectedInterest] = useState<string>(
    ENQUIRY_INTEREST_OPTIONS[0]
  );

  return (
    <GsapAnimations>
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <PropertiesSection onSelectPropertyForEnquiry={setSelectedInterest} />
        <WhyChooseSection />
        <LifestyleSection />
        <ServicesSection onSelectServiceForEnquiry={setSelectedInterest} />
        <TestimonialsSection />
        <FaqSection />
        <EnquirySection
          selectedInterest={selectedInterest}
          onInterestChange={setSelectedInterest}
        />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </GsapAnimations>
  );
}
