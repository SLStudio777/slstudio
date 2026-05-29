import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
})

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <div className="container py-4 flex items-center justify-between">
                {/* Brand */}
                <Link 
                    href="/"
                    className={`${bebasNeue.className} text-gold2 text-2xl tracking-widest`}
                >
                    SL STUDIO
                </Link>
                {/* Nav */}
                <ul className="flex items-center gap-8 text-white/70 text-[15px] font-medium tracking-wide">
                    <li>
                        <Link
                            href="/" 
                            className="hover:text-gold2 transition"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mixing-mastering"
                            className="hover:text-gold2 transition"
                        >
                            Mixing & Mastering
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/arrangement"
                            className="hover:text-gold2 transition"
                        >
                            Arrangement
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="
                                px-4 py-2 rounded-lg
                                text-black font-semibold
                                hover:opacity-90 transition"
                            style={{backgroundColor: "#C9A84C"}}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}ы