import type { Metadata } from "next";
import ClientsView from "@/components/ClientsView";

export const metadata: Metadata = {
  title: "Clients | Reversun - Client Partnerships & Projects",
  description:
    "Upcoming case study rollouts and enterprise client collaborations are currently documented under strict NDA confidentiality.",
  keywords: [
    "Reversun Clients",
    "Client Partnerships",
    "Software Case Studies",
    "Enterprise Deployments",
    "NDA Protected",
  ],
};

export default function ClientsPage() {
  return <ClientsView />;
}
