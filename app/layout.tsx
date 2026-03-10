import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Photosnap",
  description:
    "Share your stories, explore features, and manage plans with Photosnap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} mx-auto flex min-h-screen max-w-360 flex-col border-l border-r border-neutral-800 bg-red-500 antialiased`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
