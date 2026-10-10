import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductSection from "@/components/ProductSection";

export const metadata: Metadata = {
  title: "Proprietary Products | Reversun Technologies",
  description:
    "Explore Reversun CloudMesh™, Reversun FlowEngine™, and Reversun Sentinel AI™ with interactive live telemetry and architecture blueprints.",
};

export default function ProductPage() {
  const pills = [
    { dot: "#FC6235", label: "CLOUDMESH™", sub: "Multi-Cloud Self-Healing" },
    { dot: "#00A854", label: "FLOWENGINE™", sub: "10M+ Event Stream/Sec" },
    { dot: "#3B82F6", label: "SENTINEL AI™", sub: "Predictive Ops Copilot" },
    { dot: "#8B5CF6", label: "FAST FAILOVER", sub: "Sub-120ms Automated" },
    { dot: "#F59E0B", label: "SLA GUARANTEE", sub: "99.999% Availability" },
  ];

  return (
    <div>
      <PageHeader
        pageName="Product"
        titleLine1="THE CORE,"
        titleLine2="IN ITS"
        titleLine3="OWN"
        previewText="3-LAYER TECH"
        titleLine4="POWER"
        subtitle="Explore our proprietary software platforms engineered to power self-healing multi-cloud infrastructure, real-time event streams, and predictive telemetry."
        pills={pills}
      />
      <ProductSection />
    </div>
  );
}
