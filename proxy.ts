import { NextRequest, NextResponse } from "next/server";

// Casual access gate so only board members stumble onto the site before
// launch. This is NOT real security -- the credentials are not secret.
const SITE_USER = "board";
const SITE_PASSWORD = "CreatedToShineRocks!";

export function proxy(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");
    if (scheme === "Basic" && encoded) {
      const [user, password] = atob(encoded).split(":");
      if (user === SITE_USER && password === SITE_PASSWORD) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Created to Shine Ministries"',
    },
  });
}

export const config = {
  // Exclude Next's internal asset routes and any static file (images, fonts,
  // etc.) under /public -- otherwise next/image's internal self-fetch for a
  // public asset gets blocked by this same gate and breaks image loading.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|woff|woff2|ttf)$).*)",
  ],
};
