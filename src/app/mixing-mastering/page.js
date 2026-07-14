import Hero from "../components/pages/mixing-mastering/Hero";
import Section1 from "../components/pages/mixing-mastering/Section1";
import Section2 from "../components/pages/mixing-mastering/Section2";
import BeforeAfterMixing from "../components/sections/BeforeAfterMixing";

export const metadata = {
    title: "Mixing & Mastering",
    alternates: {
        canonical: "https://www.slstudio.pro/mixing-mastering",
        languages: {
            "en": "https://www.slstudio.pro/mixing-mastering",
            "pl": "https://www.slstudio.pro/pl/miks-i-mastering",
            "x-default": "https://www.slstudio.pro/mixing-mastering",
        },
    },
    description:
        "Professional mixing and mastering services. Bass, drums, vocals, and guitars balanced with precision to create space, depth, and clarity in every track.",
    keywords: [
        "mixing",
        "mastering",
        "audio mixing",
        "music production",
        "sound engineering",
        "vocals mixing",
        "guitar mixing",
        "music mastering",
        "studio services",
    ],
    openGraph: {
        title: "Mixing & Mastering | SL Studio",
        description:
            "When every instrument finally finds its place. Professional mixing and mastering for modern music production.",
        type: "website",
        url: "https://www.slstudio.pro/mixing-mastering",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mixing & Mastering | SL Studio",
        description:
            "Professional mixing and mastering services focused on clarity, depth, and emotion.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Studio — Mixing & Mastering",
    description:
        "Professional mixing and mastering services — online worldwide, based in Warsaw, Poland.",
    url: "https://www.slstudio.pro/mixing-mastering",
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

export default function MixingMasteringPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Hero />
            <BeforeAfterMixing />
            <Section2 />
            <Section1 />
        </>
    )
}