"use client";

import React from "react";
import Link from "next/link";
import {
  Bot,
  Laptop,
  Cpu,
  CloudCog,
  ArrowRight,
  Zap,
  Gauge,
  Shield,
  CloudCheck,
} from "lucide-react";
import styles from "./ServicesView.module.css";

export default function ServicesView() {
  const services = [
    {
      id: "card-ai",
      number: "01 / AGENTS",
      theme: "orange",
      icon: <Bot size={18} />,
      title: "AI & Automation",
      desc: "Autonomous agent workflows, process automation, RAG & LLMs. Eliminates operational bottlenecks.",
      badges: ["Autonomous Agents", "LLM Workflows", "RAG Search"],
      footerTrait: "Intelligent",
      footerIcon: <Zap size={13} />,
      href: "/contact?service=AI%20%26%20Automation",
    },
    {
      id: "card-webapp",
      number: "02 / WEB & APP",
      theme: "blue",
      icon: <Laptop size={18} />,
      title: "Web & App Development",
      desc: "High-velocity web apps, sub-second latency. Engineered with React, Next.js, and modern stacks.",
      badges: ["Full-Stack Web", "Mobile Apps", "Next.js & React"],
      footerTrait: "Velocity",
      footerIcon: <Gauge size={13} />,
      href: "/contact?service=Web%20%26%20App%20Development",
    },
    {
      id: "card-system",
      number: "03 / ARCHITECTURE",
      theme: "orange",
      icon: <Cpu size={18} />,
      title: "System Design",
      desc: "High-load distributed systems and microservices designed for zero-bottleneck data flow.",
      badges: ["Distributed Systems", "Microservices", "Fault-Tolerant"],
      footerTrait: "Resilient",
      footerIcon: <Shield size={13} />,
      href: "/contact?service=System%20Design",
    },
    {
      id: "card-cloud",
      number: "04 / CLOUD & MESH",
      theme: "blue",
      icon: <CloudCog size={18} />,
      title: "Cloud Infrastructure",
      desc: "Multi-cloud deployment across AWS, Azure, Supabase with container orchestration for 99.99% uptime.",
      badges: ["AWS / Azure", "Firebase / Supabase", "Kubernetes Mesh"],
      footerTrait: "Multi-Cloud",
      footerIcon: <CloudCheck size={13} />,
      href: "/contact?service=Cloud%20Infrastructure",
    },
  ];

  return (
    <div className={styles.servicesPageWrapper}>
      <div className="container">
        {/* Compact Header & SLA Summary */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeftCol}>
            <div className={styles.badgePill}>
              <span className={styles.badgeDot} />
              <span>SERVICES</span>
            </div>
            <h1 className={styles.mainTitle}>
              ENGINEERED, FOR REAL <span className={styles.highlightText}>SCALE</span>
            </h1>
            <p className={styles.subText}>
              Turning ambitious architectural roadmaps into high-throughput software reality.
              Specialized engineering built for enterprise resilience and extreme load.
            </p>
          </div>

          {/* Compact SLA Stats */}
          <div className={styles.slaStatsBox}>
            <div className={styles.slaItem}>
              <span className={styles.slaNumber}>99.98%</span>
              <span className={styles.slaLabel}>SLA Benchmark</span>
            </div>
            <div className={styles.slaDivider} />
            <div className={styles.slaItem}>
              <span className={styles.slaNumber}>&lt; 140ms</span>
              <span className={styles.slaLabel}>P99 Latency</span>
            </div>
            <div className={styles.slaDivider} />
            <div className={styles.slaItem}>
              <span className={styles.slaNumber}>4.2M+</span>
              <span className={styles.slaLabel}>Daily Ops</span>
            </div>
          </div>
        </div>

        {/* 4 Services Compact Grid */}
        <div className={styles.servicesGrid}>
          {services.map((item, idx) => (
            <div
              key={item.id}
              className={`${styles.serviceCard} animateComponent stagger-${idx + 1}`}
              id={item.id}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTopRow}>
                  <div
                    className={`${styles.cardIconBox} ${
                      item.theme === "orange" ? styles.iconBoxOrange : styles.iconBoxBlue
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`${styles.cardCategoryPill} ${
                      item.theme === "orange" ? styles.pillOrange : styles.pillBlue
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                <div className={styles.cardTextGroup}>
                  <h3
                    className={`${styles.cardHeading} ${
                      item.theme === "orange"
                        ? styles.headingHoverOrange
                        : styles.headingHoverBlue
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={styles.cardDescription}>{item.desc}</p>
                </div>

                <div className={styles.cardBadges}>
                  {item.badges.map((b, i) => (
                    <span key={i} className={styles.badgeItem}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.traitLabel}>
                  <span
                    className={
                      item.theme === "orange" ? styles.traitIconOrange : styles.traitIconBlue
                    }
                  >
                    {item.footerIcon}
                  </span>
                  <span>{item.footerTrait}</span>
                </span>
                <Link
                  href={item.href}
                  className={`${styles.inquireLink} ${
                    item.theme === "orange" ? styles.linkOrange : styles.linkBlue
                  }`}
                >
                  <span>Inquire</span>
                  <ArrowRight size={13} className={styles.inquireArrow} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA Banner */}
        <div className={styles.bottomCtaBanner}>
          <div className={styles.ctaTextCol}>
            <h3 className={styles.ctaHeading}>
              Ready to build systems that don&apos;t break at 100x?
            </h3>
            <p className={styles.ctaSub}>
              Assess bottlenecks and partner directly with our principal engineers.
            </p>
          </div>
          <div className={styles.ctaButtonGroup}>
            <Link
              href="/contact"
              className={styles.ctaPrimaryBtn}
              id="services-schedule-audit-btn"
            >
              <span>Schedule Systems Audit</span>
            </Link>
            <Link href="/clients" className={styles.ctaSecondaryBtn}>
              <span>Read Case Studies</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
