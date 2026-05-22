import Image from "next/image";

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
                            Mixing Service
                        </span>
                        <h1 className="
                            text-4xl md:text-6xl
                            font-semibold
                            leading-tight
                            tracking-wide
                        ">
                            Mixing &{" "}
                            <span className="text-gold2">
                                Mastering
                            </span>
                        </h1>
                        <p className="
                            text-xl md:text-2xl
                            text-white/60
                            leading-relaxed
                            max-w-2xl
                        ">
                            When every instrument finally finds its place
                        </p>
                        <p className="mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime sequi quia, vel excepturi impedit perspiciatis veritatis rerum neque itaque, consequuntur beatae obcaecati laboriosam accusamus ducimus facere ipsam expedita commodi!
                        </p>

                    </div>
                </div>
                <div className="w-full aspect-[16/9] relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/Serhii-Lazariev-02.JPG"
                        alt="Serhii Lazariev"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1024px"
                        loading="eager" 
                    />
                </div>
            </div>
        </section>
    )
}