"use client";
import { ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        q: "Mam tylko pomysł nagrany na telefon. Czy to wystarczy?",
        a: "Aż nadto. Wiadomość głosowa, zanucona melodia, riff nagrany o drugiej w nocy — wszystko to jest punktem wyjścia. Niejeden świetny utwór zaczął się dokładnie tak."
    },
    {
        q: "Grasz na żywo czy używasz sampli?",
        a: "Jedno i drugie — zależy od projektu. Gitary i część partii nagrywam sam, na żywo. Tam, gdzie potrzeba instrumentów orkiestrowych, dętych czy egzotycznych, sięgam po profesjonalne biblioteki i nowoczesną technologię. Tak czy inaczej, efekt brzmi organicznie."
    },
    {
        q: "Zespół nagrał szkic na próbie. Zrobisz z tego gotowy utwór?",
        a: "Właśnie po to tu jestem. Nagranie z próby ma żywą energię, którą później bardzo trudno odtworzyć w studiu. Biorę tę energię i ubieram ją w profesjonalne brzmienie."
    },
    {
        q: "Chcę, żeby prosta gitara brzmiała jak cała orkiestra. Da się?",
        a: "Jak najbardziej. To właśnie aranżacja — i jedna z ciekawszych części mojej pracy. Ty dajesz melodię albo akordy, ustalamy nastrój i rozmach, a ja buduję wokół tego pełny muzyczny obraz."
    },
    {
        q: "Czy mogę wybrać, jakie instrumenty znajdą się w utworze?",
        a: "Oczywiście. To Twoja muzyka. Wszystko ustalamy przed startem — gatunek, instrumenty, nastrój, referencje. Podrzucam pomysły, ale ostatnie słowo zawsze należy do Ciebie."
    },
    {
        q: "Co jeśli nie spodoba mi się kierunek?",
        a: (
            <>
                Właśnie dlatego zawsze najpierw wysyłam{" "}
                <Link href="/pl/darmowy-fragment" className="text-gold underline hover:text-gold2 transition">
                    bezpłatne demo
                </Link>{" "}
                do akceptacji. Słyszysz kierunek, zanim pójdziemy dalej. Żadnych niespodzianek na końcu.
            </>
        )
    },
    {
        q: "Ile to kosztuje i jak wygląda płatność?",
        a: "Wycena jest indywidualna i zależy od zakresu — dołożenie jednego instrumentu to zupełnie inny nakład pracy niż pełna aranżacja od zera. Najpierw ustalamy zakres i cenę, dopiero potem zaczynam. Zwykle płatność dzielimy: część na start, reszta po akceptacji gotowego utworu."
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
