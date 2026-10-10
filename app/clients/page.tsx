import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: "Clients & Impact | Reversun Technologies",
  description:
    "See verified ROI metrics and client case studies from global leaders across fintech, logistics, clean energy, and healthtech.",
};

export default function ClientsPage() {
  const pills = [
    { dot: "#FC6235", label: "ZCAN", sub: "Logistics & Fleet" },
    { dot: "#00A854", label: "ECOPULS", sub: "IoT Grid Telemetry" },
    { dot: "#3B82F6", label: "BASHTECH", sub: "High-Freq Clearing" },
    { dot: "#8B5CF6", label: "NOVAPULSE", sub: "Genomics Lakehouse" },
    { dot: "#F59E0B", label: "SOLVANCE", sub: "Fraud Shield AI" },
  ];

  return (
    <div>
      <PageHeader
        pageName="Clients"
        titleLine1="THE WORK,"
        titleLine2="IN ITS"
        titleLine3="OWN"
        previewText="ENTERPRISE ROI"
        titleLine4="LIGHT"
        subtitle="Scroll in and witness how Reversun partners with ambitious global enterprises to ship mission-critical software, resilient cloud systems, and scalable digital architectures."
        pills={pills}
      />
      <ClientsSection />
    </div>
  );
}
