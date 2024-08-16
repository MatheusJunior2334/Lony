import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isProtectedPage = req.nextUrl.pathname.startsWith('/loja');

    if (!token && isProtectedPage) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/loja', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/loja'],
}