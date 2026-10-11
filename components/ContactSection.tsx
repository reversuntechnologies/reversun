"use client";

import React, { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Mail, 
  Send, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu,
  ArrowRight
} from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection({ initialService = "" }: { initialService?: string }) {
  const searchParams = useSearchParams();
  const urlProduct = searchParams?.get("product");
  const urlService = searchParams?.get("service") || initialService;

  const [inquiryType, setInquiryType] = useState<"service" | "product">(
    urlProduct ? "product" : "service"
  );
  const [selectedProduct, setSelectedProduct] = useState<string>(
    urlProduct || "Presenza"
  );
  const [selectedService, setSelectedService] = useState<string>(
    urlService || "Web & App Development"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (urlProduct) {
      setInquiryType("product");
      setSelectedProduct(urlProduct);
    } else if (urlService) {
      setInquiryType("service");
      setSelectedService(urlService);
    }
  }, [urlProduct, urlService]);

  const productOptions = [
    { id: "Presenza", label: "Presenza", sub: "1-Minute Attendance App" },
    { id: "QuanBit", label: "QuanBit", sub: "AI-based quantum algorithm learning platform" },
  ];

  const serviceOptions = [
    { id: "Web & App Development", label: "Web & App Development", sub: "Full-Stack & Mobile" },
    { id: "AI & Automation", label: "AI & Automation", sub: "LLMs & Smart Workflows" },
    { id: "Cloud Management", label: "Cloud Management", sub: "Infrastructure & DevOps" },
    { id: "System Design", label: "System Design", sub: "Scalable Architecture" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);

    // Optional mailto trigger in background so user has instant direct email client capability
    const subject = encodeURIComponent(
      `Reversun Inquiry: ${inquiryType === "product" ? selectedProduct : selectedService}`
    );
    const body = encodeURIComponent(
      `Name: ${name || "Not provided"}\nEmail: ${email}\nType: ${inquiryType}\nSelection: ${
        inquiryType === "product" ? selectedProduct : selectedService
      }\nMessage: ${message || "N/A"}`
    );
    // User can also click direct mailto button in success screen
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  const selectedItemName = inquiryType === "product" ? selectedProduct : selectedService;
  const mailtoHref = `mailto:info@reversun.com?subject=${encodeURIComponent(
    `Inquiry: ${selectedItemName} - Reversun`
  )}&body=${encodeURIComponent(
    `Hello Reversun Team,\n\nName: ${name || "N/A"}\nEmail: ${email}\nInterested in: ${selectedItemName}\n\nNotes:\n${message || "Looking forward to hearing from you."}`
  )}`;

  return (
    <div className={styles.contactSectionRight} id="contact">
      {/* Right Column: Clean Dedicated Form */}
      <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIconWrap}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Prepared!</h3>
                <p className={styles.successMsg}>
                  Thank you{name ? `, ${name}` : ""}. Your request for{" "}
                  <strong>{selectedItemName}</strong> has been directed to{" "}
                  <strong>info@reversun.com</strong>.
                </p>
                <div style={{ background: "#F1F5F9", padding: "16px 20px", borderRadius: "12px", width: "100%", fontSize: "13px", color: "#334155", textAlign: "left" }}>
                  <div style={{ fontWeight: 700, color: "#1B3360", marginBottom: "4px" }}>
                    Inquiry Summary:
                  </div>
                  • <strong>Category:</strong> {inquiryType === "product" ? "Product" : "Service"} ({selectedItemName})<br />
                  • <strong>Contact Email:</strong> {email}<br />
                  • <strong>Target Inbox:</strong> info@reversun.com
                </div>

                <div style={{ display: "flex", gap: "12px", width: "100%", marginTop: "12px", flexWrap: "wrap" }}>
                  <a
                    href={mailtoHref}
                    className={styles.submitBtn}
                    style={{ flex: 1, textDecoration: "none", textAlign: "center" }}
                  >
                    <span>Open in Email Client</span>
                    <Mail size={16} />
                  </a>
                  <button
                    className={styles.resetBtn}
                    onClick={handleReset}
                    style={{ flex: 1 }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formCardHeader}>
                  <h3 className={styles.formCardTitle}>Send an Inquiry</h3>
                  <p className={styles.formCardSubtitle}>
                    Select your area of interest and enter your email address.
                  </p>
                </div>

                <div className={styles.formGrid}>
                  {/* Step 1: Product or Service Selection */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>
                      Are you interested in a Product or Service? *
                    </label>
                    <div className={styles.typeSelectorRow}>
                      <button
                        type="button"
                        onClick={() => setInquiryType("product")}
                        className={`${styles.typeBtn} ${
                          inquiryType === "product" ? styles.activeTypeBtn : ""
                        }`}
                      >
                        <Layers size={18} />
                        <span>Product</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setInquiryType("service")}
                        className={`${styles.typeBtn} ${
                          inquiryType === "service" ? styles.activeTypeBtn : ""
                        }`}
                      >
                        <Cpu size={18} />
                        <span>Service</span>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Specific Selection based on Type */}
                  {inquiryType === "product" ? (
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Select Product *</label>
                      <div className={styles.optionsList}>
                        {productOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setSelectedProduct(opt.id)}
                            className={`${styles.optionChipBtn} ${
                              selectedProduct === opt.id ? styles.activeOptionChipBtn : ""
                            }`}
                          >
                            <span className={styles.optLabel}>{opt.label}</span>
                            <span className={styles.optSub}>{opt.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label}>Select Service *</label>
                      <div className={styles.optionsList}>
                        {serviceOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setSelectedService(opt.id)}
                            className={`${styles.optionChipBtn} ${
                              selectedService === opt.id ? styles.activeOptionChipBtn : ""
                            }`}
                          >
                            <span className={styles.optLabel}>{opt.label}</span>
                            <span className={styles.optSub}>{opt.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Name (Optional as per user audio) */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Your Name <span className={styles.optionalTag}>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name or company"
                      className={styles.input}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email (Must / Required as per user audio) */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Your Email * <span className={styles.requiredTag}>(Required)</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Description / Message (Optional as per user audio) */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>
                      Description / Query <span className={styles.optionalTag}>(Optional)</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your requirements or questions..."
                      className={styles.textarea}
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn} id="submit-inquiry-btn">
                  <span>Send Inquiry to info@reversun.com</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
    </div>
  );
}
