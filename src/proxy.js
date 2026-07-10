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
    const { pathname } = req.nextUrl;

    // Admin pages — a logged-out visitor gets redirected to the login form.
    const isAdminRoute = pathname.startsWith("/admin");

    // Data-changing API routes — the "back doors". Public pages read the DB
    // directly through the server pool, NOT through these routes, so guarding
    // them does not affect anything visitors see. Only the admin panel calls
    // these (with the auth cookie), and login/contact stay open below.
    const isProtectedApi =
        pathname.startsWith("/api/enhancements") ||
        pathname.startsWith("/api/videos") ||
        pathname.startsWith("/api/test");

    if (!isAdminRoute && !isProtectedApi) return NextResponse.next();

    const secret = process.env.AUTH_SECRET || process.env.DB_PASSWORD || "";
    const token = req.cookies.get("auth")?.value;
    const valid = await verifyToken(token, secret);

    if (!valid) {
        // API callers get a clean 401 (a redirect would confuse a fetch());
        // page visitors get bounced to the login form as before.
        if (isProtectedApi) {
            return Response.json(
                { success: false, message: "Unauthorized" },
                { status: 401 },
            );
        }
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/api/enhancements/:path*",
        "/api/videos/:path*",
        "/api/test",
    ],
};
