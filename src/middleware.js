import { NextResponse } from "next/server";

export function middleware(req) {
    const auth = req.cookies.get("auth")?.value;
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute && !auth) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
}