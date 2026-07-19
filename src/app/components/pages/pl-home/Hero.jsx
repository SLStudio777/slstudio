"use client";
import Image from "next/image";
import Link from "next/link";
import { User, RefreshCw, Clock, Shuffle, AudioLines } from "lucide-react";
import HeroCard from "../../cards/HeroCard";
import HeroWave from "../../common/HeroWave";
import HeroStats from "../../common/HeroStats";
import LangSwitch from "../../common/LangSwitch";

// Polish mirror of the home Hero. Deliberately NOT a byte-copy of the English
// one: no `md:justify-between` column-stretching (it left gaps in the past) and
// the photo uses a fixed aspect ratio instead of grid-stretch, so nothing can
// slide. Columns flow naturally with gaps. Text is Polish.

const services = [
    {
        icon: Shuffle,
        title: "Miks i mastering",
        description: "Twój utwór — wyważony, dopracowany i zmasterowany, aż zabrzmi tak, jak słyszysz go w głowie, i będzie konkurował na każdej platformie. Stemy, roboczy miks albo stare nagranie: wyślij, co masz.",
        href: "/pl/miks-i-mastering",
    },
    {
        icon: AudioLines,
        title: "Aranżacja i produkcja",
        description: "Riff, notatka głosowa, nagranie z próby — to wystarczy, żeby zacząć. Buduję pełne aranżacje wokół Twojego pomysłu: gitary, bas, klawisze, perkusja, smyczki. Każdy gatunek, od jednego instrumentu po pełną produkcję.",
        href: "/pl/aranzacja-i-produkcja",
    },
];

const stats = [
    { value: "300+", label: "Zmiksowanych utworów" },
    { value: "10+", label: "Lat za konsolą" },
    { value: "Każdy gatunek", label: "Od bluesa po elektronikę" },
];

const trustBullets = [
    { icon: User, text: "Bezpośredni kontakt z prawdziwym producentem — bez agencji i pośredników" },
    { icon: RefreshCw, text: "Poprawki w cenie, aż będziesz zadowolony" },
    { icon: Clock, text: "Większość projektów gotowa w 3–5 dni roboczych" },
];

export default function Hero() {
    return (
        <section className="mt-8 mb-10">
            {/* Row 1 — pitch + services | photo. Grid items-stretch: the left
                column (taller) sets the row height, the photo stretches to match
                so its bottom lands on the service-cards bottom. No justify-between. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <div className="flex flex-col gap-8 mobile-reflow">
                    <div className="flex flex-col gap-5 [@media(max-width:767px)]:order-1">
                        <div>
                            <span className="text-white/40 text-xs uppercase tracking-[0.3em]">
                                Warszawa, Polska
                            </span>
                            <div className="relative mt-3">
                                <div className="hero-title-glow" aria-hidden="true" />
                                <h1 className="relative text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
                                    Surowe w <span className="text-[#f5b942]">Gotowe</span>
                                </h1>
                            </div>
                        </div>
                        <HeroWave />
                        <p className="text-white/70 text-md md:text-lg leading-relaxed">
                            Warszawskie studio miksu, masteringu, aranżacji i produkcji. Wyślij robocze demo, stare nagranie albo sam pomysł — resztą zajmę się ja.{" "}
                            <Link href="/pl/darmowy-fragment" className="text-[#f5b942] hover:text-[#C9A84C] transition whitespace-nowrap">
                                Darmowy fragment →
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 [@media(max-width:767px)]:order-3">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Profesjonalne usługi audio
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                            {services.map(el => (
                                <HeroCard
                                    key={el.title}
                                    icon={el.icon}
                                    title={el.title}
                                    description={el.description}
                                    href={el.href}
                                    cta="Zobacz więcej"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Photo column — right-aligned EN/PL strip above, photo (flex-1)
                    fills the stretched column, so its bottom matches the cards. */}
                <div className="flex flex-col [@media(max-width:767px)]:order-2">
                    <div className="flex justify-end mb-2 h-8 items-center">
                        <LangSwitch active="pl" enHref="/" plHref="/pl" />
                    </div>
                    <div className="w-full flex-1 min-h-0 aspect-[16/9] md:aspect-auto relative rounded-xl overflow-hidden">
                        <Image
                            src="/images/Serhii-Lazariev.webp"
                            alt="Serhii Lazariev — realizator miksu i masteringu w swoim studiu w Warszawie"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>

            {/* Row 2 — stats + trust | About me. Natural flow (items-start). */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-start">
                <div className="flex flex-col gap-6 [@media(max-width:767px)]:order-4">
                    <div className="flex flex-col gap-4">
                        <p className="text-white/45 text-xs uppercase tracking-widest">
                            Dla niezależnych artystów · od 39 $ za utwór · zdalnie, na całym świecie
                        </p>
                        <HeroStats items={stats} />
                    </div>
                    <div className="flex flex-col gap-3">
                        {trustBullets.map(({ icon: Icon, text }, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: "rgba(201,168,76,0.1)" }}>
                                    <Icon className="w-4 h-4" style={{ color: "#C9A84C" }} />
                                </div>
                                <span className="text-white/65 text-sm">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3 [@media(max-width:767px)]:order-5">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Gitarzysta · Producent · Realizator
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                        O mnie
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                        Jestem Serhii Lazariev — gitarzysta, wokalista i producent muzyczny z Warszawy. Blues-rock, funk, jazz-rock, indie — siedzę w tym na tyle długo, żeby wiedzieć, co sprawia, że nagranie żyje.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        Wyślij mi to, co masz — nagranie z telefonu, gitarowy szkic, na wpół gotowe demo. Razem ustalamy, czego tak naprawdę potrzebuje utwór. Miks, mastering, aranżacja, nowe partie. Czasem pełny remont, czasem kilka poprawek.
                    </p>
                    <Link href="/pl/kontakt" className="text-[#f5b942] hover:text-[#C9A84C] transition leading-relaxed w-fit">
                        Wyślij mi, co masz.
                    </Link>
                </div>
            </div>
        </section>
    );
}
