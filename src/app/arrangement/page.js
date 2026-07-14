import Hero from "../components/pages/arrangement/Hero";
import Section1 from "../components/pages/arrangement/Section1";
import Section2 from "../components/pages/arrangement/Section2";
import BeforeAfterArrangement from "../components/sections/BeforeAfterArrangement";

export const metadata = {
    title: "Arrangement & Production",
    alternates: {
        canonical: "https://www.slstudio.pro/arrangement",
        languages: {
            "en": "https://www.slstudio.pro/arrangement",
            "pl": "https://www.slstudio.pro/pl/aranzacja-i-produkcja",
            "x-default": "https://www.slstudio.pro/arrangement",
        },
    },
    description:
        "Music arrangement and production services. From a guitar riff or voice memo to a full professional track. Any genre, remote workflow, worldwide.",
    keywords: [
        "music arrangement",
        "music production",
        "remote music producer",
        "song arrangement",
        "full production",
        "any genre",
        "indie production",
        "online music producer",
    ],
    openGraph: {
        title: "Arrangement & Production | SL Studio",
        description:
            "From a raw idea to a full track. Professional arrangement and production for independent artists worldwide.",
        type: "website",
        url: "https://www.slstudio.pro/arrangement",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arrangement & Production | SL Studio",
        description:
            "From a voice memo to a full track. Professional music arrangement and production.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Studio — Arrangement & Production",
    description:
        "Professional music arrangement and production services — online worldwide, based in Warsaw, Poland.",
    url: "https://www.slstudio.pro/arrangement",
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

export default function ArrangementPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Hero />
            <BeforeAfterArrangement />
            <Section2 />
            <Section1 />
        </>
    )
}