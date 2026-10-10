"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Layers, Cpu, Server, Users, PhoneCall, Sparkles } from "lucide-react";
import styles from "./CommandPalette.module.css";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const items = [
    { title: "Home - Studio Overview", type: "Page", href: "/", icon: <Sparkles size={16} /> },
    { title: "Services - Cloud & AI Capabilities", type: "Page", href: "/services", icon: <Cpu size={16} /> },
    { title: "Product - Technology Suite & Telemetry", type: "Page", href: "/product", icon: <Server size={16} /> },
    { title: "Clients - Enterprise Impact & Case Studies", type: "Page", href: "/clients", icon: <Users size={16} /> },
    { title: "Contact Us - Project Inquiry & SLA", type: "Page", href: "/contact", icon: <PhoneCall size={16} /> },
    { title: "Reversun CloudMesh™", type: "Product", href: "/product", icon: <Layers size={16} /> },
    { title: "Reversun FlowEngine™", type: "Product", href: "/product", icon: <Layers size={16} /> },
    { title: "Reversun Sentinel AI™", type: "Product", href: "/product", icon: <Layers size={16} /> },
    { title: "Autonomous AI Agents", type: "Service", href: "/services", icon: <Cpu size={16} /> },
    { title: "Enterprise Cloud Systems", type: "Service", href: "/services", icon: <Server size={16} /> },
    { title: "Bashtech Global Case Study", type: "Client", href: "/clients", icon: <Users size={16} /> },
    { title: "Ecopuls Energy Telemetry", type: "Client", href: "/clients", icon: <Users size={16} /> },
    { title: "Instant Project Cost Estimator", type: "Tool", href: "/services", icon: <Sparkles size={16} /> },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href) => {
    onClose();
    router.push(href);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.searchHeader}>
          <Search size={18} color="#FC6235" />
          <input
            type="text"
            placeholder="Search pages, services, products, clients..."
            className={styles.searchInput}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.closeKey} onClick={onClose}>
            ESC
          </button>
        </div>

        <ul className={styles.resultsList}>
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <li
                key={idx}
                className={styles.resultItem}
                onClick={() => handleSelect(item.href)}
              >
                <div className={styles.itemLeft}>
                  {item.icon}
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className={styles.itemType}>{item.type}</span>
                  <ArrowRight size={14} color="#8899AF" />
                </div>
              </li>
            ))
          ) : (
            <div className={styles.noResults}>
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
