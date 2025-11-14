import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.AUTH_SECRET
    });

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/admin/sign-in")) return NextResponse.next();

    if (pathname.startsWith("/admin")) {
        if (!token) {
        const loginUrl = new URL("/admin/sign-in", req.url);
        return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
};