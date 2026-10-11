import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${montserrat.variable} ${montserrat.className}`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={montserrat.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
