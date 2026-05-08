import type { Metadata } from "next";
import { Geist, Italianno, Italiana } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hospitality Interactive Experience",
  description:
    "Premium hospitality digital experience built with Next.js and modern frontend motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${italianno.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
