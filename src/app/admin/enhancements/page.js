export const dynamic = "force-dynamic";
import pool from "@/settings/db";

import { Pencil } from "lucide-react";
import AdminHeader from "@/app/components/sections/admin/AdminHeader";
import TableHeader from "@/app/components/sections/admin/TableHeader";
import LinkIcon from "@/app/components/sections/admin/LinkIcon";
import CreateBtn from "@/app/components/sections/admin/CreateBtn";
import DeleteBtn from "@/app/components/sections/admin/DeleteBtn";

export default async function EnhancementsPage() {
    const [enhancements] = await pool.query(`
        SELECT *
        FROM enhancements
        ORDER BY created_at DESC
    `);

    return (
        <section className="py-10 flex flex-col gap-10">
            <AdminHeader partName="Enhancements" />
            <CreateBtn title="Create Enhancement" href="/admin/enhancements/create" />

            <div className="rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden">
                <TableHeader gridCols="grid-cols-[1fr_1fr_1fr_100px_100px]">
                    <span>Title</span>
                    <span>File Before</span>
                    <span>File After</span>
                    <span></span>
                    <span></span>
                </TableHeader>

                <div className="flex flex-col">
                    {enhancements.map((enhancement) => (
                        <div
                            key={enhancement.id}
                            className="
                                grid grid-cols-[1fr_1fr_1fr_100px_100px]
                                items-center px-6 py-4
                                border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition
                            "
                        >
                            <div className="text-white/80 font-medium">
                                {enhancement.title}
                            </div>
                            <div className="text-white/80">
                                {enhancement.file_before}
                            </div>
                            <div className="text-white/80">
                                {enhancement.file_after}
                            </div>
                            <LinkIcon icon={Pencil} title="Edit" href={`/admin/enhancements/${enhancement.id}`} />
                            <DeleteBtn 
                                url={`/api/enhancements/${enhancement.id}`} 
                                isActive={enhancement.is_active}
                                title={enhancement.is_active ? "Visible" : "Hidden"} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}