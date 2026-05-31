import Hero from "../components/pages/mixing-mastering/Hero";
import Section1 from "../components/pages/mixing-mastering/Section1";
import Section2 from "../components/pages/mixing-mastering/Section2";
import BeforeAfterMixing from "../components/sections/BeforeAfterMixing";

export const metadata = {
    title: "Mixing & Mastering | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/mixing-mastering"
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

export default function MixingMasteringPage() {
    return (
        <>
            <Hero />
            <BeforeAfterMixing />
            <Section2 />
            <Section1 />
        </>
    )
}