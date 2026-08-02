import { NextResponse } from "next/server";

const protectedRoutes  = [
    '/profile',
    '/dashboard',
    '/cart',
    '/orders',
    '/add-product',
    '/update-product'
];

const authRoutes = [
    '/signIn',
    '/signUp'
];

function proxy(request){
    // console.log("Inside Middleware||Proxy -> ");
    const token = request.cookies.get("access_token");
    const path = request.nextUrl.pathname;
    // console.log("Token in middleware => ", token);
    if(protectedRoutes.includes(path) && !token){
        return NextResponse.redirect(new URL('/signIn', request.url));
    }

    if(authRoutes.includes(path) && token){
        return NextResponse.redirect(new URL('/profile', request.url));
    }
    return NextResponse.next();
}

export default proxy;

export const config = {
    matcher : [
        "/dashboard/:path*",
        "/profile/:path*",
        "/orders/:path*",
        "/cart",
        "/signIn",
        "/signUp"
    ]
};