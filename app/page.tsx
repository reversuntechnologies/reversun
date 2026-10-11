import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { Cpu, Layers, Users, ArrowRight, Sparkles } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reversun | Reverse Engineering Software, AI, Cloud & Products",
  description:
    "Reversun is a software engineering company driven by reverse engineering principles. Specialized in Web & App Development, AI & Automation, Cloud Management, and System Design.",
  keywords: [
    "Reversun",
    "Reverse Engineering Software",
    "Web Development",
    "App Development",
    "AI and Automation",
    "Cloud Management",
    "System Design",
    "Presenza",
    "QuanBit",
  ],
};

export default function HomePage() {
  const portalCards = [
    {
      title: "Services & Capabilities",
      desc: "Specialized engineering across Web & App Development, AI & Automation, Cloud Management, and System Design.",
      href: "/services",
      icon: <Cpu size={26} />,
      cta: "Explore Services",
    },
    {
      title: "Proprietary Products",
      desc: "Discover Presenza (1-minute smart attendance application) and QuanBit (AI-based quantum algorithm learning platform).",
      href: "/product",
      icon: <Layers size={26} />,
      cta: "Explore Products",
    },
    {
      title: "Clients & Collaborations",
      desc: "Our real-world client collaborations and enterprise deployment case studies will be listed soon.",
      href: "/clients",
      icon: <Users size={26} />,
      cta: "View Clients",
    },
  ];

  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <Hero />

      {/* Dedicated Portal Section */}
      <section className={styles.exploreSection} id="explore">
        <div className="container">
          <ScrollReveal delay={0.1}>
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
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={styles.cardsGrid}>
              {portalCards.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.href}
                  className={`${styles.navCard} animateComponent stagger-${idx + 1}`}
                >
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
          </ScrollReveal>

          {/* Bottom Conversion Banner with Scroll Entrance */}
          <ScrollReveal delay={0.25}>
            <div className={styles.ctaBanner}>
              <div className={styles.ctaBannerContent}>
                <div className={styles.ctaPillTag}>
                  <span className={styles.ctaPulseDot} />
                  <span>Direct Architecture Brief</span>
                </div>
                <h3 className={styles.ctaLeftTitle}>
                  Ready to accelerate your next technical horizon?
                </h3>
                <p className={styles.ctaLeftDesc}>
                  Book a direct brief with our Principal Solutions Architects. We
                  review your tech stack and provide strategic roadmap analysis within 24 hours.
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
