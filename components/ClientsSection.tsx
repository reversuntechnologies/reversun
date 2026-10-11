"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Handshake } from "lucide-react";
import styles from "./ClientsSection.module.css";

export default function ClientsSection() {
  const pillars = [
    {
      id: "velocity",
      icon: <Zap size={22} />,
      title: "Reverse-Engineered Velocity",
      desc: "We analyze systems down to first principles to engineer clean, maintainable, and high-velocity software solutions.",
      tag: "First Principles",
    },
    {
      id: "quality",
      icon: <ShieldCheck size={22} />,
      title: "Zero Compromise on Quality",
      desc: "Every codebase is crafted with modular system design, comprehensive test coverage, and strict architecture standards.",
      tag: "Architectural Rigor",
    },
    {
      id: "partnership",
      icon: <Handshake size={22} />,
      title: "Direct Technical Partnership",
      desc: "Work directly with lead architects and engineering minds — no corporate bureaucracy or bloated overhead.",
      tag: "Direct Lead Access",
    },
  ];

  return (
    <div className={styles.clientsSectionRight}>
      {/* 3 Engineering & Partnership Pillars directly at top */}
      <div className={styles.pillarsGrid}>
        {pillars.map((pillar) => (
          <div key={pillar.id} className={styles.pillarCard}>
            <div className={styles.pillarCardHeader}>
              <div className={styles.pillarIconWrap}>{pillar.icon}</div>
              <span className={styles.pillarTag}>{pillar.tag}</span>
            </div>
            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
            <p className={styles.pillarDesc}>{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Collaboration & Active Rollout Banner */}
      <div className={styles.partnerBanner}>
        <div className={styles.bannerInfo}>
          <div className={styles.badgeWrap}>
            <Sparkles size={14} />
            <span>Active Deployments</span>
          </div>
          <h3 className={styles.bannerTitle}>
            Ready to Build or Scale With Reversun?
          </h3>
          <p className={styles.bannerDesc}>
            Client case studies and deployment metrics are being documented under NDA and will be published as rollouts complete.
          </p>
        </div>

        <div className={styles.actionWrap}>
          <Link href="/contact" className={styles.primaryCtaBtn}>
            <span>Partner With Reversun</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/services" className={styles.secondaryCtaBtn}>
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
