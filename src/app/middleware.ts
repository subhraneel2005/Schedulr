import { withAuth } from "next-auth/middleware";

// This protects ALL routes under /dashboard
export default withAuth(function middleware() {}, {
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