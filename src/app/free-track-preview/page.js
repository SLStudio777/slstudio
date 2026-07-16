import Hero from "../components/pages/free-track-preview/Hero";
import { faqItems } from "../components/pages/free-track-preview/faqData";

export const metadata = {
  title: "Free Mixing & Mastering Preview",
  alternates: {
    canonical: "https://www.slstudio.pro/free-track-preview",
    languages: {
      en: "https://www.slstudio.pro/free-track-preview",
      pl: "https://www.slstudio.pro/pl/darmowy-fragment",
      "x-default": "https://www.slstudio.pro/free-track-preview",
    },
  },
  description:
    "Send your track and receive a free 30–60 second mixing or mastering preview before paying anything. Rough demos, phone recordings and stems are welcome. No card and no obligation.",
  keywords: [
    "free mixing preview",
    "free mastering preview",
    "free track preview",
    "send your track for mixing",
    "free mix demo",
    "mixing mastering Warsaw",
  ],
  openGraph: {
    title: "Free Mixing & Mastering Preview | SL Studio",
    description:
      "Send your track and hear a free processed preview before you book the full job. No card and no obligation.",
    type: "website",
    url: "https://www.slstudio.pro/free-track-preview",
    images: [
      {
        url: "https://www.slstudio.pro/images/Serhii-Lazariev-02.webp",
        alt: "Free track preview from SL Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mixing & Mastering Preview | SL Studio",
    description:
      "Hear a free 30–60 second processed preview of your own track before deciding anything.",
    images: ["https://www.slstudio.pro/images/Serhii-Lazariev-02.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Mixing and Mastering Preview",
  description:
    "A free 30–60 second processed preview of the client's own track, including an honest assessment and exact quote for the full job.",
  url: "https://www.slstudio.pro/free-track-preview",
  serviceType: "Free audio mixing and mastering preview",
  areaServed: ["Warsaw", "Poland", "Worldwide"],
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
    founder: {
      "@type": "Person",
      name: "Serhii Lazariev",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Warsaw",
      addressCountry: "PL",
    },
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

export default function FreeTrackPreviewPage() {
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
    </>
  );
}
