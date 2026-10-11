"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Atom,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Puzzle,
  ExternalLink,
} from "lucide-react";
import styles from "./ProductView.module.css";

interface ProductData {
  categoryTag: string;
  categoryIcon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  metrics: { val: string; label: string; highlight?: boolean }[];
  ctaText: string;
  ctaHref: string;
  externalUrl?: string;
}

export default function ProductView() {
  const [activeKey, setActiveKey] = useState<"presenza" | "quanbit">("presenza");

  const productData: Record<"presenza" | "quanbit", ProductData> = {
    presenza: {
      categoryTag: "Institutional & Campus Productivity",
      categoryIcon: <Clock size={14} />,
      title: "Presenza",
      subtitle: "1-Minute Attendance Application",
      description:
        "Presenza is an intelligent, high-speed attendance application engineered to complete full classroom and college attendance in approximately 1 minute, eliminating roll-call delays and proxy errors.",
      features: [
        "Rapid 1-minute classroom attendance capture",
        "Instant automated faculty verification dashboards",
        "Real-time absent tracking & departmental reports",
        "Zero-friction campus & university rollout",
      ],
      metrics: [
        { val: "~1 Min", label: "Attendance Speed", highlight: false },
        { val: "100%", label: "Accuracy Guarantee", highlight: true },
        { val: "Instant", label: "Campus Deployment", highlight: false },
      ],
      ctaText: "Inquire About Presenza",
      ctaHref: "/contact?product=Presenza",
    },
    quanbit: {
      categoryTag: "Deep Tech & Quantum Education",
      categoryIcon: <Atom size={14} />,
      title: "QuanBit",
      subtitle: "AI-Based Interactive Quantum Algorithm Learning Platform",
      description:
        "QuanBit is an interactive quantum computation and learning platform engineered by Reversun. Featuring a live Quantum Circuit Lab with Qiskit Aer simulation, 3D Bloch sphere visualization with multi-qubit entanglement support, and Schrödinger AI Socratic tutor for real-time misconception detection.",
      features: [
        "Quantum Circuit Lab: Live Qiskit Aer simulation with synced drag-and-drop builder & Monaco code editor",
        "3D Quantum Visualization: Interactive 3D Bloch Sphere visualization with correct multi-qubit entanglement support",
        "Schrödinger AI: Conceptual misconception detection, circuit generation, debugging & step-by-step Socratic hints",
        "Practice Arena: Live circuit judging with instant Accepted/Wrong automated grading and gamified quizzes",
        "Instructor Dashboard: Live cohort progress analytics and misconception heatmap tracking powered by database telemetry",
        "Dual Learning Modes: Easy mode for beginners and rigorous Dirac Notation mode for advanced researchers",
      ],
      metrics: [
        { val: "Qiskit Aer", label: "Live Simulation Engine", highlight: true },
        { val: "Schrödinger AI", label: "Socratic AI CoPilot", highlight: true },
        { val: "5+ Languages", label: "Multilingual Support", highlight: false },
      ],
      ctaText: "Inquire About QuanBit",
      ctaHref: "/contact?product=QuanBit",
      externalUrl: "https://www.quanbit.tech/",
    },
  };

  const current = productData[activeKey];

  return (
    <div className={styles.productPageWrapper}>
      <div className="container">
        {/* Main Grid: Left Navigation / Identity + Right Product Details */}
        <div className={styles.mainGrid}>
          {/* Left Sticky Sidebar Column */}
          <aside className={styles.leftCol}>
            <div className={styles.productBadge}>
              <span className={styles.badgeDot} />
              <span>Products</span>
            </div>

            <div className={styles.titleBlock}>
              <h1 className={styles.headline}>
                OUR PRODUCTS,
                <br />
                <span className={styles.headlineNavy}>BUILT FOR</span>
                <br />
                <span className={styles.headlineOrange}>IMPACT</span>
              </h1>
              <p className={styles.headlineDesc}>
                Explore Reversun&apos;s proprietary software products:{" "}
                <strong className={styles.boldNavy}>Presenza</strong>, our 1-minute smart attendance
                application, and <strong className={styles.boldNavy}>QuanBit</strong>, our AI-based
                quantum algorithm learning platform.
              </p>
            </div>

            {/* Product Switcher Buttons */}
            <div className={styles.switcherList}>
              {/* Presenza Button */}
              <button
                type="button"
                onClick={() => setActiveKey("presenza")}
                className={`${styles.switcherBtn} ${
                  activeKey === "presenza" ? styles.switcherBtnActive : styles.switcherBtnInactive
                }`}
                id="side-tab-presenza"
              >
                <div className={styles.btnLeft}>
                  <div
                    className={`${styles.iconWrap} ${
                      activeKey === "presenza" ? styles.iconWrapActive : styles.iconWrapInactive
                    }`}
                  >
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className={styles.btnNameRow}>
                      <span className={styles.btnTitle}>PRESENZA</span>
                      {activeKey === "presenza" && (
                        <span className={styles.activePillTag}>ACTIVE</span>
                      )}
                    </div>
                    <span className={styles.btnSubtitle}>1-Min Smart Attendance App</span>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className={`${styles.arrowIcon} ${
                    activeKey === "presenza" ? styles.arrowOrange : styles.arrowMuted
                  }`}
                />
              </button>

              {/* QuanBit Button */}
              <button
                type="button"
                onClick={() => setActiveKey("quanbit")}
                className={`${styles.switcherBtn} ${
                  activeKey === "quanbit" ? styles.switcherBtnActive : styles.switcherBtnInactive
                }`}
                id="side-tab-quanbit"
              >
                <div className={styles.btnLeft}>
                  <div
                    className={`${styles.iconWrap} ${
                      activeKey === "quanbit" ? styles.iconWrapActive : styles.iconWrapInactive
                    }`}
                  >
                    <Atom size={16} />
                  </div>
                  <div>
                    <div className={styles.btnNameRow}>
                      <span className={styles.btnTitle}>QUANBIT</span>
                      {activeKey === "quanbit" && (
                        <span className={styles.activePillTag}>ACTIVE</span>
                      )}
                    </div>
                    <span className={styles.btnSubtitle}>AI Quantum Algorithm Platform</span>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className={`${styles.arrowIcon} ${
                    activeKey === "quanbit" ? styles.arrowOrange : styles.arrowMuted
                  }`}
                />
              </button>
            </div>
          </aside>

          {/* Right Column: Dynamic Product Showcase */}
          <section className={styles.rightCol}>
            {/* Main Product Card */}
            <div className={`${styles.productCard} animateComponent stagger-1`}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryPill}>
                  {current.categoryIcon}
                  <span>{current.categoryTag}</span>
                </span>
              </div>

              <div className={styles.productTitleArea}>
                <h2 className={styles.productHeading}>{current.title}</h2>
                <p className={styles.productSubheading}>{current.subtitle}</p>
              </div>

              <p className={styles.productDescription}>{current.description}</p>

              {/* Features Grid */}
              <div className={styles.featuresGrid}>
                {current.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <CheckCircle2 size={17} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Row */}
              <div className={styles.metricsRow}>
                {current.metrics.map((metric, idx) => (
                  <div key={idx} className={styles.metricCard}>
                    <p
                      className={`${styles.metricVal} ${
                        metric.highlight ? styles.metricHighlight : styles.metricNavy
                      }`}
                    >
                      {metric.val}
                    </p>
                    <p className={styles.metricLabel}>{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className={styles.ctaRow}>
                <Link href={current.ctaHref} className={styles.ctaPrimaryBtn} id="prod-cta-btn">
                  <span>{current.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>

                {current.externalUrl && (
                  <a
                    href={current.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ctaSecondaryBtn}
                  >
                    <span>Visit {current.title}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Bottom 3 Feature Highlights Strip */}
        <div className={styles.bottomHighlightsGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIconBox}>
              <Zap size={18} />
            </div>
            <h3 className={styles.highlightTitle}>High-Velocity Engineering</h3>
            <p className={styles.highlightDesc}>
              Micro-orchestrated edge runtimes delivering microsecond state sync across multi-campus
              networks.
            </p>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIconBox}>
              <Shield size={18} />
            </div>
            <h3 className={styles.highlightTitle}>Institutional-Grade Security</h3>
            <p className={styles.highlightDesc}>
              FERPA, GDPR, and enterprise compliance ready with end-to-end zero-knowledge
              encryption.
            </p>
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightIconBox}>
              <Puzzle size={18} />
            </div>
            <h3 className={styles.highlightTitle}>Plug-and-Play Integration</h3>
            <p className={styles.highlightDesc}>
              Seamless native connectors for Banner, Canvas, Moodle, and existing university ERP
              databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
