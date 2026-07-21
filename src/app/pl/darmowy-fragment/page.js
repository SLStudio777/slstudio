import Hero from "../../components/pages/pl-darmowy-fragment/Hero";

export const metadata = {
  title: "Bezpłatny fragment miksu i masteringu",
  alternates: {
    canonical: "https://www.slstudio.pro/pl/darmowy-fragment",
    languages: {
      pl: "https://www.slstudio.pro/pl/darmowy-fragment",
      en: "https://www.slstudio.pro/free-track-preview",
      "x-default": "https://www.slstudio.pro/free-track-preview",
    },
  },
  description:
    "Wyślij swój utwór i odbierz bezpłatny fragment miksu lub masteringu trwający 30–60 sekund. Bez karty, bez konta i bez zobowiązań. Dema, stemy i nagrania z telefonu są mile widziane.",
  openGraph: {
    title: "Bezpłatny fragment miksu i masteringu | SL Studio",
    description:
      "Najpierw usłysz własny utwór po obróbce, a dopiero później zdecyduj o pełnej realizacji.",
    type: "website",
    url: "https://www.slstudio.pro/pl/darmowy-fragment",
    locale: "pl_PL",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
        alt: "Bezpłatny fragment miksu i masteringu w SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bezpłatny fragment miksu i masteringu | SL Studio",
    description:
      "Usłysz 30–60 sekund własnego utworu po obróbce — bez karty i bez zobowiązań.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-02.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bezpłatny fragment miksu i masteringu",
  description:
    "Bezpłatny fragment własnego utworu po obróbce, wraz z uczciwą oceną i dokładną wyceną pełnej realizacji.",
  url: "https://www.slstudio.pro/pl/darmowy-fragment",
  serviceType: "Bezpłatny fragment miksu i masteringu",
  areaServed: ["Warszawa", "Polska", "Cały świat"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
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
};

export default function DarmowyFragmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Hero />
    </>
  );
}
