import { Film, AudioWaveform } from "lucide-react"
import AdminHeader from "../components/sections/admin/AdminHeader";
import Card from "../components/cards/Card";

export default function AdminPage() {
    return (
        <section className="py-10 flex flex-col gap-10">
            <AdminHeader />
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    <Card 
                        icon={Film} 
                        title="Videos" 
                        description="YouTube projects"
                        href="/admin/videos" 
                    />
                    <Card 
                        icon={AudioWaveform} 
                        title="Enhancements" 
                        description="Before-After Demo Tracks"
                        href="/admin/enhancements" 
                    />
                </div>
            </div>
        </section>
    )
}