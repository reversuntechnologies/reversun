import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Cpu, Layers, Users, ArrowRight, Sparkles } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home | Reversun - Enterprise Software & Cloud Innovation",
  description:
    "We engineer high-velocity cloud systems, AI automations, and modern digital products that help ambitious brands scale and lead.",
};

export default function HomePage() {
  const portalCards = [
    {
      title: "Services & Capabilities",
      desc: "From Kubernetes distributed architectures to autonomous LLM agent workflows, discover our full engineering spectrum.",
      href: "/services",
      icon: <Cpu size={26} />,
      cta: "Explore Services",
    },
    {
      title: "Proprietary Technology",
      desc: "Inspect Reversun CloudMesh™, FlowEngine™, and Sentinel AI™ with interactive live telemetry and architecture blueprints.",
      href: "/product",
      icon: <Layers size={26} />,
      cta: "Explore Products",
    },
    {
      title: "Clients & Proven Impact",
      desc: "Discover real-world enterprise deployments across fintech, clean energy, and logistics with verified throughput and ROI metrics.",
      href: "/clients",
      icon: <Users size={26} />,
      cta: "View Case Studies",
    },
  ];

  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section with Bento Grid Showcase */}
      <Hero />

      {/* Dedicated Portal Section */}
      <section className={styles.exploreSection}>
        <div className="container">
          <div className={styles.exploreHeader}>
            <div className={styles.preTitle}>
              <Sparkles size={16} />
              <span>Explore Reversun</span>
            </div>
            <h2 className={styles.title}>
              Architected for Performance. <br />
              Tailored for Modern Enterprises.
            </h2>
            <p className={styles.desc}>
              Navigate through our specialized capabilities, proprietary software suite, and
              verified customer case studies across dedicated tabs.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {portalCards.map((card, idx) => (
              <Link key={idx} href={card.href} className={styles.navCard}>
                <div>
                  <div className={styles.cardIconWrap}>{card.icon}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardSummary}>{card.desc}</p>
                </div>
                <div className={styles.cardAction}>
                  <span>{card.cta}</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className={styles.ctaBanner}>
            <div>
              <h3 className={styles.ctaLeftTitle}>
                Ready to accelerate your next technical horizon?
              </h3>
              <p className={styles.ctaLeftDesc}>
                Book a direct technical brief with our Principal Solutions Architects. We
                review your roadmap and provide a preliminary scope within 24 hours.
              </p>
            </div>
            <div className={styles.ctaBtnGroup}>
              <Link href="/contact" className={styles.ctaBtnPrimary}>
                <span>Get Started Now</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.ctaBtnSecondary}>
                <span>Browse Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
