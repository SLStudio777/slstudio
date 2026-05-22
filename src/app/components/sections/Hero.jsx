import Image from "next/image";
import HeroCard from "../cards/HeroCard";
import { servicesData } from "@/data/temporaryData";

export default function Hero() {
    return (
        <section className="mt-16 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left */}
                <div className="flex flex-col gap-10">
                    <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-wide">
                        Your Sound, <span className="text-[#f5b942]">Elevated.</span>
                    </h1>
                    <p className="text-white/70 text-md md:text-lg leading-relaxed">
                        I take rough recordings and transform them into polished, professional tracks - mixing, mastering, arrangement, and production from Warsaw to the world.
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                        Professional Audio Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {servicesData.map(el => (
                            <HeroCard
                                key={el.id} 
                                icon={el.icon} 
                                title={el.title}
                                description={el.description}
                                href={el.href}
                            />
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col gap-6">
                    <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden">
                        <Image
                            src="/images/Serhii-Lazariev.JPG"
                            alt="Serhii Lazariev"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1024px"
                            loading="eager" 
                        />
                    </div>
                    {/* Description */}
                    <div className="mt-6 flex flex-col gap-4 text-md leading-relaxed">
                        <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
                            About me
                        </h2>
                        <p>
                            I'm Serhii Lazariev - guitarist, vocalist, and music producer based in Warsaw, Poland. 
                            With years of experience across blues-rock, funk, jazz-rock, and indie, I understand what makes a recording feel alive.
                        </p>
                        <p>
                            My process is simple: you send me your recordings - demos, rehearsals, rough tracks - and I return 
                            something you'll actually want to release. Arrangement, mixing, mastering, new instrumentation - 
                            whatever your track needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}