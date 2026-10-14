"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { 
  Clock, 
  Atom, 
  Check, 
  ArrowRight, 
  ExternalLink,
  Terminal,
  Activity,
  Layers
} from "lucide-react";
import styles from "./ProductSection.module.css";

export default function ProductSection({ onRequestDemo }: { onRequestDemo?: (productName?: string) => void }) {
  const router = useRouter();
  const [activeProduct, setActiveProduct] = useState<"presenza" | "quanbit">("presenza");

  const handleInquiry = (productName: string) => {
    if (onRequestDemo) {
      onRequestDemo(productName);
    } else {
      router.push(`/contact?product=${encodeURIComponent(productName)}`);
    }
  };

  const products = {
    presenza: {
      id: "presenza",
      name: "Presenza",
      tagline: "1-Minute Attendance Application",
      category: "Institutional & Campus Productivity",
      icon: <Clock size={22} />,
      desc: "Presenza is an intelligent, high-speed attendance application engineered to complete full classroom and college attendance in approximately 1 minute, eliminating roll-call delays and proxy errors.",
      features: [
        "Rapid 1-minute college and classroom attendance capture",
        "Automated attendance verification with instant faculty dashboards",
        "Real-time absent tracking and automated departmental reporting",
        "Built for scalable deployment across colleges, universities, and schools",
      ],
      terminalFile: "presenza-session.log",
      logs: [
        "SESSION [presenza::init] Starting 60-second batch attendance...",
        "RECORD  [presenza::capture] 68/70 students checked in verified",
        "SYNC    [presenza::cloud] Instant institutional sync complete in 48s",
        "REPORT  [presenza::export] Departmental absent log dispatched",
      ],
      stats: [
        { label: "Attendance Speed", value: "~1 Min" },
        { label: "Accuracy", value: "100%" },
        { label: "Deployment", value: "Rapid" },
      ],
      url: null,
      urlDisplay: null,
    },
    quanbit: {
      id: "quanbit",
      name: "QuanBit",
      tagline: "AI-Based Quantum Algorithm Learning Platform",
      category: "Quantum Computing & AI Education",
      icon: <Atom size={22} />,
      desc: "QuanBit is an AI-powered interactive learning platform engineered to teach and simulate quantum computing algorithms. Learn quantum circuits, gates, and algorithmic execution in an intuitive web environment.",
      features: [
        "AI-guided interactive quantum algorithm learning pathways",
        "Visual circuit simulation and quantum state vector analysis",
        "Hands-on algorithm sandbox with step-by-step AI tutoring",
        "Live web platform accessible worldwide at quanbit.tech",
      ],
      terminalFile: "quanbit-circuit.qasm",
      logs: [
        "INIT    [quanbit::ai] Loading quantum algorithm tutor engine...",
        "CIRCUIT [quanbit::gates] Applying Hadamard & CNOT entanglement gates",
        "STATE   [quanbit::sim] |ψ⟩ = (|00⟩ + |11⟩)/√2 Bell state verified",
        "ONLINE  [quanbit::web] Interactive simulation live at quanbit.tech",
      ],
      stats: [
        { label: "Learning Engine", value: "AI-Guided" },
        { label: "Simulation", value: "Interactive" },
        { label: "Live Platform", value: "quanbit.tech" },
      ],
      url: "https://quanbit.tech",
      urlDisplay: "quanbit.tech",
    },
  };

  const product = products[activeProduct];

  return (
    <div className={styles.productSectionRight}>
      {/* 2 Product Tabs at the top */}
      <div className={styles.productTabsRow}>
        <button
          onClick={() => setActiveProduct("presenza")}
          className={`${styles.tabBtn} ${
            activeProduct === "presenza" ? styles.activeTabBtn : ""
          }`}
        >
          <div className={styles.tabBtnIcon} style={{ backgroundColor: "#FFFFFF", padding: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/products/presenza-logo.png"
              alt="Presenza"
              width={22}
              height={22}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.tabBtnText}>
            <span className={styles.tabBtnName}>Presenza</span>
            <span className={styles.tabBtnSub}>1-Min Attendance App</span>
          </div>
        </button>

        <button
          onClick={() => setActiveProduct("quanbit")}
          className={`${styles.tabBtn} ${
            activeProduct === "quanbit" ? styles.activeTabBtn : ""
          }`}
        >
          <div className={styles.tabBtnIcon} style={{ backgroundColor: "#FFFFFF", padding: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/products/quanbit-logo.png"
              alt="QuanBit"
              width={22}
              height={22}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.tabBtnText}>
            <span className={styles.tabBtnName}>QuanBit</span>
            <span className={styles.tabBtnSub}>AI-based quantum algorithm learning platform</span>
          </div>
        </button>
      </div>

      {/* Product Showcase Card */}
      <div className={styles.productCard}>
        <div className={styles.cardInfoCol}>
          <div className={styles.categoryPill}>
            {product.icon}
            <span>{product.category}</span>
          </div>

          <h2 className={styles.productName}>{product.name}</h2>
          <div className={styles.tagline}>{product.tagline}</div>

          <p className={styles.productDesc}>{product.desc}</p>

          <div className={styles.featuresList}>
            {product.features.map((feature, idx) => (
              <div key={idx} className={styles.featureItem}>
                <div className={styles.featureCheck}>
                  <Check size={14} />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className={styles.statsRow}>
            {product.stats.map((stat, idx) => (
              <div key={idx} className={styles.statBox}>
                <div className={styles.statVal}>{stat.value}</div>
                <div className={styles.statLbl}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.actionRow}>
            {product.url ? (
              <>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoPrimaryBtn}
                >
                  <span>Visit {product.urlDisplay}</span>
                  <ExternalLink size={16} />
                </a>
                <button
                  className={styles.demoSecondaryBtn}
                  onClick={() => handleInquiry(product.name)}
                >
                  <span>Inquire About {product.name}</span>
                  <ArrowRight size={15} />
                </button>
              </>
            ) : (
              <button
                className={styles.demoPrimaryBtn}
                onClick={() => handleInquiry(product.name)}
              >
                <span>Inquire About {product.name}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Simulated Architecture / Terminal Box */}
        <div className={styles.terminalCol}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.terminalFilename}>
              <Terminal size={14} />
              <span>{product.terminalFile}</span>
            </div>
            <div className={styles.terminalStatus}>
              <Activity size={13} color="#00A854" />
              <span>Live</span>
            </div>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.terminalWelcome}>
              // Reversun Product Telemetry v2.4
              <br />
              // Status: Operational & Verified
            </div>

            {product.logs.map((log, idx) => (
              <div key={idx} className={styles.terminalLogLine}>
                <span className={styles.logPrompt}>&gt;</span>
                <span className={styles.logContent}>{log}</span>
              </div>
            ))}

            <div className={styles.terminalCursorLine}>
              <span className={styles.logPrompt}>&gt;</span>
              <span className={styles.cursorBlink}>_</span>
            </div>
          </div>

          <div className={styles.terminalFooter}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "12px", color: "#A3B5CC" }}>
              <Layers size={13} />
              <span>First-Principles Engineered</span>
            </div>
            <div style={{ fontSize: "12px", color: "#FC6235", fontWeight: 700 }}>
              {product.name} by Reversun
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
