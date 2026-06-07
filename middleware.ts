import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const lang = req.nextUrl.pathname.startsWith("/en") ? "en" : "sl";
  const res = NextResponse.next();
  res.headers.set("x-url-lang", lang);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|avif|gif|ico|pdf|xml|txt|woff|woff2)).*)",
  ],
};
