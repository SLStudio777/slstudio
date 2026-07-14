import Hero from "../../components/pages/pl-miks-i-mastering/Hero";
import Section1 from "../../components/pages/pl-miks-i-mastering/Section1";
import Section2 from "../../components/pages/pl-miks-i-mastering/Section2";
import BeforeAfterMixingPl from "../../components/sections/BeforeAfterMixingPl";

export const metadata = {
    title: "Miks i mastering online — studio w Warszawie",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/miks-i-mastering",
        languages: {
            "pl": "https://www.slstudio.pro/pl/miks-i-mastering",
            "en": "https://www.slstudio.pro/mixing-mastering",
            "x-default": "https://www.slstudio.pro/mixing-mastering",
        },
    },
    description:
        "Profesjonalny miks i mastering online. Wyślij ślady lub roboczy miks — odeślę dopracowany, gotowy do publikacji utwór. Studio w Warszawie, zdalnie w całej Polsce.",
    keywords: [
        "miks i mastering",
        "miks i mastering online",
        "ile kosztuje miks piosenki",
        "mastering utworu",
        "studio nagrań warszawa",
        "miks wokalu",
        "realizacja dźwięku",
    ],
    openGraph: {
        title: "Miks i mastering online — studio w Warszawie | SL Studio",
        description:
            "Wyślij ślady lub roboczy miks — odeślę dopracowany, gotowy do publikacji utwór. Studio w Warszawie, zdalnie w całej Polsce.",
        type: "website",
        url: "https://www.slstudio.pro/pl/miks-i-mastering",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Miks i mastering online — studio w Warszawie | SL Studio",
        description:
            "Profesjonalny miks i mastering utworów. Studio w Warszawie, zdalnie w całej Polsce.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Studio — Mixing & Mastering",
    // Polish alias for the service — alternateName is a Thing-level property,
    // valid on ProfessionalService (Thing > Organization > LocalBusiness).
    alternateName: "Miks i Mastering",
    description:
        "Professional mixing and mastering services — online worldwide, based in Warsaw, Poland.",
    url: "https://www.slstudio.pro/pl/miks-i-mastering",
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
    serviceType: "Mixing & Mastering",
    sameAs: [
        "https://www.youtube.com/@SLStudio_Guitar",
        "https://www.instagram.com/lazarev_serhii_sl",
    ],
};

export default function MiksIMasteringPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Hero />
            <BeforeAfterMixingPl />
            <Section2 />
            <Section1 />
        </>
    )
}
