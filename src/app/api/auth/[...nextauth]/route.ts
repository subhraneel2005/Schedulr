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
          scope: 'openid email profile https://www.googleapis.com/auth/calendar.events'
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



