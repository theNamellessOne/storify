import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storify",
  description: "Suka suka suka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={font.className + " bg-zinc-900 dark text-white min-h-screen"}
      >
        {children}
      </body>
    </html>
  );
}
