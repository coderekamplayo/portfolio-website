import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SITE_URL, resumeData } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Christian Derek S. Amplayo | Software Engineer";
const description =
  "Software engineer focused on backend development and AI-integrated systems — Node.js/TypeScript, SAP ABAP, and system architecture. TOPCIT Level 3 certified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: resumeData.contact.name }],
  keywords: [
    "Christian Derek Amplayo",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "SAP ABAP",
    "System Architecture",
    "Backend Developer",
    "AI-integrated systems",
  ],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: resumeData.contact.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: SITE_URL,
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
