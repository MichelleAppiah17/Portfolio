import type { Metadata } from "next";
import { Fraunces, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michelle Appiah — AI & Cybersecurity Engineer",
  description:
    "Portfolio of Michelle Appiah — Computer Science graduate and researcher working across artificial intelligence, cybersecurity, and intelligent systems.",
  keywords: [
    "Michelle Appiah",
    "AI Researcher",
    "Cybersecurity",
    "Software Engineer",
    "Ghana",
    "KNUST",
    "Women in Tech",
  ],
  openGraph: {
    title: "Michelle Appiah — AI & Cybersecurity Engineer",
    description:
      "Computer Science graduate and researcher working across AI, cybersecurity, and intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${poppins.variable} ${spaceMono.variable}`}
    >
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
