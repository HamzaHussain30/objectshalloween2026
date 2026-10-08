import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SALE } from "@/lib/sale";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Objects Halloween Sale — ${SALE.percent}% off every Shopify app`,
  description:
    "Shopify apps that solve one problem properly: conversion, retention, B2B wholesale and design. Free plans, live in minutes, cancel anytime.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} antialiased`}>
      {/* extensions like ColorZilla add attributes to <body> before hydration */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
