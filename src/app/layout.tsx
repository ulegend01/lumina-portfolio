import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina | Web3 Community Manager & Project Contributor",
  description: "Lumina helps early Web3 projects keep their communities active, informed, and easier to trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-brand-bg text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
