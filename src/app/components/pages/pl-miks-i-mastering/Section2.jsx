"use client";
import { ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        q: "Ile kosztuje miks i mastering utworu?",
        a: "Wycena jest zawsze indywidualna — zależy od stanu materiału, liczby śladów i zakresu prac. Sam mastering pojedynczego utworu wychodzi taniej niż pełny miks wielośladowy z masteringiem. Zamiast zgadywać: wyślij utwór, a odeślę bezpłatne 60-sekundowe demo, szczerą ocenę i dokładną cenę z góry — bez zobowiązań."
    },
    {
        q: "Jak wygląda miks i mastering online?",
        a: "W całości zdalnie. Wysyłasz pliki przez Dysk Google, WeTransfer albo bezpośrednio na stronie, ja pracuję nad materiałem i odsyłam gotowy utwór. Nie musisz nigdzie przyjeżdżać — pracuję tak z artystami z całej Polski i spoza niej."
    },
    {
        q: "Jakie pliki mam przygotować?",
        a: "Najlepiej osobne ślady (stemy) — oddzielny plik dla każdego instrumentu i wokalu. Ale jeśli masz tylko roboczy miks stereo albo pojedyncze nagranie, to też się nada. Wyślij to, co masz, a resztę ustalimy."
    },
    {
        q: "Ile trwa realizacja?",
        a: "Zwykle 3–5 dni roboczych na pojedynczy utwór. Albumy i większe projekty ustalamy indywidualnie. Jeśli termin jest pilny — napisz, najczęściej da się coś zorganizować."
    },
    {
        q: "Mam nagranie sprzed lat. Da się odświeżyć brzmienie?",
        a: "Tak — i to jedno z ciekawszych zleceń, jakie dostaję. Ten sam utwór, ten sam wokal i te same instrumenty, ale ze świeżym miksem i nowoczesnym masteringiem brzmią zupełnie inaczej. Wielu artystów w ten sposób wydaje starszy materiał na nowo."
    },
    {
        q: "Nagranie jest kiepskiej jakości. Da się z tym coś zrobić?",
        a: "Bardzo często tak. Słabe nagranie to nie wyrok. Pracowałem z materiałem z garaży, sal prób i telefonów. Najważniejsze, żeby samo wykonanie było żywe — brzmienie da się poprawić."
    },
    {
        q: "Co jeśli nie spodoba mi się efekt?",
        a: (
            <>
                Rzadko się to zdarza — zanim zacznę pełny miks, wysyłam krótkie{" "}
                <Link href="/pl/darmowy-fragment" className="text-gold underline hover:text-gold2 transition">
                    bezpłatne demo
                </Link>
                , żebyś usłyszał kierunek i go potwierdził. A jeśli i potem coś nie gra — poprawki są w cenie i pracuję do skutku.
            </>
        )
    },
];

export default function Section2() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="mt-10 flex flex-col gap-16">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <HelpCircle className="text-gold2 w-6 h-6" />
                    <div className="flex flex-col">
                        <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                            FAQ
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                            Najczęstsze pytania
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col divide-y divide-white/5 max-w-3xl">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="py-5 flex flex-col gap-2 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="flex items-start gap-3">
                                <ChevronRight
                                    className={`w-4 h-4 mt-1 flex-shrink-0 text-gold2 transition-transform duration-200 ${openIndex === i ? "rotate-90" : ""}`}
                                />
                                <p className="text-white/90 font-medium text-base leading-snug">
                                    {item.q}
                                </p>
                            </div>
                            {openIndex === i && (
                                <p className="text-white/60 text-[15px] leading-relaxed pl-7">
                                    {item.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
