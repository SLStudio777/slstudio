import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import LogoutBtn from "../../buttons/LogoutBtn";

export default function AdminHeader({partName=""}) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <span className="text-white/50 text-xs uppercase tracking-[0.25em]">
                    Control Panel
                </span>
                <h1 className="mt-2 text-2xl font-semibold tracking-wide">
                    Dashboard {partName && `/ ${partName}` }
                </h1>
            </div>
            <div className="flex flex-wrap gap-6">
                { partName && <Link
                        href={"/admin"}
                        className="
                            text-white/70 hover:text-gold2 transition
                            flex items-center gap-1
                        "
                    >    
                        <LayoutDashboard size={20}/>
                        <span>Dashboard</span>
                    </Link>
                }
                <LogoutBtn />
            </div>
        </div>
    )
}