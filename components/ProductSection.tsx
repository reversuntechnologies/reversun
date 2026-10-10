"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Server, 
  Workflow, 
  BrainCircuit, 
  Check, 
  ArrowRight, 
  Terminal, 
  Activity, 
  Sparkles,
  Layers
} from "lucide-react";
import styles from "./ProductSection.module.css";

export default function ProductSection({ onRequestDemo }: { onRequestDemo?: (productName?: string) => void }) {
  const router = useRouter();
  const [activeProduct, setActiveProduct] = useState("cloudmesh");

  const handleDemoAction = (productName: string) => {
    if (onRequestDemo) {
      onRequestDemo(productName);
    } else {
      router.push("/contact");
    }
  };

  const products = {
    cloudmesh: {
      id: "cloudmesh",
      name: "Reversun CloudMesh™",
      tagline: "Autonomous Multi-Cloud Mesh",
      category: "Layer 1: Infrastructure Core",
      icon: <Server size={20} />,
      desc: "An intelligent distributed service mesh that dynamically balances multi-cloud traffic, isolates microservice failures, and auto-scales compute with zero manual intervention.",
      features: [
        "Dynamic self-healing cluster discovery across AWS, GCP, and bare metal",
        "Sub-1ms telemetry collection with automated failover routing",
        "Hardware-level TLS 1.3 mutual authentication out of the box",
        "Zero-downtime canary rollout orchestration with instant rollbacks",
      ],
      terminalFile: "mesh-orchestrator.rs",
      logs: [
        "INFO  [cloudmesh::core] Initializing cluster nodes across 3 regions...",
        "SUCCESS [cloudmesh::tls] mTLS certificates negotiated across 142 microservices",
        "STATUS [cloudmesh::health] P99 latency: 0.84ms | Packet drop: 0.000%",
        "OPTIMIZE [cloudmesh::autoscale] Scaled 28 worker nodes dynamically to absorb spike",
      ],
      stats: [
        { label: "Failover Time", value: "< 120ms" },
        { label: "SLA Guarantee", value: "99.999%" },
        { label: "Cost Savings", value: "38.4%" },
      ],
    },
    flowengine: {
      id: "flowengine",
      name: "Reversun FlowEngine™",
      tagline: "Ultra-Low Latency Event Stream",
      category: "Layer 2: Real-time Event Fabric",
      icon: <Workflow size={20} />,
      desc: "Engineered for high-throughput enterprises that require millions of ordered events processed per second without queue bottlenecking or lock contention.",
      features: [
        "Distributed log stream capable of 10M+ concurrent event writes",
        "Deterministic event replay and transactional idempotency",
        "Declarative filter rules with compile-time zero-copy deserialization",
        "Native webhook dispatch with automatic exponential backoff",
      ],
      terminalFile: "flow-stream.ts",
      logs: [
        "STREAM [flowengine::inbound] 4,820,100 events ingested/sec",
        "PIPELINE [flowengine::transform] Idempotency checksum: 100% verified",
        "ROUTER [flowengine::dispatch] 0 dropped packets across 12 downstream brokers",
        "HEALTH [flowengine::buffer] In-memory buffer utilization: 18.2%",
      ],
      stats: [
        { label: "Throughput", value: "10M+ ev/s" },
        { label: "Processing Lag", value: "< 2ms" },
        { label: "Data Integrity", value: "100.00%" },
      ],
    },
    sentinel: {
      id: "sentinel",
      name: "Reversun Sentinel AI™",
      tagline: "Predictive Operations & System Copilot",
      category: "Layer 3: Autonomous Intelligence",
      icon: <BrainCircuit size={20} />,
      desc: "Autonomous AI agent system continuously analyzing runtime performance, identifying security anomalies, and predicting system bottlenecks hours before they impact customers.",
      features: [
        "Real-time predictive telemetry detecting microservice memory leaks",
        "Autonomous root cause analysis (RCA) generated within 10 seconds",
        "Continuous compliance scanning for SOC2, HIPAA, and GDPR",
        "Natural language query copilot for entire company infrastructure",
      ],
      terminalFile: "sentinel-agent.py",
      logs: [
        "AGENT  [sentinel::audit] Scanning 1,400 pod configurations...",
        "ANALYZE [sentinel::ml] Anomaly score normal (0.012). No risk detected",
        "PREDICT [sentinel::capacity] Disk saturation averted: pre-allocated 400GB",
        "COPILOT [sentinel::ready] Ready for natural language queries on #reversun-ops",
      ],
      stats: [
        { label: "RCA Speed", value: "8.4 sec" },
        { label: "Anomalies Prevented", value: "99.4%" },
        { label: "Compliance Score", value: "100/100" },
      ],
    },
  };

  const current = products[activeProduct];

  return (
    <section id="product" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.preTitle}>
            <Sparkles size={16} />
            <span>Proprietary Technology Suite</span>
          </div>
          <h2 className={styles.title}>
            Engineered Products for the Next Era.
          </h2>
          <p className={styles.desc}>
            Built by engineers who have scaled global architectures. Explore the core platforms
            powering Reversun’s enterprise client deployments.
          </p>
        </div>

        {/* Product Switcher Tabs */}
        <div className={styles.productTabs}>
          {Object.values(products).map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProduct(p.id)}
              className={`${styles.tabBtn} ${
                activeProduct === p.id ? styles.activeTabBtn : ""
              }`}
            >
              {p.icon}
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Product Showcase Card */}
        <div className={styles.productShowcase}>
          {/* Left Details */}
          <div className={styles.productDetails}>
            <div>
              <div className={styles.productTag}>
                <Layers size={14} />
                <span>{current.category}</span>
              </div>
              <h3 className={styles.productTitle}>{current.name}</h3>
              <p className={styles.productOverview}>{current.desc}</p>

              <ul className={styles.featureList}>
                {current.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <Check size={18} className={styles.featureIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.productActionRow}>
              <button
                className={styles.primaryAction}
                onClick={() => handleDemoAction(current.name)}
              >
                <span>Request Sandbox Access</span>
                <ArrowRight size={16} />
              </button>
              <button
                className={styles.secondaryAction}
                onClick={() => handleDemoAction(`Docs & Whitepaper: ${current.name}`)}
              >
                <span>Read Whitepaper</span>
              </button>
            </div>
          </div>

          {/* Right Visual / Live Terminal */}
          <div className={styles.productVisualPane}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalTop}>
                <div className={styles.terminalDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <span className={styles.terminalTitle}>
                  <Terminal size={12} style={{ display: "inline", marginRight: 6 }} />
                  {current.terminalFile}
                </span>
                <span style={{ fontSize: 11, color: "#34D399", fontWeight: 700 }}>LIVE</span>
              </div>

              <div className={styles.terminalBody}>
                <div style={{ color: "#64748B", marginBottom: 12 }}>
                  // Reversun Runtime v4.2.0 • Active Mesh Telemetry
                </div>
                {current.logs.map((line, i) => (
                  <div key={i} style={{ marginBottom: 8 }}>
                    <span className={styles.codeOrange}>$</span>{" "}
                    <span
                      className={
                        line.includes("SUCCESS") || line.includes("100%")
                          ? styles.codeGreen
                          : line.includes("INFO")
                          ? styles.codeBlue
                          : ""
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Metrics */}
            <div className={styles.simulationBox}>
              {current.stats.map((s, idx) => (
                <div key={idx}>
                  <div className={styles.simStatValue}>{s.value}</div>
                  <div className={styles.simStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
