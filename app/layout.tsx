import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  metadataBase: new URL("https://www.reversun.com"),
  title: {
    default: "Reversun | Reverse Engineering Software, AI, Cloud & Products",
    template: "%s | Reversun",
  },
  description:
    "Reversun is an engineering company building high-impact proprietary software products (Presenza, QuanBit) and delivering Web & App Development, AI & Automation, Cloud Infrastructure, and System Design.",
  alternates: {
    canonical: "https://www.reversun.com",
  },
  keywords: [
    "Reversun",
    "Reverse Engineering Software",
    "Software Engineering Company",
    "Web and App Development",
    "Full-Stack Web Development",
    "Mobile App Development",
    "AI and Automation",
    "Autonomous Agent Workflows",
    "Cloud Infrastructure",
    "Cloud Management",
    "System Design",
    "High-Scale Distributed Systems",
    "Presenza",
    "1-Minute Smart Attendance App",
    "College Attendance System",
    "QuanBit",
    "Quantum Algorithm Learning Platform",
    "quanbit.tech",
    "Software Company India",
  ],
  authors: [{ name: "Reversun", url: "https://www.reversun.com" }],
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
    url: "https://www.reversun.com",
    siteName: "Reversun",
    images: [
      {
        url: "/REVERSUN LOGO.png",
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
    images: ["/REVERSUN LOGO.png"],
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
        "@id": "https://www.reversun.com/#organization",
        "name": "Reversun",
        "url": "https://www.reversun.com",
        "logo": "https://www.reversun.com/REVERSUN%20LOGO.png",
        "email": "info@reversun.com",
        "foundingLocation": {
          "@type": "Country",
          "name": "India",
        },
        "description":
          "Reversun is a technology and software engineering company that builds proprietary products (Presenza, QuanBit) and delivers full-stack Web & Mobile Development, AI & Automation, Cloud Management, and System Design services.",
        "sameAs": [
          "https://github.com/reversuntechnologies",
          "https://www.quanbit.tech"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Automation",
              "description": "Custom intelligent workflows, autonomous LLM agent pipelines, process automation, and RAG architectures.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web & App Development",
              "description": "High-velocity web applications, modern responsive interfaces, and cross-platform mobile apps.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure & Management",
              "description": "Multi-cloud orchestration across AWS, Azure, and Supabase with container meshes and 99.99% reliability.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "System Design",
              "description": "High-load distributed systems, microservices design, and zero-bottleneck data flow.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.reversun.com/#website",
        "url": "https://www.reversun.com",
        "name": "Reversun",
        "description": "Creative Technology & Engineering Company",
        "publisher": { "@id": "https://www.reversun.com/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.reversun.com/#presenza",
        "name": "Presenza",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "description": "Intelligent, high-speed attendance application engineered to complete full classroom and college attendance in approximately 1 minute, eliminating roll-call delays and proxy errors.",
        "author": { "@id": "https://www.reversun.com/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://quanbit.tech/#software",
        "name": "QuanBit",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "url": "https://www.quanbit.tech",
        "description": "Interactive quantum computing and algorithm learning platform featuring live Qiskit Aer simulation, 3D Bloch sphere visualization with entanglement support, and Schrödinger AI Socratic tutoring.",
        "author": { "@id": "https://www.reversun.com/#organization" },
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
