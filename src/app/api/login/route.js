import pool from "@/settings/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return Response.json(
                { success: false, message: "Login error" },
                { status: 400 }
            )
        }

        const [rows] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        const user = rows[0];

        if (!user) {
            return Response.json(
                { success: false, message: "User not found" },
                { status: 404 }
            )
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return Response.json(
                { success: false, message: "Invalid password" },
                { status: 401 }
            )
        }

        const cookieStore = await cookies();

        cookieStore.set("auth", String(user.id), {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        })

        return Response.json({
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                email: user.email,
            },
        })
    } catch (error) {
        return Response.json(
            { success: false, message: error.message },
            { status: 500 }
        )
    }
}