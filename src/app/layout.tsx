import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SITE_URL } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Christian Derek S. Amplayo | Software Engineer",
  description:
    "Software engineer focused on production-grade Node.js/TypeScript backends, enterprise SAP ABAP, and system architecture. TOPCIT Level 3 certified.",
  authors: [{ name: "Christian Derek S. Amplayo" }],
  keywords: [
    "Christian Derek Amplayo",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "SAP ABAP",
    "System Architecture",
    "Backend Developer",
  ],
  openGraph: {
    title: "Christian Derek S. Amplayo | Software Engineer",
    description:
      "Software engineer focused on production-grade Node.js/TypeScript backends, enterprise SAP ABAP, and system architecture.",
    url: SITE_URL,
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
