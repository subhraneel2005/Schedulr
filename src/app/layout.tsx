import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import SessionProviderWrapper from "@/lib/SessionProviderWrapper";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/commons/Navbar";

export const metadata: Metadata = {
  title: "Schedulr",
  description:
    "Easily connect your doc with calendar and make events. Take action today and boost your productivity.",
  openGraph: {
    title: "Schedulr",
    description:
      "Easily connect your doc with calendar and make events. Take action today and boost your productivity.",
    url: "https://schedulr-v1.vercel.app/",
    type: "website",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Schedulr Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedulr",
    description:
      "Easily connect your doc with calendar and make events. Take action today and boost your productivity.",
    images: ["/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative min-h-screen overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 -translate-x-1/2 h-[400px] w-[800px] rounded-full blur-[100px] dark:bg-blue-700/20" />

                <GridPattern
                  x={-1}
                  y={-1}
                  className={cn(
                    "opacity-50",
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
                  )}
                />
              </div>
              <Navbar />
              {children}
            </main>
            <Toaster position="bottom-right" richColors />
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
