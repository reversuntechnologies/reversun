"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Heart, Users, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps = {}) {
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
                <span className={styles.badgeLabel}>WHAT WE DO</span>
              </div>
              <span className={styles.badgeRightTag}>Built With Care</span>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardMainHeading}>
                Building Digital Products Together
              </h3>
              <p className={styles.cardParagraph}>
                We design and develop modern web apps, mobile apps, and smart software.
                From initial idea to final launch, we help you bring your vision to life
                with speed, craft, and clarity.
              </p>

              <div className={styles.techPillRow}>
                <span className={styles.techPillOrange}>Web &amp; Mobile</span>
                <span className={styles.techPillGray}>Modern Design</span>
                <span className={styles.techPillGray}>Fast Delivery</span>
              </div>
            </div>

            <div className={styles.cardBottomBar}>
              <span className={styles.footerNoteLeft}>
                <Heart size={14} className={styles.heartIcon} />
                <span>Thoughtful Design &amp; Clean Code</span>
              </span>
              <span className={styles.footerNoteRight}>Idea to Launch</span>
            </div>
          </div>

          {/* Right Visual: Passionate Builders Team Card */}
          <div className={`${styles.teamShowcaseCard} animateComponent stagger-2`}>
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1V55VhutXt5ZlJT-aSK3qNsy0wpYm1CGXIRBQ5CwaM7gvgg6emUTE87_VIRNXDDo5eIcvJsQPcjI598aqg5iBdutCZQzAIqTlIhy8RgIRJtnpkdNC58i1kndW5gGezmazwqCJAK1UVMzHErWNEAgsU1HM15Md3CzKk3VVrAD5d81EgLqse-vZofe_dwQ8m9AFY3l9RKyJf229fAfoRR0UqEBGoEcf0QE4EzoWgTvk6Xqpf0dhepy5XyGgOh"
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

        {/* Trust Client Strip */}
        <div className={`${styles.trustClientStrip} animateComponent stagger-3`}>
          <div className={styles.trustLeft}>
            <CheckCircle2 size={18} className={styles.verifyIcon} />
            <span>
              Trusted by <strong className={styles.trustHighlight}>ambitious businesses</strong> worldwide:
            </span>
          </div>
          <div className={styles.trustRight}>
            <div className={styles.deployPill}>
              <span className={styles.pulseDot} />
              <span>Client Deployments Adding Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
