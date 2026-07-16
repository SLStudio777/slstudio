import Link from "next/link";

const includedItems = [
  "Aranżacja zbudowana wokół melodii, akordów lub demo",
  "Dobór instrumentów i kompletna produkcja",
  "Żywe gitary i wybrane partie, jeśli utwór tego potrzebuje",
  "Profesjonalne instrumenty wirtualne i sound design",
  "Edycja, miks i mastering",
  "Finalne pliki WAV i MP3",
  "Wersja instrumentalna i stemy na życzenie",
  "Maksymalnie trzy rundy poprawek",
];

const steps = [
  {
    number: "01",
    title: "Wyślij pomysł",
    text: "Wystarczy notatka głosowa, riff, szkic MIDI, tekst albo nagranie z próby.",
  },
  {
    number: "02",
    title: "Ustalamy kierunek",
    text: "Rozmawiamy o referencjach, nastroju, instrumentach i emocji, jaką ma nieść gotowy utwór.",
  },
  {
    number: "03",
    title: "Słyszysz koncepcję",
    text: "Przygotowuję krótki fragment lub koncepcję, zanim ruszy pełna aranżacja.",
  },
  {
    number: "04",
    title: "Buduję i kończę",
    text: "Dopracowuję produkcję, miks i mastering, a następnie oddaję finalne pliki z maksymalnie trzema rundami poprawek.",
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
            Zakres i cena
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
            Co otrzymujesz
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
            Nie dostajesz przypadkowego podkładu doklejonego do melodii.
            Aranżacja powstaje wokół charakteru, rytmu i emocji, które już są w
            Twoim pomyśle.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="rounded-2xl p-8 border border-[#C9A84C]/25 bg-[#C9A84C]/[0.06] flex flex-col gap-6">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-[0.25em]">
                Cena od
              </p>
              <p className="text-white/70 text-sm mt-5">
                Aranżacja i produkcja
              </p>
              <p className="text-3xl font-semibold text-[#f5b942]">
                od 110 USD
              </p>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Dokładna cena zależy od długości utworu, liczby instrumentów,
              edycji oraz tego, czy potrzebujesz pełnej produkcji, czy tylko
              wybranych partii. Wycena jest znana przed rozpoczęciem pełnego
              projektu.
            </p>
            <Link
              href="/pl/darmowy-fragment"
              className="btn-gold inline-flex justify-center items-center font-semibold px-6 py-3.5 rounded-xl text-sm text-black bg-[#C9A84C]"
            >
              Wyślij pomysł bezpłatnie →
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
            Od notatki głosowej do gotowego utworu
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
            Notatka głosowa z kuchni
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              Kiedyś dostałem wiadomość głosową: melodia zanucana do telefonu w
              kuchni, a w tle kapiący kran. W opisie było tylko: „Mam pomysł i
              nie wiem, co z nim zrobić”.
            </p>
            <p>Odsłuchałem pięć razy. Potem wziąłem gitarę.</p>
            <p>
              Trzy dni później ta sama melodia miała żywe gitary, bas,
              przestrzenne klawisze i perkusję. Nadal była pomysłem tej osoby —
              po prostu wreszcie zabrzmiała jak utwór, który od początku
              słyszała w głowie.
            </p>
            <p>
              Tak rozumiem aranżację: jako tłumaczenie. Pomagam wewnętrznemu
              pomysłowi stać się prawdziwą muzyką, ale nie zamieniam Twojego
              języka na własny.
            </p>
          </div>
          <Wskazowka>
            Nie wygładzaj dema przed wysłaniem. Timing, sposób frazowania, a
            nawet drobne niedoskonałości często podpowiadają, czego potrzebuje
            gotowa aranżacja.
          </Wskazowka>
        </GlowCard>
        <GlowCard>
          <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
            Co mogę zbudować
          </span>
          <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
            <p>
              Pracuję z blues-rockiem, funkiem, indie, popem, metalem, jazzem i
              elektroniką. Moje korzenie są w żywych instrumentach i groove'ie,
              ale sposób produkcji zawsze dopasowuję do utworu.
            </p>
            <p>
              Czasem rozwiązaniem jest jedna dobrze nagrana gitara. Innym razem
              pełna produkcja z perkusją, basem, klawiszami, teksturami i
              warstwami orkiestrowymi. Więcej nie zawsze znaczy lepiej — utwór
              dostaje to, czego naprawdę potrzebuje.
            </p>
            <p>
              Kierunek słyszysz na wczesnym etapie i bierzesz udział w
              decyzjach. To rozmowa, a nie tajemnicza paczka, która pojawia się
              na końcu z dwunastoma niepotrzebnymi tamburynami.
            </p>
          </div>
          <Wskazowka>
            Podeślij dwa lub trzy utwory referencyjne. Jeden może pokazać
            energię, drugi instrumentarium, a trzeci przestrzeń lub nastrój,
            którego szukasz.
          </Wskazowka>
        </GlowCard>
      </div>
    </section>
  );
}
