import { Suspense } from "react";
import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Engineering Team | Project & Product Inquiries",
  description:
    "Get in touch with Reversun senior engineers. Inquire about Presenza, QuanBit, Web & Mobile App Development, AI & Automation, Cloud Management, or System Design via info@reversun.com.",
  alternates: {
    canonical: "https://www.reversun.com/contact",
  },
  openGraph: {
    title: "Contact Reversun Engineering",
    description:
      "Direct technical inquiry channel for Reversun software products and engineering services. Guaranteed response within 120 minutes.",
    url: "https://www.reversun.com/contact",
  },
  keywords: [
    "Contact Reversun",
    "info@reversun.com",
    "Software Engineering Inquiry",
    "Presenza Deployment",
    "QuanBit Inquiry",
    "Custom Software Development India",
    "Technical Consultation",
  ],
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
      <ContactView />
    </Suspense>
  );
}
