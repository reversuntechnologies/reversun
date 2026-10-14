"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Heart, Users, Sparkles } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenContact?: () => void;
}

type CapabilityTabKey = "web-mobile" | "modern-design" | "fast-delivery";

interface CapabilityData {
  badgeLabel: string;
  badgeRightTag: string;
  heading: string;
  paragraph: string;
  footerNote: string;
  footerRight: string;
}

const CAPABILITY_TABS: Record<CapabilityTabKey, CapabilityData> = {
  "web-mobile": {
    badgeLabel: "WHAT WE DO",
    badgeRightTag: "Built With Care",
    heading: "Building Digital Products Together",
    paragraph:
      "We design and develop modern web apps, mobile apps, and smart software. From initial idea to final launch, we help you bring your vision to life with speed, craft, and clarity.",
    footerNote: "Thoughtful Design & Clean Code",
    footerRight: "Idea to Launch",
  },
  "modern-design": {
    badgeLabel: "MODERN DESIGN",
    badgeRightTag: "Pixel Perfect",
    heading: "Intuitive Interfaces & Striking Aesthetics",
    paragraph:
      "Clean visual hierarchies, fluid micro-interactions, and robust design systems. We craft interfaces that look stunning, feel effortless to use, and leave an unforgettable brand impression.",
    footerNote: "Human-Centered UX & Design Systems",
    footerRight: "Figma to Code",
  },
  "fast-delivery": {
    badgeLabel: "FAST DELIVERY",
    badgeRightTag: "Rapid Sprints",
    heading: "Rapid Prototyping to Scalable Production",
    paragraph:
      "Agile execution without unnecessary bureaucracy. We turn concepts into rock-solid, production-ready software in weeks, maintaining elite code standards, security, and continuous delivery.",
    footerNote: "Agile CI/CD & Fast Turnarounds",
    footerRight: "Sprint to Scale",
  },
};

