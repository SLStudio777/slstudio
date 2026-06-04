import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mt-16">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="
                            text-white/40
                            text-xs
                            uppercase
                            tracking-[0.3em]
                        ">
                            Production Service
                        </span>
                        <h1 className="
                            text-4xl md:text-6xl
                            font-semibold
                            leading-tight
                            tracking-wide
                        ">
                            Arrangement &{" "}
                            <span className="text-gold2">
                                Production
                            </span>
                        </h1>
                        <p className="
                            text-xl md:text-2xl
                            text-white/60
                            leading-relaxed
                            max-w-2xl
                        ">
                            From a raw idea to a full professional track
                        </p>
                        <p className="mt-4 text-white/50 text-[15px] leading-relaxed max-w-xl">
                            A guitar riff, a voice memo, a rehearsal recording — that's enough to start. I build complete arrangements around your ideas. Any genre, remote workflow, worldwide.
                        </p>
                        <div className="mt-4">
                            <Link
                                href="/contact"
                               className="
    inline-flex items-center gap-2
    text-black
    px-6 py-3 rounded-xl
    font-medium text-sm
    hover:opacity-90 transition
"
style={{backgroundColor: "#C9A84C"}}
                            >
                                Send Your Idea →
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Serhii-Lazariev-03.png"
                        alt="Serhii Lazariev"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 1024px"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}