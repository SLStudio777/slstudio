import Link from "next/link";

// Small EN / PL language switch for the pages that have a real twin in the
// other language (mixing-mastering ↔ pl/miks-i-mastering, arrangement ↔
// pl/aranzacja-i-produkcja). Lives inside those Hero components only, so it
// never appears on pages without a translated counterpart.
//
//   active: "en" | "pl"  — the current page's language (shown highlighted,
//           not a link). The other label links to the twin page.
function Item({ label, href, active }) {
    if (active) {
        return (
            <span className="text-[#f5b942] font-semibold" aria-current="true">
                {label}
            </span>
        );
    }
    return (
        <Link href={href} className="text-white/65 hover:text-[#f5b942] transition">
            {label}
        </Link>
    );
}

export default function LangSwitch({ enHref, plHref, active }) {
    return (
        <div className="flex justify-end">
            <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs uppercase tracking-widest"
                aria-label="Language / Język"
            >
                <Item label="EN" href={enHref} active={active === "en"} />
                <span className="text-white/20">/</span>
                <Item label="PL" href={plHref} active={active === "pl"} />
            </div>
        </div>
    );
}