export default function Hero({ onOpenContact }: HeroProps = {}) {
  const [activeTab, setActiveTab] = useState<CapabilityTabKey>("web-mobile");
  const currentCapability = CAPABILITY_TABS[activeTab];

  return (
    <section className={styles.heroSection}>
      <div className="container">
        {/* Top Header / Headline + Subtext */}
        <div className={styles.heroTopFlex}>
          {/* Left: Headline */}
          <div className={styles.headlineCol}>
            <div className={styles.pillBadge}>
              <span className={styles.pulseDot} />
              <span>Enterprise Engineering</span>
            </div>
            <h1 className={styles.mainTitle}>
              Engineering Systems. <br />
              Giving Them{" "}
              <span className={styles.titleHighlight}>
                Velocity
                <Zap size={38} className={styles.boltIcon} />
              </span>
            </h1>
          </div>

          {/* Right: Subtext & CTAs */}
          <div className={styles.subtextCol}>
            <p className={styles.heroDesc}>
              <strong className={styles.brandBold}>Reversun</strong> is a creative technology
              company building high-velocity{" "}
              <strong className={styles.keywordBold}>web</strong>,{" "}
              <strong className={styles.keywordBold}>cloud</strong>, and{" "}
              <strong className={styles.keywordBold}>AI-driven</strong> solutions that help
              ambitious enterprises scale and lead without latency.
            </p>
            <div className={styles.heroCtaRow}>
              <Link
                href="/contact"
                className={styles.primaryCtaBtn}
                id="hero-work-with-us-btn"
              >
                <span>Work With Us</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#explore"
                className={styles.secondaryCtaBtn}
                id="hero-explore-btn"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Cards Row */}
        <div className={styles.visualCardsGrid}>
          {/* Center/Left Visual: WHAT WE DO Card */}
          <div className={`${styles.whatWeDoCard} animateComponent stagger-1`}>
            <div className={styles.cardTopBar}>
              <div className={styles.badgeLeft}>
                <span className={styles.pulseDotSmall} />
                <span className={styles.badgeLabel}>{currentCapability.badgeLabel}</span>
              </div>
              <span className={styles.badgeRightTag}>{currentCapability.badgeRightTag}</span>
            </div>

            <div key={activeTab} className={`${styles.cardContent} ${styles.cardFadeTransition}`}>
              <h3 className={styles.cardMainHeading}>
                {currentCapability.heading}
              </h3>
              <p className={styles.cardParagraph}>
                {currentCapability.paragraph}
              </p>

              <div className={styles.techPillRow} role="tablist" aria-label="Capabilities tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "web-mobile"}
                  className={`${styles.techPillBtn} ${
                    activeTab === "web-mobile"
                      ? styles.techPillActive
                      : styles.techPillInactive
                  }`}
                  onClick={() => setActiveTab("web-mobile")}
                >
                  Web &amp; Mobile
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "modern-design"}
                  className={`${styles.techPillBtn} ${
                    activeTab === "modern-design"
                      ? styles.techPillActive
                      : styles.techPillInactive
                  }`}
                  onClick={() => setActiveTab("modern-design")}
                >
                  Modern Design
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "fast-delivery"}
                  className={`${styles.techPillBtn} ${
                    activeTab === "fast-delivery"
                      ? styles.techPillActive
                      : styles.techPillInactive
                  }`}
                  onClick={() => setActiveTab("fast-delivery")}
                >
                  Fast Delivery
                </button>
              </div>
            </div>

            <div className={styles.cardBottomBar}>
              <span className={styles.footerNoteLeft}>
                <Heart size={14} className={styles.heartIcon} />
                <span>{currentCapability.footerNote}</span>
              </span>
              <span className={styles.footerNoteRight}>{currentCapability.footerRight}</span>
            </div>
          </div>

          {/* Right Visual: Passionate Builders Team Card */}
          <div className={`${styles.teamShowcaseCard} animateComponent stagger-2`}>
            <Image
              src="/hero-team-2.jpg"
              alt="Reversun Team - Passionate Builders & Creators"
              fill
              className={styles.teamBgImg}
              priority
              unoptimized
            />
            <div className={styles.teamGradientOverlay} />
            <div className={styles.teamMeta}>
              <div>
                <span className={styles.teamSubTag}>OUR TEAM</span>
                <h3 className={styles.teamTitle}>Passionate Builders &amp; Creators</h3>
                <p className={styles.teamDesc}>
                  Friendly designers and engineers collaborating to bring your digital vision to life.
                </p>
              </div>
              <div className={styles.teamIconBubble}>
                <Users size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Proprietary Products Strip */}
        <div className={`${styles.trustClientStrip} animateComponent stagger-3`}>
          <div className={styles.trustLeft}>
            <Sparkles size={18} className={styles.verifyIcon} />
            <span>
              Our Proprietary <strong className={styles.trustHighlight}>Products</strong>:
            </span>
          </div>
          <div className={styles.trustRight}>
            <Link
              href="/product?item=presenza"
              className={styles.productPill}
              title="Presenza - 1-Minute Smart Attendance Application"
            >
              <span className={styles.productLogoBox}>
                <Image
                  src="/products/presenza-logo.png"
                  alt="Presenza Logo"
                  width={22}
                  height={22}
                  className={styles.productLogoImg}
                />
              </span>
              <span className={styles.productPillName}>Presenza</span>
              <span className={styles.productPillBadge}>Attendance</span>
            </Link>

            <Link
              href="/product?item=quanbit"
              className={styles.productPill}
              title="QuanBit - Quantum Algorithm Learning Platform"
            >
              <span className={styles.productLogoBox}>
                <Image
                  src="/products/quanbit-logo.png"
                  alt="QuanBit Logo"
                  width={22}
                  height={22}
                  className={styles.productLogoImg}
                />
              </span>
              <span className={styles.productPillName}>QuanBit</span>
              <span className={styles.productPillBadge}>Quantum AI</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
