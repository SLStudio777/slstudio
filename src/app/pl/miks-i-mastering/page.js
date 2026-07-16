import Hero from "../../components/pages/pl-miks-i-mastering/Hero";
import Section1 from "../../components/pages/pl-miks-i-mastering/Section1";
import Section2 from "../../components/pages/pl-miks-i-mastering/Section2";
import { faqItems } from "../../components/pages/pl-miks-i-mastering/faqData";
import BeforeAfterMixingPl from "../../components/sections/BeforeAfterMixingPl";

export const metadata = {
  title: "Miks i mastering online",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/miks-i-mastering",
    languages: {
      pl: "https://www.slstudio.pro/pl/miks-i-mastering",
      en: "https://www.slstudio.pro/mixing-mastering",
      "x-default": "https://www.slstudio.pro/mixing-mastering",
    },
  },
  description:
    "Profesjonalny miks i mastering online z bezpłatnym fragmentem przed zamówieniem. Klarowne wokale, kontrolowany dół i brzmienie gotowe do publikacji. Warszawa i cała Polska.",
  openGraph: {
    title: "Miks i mastering online | SL Studio",
    description:
      "Wyślij ślady lub roboczy miks i najpierw usłysz bezpłatny, obrobiony fragment własnego utworu.",
    type: "website",
    url: "https://www.slstudio.pro/pl/miks-i-mastering",
    locale: "pl_PL",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
        alt: "Serhii Lazariev — miks i mastering w SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miks i mastering online | SL Studio",
    description:
      "Profesjonalny miks i mastering z bezpłatnym fragmentem przed zamówieniem.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-02.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Miks i mastering online",
  description:
    "Profesjonalny miks i mastering online z bezpłatnym fragmentem przed rozpoczęciem pełnej realizacji.",
  url: "https://www.slstudio.pro/pl/miks-i-mastering",
  image: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
  serviceType: "Miks i mastering muzyki",
  areaServed: ["Warszawa", "Polska", "Cały świat"],
  provider: {
    "@type": "ProfessionalService",
    name: "SL Studio",
    url: "https://www.slstudio.pro/",
    email: "serhii@slstudio.pro",
    founder: { "@type": "Person", name: "Serhii Lazariev" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warszawa",
      addressCountry: "PL",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi audio",
    itemListElement: [
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "25",
        description: "Mastering od 25 USD za utwór",
        itemOffered: { "@type": "Service", name: "Mastering utworu" },
      },
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "60",
        description: "Miks i mastering od 60 USD za utwór",
        itemOffered: { "@type": "Service", name: "Miks i mastering utworu" },
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
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function MiksIMasteringPage() {
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
      <BeforeAfterMixingPl />
      <Section1 />
      <Section2 />
    </>
  );
}
