"use client";

import React, { type ReactNode } from "react";
import styles from "./SplitPageLayout.module.css";

interface SplitPageLayoutProps {
  header: ReactNode;
  children: ReactNode;
  pageId?: string;
}

export default function SplitPageLayout({ header, children, pageId }: SplitPageLayoutProps) {
  return (
    <div className={styles.splitPageWrapper} id={pageId}>
      <div className="container">
        <div className={styles.splitGrid}>
          {/* Left Column: Fixed / Sticky Page Identity, Title & Category Pills */}
          <aside className={styles.leftCol}>
            {header}
          </aside>

          {/* Right Column: Main Interactive Page Content */}
          <main className={styles.rightCol}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
