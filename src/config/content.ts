/**
 * Configurable homepage content collections for GreenSky Homes.
 * Properties, services, testimonials, and FAQs can be updated or extended here
 * without touching component code.
 */

export interface SampleProperty {
  id: string;
  title: string;
  location: string;
  propertyType: string;
  areaOrLayout: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  sampleNotice: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "compass" | "home" | "heartHandshake" | "shieldCheck";
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  attributionLabel: string;
  contextLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SAMPLE_PROPERTIES: SampleProperty[] = [
  {
    id: "canopy-garden-villa",
    title: "The Canopy Garden Villa",
    location: "Greenwood Enclave [Sample Location]",
    propertyType: "Private Garden Villa",
    areaOrLayout: "4 Bedrooms · Landscaped Courtyard",
    description:
      "A sunlit two-level residence framed by mature woodland trees, designed for calm indoor-outdoor living with generous natural ventilation.",
    highlights: [
      "Private landscaped front and rear garden terraces",
      "Floor-to-ceiling glazing overlooking mature tree canopy",
      "Warm limestone and natural timber architectural finishes",
      "Quiet residential street away from urban congestion",
    ],
    image: "/images/property-canopy-villa.jpg",
    imageAlt:
      "Contemporary two-story villa with warm stone facade surrounded by mature green trees and landscaped garden",
    sampleNotice: "Sample Listing — Replace with Live Inventory",
  },
  {
    id: "the-luma-residences",
    title: "The Luma Garden Residences",
    location: "Parkside Avenue [Sample Location]",
    propertyType: "Boutique Low-Rise Apartments",
    areaOrLayout: "2 & 3 Bedroom Residences · Planted Terraces",
    description:
      "Low-density apartment living featuring deep planted balconies, warm masonry proportions, and walkable tree-lined surroundings.",
    highlights: [
      "Deep wraparound terrace planters bringing greenery to every floor",
      "Warm sandstone and bronze architectural detailing",
      "Pedestrian-friendly landscaped promenade and courtyard",
      "Abundant daylight across dual-aspect living areas",
    ],
    image: "/images/property-emerald-residences.jpg",
    imageAlt:
      "Boutique mid-rise residential apartment building with lush planted balconies and tree-lined stone walkway",
    sampleNotice: "Sample Listing — Replace with Live Inventory",
  },
  {
    id: "meadow-pavilion-estate",
    title: "Meadow Pavilion Residence",
    location: "Oakridge Meadow [Sample Location]",
    propertyType: "Contemporary Pavilion Home",
    areaOrLayout: "3 Bedrooms · Open Meadow Lawn",
    description:
      "Single-level architectural clarity with cantilevered cedar eaves, a natural stone hearth, and uninterrupted views across manicured green lawns.",
    highlights: [
      "Seamless single-level living oriented toward morning and evening light",
      "Deep timber roof overhangs providing natural passive shading",
      "Expansive open-plan living and dining pavilion",
      "Stepping-stone garden paths surrounded by native foliage",
    ],
    image: "/images/property-meadow-pavilion.jpg",
    imageAlt:
      "Contemporary timber and stone pavilion residence at twilight overlooking a lush green lawn and mature trees",
    sampleNotice: "Sample Listing — Replace with Live Inventory",
  },
];

export const WHY_CHOOSE_BENEFITS: BenefitItem[] = [
  {
    id: "trusted-guidance",
    title: "Trusted Guidance",
    description:
      "Clear, thoughtful advice at every stage of your property search—built on honesty rather than sales pressure.",
    iconName: "compass",
  },
  {
    id: "carefully-selected",
    title: "Carefully Selected Properties",
    description:
      "Every home we present is evaluated for location quality, natural light, surroundings, and lasting livability.",
    iconName: "home",
  },
  {
    id: "customer-focused",
    title: "Customer-Focused Approach",
    description:
      "We listen first to how you want to live, tailoring recommendations around your household, pace, and priorities.",
    iconName: "heartHandshake",
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description:
      "Straightforward communication on availability, site visits, and next steps so you can decide with complete clarity.",
    iconName: "shieldCheck",
  },
];

/**
 * Configurable real estate services offered by GreenSky Homes.
 * Additional services can be added to this array as business offerings expand.
 */
export const SERVICES: ServiceItem[] = [
  {
    id: "property-advisory",
    title: "Personalised Property Advisory",
    subtitle: "Discovery & Shortlisting",
    description:
      "One-on-one consultations to understand your lifestyle goals, preferred neighborhoods, and budget—helping you focus only on residences that genuinely fit.",
    ctaLabel: "Request Advisory",
    image: "/images/service-advisory.jpg",
    imageAlt:
      "Calm sunlit contemporary living room with floor-to-ceiling windows framing green trees",
  },
  {
    id: "guided-site-visits",
    title: "Curated Site Visits",
    subtitle: "Private Walkthroughs",
    description:
      "Coordinated, unhurried property viewings where you can experience natural light, neighborhood serenity, and architectural quality in person.",
    ctaLabel: "Schedule a Visit",
    image: "/images/service-site-visits.jpg",
    imageAlt:
      "Shaded modern home veranda with stone paving, timber pergola, and lush garden greenery",
  },
  {
    id: "buyer-support",
    title: "Enquiry & Buyer Assistance",
    subtitle: "Clear Next Steps",
    description:
      "Dedicated coordination from your initial property enquiry through developer or seller communication, keeping every detail clear and organized.",
    ctaLabel: "Speak With Us",
    image: "/images/service-documentation.jpg",
    imageAlt:
      "Serene contemporary home study corner with walnut shelving, limestone console, and garden window",
  },
];

/**
 * Placeholder testimonial entries.
 * Clearly marked for replacement with verified client feedback once available.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "placeholder-1",
    quote:
      "Sample placeholder quote: Replace this block with verified feedback from a GreenSky Homes buyer reflecting their experience with property selection and communication.",
    attributionLabel: "Verified Buyer Name [Placeholder 01]",
    contextLabel: "Residential Home Enquiry · Sample Testimonial",
  },
  {
    id: "placeholder-2",
    quote:
      "Sample placeholder quote: Highlight how clear guidance, unhurried site visits, and transparent follow-through helped a family choose the right residence.",
    attributionLabel: "Verified Buyer Name [Placeholder 02]",
    contextLabel: "Villa Viewing · Sample Testimonial",
  },
  {
    id: "placeholder-3",
    quote:
      "Sample placeholder quote: Share an authentic client perspective on finding a peaceful, green-surroundings home with responsive support from the team.",
    attributionLabel: "Verified Buyer Name [Placeholder 03]",
    contextLabel: "Property Consultation · Sample Testimonial",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-enquire",
    question: "How can I enquire about a property?",
    answer:
      "You can submit the enquiry form in the Contact Us section below, select 'View Details' on any featured residence to pre-fill an enquiry, or message our team directly using the WhatsApp button available on every page.",
  },
  {
    id: "faq-visit",
    question: "How do I schedule a property visit?",
    answer:
      "Let us know which property or neighborhood interests you along with your preferred dates and times via our enquiry form or WhatsApp. Our team will coordinate a private walkthrough at a time that works for you.",
  },
  {
    id: "faq-assistance",
    question: "Can I get assistance choosing a property?",
    answer:
      "Yes. Through our Personalised Property Advisory service, we take time to understand your space requirements, preferred environment, and timeline so we can recommend thoughtfully suited options.",
  },
  {
    id: "faq-contact",
    question: "How can I contact GreenSky Homes?",
    answer:
      "You can reach us directly through the contact details listed in our Contact section and footer, send an enquiry online anytime, or start an immediate conversation with our team via WhatsApp.",
  },
  {
    id: "faq-transparency",
    question: "What can I expect during the enquiry process?",
    answer:
      "We prioritise clear, prompt communication without high-pressure follow-ups. We share straightforward property details, arrange viewings transparently, and answer your questions honestly before you take any next step.",
  },
];
