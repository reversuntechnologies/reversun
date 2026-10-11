import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reversun.com"),
  title: {
    default: "Reversun | Reverse Engineering Software, AI, Cloud & Products",
    template: "%s | Reversun",
  },
  description:
    "Reversun is a premier software engineering company built on reverse engineering principles. Specialized in Web & App Development, AI & Automation, Cloud Management, System Design, Presenza, and QuanBit.",
  keywords: [
    "Reversun",
    "Reverse Engineering Software",
    "Software Engineering Company",
    "Web and App Development",
    "Web Development",
    "Mobile App Development",
    "AI and Automation",
    "Artificial Intelligence Solutions",
    "Cloud Management",
    "Cloud Infrastructure",
    "DevOps and Cloud",
    "System Design",
    "High-Scale Architecture",
    "Presenza",
    "Presenza Attendance App",
    "College Attendance Software",
    "QuanBit",
    "Quantum Algorithm Learning Platform",
    "quanbit.tech",
    "Custom Software Engineering",
  ],
  authors: [{ name: "Reversun", url: "https://reversun.com" }],
  creator: "Reversun",
  publisher: "Reversun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/REVERSUN ICON.svg",
    apple: "/REVERSUN ICON.svg",
  },
  openGraph: {
    title: "Reversun | Reverse Engineering Software, AI, Cloud & Products",
    description:
      "Reversun builds modern Web & App solutions, AI automations, cloud management architectures, and breakthrough products like Presenza and QuanBit.",
    url: "https://reversun.com",
    siteName: "Reversun",
    images: [
      {
        url: "/REVERSUN LOGO.svg",
        width: 1200,
        height: 630,
        alt: "Reversun Software Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reversun | Reverse Engineering Software, AI, Cloud & Products",
    description:
      "Reversun builds modern Web & App solutions, AI automations, cloud management architectures, and breakthrough products like Presenza and QuanBit.",
    images: ["/REVERSUN LOGO.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://reversun.com/#organization",
        "name": "Reversun",
        "url": "https://reversun.com",
        "logo": "https://reversun.com/REVERSUN%20LOGO.svg",
        "email": "info@reversun.com",
        "description":
          "Reversun is a software engineering company built on the principles of reverse engineering, delivering Web & App Development, AI & Automation, Cloud Management, and System Design.",
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Automation",
              "description": "Custom intelligent workflows, autonomous LLM agent pipelines, and process automation.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web & App Development",
              "description": "High-velocity web applications and cross-platform mobile apps.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Management",
              "description": "Cloud infrastructure orchestration, CI/CD automation, and 24/7 reliability management.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "System Design",
              "description": "High-load distributed systems, microservices, and database architecture.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://reversun.com/#website",
        "url": "https://reversun.com",
        "name": "Reversun",
        "publisher": { "@id": "https://reversun.com/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "name": "Presenza",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "description": "Smart, rapid institutional and college attendance application taking batch attendance in approximately 1 minute.",
        "author": { "@id": "https://reversun.com/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "name": "QuanBit",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "url": "https://quanbit.tech",
        "description": "AI-based quantum algorithm learning and interactive simulation platform.",
        "author": { "@id": "https://reversun.com/#organization" },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${spaceGrotesk.className}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/REVERSUN ICON.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
