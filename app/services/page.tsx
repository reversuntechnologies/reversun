import type { Metadata } from "next";
import ServicesView from "@/components/ServicesView";

export const metadata: Metadata = {
  title: "Services | Reversun - AI, Web & App, Cloud Infrastructure, System Design",
  description:
    "Turning ambitious architectural roadmaps into high-throughput software reality. Specialized engineering built for enterprise resilience and extreme load.",
  keywords: [
    "Reversun Services",
    "AI & Automation",
    "Web & App Development",
    "Cloud Infrastructure",
    "System Design",
    "Software Engineering Firm",
    "Autonomous Agents",
    "Enterprise Software",
  ],
};

export default function ServicesPage() {
  return <ServicesView />;
}
