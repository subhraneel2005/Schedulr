import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import SessionProviderWrapper from "@/lib/SessionProviderWrapper";

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
            <main>{children}</main>
            <Toaster position="bottom-right" richColors  />
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
