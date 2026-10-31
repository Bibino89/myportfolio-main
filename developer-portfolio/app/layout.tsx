import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibino SN | Software Engineer",
  description: "Bibino SN — Software Engineer with 3.5 years of frontend development experience in React, Next.js and TypeScript.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
