export default function TableHeader({gridCols, children}) {
    return (
        <div
            className={`
                grid ${gridCols} px-6 py-4 
                border-b border-white/5
                text-white/40 text-xs uppercase tracking-[0.2em]
            `}
        >
            { children }
        </div>
    )
}