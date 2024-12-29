import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

// This protects ALL routes under /dashboard
export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/",
  },
});

// Must include this for the middleware to work
export const config = {
  matcher: ["/dashboard/:path*"],
};