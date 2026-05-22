import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nick Clayton | AI Systems & Technical Modernization",
  description:
    "Portfolio showcasing AI-enabled systems, technical modernization, operational analytics, and strategic problem-solving across defense and emerging technology environments.",

  openGraph: {
    title: "Nick Clayton | AI Systems & Technical Modernization",
    description:
      "Portfolio focused on AI-enabled systems, operational modernization, technical leadership, and strategic analysis.",
    url: "https://nickclayton-ai.com",
    siteName: "Nick Clayton Portfolio",
    images: [
      {
        url: "/headshot.png",
        width: 1200,
        height: 630,
        alt: "Nick Clayton Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
