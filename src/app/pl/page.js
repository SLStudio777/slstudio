import Hero from "../components/pages/pl-home/Hero";
import BeforeAfter from "../components/sections/BeforeAfter";
import YouTube from "../components/sections/YouTube";
import HowItWorks from "../components/sections/HowItWorks";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";
import Pricing from "../components/sections/Pricing";
import FinalCTA from "../components/sections/FinalCTA";
import FAQ from "../components/sections/FAQ";
import SunoBanner from "../components/sections/SunoBanner";

export const metadata = {
    title: { absolute: "SL Studio | Miks, mastering i produkcja muzyczna" },
    description:
        "Profesjonalny miks, mastering i produkcja muzyczna. Zamieniam surowe nagrania w dopracowane, gotowe do publikacji utwory. Studio w Warszawie, zdalnie w całej Polsce i na świecie.",
    keywords: [
        "miks i mastering",
        "produkcja muzyczna",
        "studio nagrań warszawa",
        "realizacja dźwięku",
        "aranżacja utworu",
        "producent muzyczny online",
        "mastering utworu",
    ],
    alternates: {
        canonical: "https://www.slstudio.pro/pl",
        languages: {
            "pl": "https://www.slstudio.pro/pl",
            "en": "https://www.slstudio.pro",
            "x-default": "https://www.slstudio.pro",
        },
    },
    openGraph: {
        title: "SL Studio | Miks, mastering i produkcja muzyczna",
        description:
            "Zamieniam surowe nagrania w dopracowane, gotowe do publikacji utwory. Studio w Warszawie, zdalnie.",
        type: "website",
        url: "https://www.slstudio.pro/pl",
        locale: "pl_PL",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "SL Studio - miks i mastering",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SL Studio | Miks, mastering i produkcja muzyczna",
        description: "Profesjonalny miks, mastering i produkcja muzyczna. Studio w Warszawie.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SL Studio",
    alternateName: "Studio miksu i masteringu w Warszawie",
    description:
        "Professional mixing, mastering, arrangement and music production services — online worldwide, based in Warsaw, Poland.",
    url: "https://www.slstudio.pro/pl",
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
    serviceType: ["Mixing", "Mastering", "Arrangement", "Music Production"],
    sameAs: [
        "https://www.youtube.com/@SLStudio_Guitar",
        "https://www.instagram.com/lazarev_serhii_sl",
    ],
};

// ── Polish text for the reused sections (English defaults live in each
//    component; these override them via the `labels` prop). ──

const beforeAfterLabels = {
    eyebrow: "Poprawa jakości nagrania",
    heading: "Zamień słabe nagrania w profesjonalne studyjne brzmienie",
    text: "Masz robocze demo, nagranie z próby albo kiepsko nagrany utwór? Specjalizuję się w poprawie jakości dźwięku — przywracam nagraniom klarowność, równowagę i głębię. Profesjonalnymi technikami miksu i masteringu zamieniam surowy materiał w dopracowane, gotowe do publikacji brzmienie.",
    card: {
        raw: "Nagranie surowe",
        final: "Miks finalny",
        live: "Na żywo",
        before: "Przed",
        after: "Po",
        loading: "Ładowanie audio...",
        playingRaw: "Odtwarzam surowe",
        playingFinal: "Odtwarzam finalny miks",
    },
};

const youTubeLabels = {
    eyebrow: "Projekty na YouTube",
    heading: "Produkcja muzyczna i aranżacje",
    text: "Wybór moich prac z zakresu produkcji i aranżacji — autorskie utwory i projekty z mojego kanału na YouTube.",
};

const howItWorksLabels = {
    eyebrow: "Proces",
    heading: "Jak to działa",
    steps: [
        {
            title: "Wyślij swój utwór",
            time: "~ 2 min",
            description: "Podeślij stemy, roboczy miks, nagranie z próby albo demo — cokolwiek masz. Dowolny format, dowolna jakość.",
            badge: null,
        },
        {
            title: "Ustalamy kierunek",
            time: "Tego samego dnia",
            description: "Bezpłatna konsultacja i krótki fragment. Odsłuchuję materiał i odsyłam szybką próbkę obróbki, żebyś usłyszał kierunek, zanim się na cokolwiek zdecydujesz.",
            badge: null,
        },
        {
            title: "Ruszam do pracy",
            time: "1–3 dni",
            description: "Gdy ustalimy zakres, biorę się do roboty. Na bieżąco dostajesz aktualizacje — żadnej czarnej skrzynki.",
            badge: null,
        },
        {
            title: "Gotowe w 3–5 dni",
            time: "3–5 dni",
            description: "Dostajesz gotowy utwór. Poprawki w cenie, aż będziesz w pełni zadowolony z efektu.",
            badge: "✓ Efekt",
        },
    ],
};

const testimonialsLabels = {
    eyebrow: "Opinie klientów",
    heading: "Co mówią artyści",
    items: [
        {
            role: "Gitarzysta i muzyk",
            text: "Totalna bomba. Zostaw tak, nic nie zmieniaj. Ciągle włączam od nowa. Maestro, brawo.",
        },
        {
            role: "Wokalista i autor piosenek",
            text: "Siedziałem sam przed głośnikami, świętując 30. urodziny syna — słuchając tego, co stworzyliśmy razem. Emocje mnie dopadły. Bez słów. Dziękuję.",
        },
        {
            role: "Wokalistka i kompozytorka",
            text: "Piękna muzyka — po prostu dodaje skrzydeł. ❤️❤️❤️❤️❤️❤️❤️",
        },
    ],
};

const blogPreviewLabels = {
    eyebrow: "Ze studia",
    heading: "Poradniki i spostrzeżenia",
    text: "Praktyczne poradniki o Suno AI, miksie, masteringu i produkcji muzycznej — z prawdziwego studyjnego doświadczenia.",
    allArticles: "Wszystkie artykuły →",
    featured: "Polecany poradnik",
    readMore: "Czytaj dalej",
};

const pricingLabels = {
    eyebrow: "Cennik",
    heading: "Prosty, przejrzysty cennik",
    sub1: "Bez ukrytych opłat. Dokładną cenę potwierdzam po omówieniu projektu.",
    sub2: "Studio jednoosobowe — każdy projekt dostaje moją pełną, osobistą uwagę. Żadnych przekazań, żadnych młodszych realizatorów.",
    mostPopular: "Najpopularniejsze",
    getStarted: "Zaczynamy",
    contactHref: "/pl/kontakt",
    services: [
        { title: "Tylko mastering", description: "Finalna obróbka gotowego miksu. Zoptymalizowany pod streaming, konkurencyjna głośność, dostarczany w WAV i MP3." },
        { title: "Miks i mastering", description: "Pełny miks wszystkich śladów plus mastering. Działa ze stemami albo roboczym miksem, który chcesz doprowadzić do poziomu wydawniczego." },
        { title: "Aranżacja i produkcja", description: "Od pomysłu do gotowego utworu. Instrumenty, struktura, miks i mastering. Ostateczna cena zależy od zakresu." },
        { title: "Suno / AI Track Finishing", description: "Masz utwór z Suno lub Udio? Rozdzielam stemy, czyszczę artefakty, dogrywam żywe partie i robię ludzki miks oraz mastering. Stałe pakiety.", href: "/pl/suno-track-finishing" },
    ],
    payment: [
        { title: "50% z góry", description: "Reszta po akceptacji efektu. Zero ryzyka po Twojej stronie." },
        { title: "Najpierw rozmowa, potem płatność", description: "Dokładną cenę potwierdzamy po omówieniu projektu. Pierwsza konsultacja zawsze bezpłatna." },
        { title: "PayPal i przelew", description: "Pracuję z klientami z całego świata. Bez ograniczeń lokalizacji." },
    ],
};

const sunoBannerLabels = {
    heading: "Masz utwór z Suno lub Udio?",
    text: "Zamieniam generacje AI w gotowe do wydania utwory — rozdzielam stemy, czyszczę artefakty, dogrywam żywe instrumenty i robię ludzki miks oraz mastering.",
    cta: "Pakiety od $39",
    href: "/pl/suno-track-finishing",
};

const faqLabels = {
    eyebrow: "FAQ",
    heading: "Najczęstsze pytania",
    sub: "Konkretne odpowiedzi o cenach, terminach i sposobie pracy.",
    items: [
        {
            q: "Ile kosztuje miks i mastering?",
            a: "Mastering od $39 za utwór, miks i mastering od $89, aranżacja i produkcja od $119. Dokończenie utworu wygenerowanego przez AI (Suno/Udio) to $39–149 w zależności od pakietu. Dokładną cenę potwierdzam po bezpłatnej konsultacji — bez ukrytych opłat.",
        },
        {
            q: "Ile to trwa?",
            a: "Większość projektów dostarczam w 3–5 dni roboczych. Odpowiedź dostajesz tego samego dnia, a przed rozpoczęciem pracy — krótką próbkę obróbki.",
        },
        {
            q: "Jakie pliki mam wysłać?",
            a: "Cokolwiek masz: stemy (WAV, najlepiej 24-bit), roboczy miks albo nawet nagranie z telefonu. Dowolny format, dowolna jakość — powiem Ci, jeśli czegoś zabraknie.",
        },
        {
            q: "Ile poprawek jest w cenie?",
            a: "Poprawki są w cenie, aż będziesz w pełni zadowolony z efektu. Bez opłat za każdą rundę.",
        },
        {
            q: "Pracujesz z utworami wygenerowanymi przez AI (Suno, Udio)?",
            a: "Tak — to osobna usługa. Rozdzielam stemy, czyszczę artefakty, zastępuję słabe partie żywymi instrumentami i robię ludzki miks oraz mastering. Zobacz stronę Suno Track Finishing z pakietami.",
        },
        {
            q: "Jak działa darmowy fragment?",
            a: "Wysyłasz utwór, ja obrabiam krótki fragment i odsyłam za darmo. Słyszysz kierunek, zanim cokolwiek zapłacisz — bez zobowiązań.",
        },
        {
            q: "Jak wygląda płatność?",
            a: "50% z góry, reszta po akceptacji efektu. PayPal i przelew bankowy — pracuję z klientami z całego świata.",
        },
    ],
};

const finalCtaLabels = {
    heading: "Gotowy odmienić swoje brzmienie?",
    text: "Darmowy fragment Twojego utworu. Bez zobowiązań.",
    button: "Wyślij swój utwór →",
    href: "/pl/darmowy-fragment",
};

export default function HomePl() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Hero />
            <SunoBanner labels={sunoBannerLabels} />
            <BeforeAfter labels={beforeAfterLabels} />
            <YouTube labels={youTubeLabels} />
            <HowItWorks labels={howItWorksLabels} />
            <Testimonials labels={testimonialsLabels} />
            <BlogPreview labels={blogPreviewLabels} />
            <FAQ labels={faqLabels} />
            <Pricing labels={pricingLabels} />
            <FinalCTA labels={finalCtaLabels} />
        </>
    );
}
