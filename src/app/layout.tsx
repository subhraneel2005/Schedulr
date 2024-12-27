import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Schedulr",
  description: "Easily connect your doc with calendar and make events",
  openGraph: {
    title: "Schedulr",
    description: "Easily connect your doc with calendar and make events",
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
    description: "Easily connect your doc with calendar and make events",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
