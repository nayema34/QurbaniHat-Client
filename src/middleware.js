// middleware.js
import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect dynamic animal detail pages
  if (pathname.match(/^\/animals\/[^/]+$/)) {
    try {
      const { data: session } = await betterFetch("/api/auth/get-session", {
        baseURL: request.nextUrl.origin,
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
      });

      if (!session?.user) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/animals/:id*"],
};