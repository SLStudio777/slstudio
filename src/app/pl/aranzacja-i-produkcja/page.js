import Hero from "../../components/pages/pl-aranzacja-i-produkcja/Hero";
import Section1 from "../../components/pages/pl-aranzacja-i-produkcja/Section1";
import Section2 from "../../components/pages/pl-aranzacja-i-produkcja/Section2";
import BeforeAfterArrangementPl from "../../components/sections/BeforeAfterArrangementPl";

export const metadata = {
  title: "Aranżacja i produkcja muzyczna online",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
    languages: {
      pl: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
      en: "https://www.slstudio.pro/arrangement",
      "x-default": "https://www.slstudio.pro/arrangement",
    },
  },
  description:
    "Profesjonalna aranżacja i produkcja muzyczna online od 119 USD. Zamieniam notatkę głosową, riff, szkic MIDI lub nagranie z próby w kompletny utwór gotowy do publikacji.",
  openGraph: {
    title: "Aranżacja i produkcja muzyczna online | SL Studio",
    description:
      "Od notatki głosowej lub surowego demo do kompletnej produkcji. Najpierw usłyszysz bezpłatny fragment lub koncepcję.",
    type: "website",
    url: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
    locale: "pl_PL",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-03.webp",
        alt: "Serhii Lazariev — aranżacja i produkcja muzyczna w SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aranżacja i produkcja muzyczna online | SL Studio",
    description:
      "Zamień surowy pomysł w kompletny utwór — najpierw bezpłatnie sprawdź kierunek.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-03.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aranżacja i produkcja muzyczna online",
  description:
    "Profesjonalna aranżacja i produkcja od notatki głosowej, riffu lub demo do kompletnego utworu.",
  url: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
  image: "https://www.slstudio.pro/images/Serhii-Lazariev-03.webp",
  serviceType: "Aranżacja i produkcja muzyczna",
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
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "119",
    description: "Aranżacja i produkcja muzyczna od 119 USD za utwór",
    itemOffered: { "@type": "Service", name: "Aranżacja i produkcja muzyczna" },
  },
};


export default function AranzacjaIProdukcjaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
      <BeforeAfterArrangementPl />
      <Section1 />
      <Section2 />
    </>
  );
}
