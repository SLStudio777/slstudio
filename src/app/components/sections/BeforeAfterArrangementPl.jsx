export const dynamic = "force-dynamic";

import Link from "next/link";
import pool from "@/settings/db";
import { AudioWaveform } from "lucide-react";
import BeforeAfterCard from "../../components/cards/BeforeAfterCard";

const plLabels = {
  raw: "Nagranie surowe",
  final: "Wersja finalna",
  live: "Na żywo",
  before: "Przed",
  after: "Po",
  loading: "Ładowanie audio...",
  playingRaw: "Odtwarzam wersję surową",
  playingFinal: "Odtwarzam wersję finalną",
};

// Historie przypadków pokazywane pod każdym odtwarzaczem przed/po. Dopasowane
// do kart z panelu admina po słowie kluczowym w tytule karty, z kolejnością
// listy jako zapasowym dopasowaniem.
const CASE_STORIES = [
  {
    match: "acoustic",
    client: "Agnieszka, wokalistka",
    cameWithLabel: "Z czym przyszła",
    cameWith:
      "Nagranie akustyczne — tylko głos i gitara. Piosenka była gotowa, ale brzmiała jak demo. Agnieszka chciała, żeby zagrał ją pełny zespół.",
    doneLabel: "Co zostało zrobione",
    done:
      "Pełna aranżacja na cały skład — perkusja, bas, gitary, dodatkowe instrumenty. Do tego edycja i mastering wokalu. Z akustycznego demo powstał gotowy, pełnobrzmiący utwór.",
  },
  {
    match: "rehearsal",
    client: "Oleg, wokalista i autor piosenek",
    cameWithLabel: "Z czym przyszedł",
    cameWith:
      "Surowe nagranie z próby. Piosenka już istniała — ale brzmiała jak sala prób, a nie jak płyta.",
    doneLabel: "Co zostało zrobione",
    done:
      "Pełna praca aranżacyjna — nowe partie instrumentów dobudowane wokół oryginalnego wykonania, całość doszlifowana i wyprodukowana na studyjnym poziomie, z miksem i masteringiem wokalu. Nagranie z próby stało się pełnoprawną wersją studyjną.",
  },
  {
    match: "folk",
    client: "Alexander, autor piosenek i kompozytor",
    cameWithLabel: "Z czym przyszedł",
    cameWith:
      "Folkowy utwór, który nagrał samodzielnie około dziesięć lat temu — grając na wszystkich instrumentach, jakie miał pod ręką. Piosenka była mu bliska, ale nagranie brzmiało domowo i przestarzale.",
    doneLabel: "Co zostało zrobione",
    done:
      "Utwór został zbudowany od nowa ze świeżą, pełną aranżacją — nowe partie instrumentów, nowoczesna produkcja, miks i mastering. Piosenka zachowała swoją duszę, a wreszcie zyskała profesjonalne brzmienie, na jakie zasługiwała.",
  },
  {
    match: "indie",
    client: "Andrii, gitarzysta i kompozytor",
    cameWithLabel: "Z czym przyszedł",
    cameWith:
      "Utwór indie napisany dla swojego zespołu i nagrany samodzielnie w DAW. Partie gitary rytmicznej nagrał sam, ale utworowi brakowało gitary prowadzącej — solówki to nie jego bajka — a aranżacja potrzebowała profesjonalnego szlifu.",
    doneLabel: "Co zostało zrobione",
    done:
      "Solidna aranżacja zbudowana na jego oryginalnej produkcji — plus prawdziwa gitara prowadząca nagrana specjalnie do utworu, łącznie z partią solową, której w piosence brakowało.",
  },
];

function storyFor(title, index) {
  const t = String(title || "").toLowerCase();
  return (
    CASE_STORIES.find((s) => t.includes(s.match)) || CASE_STORIES[index] || null
  );
}

function DemoFallback() {
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02]">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">Przed i po</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Usłysz to na własnym pomyśle
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60 max-w-2xl">
          Publiczne przykłady są aktualizowane. Wyślij demo lub notatkę głosową,
          a przygotuję krótką bezpłatną koncepcję albo ocenę.
        </p>
        <Link
          href="/pl/darmowy-fragment"
          className="inline-flex mt-6 text-[#C9A84C] underline hover:text-[#e8c97a] transition"
        >
          Wyślij pomysł →
        </Link>
      </div>
    </section>
  );
}

export default async function BeforeAfterArrangementPl() {
  let enhancements = [];
  try {
    const [rows] = await pool.query(
      `SELECT * FROM enhancements WHERE is_active = 1 AND section = 'arrangement' ORDER BY created_at DESC`,
    );
    enhancements = rows;
  } catch (error) {
    console.error("[BeforeAfterArrangementPl] Failed to load examples:", error);
    return <DemoFallback />;
  }
  if (enhancements.length === 0) return <DemoFallback />;
  return (
    <section id="demos" className="py-10" style={{ scrollMarginTop: "80px" }}>
      <div className="mb-10">
        <div className="text-white/55 mb-4 flex items-center gap-2">
          <AudioWaveform size={16} />
          <span className="text-xs uppercase tracking-widest">Przed i po</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Usłysz, jak pomysł staje się utworem
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-white/60">
          Prawdziwe realizacje — od surowych szkiców i dem do kompletnych
          aranżacji.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enhancements.map((item, i) => {
          const story = storyFor(item.title, i);
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <BeforeAfterCard
                title={item.title}
                before={String(item.file_before).trim()}
                after={String(item.file_after).trim()}
                labels={plLabels}
              />
              {story && (
                <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] flex flex-col gap-3 flex-1">
                  <p className="text-white font-semibold text-[15px]">
                    {story.client}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <span className="text-[#C9A84C] font-medium">
                      {story.cameWithLabel}:{" "}
                    </span>
                    {story.cameWith}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    <span className="text-[#C9A84C] font-medium">
                      {story.doneLabel}:{" "}
                    </span>
                    {story.done}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
