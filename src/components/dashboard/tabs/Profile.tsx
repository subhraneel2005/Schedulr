import { useSession, signOut } from 'next-auth/react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, LogOut } from "lucide-react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (<div>Login first</div>);
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="rounded-[22px] w-full dark:border-[#030e2e] border-[#77849d] dark:bg-[#020a25] bg-[#c6ccd7]">
        <CardContent  className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar Section */}
            <Avatar className="w-24 h-24">
              <AvatarImage src={session?.user?.image!} className="object-cover" />
              <AvatarFallback className="text-2xl">
                {session?.user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* User Info Section */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                {session?.user?.name}
              </h2>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{session?.user?.email}</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-2 pb-6">
          <Button 
            variant="destructive" 
            onClick={() => signOut()}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}