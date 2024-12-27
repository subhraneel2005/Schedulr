import { google } from 'googleapis';
import prisma from './prisma';

export async function getGoogleCalendarClient(userId: string) {
  const account = await prisma.account.findFirst({
    where: { 
      userId,
      provider: 'google'
    }
  });

  if (!account) {
    throw new Error("Google account not connected");
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET,
    `${process.env.NEXTAUTH_URL}/api/auth/callback/google`
  );

  oauth2Client.setCredentials({
    access_token: account.access_token,
    refresh_token: account.refresh_token,
    expiry_date: account.expires_at ? account.expires_at * 1000 : null
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}