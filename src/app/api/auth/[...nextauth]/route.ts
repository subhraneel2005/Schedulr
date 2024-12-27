import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
      authorization: {
        params: {
          scope: 'openid email profile https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events',
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      if (account?.scope?.includes("https://www.googleapis.com/auth/calendar")) {
        await prisma.user.update({
          where: { id: user.id },
          data: { googleCalendarConnected: true }
        });
      }
      return true;
    },
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          googleCalendarConnected: user.googleCalendarConnected
        }
      };
    }
  },
  secret: process.env.NEXTAUTH_SECRET!
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export { authOptions };