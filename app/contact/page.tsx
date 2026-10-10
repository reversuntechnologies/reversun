import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Reversun Technologies",
  description:
    "Submit your technical brief or schedule a 15-minute architecture discovery call with Reversun's Principal Solutions Architects.",
};

export default function ContactPage() {
  const pills = [
    { dot: "#FC6235", label: "2-HR SLA", sub: "Guaranteed Response" },
    { dot: "#00A854", label: "DISCOVERY CALL", sub: "15-Min Architecture Sync" },
    { dot: "#3B82F6", label: "STACK AUDIT", sub: "Feasibility Review" },
    { dot: "#8B5CF6", label: "FULL IP RIGHTS", sub: "100% Client Owned" },
    { dot: "#F59E0B", label: "SPRINT ZERO", sub: "Rapid Deployment" },
  ];

  return (
    <div>
      <PageHeader
        pageName="Contact Us"
        titleLine1="THE BRIEF,"
        titleLine2="IN ITS"
        titleLine3="OWN"
        previewText="2-HOUR SLA"
        titleLine4="SPEED"
        subtitle="Speak directly with our technical partners and lead solutions architects. Send your requirements and receive technical feasibility analysis within hours."
        pills={pills}
      />
      <ContactSection />
    </div>
  );
}
