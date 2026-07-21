import RelatedPosts from "@/app/components/blog/RelatedPosts";
import Image from "next/image";
import BlogHeader from "@/app/components/blog/BlogHeader";

export const metadata = {
    title: "Mix rocka gitarowego — ściana gitar, która wciąż oddycha",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/blog/mixing-guitar-driven-rock",
        languages: {
            pl: "https://www.slstudio.pro/pl/blog/mixing-guitar-driven-rock",
            en: "https://www.slstudio.pro/blog/mixing-guitar-driven-rock",
            "x-default": "https://www.slstudio.pro/blog/mixing-guitar-driven-rock",
        },
    },
    description: "Double-tracking, panorama, miejsce dla wokalu i zwarty dół — kompletne podejście gitarzysty-realizatora do miksu gęstego, nowoczesnego rocka gitarowego.",
    openGraph: {
        title: "Mix rocka gitarowego — ściana gitar, która wciąż oddycha",
        description: "Dlaczego gęste rockowe miksy zamieniają się w błoto — i jakie techniki double-trackingu, średnicy i perkusji utrzymują ścianę gitar potężną i czytelną.",
        type: "article",
        url: "https://www.slstudio.pro/pl/blog/mixing-guitar-driven-rock",
        siteName: "SL Studio",
        locale: "pl_PL",
        images: ["/images/blog-guitar-rock-cover.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mix rocka gitarowego — ściana gitar, która wciąż oddycha",
        description: "Dlaczego gęste rockowe miksy zamieniają się w błoto — i jakie techniki double-trackingu, średnicy i perkusji utrzymują ścianę gitar potężną i czytelną.",
    },
    other: {
        "article:published_time": "2026-07-21"
    },
    keywords: [
        "mix rocka gitarowego",
        "miks gitar rockowych",
        "double tracking gitar",
        "ściana gitar miks",
        "mix i mastering rocka",
        "panorama gitar rytmicznych",
    ],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mix rocka gitarowego — ściana gitar, która wciąż oddycha",
    description: "Double-tracking, panorama, miejsce dla wokalu i zwarty dół — kompletne podejście gitarzysty-realizatora do miksu gęstego, nowoczesnego rocka gitarowego.",
    image: "https://www.slstudio.pro/images/blog-guitar-rock-cover.jpg",
    author: { "@type": "Person", name: "Serhii Lazariev" },
    publisher: {
        "@type": "Organization",
        name: "SL Studio",
        logo: { "@type": "ImageObject", url: "https://www.slstudio.pro/images/SL-logo-mark-1024.png" },
    },
    datePublished: "2026-07-21",
    mainEntityOfPage: "https://www.slstudio.pro/pl/blog/mixing-guitar-driven-rock",
    inLanguage: "pl",
};

