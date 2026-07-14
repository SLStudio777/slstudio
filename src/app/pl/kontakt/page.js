import Hero from "../../components/pages/pl-kontakt/Hero";

export const metadata = {
    title: "Kontakt",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/kontakt",
        languages: {
            "pl": "https://www.slstudio.pro/pl/kontakt",
            "en": "https://www.slstudio.pro/contact",
            "x-default": "https://www.slstudio.pro/contact",
        },
    },
    description:
        "Skontaktuj się z SL Studio. Wyślij swój utwór — pierwsza konsultacja zawsze bezpłatna. Studio miksu, masteringu i produkcji w Warszawie, zdalnie w całej Polsce.",
    openGraph: {
        title: "Kontakt | SL Studio",
        description:
            "Wyślij swój utwór i porozmawiajmy. Pierwsza konsultacja zawsze bezpłatna. Studio w Warszawie.",
        type: "website",
        url: "https://www.slstudio.pro/pl/kontakt",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kontakt | SL Studio",
        description:
            "Wyślij swój utwór i porozmawiajmy. Pierwsza konsultacja zawsze bezpłatna.",
    },
};

export default function KontaktPage() {
    return (
        <div className="mt-16 mb-20">
            <Hero />
        </div>
    )
}
