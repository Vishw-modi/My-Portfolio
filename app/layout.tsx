import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"], // add weights you need
});

export const metadata: Metadata = {
  title: "Vishw Modi - Full-Stack Developer Portfolio",
  description:
    "Professional portfolio of Vishw Modi, a passionate Computer Engineering student and Full-Stack Developer specializing in React, Next.js, Node.js backend development, and Data Analytics, leveraging modern web technologies to build innovative solutions.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Data Analytics",
    "Portfolio",
    "Computer Engineering",
    "Web Development",
    "Backend Development",
  ],
  openGraph: {
    title: "Vishw Modi - Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing innovative full-stack web development projects, backend expertise in Node.js, and skills in Data Analytics.",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
