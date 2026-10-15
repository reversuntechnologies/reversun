import type { Metadata } from "next";
import ClientsView from "@/components/ClientsView";
import SearchContent from "@/components/SearchContent";

export const metadata: Metadata = {
  title: "Client Partnerships & Case Studies | Reversun",
  description:
    "Upcoming enterprise case studies, production benchmarks, and client collaborations currently undergoing NDA confidentiality clearance.",
  alternates: {
    canonical: "https://www.reversun.com/clients",
  },
  openGraph: {
    title: "Client Partnerships & Case Studies | Reversun",
    description:
      "Enterprise software deployments, architecture benchmarks, and institutional case studies by Reversun.",
    url: "https://www.reversun.com/clients",
  },
  keywords: [
    "Reversun Clients",
    "Client Partnerships",
    "Software Case Studies",
    "Enterprise Deployments",
    "NDA Protected Architecture",
    "Production Benchmarks",
  ],
};

export default function ClientsPage() {
  return (
    <>
      <ClientsView />
      <div className="container">
        <SearchContent variant="clients" />
      </div>
    </>
  );
}
