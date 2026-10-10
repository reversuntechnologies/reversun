"use client";

import React, { useState, useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Layers, Zap } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps = {}) {
  const [isHovering, setIsHovering] = useState(false);
  const titleAreaRef = useRef<HTMLDivElement>(null);

  const clientLogos = [
    "BASHTECH",
    "ECOPULS",
    "ZCAN",
    "NOVAPULSE",
    "SOLVANCE",
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!titleAreaRef.current) return;
    const rect = titleAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    titleAreaRef.current.style.setProperty("--lens-x", `${x}px`);
    titleAreaRef.current.style.setProperty("--lens-y", `${y}px`);
    titleAreaRef.current.style.setProperty("--title-width", `${rect.width}px`);
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseDown = () => {
    if (titleAreaRef.current) {
      titleAreaRef.current.style.setProperty("--lens-size", "170px");
      titleAreaRef.current.style.setProperty("--lens-radius", "85px");
    }
  };

  const handleMouseUp = () => {
    if (titleAreaRef.current) {
      titleAreaRef.current.style.setProperty("--lens-size", "150px");
      titleAreaRef.current.style.setProperty("--lens-radius", "75px");
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        {/* Top Hero Headline & Studio Summary */}
        <div className={styles.heroTop}>
          <div
            ref={titleAreaRef}
            className={styles.titleArea}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Base Big Headline Layer */}
            <h1 className={styles.headline}>
              <div className={styles.lineOne}>
                <span>We Don&apos;t Just</span>
                <span className={styles.doubleArrowIcon}>
                  <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6L28 18L14 30M28 6L42 18L28 30" stroke="#FC6235" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className={styles.lineTwo}>
                <span className={styles.headlineNavy}>Engineer Systems.</span>
                <span>We</span>
              </div>
              <div className={styles.lineThree}>
                <span>Give Them</span>
                <span className={styles.headlineGradient}>Velocity</span>
                <Link
                  href="/contact"
                  className={styles.inlineCtaBtn}
                  id="hero-work-with-us-btn"
                >
                  <span className={styles.ctaBtnArrowWrap}>
                    <ArrowRight size={18} />
                  </span>
                  <span>Work With Us</span>
                </Link>
              </div>
            </h1>

            {/* 100% Circular Lens Follower (Completely unclipped, no box borders) */}
            <div
              className={`${styles.lensFollower} ${
                isHovering ? styles.lensFollowerActive : ""
              }`}
              aria-hidden="true"
            >
              <div className={styles.lensTextInner}>
                <div className={styles.headline}>
                  <div className={styles.lineOne}>
                    <span>We Don&apos;t Just</span>
                    <span className={styles.doubleArrowIcon}>
                      <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6L28 18L14 30M28 6L42 18L28 30" stroke="#FFE600" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className={styles.lineTwo}>
                    <span>Engineer Systems.</span>
                    <span>We</span>
                  </div>
                  <div className={styles.lineThree}>
                    <span>Give Them</span>
                    <span className={styles.headlineGradient}>Velocity</span>
                    <div className={styles.inlineCtaBtn}>
                      <span className={styles.ctaBtnArrowWrap}>
                        <ArrowRight size={18} />
                      </span>
                      <span>Work With Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Sleek Studio Summary (Clean Typography, outside titleArea so lens only covers big text) */}
          <div className={styles.heroIntroBrief}>
            <p>
              <strong className={styles.introBrand}>Reversun</strong> is a creative technology studio building high-velocity{" "}
              <span className={styles.introHighlight}>web</span>,{" "}
              <span className={styles.introHighlight}>cloud</span>, and{" "}
              <span className={styles.introHighlight}>AI-driven</span> solutions that help ambitious brands{" "}
              <strong className={styles.introOrange}>grow, scale, and lead.</strong>
            </p>
          </div>
        </div>

        {/* Bento Grid Visual Showcase (Matching Reference Layout) */}
        <div className={styles.bentoGrid}>
          {/* Card 1: Action & Rapid Deployment Hub */}
          <div className={styles.bentoActionCard}>
            <div className={styles.actionPillsRow}>
              <Link
                href="/contact"
                className={styles.pillBtnOrange}
                id="hero-new-project-pill"
              >
                <span>New Project</span>
                <Plus size={16} />
              </Link>
              <Link
                href="/product"
                className={styles.pillBtnLight}
                id="hero-explore-products-pill"
              >
                <span>Explore Products</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className={styles.bentoStatTag}>
              <div className={styles.bentoStatNumber}>50+</div>
              <div className={styles.bentoStatLabel}>Enterprise Projects Shipped</div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#FC6235", fontWeight: 700 }}>
                <Zap size={13} />
                <span>10x Faster Deployment Speed</span>
              </div>
            </div>
          </div>

          {/* Card 2: 3D Team Studio Asset */}
          <div className={styles.bentoTeamCard}>
            <Image
              src="/hero-team.jpg"
              alt="Reversun Engineering Studio Team"
              width={600}
              height={450}
              className={styles.bentoTeamImg}
              priority
            />
            <div className={styles.bentoTeamOverlay}>
              <span className={styles.teamBadgeText}>Human Ingenuity × Advanced Tech</span>
              <span style={{ fontSize: 12, color: "#FC6235", fontWeight: 800 }}>REVERSUN</span>
            </div>
          </div>

          {/* Card 3: Rotating Emblem Badge */}
          <div className={styles.bentoEmblemCard}>
            <div className={styles.emblemWrapper}>
              <svg viewBox="0 0 100 100" className={styles.rotatingCircleText}>
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fill="#1B3360" fontSize="9" fontWeight="800" letterSpacing="1.8">
                  <textPath href="#circlePath" startOffset="0%">
                    REVERSUN • CLOUD • AI • INNOVATION •
                  </textPath>
                </text>
              </svg>
              <div className={styles.emblemCenterIcon}>
                <Layers size={24} />
              </div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#1B3360", marginTop: 12, letterSpacing: 0.5 }}>
              PROPRIETARY CORE
            </span>
          </div>

          {/* Card 4: 3D Layered Architecture Core */}
          <div className={styles.bentoStackCard}>
            <Image
              src="/tech-stack.jpg"
              alt="Reversun Multi-Layered Tech Stack"
              width={500}
              height={500}
              className={styles.bentoStackImg}
            />
            <div className={styles.bentoStackTag}>
              <span>3-Layer Cloud Stack</span>
            </div>
          </div>
        </div>

        {/* Bento Banner 5: Enterprise Trust & Clients */}
        <div className={styles.trustBanner}>
          <p className={styles.trustCopy}>
            Trusted by <strong>ambitious businesses</strong> to deliver high-impact results today
            while building the resilient foundation for international expansion.
          </p>

          <div className={styles.trustLogosRow}>
            {clientLogos.map((client, index) => (
              <span key={index} className={styles.trustClient}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
