import Link from "next/link";

const includedItems = [
  "Edycja i czyszczenie tam, gdzie materiał tego wymaga",
  "Balans, korekcja, kompresja i kontrola dołu",
  "Obróbka wokalu, de-essing i strojenie w razie potrzeby",
  "Automatyka, saturacja, pogłosy i delaye",
  "Mastering stereo do streamingu i publikacji cyfrowej",
  "Finalne pliki WAV i MP3",
  "Maksymalnie trzy rundy poprawek",
];
const steps = [
  {
    number: "01",
    title: "Wyślij utwór",
    text: "Najlepsze są osobne ślady, ale roboczy miks, nagranie z próby albo starsza sesja też wystarczą na początek.",
  },
  {
    number: "02",
    title: "Usłysz bezpłatny fragment",
    text: "Obrabiam 30–60 sekund, żeby można było ocenić kierunek przed zamówieniem pełnego miksu.",
  },
  {
    number: "03",
    title: "Powstaje pełny miks",
    text: "Po ustaleniu kierunku i dokładnej ceny wykonuję miks oraz mastering całego utworu.",
  },
  {
    number: "04",
    title: "Odsłuch i finalne pliki",
    text: "Otrzymujesz gotowy utwór oraz maksymalnie trzy rundy poprawek, jeśli coś wymaga dopracowania.",
  },
];
function Wskazowka({ children }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-3 items-start mt-auto relative z-10"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <span className="text-base flex-shrink-0 font-bold text-[#C9A84C]">
        ★
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1.5 text-[#C9A84C]">
          Wskazówka
        </p>
        <p className="text-white/70 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
function GlowCard({ children }) {
  return (
    <div className="rounded-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden transition-all duration-300 bg-white/[0.03] border border-white/[0.05] hover:bg-[#C9A84C]/[0.07] hover:border-[#C9A84C]/35">
      <div
        className="absolute top-0 left-0 w-3/5 h-3/5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Section1() {
  return (
    <section className="mt-10 flex flex-col gap-16">
      <div>
        <div className="mb-8">
          <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
            Usługi i ceny
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            Co obejmuje realizacja
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
            Bez gotowego łańcucha presetów i bez przekazywania materiału innej
            osobie. Pracuję nad utworem osobiście — od pierwszego odsłuchu po
            finalne pliki.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="rounded-2xl p-8 border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] flex flex-col gap-6">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
                Ceny od
              </p>
              <div className="mt-5 flex flex-col gap-5">
                <div>
                  <p className="text-white/70 text-sm">Sam mastering</p>
                  <p className="text-3xl font-semibold text-[#f5b942]">
                    od 25 USD
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-white/70 text-sm">Miks i mastering</p>
                  <p className="text-3xl font-semibold text-[#f5b942]">
                    od 60 USD
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Dokładna cena zależy od liczby śladów, jakości nagrania i zakresu
              edycji. Otrzymasz ją przed rozpoczęciem pełnej realizacji.
            </p>
            <Link
              href="/pl/darmowy-fragment"
              className="btn-gold inline-flex justify-center items-center font-semibold px-6 py-3.5 rounded-xl text-sm text-black bg-[#C9A84C]"
            >
              Odbierz bezpłatny fragment →
            </Link>
          </div>
          <div className="rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {includedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/70 text-[15px] leading-relaxed"
                >
                  <span className="text-[#C9A84C] mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-8">
          <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
            Jak to działa
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            Od roboczego miksu do finalnego masteru
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02]"
            >
              <span className="text-3xl font-bold text-[#C9A84C]/30">
                {step.number}
              </span>
              <h3 className="text-white font-semibold mt-4">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mt-2">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
        <GlowCard>
          <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
            Jak podchodzę do miksu
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              Pierwsze dziesięć minut po prostu słucham. Niczego nie dotykam.
              Sprawdzam, gdzie robi się tłoczno, gdzie dół traci kontrolę i
              gdzie wokal chce wyjść do przodu, ale nie ma na to miejsca.
            </p>
            <p>
              To trochę jak wejście do pokoju, w którym wszyscy mówią naraz.
              Moja praca nie polega na uciszaniu kogokolwiek, tylko na tym, żeby
              każdy był wyraźnie słyszalny.
            </p>
            <p>
              Zwykle zaczynam od basu i perkusji. To fundament — jeśli się
              chwieje, żadna ilość dekoracji nie uratuje utworu.
            </p>
            <p>
              Kiedy dół siada na swoim miejscu, pozostałe instrumenty zaczynają
              naturalnie odnajdywać własną przestrzeń. To nie magia, choć czasem
              wygląda podejrzanie podobnie.
            </p>
          </div>
          <Wskazowka>
            Jeśli możesz, wyślij osobne ślady. Nie masz stemów? Wyślij to, co
            masz — uczciwie powiem, jak daleko można doprowadzić materiał.
          </Wskazowka>
        </GlowCard>
        <GlowCard>
          <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
            Gitary, wokal i przekładalność
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              Sam jestem gitarzystą, dlatego szybko słyszę, kiedy gitara została
              dobrze nagrana, ale źle siedzi w miksie. Czasem zajmuje cały
              pokój, a czasem chowa się właśnie wtedy, gdy powinna śpiewać.
            </p>
            <p>
              Wokal wymaga innego rodzaju uwagi. Za dużo obróbki robi z niego
              plastik, za mało pozostawia go obok utworu. Szukam punktu, w
              którym głos nadal żyje, ale brzmi tak, jakby od początku należał
              do miksu.
            </p>
            <p>
              Mastering jest ostatnim sprawdzianem. Gotowy utwór odsłuchuję na
              monitorach studyjnych, zwykłych słuchawkach i głośniku telefonu.
            </p>
          </div>
          <Wskazowka>
            Podeślij dwa lub trzy utwory referencyjne. Szybciej pokażą
            oczekiwany ton, przestrzeń i energię niż akapit technicznego opisu.
          </Wskazowka>
        </GlowCard>
      </div>
    </section>
  );
}
