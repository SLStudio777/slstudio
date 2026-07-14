import Hero from "../../components/pages/pl-darmowy-fragment/Hero";

export const metadata = {
    title: "Darmowy fragment utworu",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/darmowy-fragment",
        languages: {
            "pl": "https://www.slstudio.pro/pl/darmowy-fragment",
            "en": "https://www.slstudio.pro/free-track-preview",
            "x-default": "https://www.slstudio.pro/free-track-preview",
        },
    },
    description:
        "Wyślij swój utwór i usłysz darmowy obrobiony fragment, zanim za cokolwiek zapłacisz. Robocze dema, nagrania z telefonu, ślady — dowolny format, dowolna jakość. Studio miksu i masteringu w Warszawie.",
    keywords: [
        "darmowy miks",
        "darmowe demo utworu",
        "darmowy fragment miksu",
        "wyślij swój utwór",
        "miks i mastering online",
        "studio nagrań warszawa",
    ],
    openGraph: {
        title: "Darmowy fragment utworu | SL Studio",
        description:
            "Wyślij swój utwór i usłysz darmowy obrobiony fragment, zanim za cokolwiek zapłacisz. Dowolny format, dowolna jakość.",
        type: "website",
        url: "https://www.slstudio.pro/pl/darmowy-fragment",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Darmowy fragment utworu | SL Studio",
        description:
            "Wyślij swój utwór i usłysz darmowy obrobiony fragment, zanim za cokolwiek zapłacisz.",
    },
};

export default function DarmowyFragmentPage() {
    return <Hero />;
}
