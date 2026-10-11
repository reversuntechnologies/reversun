"use client";

import React, { useState, type FormEvent } from "react";
import { X, Send, CheckCircle2, Sparkles, Clock } from "lucide-react";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export default function ProjectModal({ isOpen, onClose, defaultTopic = "" }: ProjectModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(defaultTopic || "New Enterprise Project");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) return;
    setDone(true);
  };

  const handleReset = () => {
    setDone(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        {done ? (
          <div className={styles.successView}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FFF4EF", color: "#FC6235", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1B3360" }}>
              Inquiry Dispatched!
            </h3>
            <p style={{ fontSize: 14, color: "#5C6E87", lineHeight: 1.6 }}>
              Thank you, <strong>{name}</strong>. Your inquiry for <strong>{topic}</strong> has been routed to{" "}
              <strong>info@reversun.com</strong>. We will reply to <strong>{email}</strong> shortly.
            </p>
            <button
              onClick={handleReset}
              className={styles.submitBtn}
              style={{ width: "100%", marginTop: 12 }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.badge}>
              <Sparkles size={13} />
              <span>Direct Engineering Access</span>
            </div>
            <h3 className={styles.title}>Let&apos;s Build With Reversun</h3>
            <p className={styles.subtitle}>
              Connect with our team. We review your requirements and respond directly via info@reversun.com.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Topic / Product / Service</label>
                <input
                  type="text"
                  placeholder="Presenza, QuanBit, AI & Automation, Web & App..."
                  className={styles.input}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Brief Scope (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you are aiming to build..."
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#5C6E87" }}>
                <Clock size={13} color="#FC6235" />
                <span>Average response SLA: &lt; 2 hours</span>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Brief & Book Call</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
