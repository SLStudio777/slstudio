import pool from "@/settings/db";

export async function GET(req, { params }) {
    try {
        const { id } = await params;

        const [enhancements] = await pool.query(
            `SELECT * FROM enhancements WHERE id = ? LIMIT 1`,
            [id]
        )

        const enhancement = enhancements[0];

        if (!enhancement) {
            return Response.json(
                { success: false, message: "Enhancement not found" },
                { status: 404 }
            )
        }

        return Response.json({ success: true, enhancement })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { title, file_before, file_after, is_active, section = "home" } = body;

        if (!title || !file_before || !file_after) {
            return Response.json(
                { success: false, message: "Data are required" },
                { status: 400 }
            )
        }

        await pool.query(
            `UPDATE enhancements
             SET title = ?, file_before = ?, file_after = ?, is_active = ?, section = ?
             WHERE id = ?`,
            [title, file_before, file_after, is_active, section, id]
        )

        return Response.json({ success: true, message: "Enhancement was updated" })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}

export async function PATCH(req, { params }) {
    try {
        const { id } = await params;

        await pool.query(
            `UPDATE enhancements SET is_active = NOT is_active WHERE id = ?`,
            [id]
        )

        return Response.json({ success: true, message: "Status was updated" })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;

        await pool.query(
            `UPDATE enhancements SET is_active = 0 WHERE id = ?`,
            [id]
        )

        return Response.json({ success: true, message: "Enhancement was hidden" })

    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}
