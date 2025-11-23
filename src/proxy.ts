import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

const ADMIN_PATH = "/admin"
const SIGN_IN_PATH = "/sign-in"

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = await getToken({ req: request })

    const isSignedIn = !!token

    if (isSignedIn && pathname.startsWith(SIGN_IN_PATH)) {
        return NextResponse.redirect(new URL(ADMIN_PATH, request.url))
    }

    if (!isSignedIn && pathname.startsWith(ADMIN_PATH)) {
        return NextResponse.redirect(new URL(SIGN_IN_PATH, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/sign-in",
    ]
}