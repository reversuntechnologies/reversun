"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Cloud, 
  Cpu, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from "lucide-react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection({ onSelectService }: { onSelectService?: (serviceTitle?: string) => void }) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");

  const handleInquiry = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      router.push("/contact");
    }
  };
  const [platformType, setPlatformType] = useState("cloud");
  const [projectScale, setProjectScale] = useState("growth");
  const [projectTimeline, setProjectTimeline] = useState("standard");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "ai", label: "AI & Automation" },
    { id: "product", label: "Web & Mobile" },
    { id: "design", label: "Design Systems" },
  ];

  const services = [
    {
      id: "cloud-arch",
      category: "cloud",
      icon: <Cloud size={28} />,
      title: "Enterprise Cloud & Microservices",
      desc: "Resilient cloud architectures built on Kubernetes, serverless, and multi-region failover designed to withstand peak enterprise loads.",
      tags: ["Kubernetes", "AWS / GCP", "Terraform", "Zero-Downtime"],
      metric: "99.999% SLA Guaranteed",
    },
    {
      id: "ai-agents",
      category: "ai",
      icon: <Cpu size={28} />,
      title: "Autonomous AI Agents & Workflows",
      desc: "Custom LLM orchestrations, retrieval-augmented systems (RAG), and intelligent agent pipelines that automate critical business decisions.",
      tags: ["LangChain", "Vector DBs", "Fine-Tuning", "Automated Ops"],
      metric: "68% Task Cost Reduction",
    },
    {
      id: "web-mobile",
      category: "product",
      icon: <Smartphone size={28} />,
      title: "High-Velocity Web & Mobile Apps",
      desc: "Full-stack web applications and cross-platform mobile apps engineered with Next.js and React Native for buttery-smooth performance.",
      tags: ["Next.js", "React Native", "TypeScript", "Micro-Frontends"],
      metric: "<100ms P99 Latency",
    },
    {
      id: "design-systems",
      category: "design",
      icon: <Palette size={28} />,
      title: "UI/UX Product Design Systems",
      desc: "Compelling design systems, motion interactions, and scalable Figma component tokens tailored to convert and inspire users.",
      tags: ["Design Tokens", "Figma", "Micro-Interactions", "Accessibility"],
      metric: "+42% Conversion Boost",
    },
    {
      id: "devops-security",
      category: "cloud",
      icon: <ShieldCheck size={28} />,
      title: "DevOps & Zero-Trust Cyber Resilience",
      desc: "Automated GitOps CI/CD pipelines, container hardening, compliance guardrails, and SOC2-ready cloud security postures.",
      tags: ["GitOps", "ArgoCD", "SOC2 Compliance", "Vulnerability Scans"],
      metric: "15-Min Safe Deployments",
    },
    {
      id: "data-lakehouse",
      category: "ai",
      icon: <Database size={28} />,
      title: "Real-Time Streaming & Lakehouses",
      desc: "High-throughput data streaming architectures, Kafka pipelines, and unified analytics lakehouses for instant decision-making.",
      tags: ["Apache Kafka", "ClickHouse", "BigQuery", "Streaming ETL"],
      metric: "5M+ Events/Second",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  // Estimator calculation logic
  const getEstimate = () => {
    let base = 25;
    if (platformType === "ai") base += 15;
    if (platformType === "cloud") base += 12;
    if (platformType === "mobile") base += 10;

    if (projectScale === "startup") base *= 0.7;
    if (projectScale === "enterprise") base *= 2.2;

    if (projectTimeline === "urgent") base *= 1.25;

    const formatted = Math.round(base);
    return {
      price: `$${formatted}k - $${formatted + 15}k`,
      duration:
        projectTimeline === "urgent"
          ? "3-5 Weeks (Accelerated)"
          : projectScale === "enterprise"
          ? "10-14 Weeks"
          : "6-8 Weeks",
      team:
        projectScale === "enterprise"
          ? "Principal Architect, 3 Senior Devs, AI Specialist, Dedicated QA"
          : "Lead Full-Stack Architect, 2 Product Engineers, UI/UX Lead",
    };
  };

  const estimate = getEstimate();

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionPre}>
              <Sparkles size={16} />
              <span>Services & Capabilities</span>
            </div>
            <h2 className={styles.sectionTitle}>
              End-to-End Engineering <br />
              Built for Real Scale.
            </h2>
          </div>
          <p className={styles.sectionDesc}>
            From zero to mission-critical infrastructure, Reversun combines deep cloud
            architecture, artificial intelligence, and high-craft design to ship standout software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterTabBtn} ${
                activeCategory === cat.id ? styles.activeFilterTab : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSummary}>{service.desc}</p>
                <div className={styles.tagsRow}>
                  {service.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.impactMetric}>
                  <Zap size={14} />
                  <span>{service.metric}</span>
                </div>
                <button
                  className={styles.cardActionLink}
                  onClick={() => handleInquiry(service.title)}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Inquire</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Estimator Tool */}
        <div className={styles.estimatorBox}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#FC6235", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
              <Zap size={16} />
              <span>Instant Interactive Estimator</span>
            </div>
            <h3 className={styles.estimatorLeftTitle}>
              Estimate Your Next Engineering Milestone
            </h3>
            <p className={styles.estimatorLeftDesc}>
              Select your parameters below to see an immediate projection of team structure,
              timeline, and budget range.
            </p>

            <div className={styles.selectorGroup}>
              <span className={styles.selectorLabel}>1. Engineering Scope</span>
              <div className={styles.optionsRow}>
                {[
                  { id: "cloud", label: "Cloud & Infrastructure" },
                  { id: "ai", label: "AI Agents & Automation" },
                  { id: "mobile", label: "Web / Mobile Platform" },
                  { id: "custom", label: "Full Digital Ecosystem" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPlatformType(opt.id)}
                    className={`${styles.optionChip} ${
                      platformType === opt.id ? styles.activeOptionChip : ""
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.selectorGroup}>
              <span className={styles.selectorLabel}>2. Scale Tier</span>
              <div className={styles.optionsRow}>
                {[
                  { id: "startup", label: "Seed / MVP" },
                  { id: "growth", label: "Growth / Scale-up" },
                  { id: "enterprise", label: "Global Enterprise" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProjectScale(opt.id)}
                    className={`${styles.optionChip} ${
                      projectScale === opt.id ? styles.activeOptionChip : ""
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.selectorGroup}>
              <span className={styles.selectorLabel}>3. Delivery Pace</span>
              <div className={styles.optionsRow}>
                {[
                  { id: "standard", label: "Standard Cadence" },
                  { id: "urgent", label: "Fast-Track Sprint ⚡" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProjectTimeline(opt.id)}
                    className={`${styles.optionChip} ${
                      projectTimeline === opt.id ? styles.activeOptionChip : ""
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Estimator Result Card */}
          <div className={styles.estimatorCardRight}>
            <div>
              <span style={{ fontSize: 13, textTransform: "uppercase", color: "#A3B5CC", fontWeight: 700, letterSpacing: 0.8 }}>
                Projected Investment
              </span>
              <div className={styles.estimatePriceTag}>
                {estimate.price}
                <span>/ project</span>
              </div>
            </div>

            <div className={styles.teamSpecRow}>
              <div className={styles.teamSpecItem}>
                <span>Projected Timeline</span>
                <strong style={{ color: "#FFFFFF" }}>{estimate.duration}</strong>
              </div>
              <div className={styles.teamSpecItem} style={{ flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <span>Dedicated Squad Composition</span>
                <strong style={{ color: "#FFFFFF", fontSize: 13, lineHeight: 1.4 }}>
                  {estimate.team}
                </strong>
              </div>
            </div>

            <button
              className={styles.estimateActionBtn}
              onClick={() => handleInquiry(`Estimate Scope: ${platformType} (${projectScale})`)}
            >
              <span>Lock In This Scope & Squad</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
