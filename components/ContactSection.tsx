"use client";

import React, { useState, type FormEvent } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection({ initialService = "" }: { initialService?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService || "Cloud Mesh",
    budget: "$30k - $60k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How fast can Reversun mobilize an engineering squad?",
      a: "Our core squads can typically kick off sprint zero within 7 to 10 business days following architecture scoping and initial alignment.",
    },
    {
      q: "Who retains intellectual property (IP) and repository ownership?",
      a: "You retain 100% of all intellectual property, proprietary models, codebases, and deployment infrastructure configurations from day one.",
    },
    {
      q: "Do you offer post-launch 24/7 DevOps and maintenance support?",
      a: "Yes. We provide comprehensive enterprise SLAs including 24/7 telemetry monitoring, automated patching, and dedicated tier-3 on-call support.",
    },
    {
      q: "What security and compliance frameworks do you adhere to?",
      a: "We engineer systems according to SOC2 Type II, ISO 27001, HIPAA, and GDPR standards with strict zero-trust principles and end-to-end encryption.",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.contactLayout}>
          {/* Left Column: Direct Info & FAQs */}
          <div className={styles.infoCol}>
            <div>
              <div className={styles.preTitle}>
                <Sparkles size={16} />
                <span>Let&apos;s Build Together</span>
              </div>
              <h2 className={styles.title}>
                Start Your Project <br />
                With Reversun.
              </h2>
              <p className={styles.desc}>
                Have a groundbreaking initiative or mission-critical architecture to scale?
                Talk directly with our technical partners and lead architects.
              </p>
            </div>

            <div className={styles.responseSlaBadge}>
              <Clock size={16} />
              <span>Guaranteed Response Within 2 Business Hours</span>
            </div>

            {/* Channels */}
            <div className={styles.channelsList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.channelMeta}>
                  <strong>Direct Inquiries</strong>
                  <a href="mailto:info@reversun.com">info@reversun.com</a>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.channelMeta}>
                  <strong>Engineering Headquarters</strong>
                  <span>Tech Corridor, Innovation Boulevard</span>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.channelMeta}>
                  <strong>Direct Line</strong>
                  <span>+1 (800) 738-3778</span>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className={styles.faqSection}>
              <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
              <div className={styles.faqList}>
                {faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === i && <p className={styles.faqAnswer}>{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIconWrap}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 className={styles.successTitle}>Inquiry Dispatched!</h3>
                <p className={styles.successMsg}>
                  Thank you, <strong>{formData.name}</strong>. Our Principal Systems Architect has
                  received your brief for <em>{formData.service}</em> and will reach out to{" "}
                  <strong>{formData.email}</strong> shortly.
                </p>
                <div style={{ background: "#F1F5F9", padding: "16px 24px", borderRadius: "12px", width: "100%", textAlign: "left", fontSize: "13px", color: "#334155" }}>
                  <div style={{ fontWeight: "700", marginBottom: "4px", color: "#1B3360" }}>Next Steps:</div>
                  • Architecture review & feasibility assessment<br />
                  • Calendar invitation sent for 15-min discovery sync<br />
                  • Preliminary technical proposal within 24 hours
                </div>
                <button
                  className={styles.resetBtn}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "Cloud Mesh",
                      budget: "$30k - $60k",
                      message: "",
                    });
                  }}
                >
                  Submit another project brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formCardHeader}>
                  <h3 className={styles.formCardTitle}>Project Brief & Consultation</h3>
                  <p className={styles.formCardSubtitle}>
                    Fill out the parameters below and our squad will analyze your tech stack.
                  </p>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      className={styles.input}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  {/* Service Chip Selector */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Primary Focus Area</label>
                    <div className={styles.chipGroup}>
                      {[
                        "Cloud Mesh",
                        "AI & LLM Workflows",
                        "Web Platform",
                        "Mobile Application",
                        "Data Lakehouse",
                        "Design System",
                      ].map((item) => (
                        <button
                          type="button"
                          key={item}
                          className={`${styles.chip} ${
                            formData.service === item ? styles.activeChip : ""
                          }`}
                          onClick={() => setFormData({ ...formData, service: item })}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Target Investment Range</label>
                    <div className={styles.chipGroup}>
                      {["$15k - $30k", "$30k - $60k", "$60k - $120k", "$120k+"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          className={`${styles.chip} ${
                            formData.budget === b ? styles.activeChip : ""
                          }`}
                          onClick={() => setFormData({ ...formData, budget: b })}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Project Scope & Requirements</label>
                    <textarea
                      placeholder="Describe what you want to engineer, current architecture hurdles, or expected launch timeline..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn} id="submit-inquiry-btn">
                  <span>Send Project Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
