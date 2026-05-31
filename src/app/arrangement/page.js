import Hero from "../components/pages/arrangement/Hero";
import Section1 from "../components/pages/arrangement/Section1";
import Section2 from "../components/pages/arrangement/Section2";
import BeforeAfterArrangement from "../components/sections/BeforeAfterArrangement";

export const metadata = {
    title: "Arrangement & Production | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/arrangement"
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

export default function ArrangementPage() {
    return (
        <>
            <Hero />
            <BeforeAfterArrangement />
            <Section2 />
            <Section1 />
        </>
    )
}