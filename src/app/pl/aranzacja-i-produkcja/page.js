import Hero from "../../components/pages/pl-aranzacja-i-produkcja/Hero";
import Section1 from "../../components/pages/pl-aranzacja-i-produkcja/Section1";
import Section2 from "../../components/pages/pl-aranzacja-i-produkcja/Section2";
import BeforeAfterArrangementPl from "../../components/sections/BeforeAfterArrangementPl";

export const metadata = {
    title: "Aranżacja i produkcja muzyczna — studio w Warszawie",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
        languages: {
            "pl": "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
            "en": "https://www.slstudio.pro/arrangement",
            "x-default": "https://www.slstudio.pro/arrangement",
        },
    },
    description:
        "Aranżacja utworów i produkcja muzyczna online. Od riffu, nucenia czy nagrania z próby do gotowego utworu. Studio w Warszawie, każdy gatunek, praca zdalna.",
    keywords: [
        "aranżacja utworu",
        "produkcja muzyczna",
        "aranżacja i produkcja muzyczna",
        "producent muzyczny online",
        "studio nagrań warszawa",
        "aranżacja piosenki",
        "produkcja muzyczna warszawa",
    ],
    openGraph: {
        title: "Aranżacja i produkcja muzyczna — studio w Warszawie | SL Studio",
        description:
            "Od riffu, nucenia czy nagrania z próby do gotowego utworu. Studio w Warszawie, każdy gatunek, praca zdalna.",
        type: "website",
        url: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aranżacja i produkcja muzyczna — studio w Warszawie | SL Studio",
        description:
            "Aranżacja utworów i produkcja muzyczna. Studio w Warszawie, każdy gatunek, praca zdalna.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Studio — Arrangement & Production",
    // Polish alias for the service — alternateName is a Thing-level property,
    // valid on ProfessionalService (Thing > Organization > LocalBusiness).
    alternateName: "Aranżacja i Produkcja",
    description:
        "Professional music arrangement and production services — online worldwide, based in Warsaw, Poland.",
    url: "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
    image: "https://www.slstudio.pro/images/SL-logo-mark-1024.png",
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
    areaServed: ["Warsaw", "Poland", "Worldwide"],
    serviceType: "Arrangement & Production",
    sameAs: [
        "https://www.youtube.com/@SLStudio_Guitar",
        "https://www.instagram.com/lazarev_serhii_sl",
    ],
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
            <Section2 />
            <Section1 />
        </>
    )
}
