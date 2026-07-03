import pool from "@/settings/db";
import bcrypt from "bcrypt";
import crypto from "crypto";
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

        // Signed token: "<userId>.<expiresMs>.<hmac>" — verified in src/proxy.js
        const secret = process.env.AUTH_SECRET || process.env.DB_PASSWORD || "";
        const expires = Date.now() + 60 * 60 * 24 * 7 * 1000;
        const payload = `${user.id}.${expires}`;
        const signature = crypto.createHmac("sha256", secret).update(payload).digest("hex");

        cookieStore.set("auth", `${payload}.${signature}`, {
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