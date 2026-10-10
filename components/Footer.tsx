"use client";

import React, { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import styles from "./Footer.module.css";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps = {}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="#home" className={styles.brandLink}>
              <Image
                src="/logo-icon.png"
                alt="Reversun Logo"
                width={42}
                height={42}
                style={{ width: "auto", height: "42px" }}
                className={styles.brandLogo}
              />
              <span className={styles.brandName}>
                REVER<span className={styles.brandNameOrange}>SUN</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              A premier software and cloud innovation studio engineering resilient systems,
              AI automations, and digital platforms that empower modern leaders.
            </p>
            <div className={styles.certBadgesRow}>
              <span className={styles.certBadge}>SOC2 Type II</span>
              <span className={styles.certBadge}>ISO 27001</span>
              <span className={styles.certBadge}>HIPAA Ready</span>
              <span className={styles.certBadge}>99.999% SLA</span>
            </div>
          </div>

          {/* Quick Navigation Tabs */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Services</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/product">Product</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/clients">Clients</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Core Platforms */}
          <div>
            <h4 className={styles.colTitle}>Technology</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/product">Reversun CloudMesh™</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/product">Reversun FlowEngine™</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/product">Reversun Sentinel AI™</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Cloud Architecture</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Enterprise AI Ops</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Ahead */}
          <div>
            <h4 className={styles.colTitle}>Engineering Insights</h4>
            <p className={styles.newsletterDesc}>
              Bi-weekly briefings on distributed architectures, high-load systems, and agentic AI.
            </p>
            {subscribed ? (
              <div style={{ color: "#34D399", fontSize: 13, display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                <Check size={16} />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  className={styles.newsletterInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div>
            &copy; 2026 Reversun Technologies, Inc. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
