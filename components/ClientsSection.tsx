"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, Building2, Star, CheckCircle } from "lucide-react";
import styles from "./ClientsSection.module.css";

export default function ClientsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const metrics = [
    { value: "50+", label: "Global Enterprise Clients", highlight: true },
    { value: "$4.2B+", label: "Transaction Volume Handled", highlight: false },
    { value: "4.5x", label: "Average Performance Gain", highlight: true },
    { value: "99.99%", label: "Core Service Availability", highlight: false },
  ];

  const caseStudies = [
    {
      id: "bashtech",
      brand: "BASHTECH",
      industry: "fintech",
      industryLabel: "Fintech & Banking",
      title: "Real-time High Frequency Clearing Infrastructure",
      summary:
        "Modernized monolithic transaction processing into a zero-latency distributed event streaming engine capable of handling flash-sale spikes.",
      stat1: "+340%",
      stat1Label: "Throughput",
      stat2: "0.4ms",
      stat2Label: "Latency",
      quote:
        "Reversun engineered a core architecture that never flinched even when our traffic multiplied 10x overnight.",
      author: "Marcus Vance",
      role: "VP of Engineering, Bashtech",
    },
    {
      id: "ecopuls",
      brand: "ECOPULS",
      industry: "cleantech",
      industryLabel: "Clean Energy & IoT",
      title: "Grid Telemetry & Carbon Intelligence Pipeline",
      summary:
        "Engineered an IoT ingestion mesh collecting real-time sensor telemetry across 45,000 renewable energy sites worldwide.",
      stat1: "12 sec",
      stat1Label: "Batch vs 4 hrs",
      stat2: "$2.1M",
      stat2Label: "Cloud Savings",
      quote:
        "The speed, craft, and architectural depth of Reversun's team changed the trajectory of our IoT platform.",
      author: "Elena Rostova",
      role: "Chief Technology Officer, Ecopuls",
    },
    {
      id: "zcan",
      brand: "ZCAN",
      industry: "logistics",
      industryLabel: "Logistics & Supply Chain",
      title: "Autonomous Fleet Routing & Warehouse Dispatch",
      summary:
        "Deployed self-optimizing AI routing agents integrated with custom warehouse management microservices across 18 countries.",
      stat1: "99.8%",
      stat1Label: "On-time SLA",
      stat2: "-44%",
      stat2Label: "Dispatch Idle",
      quote:
        "We went from manual spreadsheets to real-time automated dispatch in just 7 weeks. Flawless execution.",
      author: "Tariq Al-Mansoor",
      role: "Head of Digital Ops, Zcan",
    },
    {
      id: "novapulse",
      brand: "NOVAPULSE",
      industry: "healthtech",
      industryLabel: "HealthTech & Genomics",
      title: "HIPAA-Compliant Decentralized Clinical Data Hub",
      summary:
        "Engineered zero-trust federated research lakehouse allowing hospital systems to collaborate securely without exposing patient PII.",
      stat1: "100%",
      stat1Label: "SOC2 & HIPAA",
      stat2: "14x",
      stat2Label: "Query Speed",
      quote:
        "Reversun delivered uncompromising security without sacrificing a millisecond of computational speed.",
      author: "Dr. Sarah Lindqvist",
      role: "Director of Biomedical Informatics",
    },
    {
      id: "solvance",
      brand: "SOLVANCE",
      industry: "fintech",
      industryLabel: "Fintech & Banking",
      title: "Autonomous Fraud Shield & Risk Scoring",
      summary:
        "Deployed real-time inference models scoring 85,000 credit card operations per minute with sub-10ms decisioning.",
      stat1: "99.95%",
      stat1Label: "Precision",
      stat2: "< 8ms",
      stat2Label: "Eval Time",
      quote:
        "Working with Reversun gave us the caliber of an elite Silicon Valley engineering core.",
      author: "Devon Chen",
      role: "Chief Risk Officer, Solvance",
    },
    {
      id: "nexus",
      brand: "NEXUS CLOUD",
      industry: "logistics",
      industryLabel: "Cloud Platform",
      title: "Multi-Region Cloud Kubernetes Migration",
      summary:
        "Migrated legacy virtual machine clusters into a self-healing Kubernetes GitOps ecosystem across 4 global cloud regions.",
      stat1: "0 min",
      stat1Label: "Downtime Cutover",
      stat2: "62%",
      stat2Label: "Compute Trim",
      quote:
        "Reversun handled our multi-cloud migration with zero customer interruption. They are master engineers.",
      author: "Kenji Sato",
      role: "Infrastructure Lead, Nexus",
    },
  ];

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === activeFilter);

  return (
    <section id="clients" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.preTitle}>
              <Sparkles size={16} />
              <span>Proven Impact & Clients</span>
            </div>
            <h2 className={styles.title}>
              Built for Leaders. <br />
              Trusted by Ambitious Brands.
            </h2>
          </div>
          <p className={styles.desc}>
            We partner with industry-defining organizations to engineer scalable software,
            streamline architecture, and accelerate time-to-market.
          </p>
        </div>

        {/* Big Metrics Grid */}
        <div className={styles.metricsGrid}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.metricCard}>
              <div
                className={`${styles.metricValue} ${
                  m.highlight ? styles.metricValueOrange : ""
                }`}
              >
                {m.value}
              </div>
              <div className={styles.metricLabel}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Industry Filter Buttons */}
        <div className={styles.filterRow}>
          {[
            { id: "all", label: "All Case Studies" },
            { id: "fintech", label: "Fintech & Banking" },
            { id: "cleantech", label: "CleanTech & IoT" },
            { id: "logistics", label: "Supply Chain & Logistics" },
            { id: "healthtech", label: "HealthTech & Life Sciences" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`${styles.filterBtn} ${
                activeFilter === cat.id ? styles.activeFilterBtn : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className={styles.caseStudiesGrid}>
          {filtered.map((study) => (
            <div key={study.id} className={styles.caseCard}>
              <div>
                <div className={styles.cardHead}>
                  <span className={styles.clientBrand}>{study.brand}</span>
                  <span className={styles.industryTag}>{study.industryLabel}</span>
                </div>
                <h3 className={styles.caseTitle}>{study.title}</h3>
                <p className={styles.caseSummary}>{study.summary}</p>

                <div className={styles.metricBadgeRow}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>{study.stat1}</div>
                    <div className={styles.statCaption}>{study.stat1Label}</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>{study.stat2}</div>
                    <div className={styles.statCaption}>{study.stat2Label}</div>
                  </div>
                </div>
              </div>

              <div className={styles.quoteBox}>
                <p className={styles.quoteText}>&ldquo;{study.quote}&rdquo;</p>
                <div className={styles.clientAuthor}>
                  <div className={styles.authorAvatar}>
                    {study.author.charAt(0)}
                  </div>
                  <div className={styles.authorMeta}>
                    <strong>{study.author}</strong>
                    <span>{study.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
