import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  supportedLocales,
  localeCookieName,
  isLocale,
} from "./src/config/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Get locale from cookie or use default
  let locale = request.cookies.get(localeCookieName)?.value;
  
  if (!locale || !isLocale(locale)) {
    locale = defaultLocale;
  }

  const response = NextResponse.next();
  response.headers.set("x-next-locale", locale);
  response.cookies.set(localeCookieName, locale, { path: "/" });

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
