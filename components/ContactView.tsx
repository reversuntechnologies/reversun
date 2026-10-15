"use client";

import React, { useState } from "react";
import {
  Mail,
  Bolt,
  Send,
  Lock,
  CheckCircle2,
  Boxes,
  Terminal,
  Circle,
  CheckCircle,
  Loader2,
  AlertCircle,
  RotateCcw,
  ChevronRight,
  Database,
  ShieldAlert,
} from "lucide-react";
import styles from "./ContactView.module.css";

export default function ContactView() {
  const [interestType, setInterestType] = useState<"product" | "service">("service");
  const [selectedItem, setSelectedItem] = useState("Web & App Development");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const productOptions = [
    { name: "Presenza Platform", sub: "1-Min Smart Attendance App" },
    { name: "QuanBit Core", sub: "AI Quantum Algorithm Platform" },
  ];

  const serviceOptions = [
    { name: "Web & App Development", sub: "Full-Stack & Mobile" },
    { name: "AI & Automation", sub: "LLMs & Smart Workflows" },
    { name: "Cloud Management", sub: "Infrastructure & DevOps" },
    { name: "System Design", sub: "Scalable Architecture" },
  ];

  const currentOptions = interestType === "product" ? productOptions : serviceOptions;

  const handleTypeChange = (type: "product" | "service") => {
    setInterestType(type);
    if (type === "product") {
      setSelectedItem(productOptions[0].name);
    } else {
      setSelectedItem(serviceOptions[0].name);
    }
  };

  const handleResetForm = () => {
    setStatus("idle");
    setStatusMsg("");
    setUserQuery("");
  };

  const mailtoHref = `mailto:info@reversun.com?subject=${encodeURIComponent(
    `Reversun Inquiry [${interestType.toUpperCase()}: ${selectedItem}]`
  )}&body=${encodeURIComponent(
    `Name: ${userName || "Not provided"}\nEmail: ${userEmail}\nType: ${interestType}\nInquiry area: ${selectedItem}\nMessage: ${userQuery || "No additional message provided."}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;

    setStatus("loading");
    setStatusMsg("Sending your inquiry securely to info@reversun.com...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          type: interestType,
          inquiryArea: selectedItem,
          message: userQuery,
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "The inquiry could not be delivered.");
      }

      setStatus("success");
      setStatusMsg("Your inquiry was sent securely. Our team will reply from info@reversun.com.");
    } catch (error) {
      setStatus("error");
      setStatusMsg(
        error instanceof Error
          ? error.message
          : "The inquiry could not be delivered. You can email us directly instead."
      );
    }
  };

  return (
    <div className={styles.contactPageWrapper}>
      <div className="container">
        {/* Main Grid: Left Column 25%, Right Column 75% */}
        <div className={styles.mainGrid}>
          {/* LEFT COLUMN: Minimal Hero & Summary Panel (25%) */}
          <aside className={styles.leftCol}>
            {/* Clean Hero Headline */}
            <div className={styles.heroBlock}>
              <div className={styles.badgePill}>
                <span className={styles.badgeDot} />
                <span>CONTACT US</span>
              </div>
              <h1 className={styles.headline}>
                GET IN TOUCH WITH OUR TEAM
              </h1>
              <p className={styles.heroDesc}>
                Inquire about our products (<strong className={styles.boldNavy}>Presenza</strong>,{" "}
                <strong className={styles.boldNavy}>QuanBit</strong>) or bespoke engineering services.
                Senior engineers review every submission directly.
              </p>
            </div>

            {/* Side Summary Cards */}
            <div className={styles.sideSummaryCol}>
              {/* Direct Technical Inbox */}
              <div className={styles.inboxCard}>
                <div className={styles.inboxIconBox}>
                  <Mail size={22} />
                </div>
                <div className={styles.inboxTextCol}>
                  <span className={styles.inboxLabel}>DIRECT TECHNICAL INBOX</span>
                  <a href="mailto:info@reversun.com" className={styles.inboxEmailLink}>
                    info@reversun.com
                  </a>
                  <span className={styles.inboxSub}>Direct engineer evaluation &amp; reply</span>
                </div>
              </div>

              {/* Response Metric Strip (Deep Slate Navy #0b132b) */}
              <div className={styles.responseMetricCard}>
                <div className={styles.responseMetricLeft}>
                  <Bolt size={20} className={styles.boltIcon} />
                  <div>
                    <p className={styles.metricSubText}>FAST ENGINEER RESPONSE</p>
                    <p className={styles.metricBigVal}>&lt; 120 MIN</p>
                  </div>
                </div>
                <div className={styles.responseMetricRight}>
                  <p className={styles.metricSubText}>COMMUNICATION</p>
                  <p className={styles.metricDirectGuarantee}>DIRECT GUARANTEE</p>
                </div>
              </div>

              {/* Signal Badges */}
              <div className={styles.signalBadgesGrid}>
                <div className={styles.signalBadge}>
                  <span className={`${styles.signalDot} ${styles.signalDotOrange}`} />
                  <span className={styles.signalText}>NO SALES SPAM</span>
                </div>
                <div className={styles.signalBadge}>
                  <span className={`${styles.signalDot} ${styles.signalDotNavy}`} />
                  <span className={styles.signalText}>SECURE &amp; DIRECT</span>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Streamlined Inquiry Form (75%) */}
          <section className={styles.rightCol}>
            <div className={`${styles.formCard} animateComponent stagger-1`}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Send an Inquiry</h2>
                <p className={styles.formSubtitle}>
                  Select your area of interest and enter your email address.
                </p>
              </div>

              {status === "success" ? (
                /* Inline Sent Confirmation Screen */
                <div className={styles.sentSuccessView}>
                  <div className={styles.sentIconWrap}>
                    <CheckCircle2 size={42} className={styles.sentSuccessIcon} />
                  </div>
                  <h3 className={styles.sentTitle}>Inquiry Sent Successfully</h3>
                  <p className={styles.sentDesc}>
                    Thank you, <strong>{userName || "Partner"}</strong>. Your inquiry for{" "}
                    <strong>{selectedItem}</strong> was sent securely to{" "}
                    <strong>info@reversun.com</strong>. {statusMsg}
                  </p>
                  <div className={styles.sentSummaryBox}>
                    <div className={styles.sentSummaryRow}>
                      <span className={styles.sentSummaryLabel}>Category:</span>
                      <span className={styles.sentSummaryVal}>
                        {interestType === "product" ? "Product" : "Service"} ({selectedItem})
                      </span>
                    </div>
                    <div className={styles.sentSummaryRow}>
                      <span className={styles.sentSummaryLabel}>Email:</span>
                      <span className={styles.sentSummaryVal}>{userEmail}</span>
                    </div>
                    <div className={styles.sentSummaryRow}>
                      <span className={styles.sentSummaryLabel}>Target:</span>
                      <span className={styles.sentSummaryVal}>info@reversun.com</span>
                    </div>
                  </div>

                  <div className={styles.sentActionRow}>
                    <a href={mailtoHref} className={styles.submitAgainBtn}>
                      <Send size={16} />
                      <span>Email Directly Instead</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className={styles.submitAgainBtn}
                      id="btnSubmitAgain"
                    >
                      <RotateCcw size={16} />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.formBody}>
                  {/* 1. Type Toggle: Product vs Service */}
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>
                      Are you interested in a Product or Service? <span className={styles.requiredStar}>*</span>
                    </label>
                    <div className={styles.typeSelectorRow}>
                      <button
                        type="button"
                        onClick={() => handleTypeChange("product")}
                        className={`${styles.typeBtn} ${
                          interestType === "product" ? styles.typeBtnActive : styles.typeBtnInactive
                        }`}
                        id="btnProduct"
                      >
                        <Boxes size={16} />
                        <span>Product</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTypeChange("service")}
                        className={`${styles.typeBtn} ${
                          interestType === "service" ? styles.typeBtnActive : styles.typeBtnInactive
                        }`}
                        id="btnService"
                      >
                        <Terminal size={16} />
                        <span>Service</span>
                      </button>
                    </div>
                  </div>

                  {/* 2. Selection Matrix Pills */}
                  <div className={styles.inputGroup}>
                    <div className={styles.selectionLabelRow}>
                      <label className={styles.inputLabel}>
                        <span>Select {interestType === "product" ? "Product" : "Service"}</span>{" "}
                        <span className={styles.requiredStar}>*</span>
                      </label>
                      <span className={styles.selectedCountBadge}>1 SELECTED</span>
                    </div>

                    <div className={styles.pillsGrid}>
                      {currentOptions.map((opt) => {
                        const isSelected = selectedItem === opt.name;
                        return (
                          <button
                            key={opt.name}
                            type="button"
                            onClick={() => setSelectedItem(opt.name)}
                            className={`${styles.pillBtn} ${
                              isSelected ? styles.pillBtnActive : styles.pillBtnInactive
                            }`}
                          >
                            <div className={styles.pillTopRow}>
                              <span
                                className={`${styles.pillName} ${
                                  isSelected ? styles.pillNameActive : styles.pillNameInactive
                                }`}
                              >
                                {opt.name}
                              </span>
                              {isSelected ? (
                                <CheckCircle size={16} className={styles.pillCheckActive} />
                              ) : (
                                <Circle size={16} className={styles.pillCheckInactive} />
                              )}
                            </div>
                            <span className={styles.pillSub}>{opt.sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Name & Email Inputs */}
                  <div className={styles.twoInputsRow}>
                    <div className={styles.inputSubGroup}>
                      <label className={styles.fieldLabel} htmlFor="userName">
                        Your Name <span className={styles.optionalText}>(optional)</span>
                      </label>
                      <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your name or company"
                        className={styles.textField}
                      />
                    </div>

                    <div className={styles.inputSubGroup}>
                      <label className={styles.fieldLabel} htmlFor="userEmail">
                        <span>
                          Your Email <span className={styles.requiredStar}>*</span>
                        </span>
                        <span className={styles.optionalText}>(required)</span>
                      </label>
                      <input
                        id="userEmail"
                        type="email"
                        required
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={styles.textField}
                      />
                    </div>
                  </div>

                  {/* 4. Query / Description Field */}
                  <div className={styles.inputGroup}>
                    <label className={styles.fieldLabel} htmlFor="userQuery">
                      Description / Query <span className={styles.optionalText}>(optional)</span>
                    </label>
                    <textarea
                      id="userQuery"
                      rows={2}
                      value={userQuery}
                      onChange={(e) => setUserQuery(e.target.value)}
                      placeholder="Tell us about your requirements or questions..."
                      className={styles.textAreaField}
                    />
                  </div>

                  {/* 5. Primary CTA Button */}
                  <div className={styles.ctaGroup}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      id="submitBtn"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <span>Transmitting Inquiry...</span>
                          <Loader2 size={17} className={styles.spinIcon} />
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry to info@reversun.com</span>
                          <Send size={17} />
                        </>
                      )}
                    </button>
                    <p className={styles.guaranteeNote}>
                      <Lock size={13} className={styles.lockIcon} />
                      <span>Direct transmission guarantee. No marketing spam.</span>
                    </p>
                  </div>

                  {/* Feedback Notification Box */}
                  {status === "loading" && (
                    <div className={styles.statusNoticeBox} id="statusLoading">
                      <Loader2 size={17} className={styles.spinIcon} color="#FF5A2B" />
                      <p>{statusMsg}</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className={styles.statusErrorBox} id="statusError">
                      <AlertCircle size={17} color="#DC2626" />
                      <div>
                        <strong style={{ display: "block", marginBottom: 2 }}>Direct Transmission Note</strong>
                        <p style={{ margin: 0 }}>
                          {statusMsg}{" "}
                          <a
                            href={`mailto:info@reversun.com?subject=${encodeURIComponent(
                              `Inquiry: ${selectedItem}`
                            )}`}
                            style={{ textDecoration: "underline", fontWeight: 700, color: "inherit" }}
                          >
                            Click here to open mail directly.
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </section>
        </div>

        {/* THREE PRODUCT / CAPABILITY HIGHLIGHT CARDS AT BOTTOM */}
        <div className={styles.bottomHighlightGrid}>
          {/* Presenza Engine */}
          <div className={styles.bottomCard}>
            <div className={styles.bottomCardIconBox}>
              <Boxes size={20} />
            </div>
            <h3 className={styles.bottomCardTitle}>Presenza Engine</h3>
            <p className={styles.bottomCardDesc}>
              Real-time collaboration substrate delivering sub-50ms synchronized application state across
              edge clusters.
            </p>
            <span className={styles.bottomCardPillTag}>
              PRODUCT STACK // v4.2 <ChevronRight size={14} />
            </span>
          </div>

          {/* QuanBit Core */}
          <div className={styles.bottomCard}>
            <div className={styles.bottomCardIconBox}>
              <Database size={20} />
            </div>
            <h3 className={styles.bottomCardTitle}>QuanBit Core</h3>
            <p className={styles.bottomCardDesc}>
              High-throughput algorithmic pipeline designed for low-latency quantitative telemetry and
              processing.
            </p>
            <span className={styles.bottomCardPillTag}>
              PRODUCT STACK // v2.9 <ChevronRight size={14} />
            </span>
          </div>

          {/* Bespoke Engineering */}
          <div className={styles.bottomCard}>
            <div className={styles.bottomCardIconBox}>
              <ShieldAlert size={20} />
            </div>
            <h3 className={styles.bottomCardTitle}>Bespoke Engineering</h3>
            <p className={styles.bottomCardDesc}>
              Dedicated senior staff augmenting your core engineering teams for mission-critical software
              systems.
            </p>
            <span className={styles.bottomCardPillTag}>
              ENTERPRISE SERVICES <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
