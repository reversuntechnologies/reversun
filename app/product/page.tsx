import type { Metadata } from "next";
import ProductView from "@/components/ProductView";

export const metadata: Metadata = {
  title: "Proprietary Software Products | Presenza & QuanBit",
  description:
    "Explore Reversun's proprietary software products: Presenza, our 1-minute smart attendance application, and QuanBit, our AI-based quantum algorithm learning platform.",
  alternates: {
    canonical: "https://www.reversun.com/product",
  },
  openGraph: {
    title: "Proprietary Software Products | Reversun",
    description:
      "Explore Reversun's proprietary software products: Presenza (1-minute attendance application) and QuanBit (AI-based quantum computing learning platform).",
    url: "https://www.reversun.com/product",
  },
  keywords: [
    "Reversun Products",
    "Presenza",
    "Presenza Attendance App",
    "College Attendance Application",
    "1-Minute Smart Attendance",
    "QuanBit",
    "Quantum Algorithm Learning Platform",
    "Quantum Computing Education",
    "Qiskit Aer Simulation",
    "quanbit.tech",
  ],
};

export default function ProductPage() {
  return <ProductView />;
}
