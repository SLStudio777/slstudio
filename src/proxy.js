import { NextResponse } from "next/server";

const encoder = new TextEncoder();

// Token format: "<userId>.<expiresMs>.<hmacSha256Hex>"
async function verifyToken(token, secret) {
    if (!token || !secret) return false;
    const parts = token.split(".");
    if (parts.length !== 3) return false;
    const [id, exp, sig] = parts;
    if (!/^\d+$/.test(exp) || Date.now() > Number(exp)) return false;

    const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
    );
    const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(`${id}.${exp}`));
    const expected = Array.from(new Uint8Array(mac))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    if (expected.length !== sig.length) return false;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
    return diff === 0;
}

export async function proxy(req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    if (!isAdminRoute) return NextResponse.next();

    const secret = process.env.AUTH_SECRET || process.env.DB_PASSWORD || "";
    const token = req.cookies.get("auth")?.value;
    const valid = await verifyToken(token, secret);

    if (!valid) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
}
