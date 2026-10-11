"use client";

import React, { useState, useRef, type MouseEvent } from "react";
import styles from "./PageHeader.module.css";

interface Pill {
  dot?: string;
  label: string;
  sub?: string;
}

interface PageHeaderProps {
  pageName: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  titleLine4?: string;
  previewText?: string;
  subtitle?: string;
  pills?: Pill[];
}

export default function PageHeader({
  pageName,
  titleLine1,
  titleLine2,
  titleLine3,
  titleLine4,
  previewText = "REVERSUN CORE",
  subtitle,
  pills = [],
}: PageHeaderProps) {
  const [isHovering, setIsHovering] = useState(false);
  const titleAreaRef = useRef<HTMLDivElement>(null);

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
      titleAreaRef.current.style.setProperty("--lens-size", "160px");
      titleAreaRef.current.style.setProperty("--lens-radius", "80px");
      titleAreaRef.current.style.setProperty("--lens-zoom", "1.48");
    }
  };

  const handleMouseUp = () => {
    if (titleAreaRef.current) {
      titleAreaRef.current.style.setProperty("--lens-size", "140px");
      titleAreaRef.current.style.setProperty("--lens-radius", "70px");
      titleAreaRef.current.style.setProperty("--lens-zoom", "1.38");
    }
  };

  return (
    <section className={styles.headerWrapper} aria-label={`${pageName} Header`}>
      <div className="container">
        {/* Big Bold Headline with Embedded Card & Interactive Round Lens */}
        <div>
          <div
            ref={titleAreaRef}
            className={styles.titleArea}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Base Layer */}
            <h1 className={styles.bigTitle}>
              {titleLine1 && <div>{titleLine1}</div>}
              {titleLine2 && <div>{titleLine2}</div>}
              <div className={styles.titleRow}>
                {titleLine3 && <span>{titleLine3}</span>}
                <span className={styles.inlineCardPreview}>
                  <span className={styles.inlinePreviewDot} />
                  <span>{previewText}</span>
                </span>
                {titleLine4 && <span>{titleLine4}</span>}
              </div>
            </h1>

            {/* Realistic Magnifying Zoom Glass Rig with Handle */}
            <div
              className={`${styles.lensRig} ${
                isHovering ? styles.lensRigActive : ""
              }`}
              aria-hidden="true"
            >
              <div className={styles.lensFollower}>
                <div className={styles.lensTextInner}>
                  <div className={styles.bigTitle}>
                    {titleLine1 && <div>{titleLine1}</div>}
                    {titleLine2 && <div>{titleLine2}</div>}
                    <div className={styles.titleRow}>
                      {titleLine3 && <span>{titleLine3}</span>}
                      <span className={styles.inlineCardPreview}>
                        <span className={styles.inlinePreviewDot} />
                        <span>{previewText}</span>
                      </span>
                      {titleLine4 && <span>{titleLine4}</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Realistic Magnifying Glass Handle */}
              <div className={styles.lensHandle}>
                <div className={styles.handleNeck} />
                <div className={styles.handleGrip} />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle Description */}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {/* Horizontal Category Pill Tags with Colored Indicator Dots */}
        {pills.length > 0 && (
          <ul className={styles.pillList}>
            {pills.map((pill, idx) => (
              <li key={idx} className={styles.pillItem}>
                <span
                  className={styles.pillDot}
                  style={{ backgroundColor: pill.dot || "#FC6235" }}
                />
                <span className={styles.pillLabel}>{pill.label}</span>
                {pill.sub && <span className={styles.pillSub}>{pill.sub}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
