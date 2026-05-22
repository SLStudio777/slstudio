import pool from "@/settings/db";

export async function GET(req, { params }) {
    try {
        const { id } = await params;

        const [videos] = await pool.query(
            `
                SELECT *
                FROM videos
                WHERE id = ?
                LIMIT 1
            `,
            [id]
        )

        const video = videos[0];

        if (!video) {
            return Response.json(
                {
                    success: false,
                    message: "Video not found",
                },
                {
                    status: 404,
                }
            )
        }

        return Response.json({
            success: true,
            video,
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

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { title, video_id, is_active } = body;

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

        await pool.query(
            `
                UPDATE videos
                SET
                    title = ?,
                    video_id = ?,
                    is_active = ?
                WHERE id = ?
            `,
            [
                title,
                video_id,
                is_active,
                id,
            ]
        )

        return Response.json({
            success: true,
            message: "Video updated",
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

export async function PATCH(req, { params }) {
    try {
        const { id } = await params;

        await pool.query(
            `
                UPDATE videos
                SET is_active = NOT is_active
                WHERE id = ?
            `,
            [id]
        )

        return Response.json({
            success: true,
            message: "Status updated",
        })

    } catch (error) {
        return Response.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        )
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await pool.query(
            `
                UPDATE videos
                SET is_active = 0
                WHERE id = ?
            `,
            [id]
        )

        return Response.json({
            success: true,
            message: "Video hidden",
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
