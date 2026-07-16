import Hero from "../components/pages/arrangement/Hero";
import Section1 from "../components/pages/arrangement/Section1";
import Section2 from "../components/pages/arrangement/Section2";
import { faqItems } from "../components/pages/arrangement/faqData";
import BeforeAfterArrangement from "../components/sections/BeforeAfterArrangement";

export const metadata = {
  title: "Online Music Arrangement & Production",
  alternates: {
    canonical: "https://www.slstudio.pro/arrangement",
    languages: {
      en: "https://www.slstudio.pro/arrangement",
      pl: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
      "x-default": "https://www.slstudio.pro/arrangement",
    },
  },
  description:
    "Professional online music arrangement and production from $110. Turn a voice memo, guitar riff, MIDI sketch or rehearsal recording into a complete release-ready track.",
  openGraph: {
    title: "Online Music Arrangement & Production | SL Studio",
    description:
      "From a voice memo or rough demo to a complete production. Hear a free preview before booking the full project.",
    type: "website",
    url: "https://www.slstudio.pro/arrangement",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-03.webp",
        alt: "Serhii Lazariev — music arrangement and production at SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Music Arrangement & Production | SL Studio",
    description:
      "Turn a rough musical idea into a complete, release-ready track — with a free preview before you book.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-03.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Music Arrangement and Production",
  description:
    "Professional music arrangement and production from a voice memo, riff, demo or rehearsal recording to a complete track.",
  url: "https://www.slstudio.pro/arrangement",
  image: "https://www.slstudio.pro/images/Serhii-Lazariev-03.webp",
  serviceType: "Music arrangement and production",
  areaServed: ["Warsaw", "Poland", "Worldwide"],
  provider: {
    "@type": "ProfessionalService",
    name: "SL Studio",
    url: "https://www.slstudio.pro/",
    email: "serhii@slstudio.pro",
    founder: { "@type": "Person", name: "Serhii Lazariev" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warsaw",
      addressCountry: "PL",
    },
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "110",
    description: "Music arrangement and production from $110 per track",
    itemOffered: {
      "@type": "Service",
      name: "Music arrangement and production",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ArrangementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <BeforeAfterArrangement />
      <Section1 />
      <Section2 />
    </>
  );
}
