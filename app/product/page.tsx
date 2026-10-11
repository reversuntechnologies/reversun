import type { Metadata } from "next";
import ProductView from "@/components/ProductView";

export const metadata: Metadata = {
  title: "Products | Reversun - Presenza & QuanBit",
  description:
    "Explore Reversun's proprietary software products: Presenza, our 1-minute smart attendance application, and QuanBit, our AI-based quantum algorithm learning platform.",
  keywords: [
    "Reversun Products",
    "Presenza",
    "Presenza Attendance App",
    "College Attendance Application",
    "QuanBit",
    "Quantum Algorithm Learning Platform",
    "AI Quantum Computing",
    "quanbit.tech",
  ],
};

export default function ProductPage() {
  return <ProductView />;
}
