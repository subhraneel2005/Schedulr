import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        email: user?.email!,
      },
    });

    if (!dbUser) {
      return NextResponse.json("User not found in database!", { status: 404 });
    }

    const prismaUser = await prisma.user.findUnique({
      where: {
        email: user.email!
      },
      select: {
        name: true,
        image: true,
        googleCalendarConnected: true,
      },
    });

    if (!prismaUser) {
        return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(JSON.stringify(prismaUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching user info:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
