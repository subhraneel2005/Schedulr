"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export default function EarlyAccessPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    if (name == "" || email == "") {
      toast.error("Enter all the details then submit");
    } else {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await fetch("/api/early-access-users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });
        const data = await response.json();
        if (response.ok) {
          toast.success("Successfully registered!");
        } else {
          toast.error(data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred while submitting the form.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen w-full justify-center items-center flex flex-col">
      <h1 className="text-4xl max-w-md md:max-w-3xl px-4 font-bold mb-4 flex text-center">
        Connect Your Google Calendar
      </h1>

      <Card className="md:w-[450px] w-[340px] mt-14">
        <CardHeader>
          <CardTitle>Fill out this form</CardTitle>
          <CardDescription>
            We will use your email address to connect your Google calendar to your
            Schedulr dashboard. Once connected, you can easily create events
            from your documents and it automatically adds to your calendar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </CardContent>
        <CardFooter>
          <Button disabled={loading} className="w-full" onClick={handleSubmit}>
            {!loading ? "Submit" : "Please wait..."}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
