"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import styles from "./Footer.module.css";

interface FooterProps {
  onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps = {}) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink} aria-label="Reversun">
              <Image
                src="/REVERSUN LOGO.png"
                alt="Reversun"
                width={434}
                height={119}
                style={{ width: "auto", height: "48px" }}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandDesc}>
              Reversun is a software engineering company built on the principles of reverse engineering. We craft high-impact Web & App Development, AI & Automation, Cloud Management, and System Design solutions.
            </p>
            <div className={styles.directContactWrap}>
              <Mail size={16} color="#FC6235" />
              <a href="mailto:info@reversun.com" className={styles.directContactLink}>
                info@reversun.com
              </a>
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
                <Link href="/product">Products</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/clients">Clients</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/services">AI & Automation</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Web & App Development</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">Cloud Management</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/services">System Design</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/product">
                  <span>Presenza (Attendance App)</span>
                </Link>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="https://quanbit.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
                >
                  <span>QuanBit (quanbit.tech)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li className={styles.linkItem} style={{ marginTop: 14 }}>
                <Link href="/contact" className={styles.footerInquiryLink}>
                  <span>Inquire with us</span>
                  <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div>
            &copy; 2026 Reversun. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <a href="mailto:info@reversun.com">info@reversun.com</a>
            <Link href="/services">Services</Link>
            <Link href="/product">Products</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
