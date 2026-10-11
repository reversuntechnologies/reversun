"use client";

import React from "react";
import Link from "next/link";
import {
  Lock,
  Bolt,
  ArrowRight,
  Gauge,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import styles from "./ClientsView.module.css";

export default function ClientsView() {
  return (
    <div className={styles.clientsPageWrapper}>
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div className={styles.mainGrid}>
          {/* Left Column: Heading, Subtext, and Status Pills */}
          <div className={styles.leftCol}>
            <div className={styles.clientsBadge}>
              <span className={styles.badgeDot} />
              <span>CLIENTS</span>
            </div>

            <div className={styles.titleBlock}>
              <h1 className={styles.headline}>
                CLIENT PARTNERSHIPS
              </h1>
            </div>

            <p className={styles.subtext}>
              Upcoming case study rollouts and enterprise client collaborations are
              currently documented under strict NDA confidentiality.
            </p>

            {/* Status Indicator Rows */}
            <div className={styles.statusRowsList}>
              {/* Row 1 */}
              <div className={styles.statusRow}>
                <div className={styles.statusRowLeft}>
                  <span className={`${styles.statusDot} ${styles.dotOrange}`} />
                  <span className={styles.statusTitle}>Partnerships</span>
                  <span className={styles.statusDivider}>—</span>
                  <span className={styles.statusDesc}>Enterprise &amp; Scale-Ups</span>
                </div>
                <span className={styles.statusTagOrange}>ACTIVE</span>
              </div>

              {/* Row 2 */}
              <div className={styles.statusRow}>
                <div className={styles.statusRowLeft}>
                  <span className={`${styles.statusDot} ${styles.dotGreen}`} />
                  <span className={styles.statusTitle}>Confidentiality</span>
                  <span className={styles.statusDivider}>—</span>
                  <span className={styles.statusDesc}>Architecture graphs sanitized</span>
                </div>
                <span className={styles.statusTagGreen}>NDA PROTECTED</span>
              </div>

              {/* Row 3 */}
              <div className={styles.statusRow}>
                <div className={styles.statusRowLeft}>
                  <span className={`${styles.statusDot} ${styles.dotNavy}`} />
                  <span className={styles.statusTitle}>Delivery</span>
                  <span className={styles.statusDivider}>—</span>
                  <span className={styles.statusDesc}>First principles engineered</span>
                </div>
                <span className={styles.statusTagNavy}>SLA 99.98%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Listing Soon Box & Active Deployments Banner */}
          <div className={styles.rightCol}>
            {/* Box 1: Listing Soon... Card */}
            <div className={`${styles.listingSoonCard} animateComponent stagger-1`}>
              <div className={styles.cardTopRow}>
                <div className={styles.cardDisclosure}>
                  <div className={styles.disclosureIconBox}>
                    <Lock size={18} />
                  </div>
                  <span className={styles.disclosureBadge}>PORTFOLIO DISCLOSURE</span>
                </div>
                <span className={styles.disclosureStage}>STAGE // CONFIDENTIAL</span>
              </div>

              <div className={styles.cardCenterBody}>
                <h2 className={styles.cardBigTitle}>
                  Listing Soon<span className={styles.orangeDots}>...</span>
                </h2>
                <p className={styles.cardBodyDesc}>
                  Production architectures, benchmarks, and enterprise case studies are
                  undergoing clearance protocols prior to general release.
                </p>
              </div>

              <div className={styles.cardBottomPillRow}>
                <div className={styles.pillarItem}>
                  <span className={`${styles.bulletDot} ${styles.dotOrange}`} />
                  <span>ENTERPRISE &amp; CLOUD</span>
                </div>
                <div className={styles.pillarItem}>
                  <span className={`${styles.bulletDot} ${styles.dotGreen}`} />
                  <span>AI INFRASTRUCTURE</span>
                </div>
                <div className={styles.pillarItem}>
                  <span className={`${styles.bulletDot} ${styles.dotNavy}`} />
                  <span>GLOBAL COMMERCE</span>
                </div>
              </div>
            </div>

            {/* Box 2: Dark Navy Active Deployments Banner */}
            <div className={`${styles.activeDeploymentsBanner} animateComponent stagger-2`}>
              <div className={styles.bannerInfo}>
                <div className={styles.bannerPill}>
                  <Bolt size={14} />
                  <span>ACTIVE DEPLOYMENTS</span>
                </div>
                <h2 className={styles.bannerTitle}>
                  Ready to Build or Scale With Reversun?
                </h2>
                <p className={styles.bannerDesc}>
                  Client case studies and deployment metrics are being documented under NDA
                  and will be published as rollouts complete.
                </p>
              </div>

              <div className={styles.bannerBtnGroup}>
                <Link
                  href="/contact"
                  className={styles.bannerPrimaryBtn}
                  id="client-partner-btn"
                >
                  <span>Partner With Reversun</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/services" className={styles.bannerSecondaryBtn}>
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Precision Engineering Benchmarks */}
        <div className={styles.benchmarksStrip}>
          <div className={styles.benchmarkLeft}>
            <div className={styles.benchmarkIconBox}>
              <Gauge size={20} />
            </div>
            <div className={styles.benchmarkTitleCol}>
              <span className={styles.benchmarkMainTitle}>
                Precision Engineering Benchmarks
              </span>
              <span className={styles.benchmarkSubtitle}>
                Continuous integration, zero-overhead telemetry, and deterministic uptime delivery.
              </span>
            </div>
          </div>

          <div className={styles.benchmarkMetricsRow}>
            <div className={styles.benchmarkMetricCol}>
              <span className={styles.benchmarkMetricOrange}>0ms</span>
              <span className={styles.benchmarkMetricLabel}>Bureaucracy Lag</span>
            </div>
            <div className={styles.benchmarkMetricCol}>
              <span className={styles.benchmarkMetricNavy}>100%</span>
              <span className={styles.benchmarkMetricLabel}>Architect-Led</span>
            </div>
            <div className={styles.benchmarkMetricCol}>
              <span className={styles.benchmarkMetricNavy}>Tier-1</span>
              <span className={styles.benchmarkMetricLabel}>Cloud Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
