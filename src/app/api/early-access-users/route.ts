import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ message: "Name and email are required." }), { status: 400 });
    }

    // Check if email already exists
    const existingUser = await prisma.earlyAccessUsers.findFirst({
      where: { 
        email: email
       },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ message: "This email has already been registered." }), { status: 409 });
    }

    // Add new user to the database
    await prisma.earlyAccessUsers.create({
      data: {
        name,
        email,
      },
    });

    return new Response(JSON.stringify({ message: "User successfully registered." }), { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
}
