import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import about from "@/content/about.json";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${about.name} · ${about.role}`;
const description = about.summary;

export const metadata: Metadata = {
  metadataBase: new URL("https://mukundganesh.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://mukundganesh.com",
    siteName: about.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://mukundganesh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-page">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-page text-textPrimary antialiased`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}

