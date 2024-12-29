import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Screen from '@/components/dashboard/Screen';
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/?warning=Please sign in to access your dashboard");
  }

  return (
    <>
    <Screen />
  </>
  );
}