const faqs = [
    {
        q: "Pracujesz z symulacjami wzmacniaczy i śladami DI nagranymi w domu?",
        a: "Tak — większość współczesnego rocka, który do mnie trafia, powstała w domu na symulacjach wzmacniaczy i część z tego brzmi świetnie. Jeśli dołączysz suche ślady DI obok wydrukowanych brzmień, tym lepiej: gdy brzmienie gryzie się z miksem, mogę je przeintonować na nowo zamiast walczyć z nim korekcją. Świetne wykonanie przez wtyczkę zawsze wygra z przeciętnym wykonaniem przez zabytkowy wzmacniacz."
    },
    {
        q: "Ile śladów gitar to za dużo?",
        a: "Nie ma magicznej liczby — miksowałem utwory, którym wystarczały dwa ślady, i takie, które naprawdę potrzebowały dwunastu. Prawdziwy test: wycisz dowolną warstwę — jeśli refren nie robi się zauważalnie mniejszy, ta warstwa niczego nie dodawała, tylko zabierała czytelność. Wyślij wszystko, co nagrałeś, i razem zdecydujemy, co zasługuje na swoje miejsce."
    },
    {
        q: "Da się zrobić głośny rockowy master bez zgniatania?",
        a: "Głośny i zgnieciony to nie to samo. Gęsty rock zwykle komfortowo masteruje się do około -10 do -12 LUFS, zachowując transjenty, które dają perkusji uderzenie. Platformy streamingowe i tak normalizują głośność, więc master ściśnięty do -8 LUFS brzmi po prostu mniejszy i bardziej płaski przy tej samej głośności odsłuchu. Celuję w uderzenie, nie w liczbę."
    },
    {
        q: "Moja perkusja jest zaprogramowana — to problem?",
        a: "W ogóle. Dobrze zaprogramowana perkusja to standard we współczesnej produkcji rockowej. Liczą się zróżnicowane velocity i jakość sampli. Jeśli programowanie jest sztywne, mogę uczłowieczyć timing i dynamikę, a w razie potrzeby podmieszać lub podmienić sample, żeby zestaw obronił się na tle ściany gitar."
    },
    {
        q: "Ile trwa miks i ile poprawek jest w cenie?",
        a: "Większość singli oddaję w 3–5 dni roboczych, z maksymalnie trzema rundami poprawek w cenie. Jasne referencje i notatka o tym, co w utworze najważniejsze, zwykle załatwiają sprawę w jednej lub dwóch rundach."
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function GuitarRockPagePl() {
    return (
        <div className="mt-16 mb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-3xl mx-auto">

                <BlogHeader
                    topic="Mix i mastering"
                    date="21 lipca 2026"
                    title="Mix rocka gitarowego — ściana gitar, która wciąż oddycha"
                    description="Współczesny rock żyje gęstością albo od niej umiera. Oto jak gitarzysta-realizator buduje ścianę gitar, która uderza mocno i nie zamienia się w błoto."
                />

                <div className="blog-prose flex flex-col gap-10 text-white/70 text-[16px] leading-relaxed">

                    {/* Intro */}
                    <div className="flex flex-col gap-4">
                        <p>Pisałem już o tym, <a href="/blog/blues-rock-mixing-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>jak słyszę blues rocka</a> — gatunek oszczędny, w którym każdy element jest odsłonięty i nie ma się gdzie schować. Rock gitarowy w nowoczesnym wydaniu to problem odwrotny. Nic nie jest odsłonięte, bo wszystko jest ułożone warstwami: dwa, cztery, czasem osiem śladów gitar rytmicznych, warstwy partii solowych, gęsty bas i perkusista walczący o to, żeby go było słychać.</p>
                        <p>Jako gitarzysta kocham tę gęstość — porządna ściana gitar to jeden z największych dźwięków w historii nagrań. Jako <a href="/pl/miks-i-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>realizator miksu</a> wiem, że to właśnie na niej wykłada się większość samodzielnie produkowanego rocka. Ślady są w porządku. Wykonania są w porządku. Ale wszystko zajmuje ten sam zakres częstotliwości w tym samym czasie i wychodzi głośna, szara plama. Ten artykuł jest o tym, jak tego uniknąć — konkretne decyzje, nie ogólniki.</p>
                    </div>

                    {/* Wall of guitars */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Ściana gitar zaczyna się u źródła</h2>
                        <p><strong className="text-white">Prawdziwe duble, nie kopie.</strong> Fundamentem każdego wielkiego rockowego brzmienia rytmicznego jest double-tracking: ta sama partia zagrana dwa razy i rozstawiona maksymalnie w lewo i w prawo. Te dwa wykonania nigdy nie są identyczne — drobne różnice timingu i intonacji między nimi to dosłownie to, co mózg odczytuje jako „szeroko”. Skopiowanie jednego podejścia na obie strony nie tworzy szerokości — tworzy jedną głośniejszą gitarę mono. Jeśli masz tylko jedno podejście, nagraj dubel. To najbardziej opłacalna godzina, jaką możesz poświęcić swojej produkcji.</p>
                        <p><strong className="text-white">Warstwuj brzmienia, nie tylko ślady.</strong> Przy dogrywaniu dubla zmień coś: inną pozycję przetwornika, inny wzmacniacz lub symulację, odrobinę inne ustawienie gainu. Dwa uzupełniające się brzmienia rozstawione w panoramie brzmią szerzej i gęściej niż dwa razy to samo, bo każda strona wnosi inną zawartość harmoniczną. Klasyczne zagranie: ciasne, jasne brzmienie z jednej strony, cieplejsze i grubsze z drugiej.</p>
                        <p><strong className="text-white">Mniej gainu, niż brzmi dobrze solo.</strong> Gitary high-gain źle się sumują — przester to już kompresja, a cztery nasycone ślady razem rozmywają się w szum. Trik, który zna każdy doświadczony producent rockowy: ustaw na każdym śladzie mniej gainu, niż brzmi imponująco w pojedynkę. Cztery umiarkowanie przesterowane ślady razem brzmią potężnie; cztery w pełni nasycone brzmią jak rój pszczół. Grubość dodają warstwy — gain nie musi.</p>

                        <div className="rounded-xl p-4 flex gap-3" style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)"}}>
                            <span className="text-lg flex-shrink-0">💡</span>
                            <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">Test mono dla dubli.</strong> Zsumuj miks do mono. Jeśli zdublowane gitary w większości znikają albo robią się puste, oba podejścia się gryzą — zwykle to kwestia timingu, czasem polaryzacji. Napraw ślady, nie korekcję. Dobry dubel przeżywa mono — robi się tylko węższy.</p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden w-full aspect-[16/9] relative">
                        <Image
                            src="/images/blog-guitar-rock-1.jpg"
                            alt="Cztery zdublowane ślady gitary rytmicznej rozstawione w panoramie w sesji DAW"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>

                    {/* Midrange war */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Wycinanie miejsca — wojna o średnicę</h2>
                        <p>Przesterowane gitary generują energię niemal wszędzie, ale żyją w średnicy — dokładnie tam, gdzie żyje wokal, gdzie trzaska werbel i gdzie bas definiuje swój dźwięk. W aranżacji opartej na gitarach średnica to pole bitwy, a miks jest traktatem pokojowym.</p>
                        <p><strong className="text-white">Wokal jest właścicielem 1–4 kHz.</strong> Tam siedzi zrozumiałość mowy i żadne podgłaśnianie wokalu nie naprawi gitary, która rozbiła obóz dokładnie na niej. Wycinam gitary rytmiczne wąsko, dokładnie w strefie, w której ten konkretny wokal potrzebuje powietrza — zwykle 2–3 dB gdzieś między 1,5 a 3 kHz, znalezione uchem, nie presetem. Zrobione dobrze — nikt nie słyszy cięcia; ludzie po prostu nagle rozumieją słowa.</p>
                        <p><strong className="text-white">Bas jest właścicielem podłogi.</strong> Filtruj górnoprzepustowo przesterowane gitary — zwykle gdzieś między 80 a 120 Hz zależnie od stroju — i pozwól basowi nieść ciężar samodzielnie. Riffy na tłumionych strunach mają zaskakująco dużo energii w 100–200 Hz; jeśli dół pompuje i rozmywa się na „chugach”, winowajcą jest zwykle właśnie ta strefa. Paradoks: gitary odfiltrowane w ten sposób brzmią w miksie <em>większe</em>, bo bas pod nimi jest wreszcie czysty.</p>
                        <p><strong className="text-white">Nie wycinaj charakteru.</strong> Klasyczna początkująca recepta na „błotniste gitary” to wielki dółek w średnicy. Gitara brzmi wtedy imponująco solo i jest niewidzialna w zespole — ta sama pułapka co ze wzmacniaczem na scenie. Wąskie, chirurgiczne cięcia tam, gdzie coś naprawdę koliduje, zachowują brzmienie; szerokie dołki je wymazują.</p>
                    </div>

                    {/* Drums */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Perkusja, która przebija się przez ścianę</h2>
                        <p><strong className="text-white">Werbel potrzebuje dwóch kotwic.</strong> Ciała około 200 Hz, żeby był solidny, i trzasku w strefie 3–5 kHz, żeby się przebijał. Gęste gitary maskują trzask jako pierwszy — dlatego werbel, który brzmiał potężnie na sesji perkusyjnej, znika w momencie, gdy wchodzą ślady rytmiczne. Balansuję werbel na tle pełnej ściany gitar, nigdy na wyciszonych śladach.</p>
                        <p><strong className="text-white">Kompresja równoległa to kod do rockowej perkusji.</strong> Mocno zgnieciona równoległa szyna perkusji — wysoki ratio, agresywna redukcja — wmieszana z powrotem na 20–30% pod czysty zestaw dodaje gęstości i ekscytacji, a suchy sygnał zachowuje żywą dynamikę. Tak żywo brzmiąca perkusja przeżywa obok czterech śladów przesteru.</p>
                        <p><strong className="text-white">Blachy i przesterowane gitary chcą tej samej działki.</strong> Jedne i drugie wypełniają strefę 6–10 kHz szumem. Dwie opcje: lekko przyciemnić gitary łagodnym filtrem dolnoprzepustowym i pozwolić blachom lśnić, albo okiełznać overheady i oddać górę gitarom. Świadomy wybór jednej z nich to różnica między „jasnym” a „ostrym”. Próba miania obu naraz to prosta droga do zmęczenia słuchu.</p>
                    </div>

                    {/* Arrangement dynamics */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Żeby refren naprawdę uderzył</h2>
                        <p>Jeśli w każdej sekcji utworu gra każda warstwa, refren nie może się powiększyć — nie ma już dokąd. Najgłośniejsza ściana w pokoju to ta, której sekundę wcześniej tam nie było.</p>
                        <p><strong className="text-white">Zostaw warstwy na refren.</strong> Zwrotki na jednym-dwóch śladach gitary, odrobinę węższych i suchszych; refreny otwierają się na pełną szerokość czterech śladów. Nawet gdy zespół nagrał gitary od ściany do ściany, często ściągam duble w zwrotkach albo zwężam ich panoramę, żeby refren miał co odsłonić.</p>
                        <p><strong className="text-white">Automatyka bije statyczny balans.</strong> Rockowy miks to nie fotografia, to film. Podciągnięcie wokalu o 1–2 dB przed hookiem, gitara solowa wypchnięta do przodu na osiem taktów i cofnięta, dodatkowa energia stopy w ostatnim refrenie — te małe ruchy sprawiają, że miks brzmi żywo i drogo. Większość mojego czasu przy rocku to automatyka, nie wtyczki.</p>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden w-full aspect-[16/9] relative">
                        <Image
                            src="/images/blog-guitar-rock-2.jpg"
                            alt="Analogowy wskaźnik VU na lampowym kompresorze masteringowym, w tle gitara elektryczna"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>

                    {/* Mastering */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Mastering rocka bez spłaszczania</h2>
                        <p>Gęsty rock z natury ma już bardzo mało zakresu dynamiki — gitary są skompresowane własnym przesterem, zanim dotknie ich jakakolwiek wtyczka. To czyni etap <a href="/pl/miks-i-mastering" style={{color: "#C9A84C", textDecoration: "underline"}}>masteringu</a> niebezpiecznym: nie ma zapasu na błąd, a przelimitowanie zabija jedyny dynamiczny element, który został — perkusję.</p>
                        <p>Dla rocka gitarowego ląduję zwykle między -10 a -12 LUFS integrated — konkurencyjna głośność, przy której werbel wciąż trzaska. Spotify i Apple Music i tak normalizują odtwarzanie, więc master zgnieciony do -8 LUFS nie jest dla słuchacza głośniejszy — jest tylko bardziej płaski. Normalizację przeżywa uderzenie, a uderzenie bierze się z transjentów, nie z ustawień limitera.</p>
                    </div>

                    {/* What to send */}
                    <div className="rounded-2xl p-6 flex flex-col gap-3"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-white font-semibold">Co wysłać, żeby efekt był najlepszy</h3>
                        <ul className="flex flex-col gap-2 text-white/60 text-sm">
                            <li>→ Każdy ślad wyeksportowany osobno od pierwszego taktu, wszystkie tej samej długości (<a href="/pl/blog/how-to-export-stems-for-mixing" style={{color: "#C9A84C"}}>pełny poradnik o stemach</a>)</li>
                            <li>→ Każdy dubel gitary rytmicznej jako osobny ślad — nie zgrywaj warstw razem</li>
                            <li>→ Suche ślady DI obok wydrukowanych brzmień, jeśli je masz</li>
                            <li>→ Żaden limiter ani kompresor na szynie master</li>
                            <li>→ Utwór referencyjny — płyta, której gęstości i uderzenia szukasz</li>
                            <li>→ BPM, tonacja i notatka, co w utworze najważniejsze</li>
                        </ul>
                    </div>

                    {/* FAQ */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Najczęstsze pytania</h2>
                        <div className="flex flex-col divide-y divide-white/5">
                            {faqs.map((item, i) => (
                                <div key={i} className="py-5 flex flex-col gap-2">
                                    <p className="text-white/90 font-medium text-base">{item.q}</p>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                         style={{background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)"}}>
                        <h3 className="text-xl font-semibold text-white">Nie wiesz, czego potrzebuje Twój utwór?</h3>
                        <p className="text-white/50 text-sm max-w-md">Wyślij go i posłuchaj darmowej 60-sekundowej zapowiedzi — szczera ocena i dokładna cena, bez zobowiązań.</p>
                        <a href="/pl/darmowy-fragment"
                           className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
                           style={{backgroundColor: "#C9A84C"}}>
                            Darmowy fragment →
                        </a>
                    </div>

                    <RelatedPosts slug="mixing-guitar-driven-rock" lang="pl" />

                </div>
            </div>
        </div>
    );
}
