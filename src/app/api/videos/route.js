import pool from "@/settings/db";

export async function GET() {
    try {
        const [videos] = await pool.query(`
            SELECT *
            FROM videos
            ORDER BY created_at DESC
        `)

        return Response.json({
            success: true,
            videos,
        })

    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, video_id, is_active = 1 } = body;

        if (!title || !video_id) {
            return Response.json(
                {
                    success: false,
                    message: "Title and video_id are required",
                },
                {
                    status: 400,
                }
            )
        }

        const [result] = await pool.query(
            `
                INSERT INTO videos (
                    title,
                    video_id,
                    is_active
                )
                VALUES (?, ?, ?)
            `, [title, video_id, is_active]
        )

        return Response.json({
            success: true,
            message: "Video was created successfull",
            id: result.insertId,
        })

    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            {
                status: 500,
            }
        )
    }
}    