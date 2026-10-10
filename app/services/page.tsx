import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services & Capabilities | Reversun Technologies",
  description:
    "Enterprise cloud engineering, autonomous AI agent pipelines, high-velocity web/mobile platforms, and UI/UX design systems.",
};

export default function ServicesPage() {
  const pills = [
    { dot: "#FC6235", label: "CLOUD MESH", sub: "Kubernetes & Multi-Cloud" },
    { dot: "#00A854", label: "AI AGENTS", sub: "Autonomous LLM Workflows" },
    { dot: "#3B82F6", label: "WEB & MOBILE", sub: "Next.js & React Native" },
    { dot: "#8B5CF6", label: "GITOPS", sub: "Zero-Trust Resilience" },
    { dot: "#F59E0B", label: "DATA LAKEHOUSE", sub: "Streaming Real-Time ETL" },
  ];

  return (
    <div>
      <PageHeader
        pageName="Services"
        titleLine1="THE CRAFT,"
        titleLine2="IN ITS"
        titleLine3="OWN"
        previewText="CLOUD & AI"
        titleLine4="DEPTH"
        subtitle="Explore our specialized capabilities from distributed cloud architecture to autonomous AI agents, design systems, and high-velocity product engineering."
        pills={pills}
      />
      <ServicesSection />
    </div>
  );
}
