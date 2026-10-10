import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reversun | Next-Gen Enterprise Software & Cloud Innovation",
  description:
    "Reversun builds intelligent cloud platforms, AI automations, and modern digital products that empower ambitious businesses to scale and lead.",
  keywords: [
    "Reversun",
    "Enterprise Software",
    "Cloud Architecture",
    "AI Automation",
    "Product Engineering",
  ],
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo-icon.png" />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
