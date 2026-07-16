import Hero from "../components/pages/mixing-mastering/Hero";
import Section1 from "../components/pages/mixing-mastering/Section1";
import Section2 from "../components/pages/mixing-mastering/Section2";
import { faqItems } from "../components/pages/mixing-mastering/faqData";
import BeforeAfterMixing from "../components/sections/BeforeAfterMixing";

export const metadata = {
  title: "Online Mixing & Mastering Services",
  alternates: {
    canonical: "https://www.slstudio.pro/mixing-mastering",
    languages: {
      en: "https://www.slstudio.pro/mixing-mastering",
      pl: "https://www.slstudio.pro/pl/miks-i-mastering",
      "x-default": "https://www.slstudio.pro/mixing-mastering",
    },
  },
  description:
    "Professional online mixing and mastering with a free preview. Vocals, guitars, drums and bass balanced for clarity, depth and release-ready sound. Based in Warsaw, working worldwide.",
  keywords: [
    "online mixing and mastering services",
    "professional mixing engineer",
    "music mastering service",
    "vocal mixing",
    "guitar mixing",
    "mixing mastering Warsaw",
    "remote mixing service",
  ],
  openGraph: {
    title: "Online Mixing & Mastering Services | SL Studio",
    description:
      "Send your stems or rough mix and hear a free processed preview before booking the full job.",
    type: "website",
    url: "https://www.slstudio.pro/mixing-mastering",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
        alt: "Serhii Lazariev — mixing and mastering engineer at SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Mixing & Mastering Services | SL Studio",
    description:
      "Professional mixing and mastering focused on clarity, depth and emotion — with a free preview before you book.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-02.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Mixing & Mastering",
  description:
    "Professional online mixing and mastering with a free preview, based in Warsaw and available worldwide.",
  url: "https://www.slstudio.pro/mixing-mastering",
  image: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
  serviceType: "Music mixing and mastering",
  areaServed: ["Warsaw", "Poland", "Worldwide"],
  provider: {
    "@type": "ProfessionalService",
    name: "SL Studio",
    url: "https://www.slstudio.pro/",
    email: "serhii@slstudio.pro",
    founder: {
      "@type": "Person",
      name: "Serhii Lazariev",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warsaw",
      addressCountry: "PL",
    },
    sameAs: [
      "https://www.youtube.com/@SLStudio_Guitar",
      "https://www.instagram.com/lazarev_serhii_sl",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Audio services",
    itemListElement: [
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "25",
        description: "Mastering only, from $25 per track",
        itemOffered: {
          "@type": "Service",
          name: "Music mastering",
        },
      },
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "60",
        description: "Mixing and mastering, from $60 per track",
        itemOffered: {
          "@type": "Service",
          name: "Music mixing and mastering",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function MixingMasteringPage() {
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
      <BeforeAfterMixing />
      <Section1 />
      <Section2 />
    </>
  );
}
