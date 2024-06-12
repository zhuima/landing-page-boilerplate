import { locales } from "./lib/i18n";

import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isExit = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (isExit) return;

  if (pathname.startsWith("/api")) {
    // Allow API requests to proceed without redirection
    return;
  }

  request.nextUrl.pathname = `/`;
  return Response.redirect(request.nextUrl);
}

export const config = {
  // matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api).*)"],
  // matcher: [
  //   "/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api/).*)",
  // ],
  matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$).*)"],
};
