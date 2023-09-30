import { NextResponse } from "next/server";

export function middleware(request){
    if(!request.cookies.has("traintime_token")){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
        '/avaliacao/:path*',
        '/exercicios/:path*'
    ]
}