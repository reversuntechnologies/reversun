import type { Metadata } from "next";
import ServicesView from "@/components/ServicesView";

export const metadata: Metadata = {
  title: "Engineering Services | AI, Web & App Development, Cloud & System Design",
  description:
    "Explore Reversun's core engineering services: AI & Automation, Web & Mobile App Development, Cloud Infrastructure orchestration, and high-scale System Design.",
  alternates: {
    canonical: "https://www.reversun.com/services",
  },
  openGraph: {
    title: "Engineering Services | Reversun",
    description:
      "Turning ambitious architectural roadmaps into high-throughput software reality. Specialized engineering built for enterprise resilience and extreme load.",
    url: "https://www.reversun.com/services",
  },
  keywords: [
    "Reversun Services",
    "AI & Automation",
    "Web & App Development",
    "Cloud Infrastructure",
    "System Design",
    "Full-Stack Web Development",
    "Mobile Application Development",
    "Autonomous Agent Workflows",
    "Enterprise Software Solutions",
  ],
};

export default function ServicesPage() {
  return <ServicesView />;
}
