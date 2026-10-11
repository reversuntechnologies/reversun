import { Suspense } from "react";
import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Us | Reversun - Inquire for Services & Products",
  description:
    "Get in touch with Reversun. Inquire about Presenza, QuanBit, Web & App Development, AI & Automation, Cloud Management, or System Design via info@reversun.com.",
  keywords: [
    "Contact Reversun",
    "info@reversun.com",
    "Software Engineering Inquiry",
    "Presenza Inquiry",
    "QuanBit Inquiry",
    "Hire Reverse Engineering Team",
  ],
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
      <ContactView />
    </Suspense>
  );
}
