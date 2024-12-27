"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const { data: session, update } = useSession();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await signIn("google", {
        callbackUrl: window.location.href,
        scope:
          "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events",
      });
      // Force session refresh to update googleCalendarConnected status
      await update();
    } catch (error) {
      console.error("Failed to connect calendar:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  if (!session) return null;

  return session.user.googleCalendarConnected ? (
    <div className="min-h-screen w-full justify-center items-center flex flex-col">
      <Button variant="outline" className="gap-2" disabled>
        Calendar Connected
        <img src="/google-calendar.png" alt="gc" className="w-6 h-6" />
      </Button>
    </div>
  ) : (
    <div className="min-h-screen w-full justify-center items-center flex flex-col">
      <Button variant="outline" onClick={handleConnect} className="gap-2" disabled={isConnecting}>
        {isConnecting ? "Connecting..." : "Connect Calendar"}
        <img src="/google-calendar.png" alt="gc" className="w-6 h-6" />
      </Button>
    </div>
  );
}
