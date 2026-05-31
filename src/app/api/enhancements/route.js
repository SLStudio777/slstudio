import pool from "@/settings/db";

export async function GET() {
    try {
        const [enhancements] = await pool.query(`
            SELECT *
            FROM enhancements
            ORDER BY created_at DESC
        `)

        return Response.json({
            success: true,
            enhancements,
        })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, file_before, file_after, is_active = 1, section = "home" } = body;

        if (!title || !file_before || !file_after) {
            return Response.json(
                { success: false, message: "Data are required" },
                { status: 400 }
            )
        }

        const [result] = await pool.query(
            `INSERT INTO enhancements (title, file_before, file_after, is_active, section)
             VALUES (?, ?, ?, ?, ?)`,
            [title, file_before, file_after, is_active, section]
        )

        return Response.json({
            success: true,
            message: "Enhancement was created successfully",
            id: result.insertId,
        })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}
