"use client";

import { useRouter } from "next/navigation";
import { 
  Bot, 
  Smartphone, 
  CloudCog, 
  Network, 
  ArrowRight, 
  Zap 
} from "lucide-react";
import styles from "./ServicesSection.module.css";

export default function ServicesSection({ onSelectService }: { onSelectService?: (serviceTitle?: string) => void }) {
  const router = useRouter();

  const handleInquiry = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      router.push(`/contact?service=${encodeURIComponent(serviceTitle)}`);
    }
  };

  const services = [
    {
      id: "ai-automation",
      icon: <Bot size={26} />,
      title: "AI & Automation",
      desc: "Custom intelligent workflows, autonomous LLM agent pipelines, process automations, and model fine-tuning that eliminate operational bottlenecks.",
      tags: ["Autonomous Agents", "LLM Workflows", "Process Automation", "RAG & Vector Search"],
      metric: "Intelligent Execution",
    },
    {
      id: "web-app",
      icon: <Smartphone size={26} />,
      title: "Web & App Development",
      desc: "High-velocity web applications and cross-platform mobile apps engineered with modern tech stacks, built for sub-second responsiveness and flawless UX.",
      tags: ["Full-Stack Web", "Mobile Apps (iOS & Android)", "Next.js & React", "TypeScript"],
      metric: "High-Velocity Craft",
    },
    {
      id: "cloud-management",
      icon: <CloudCog size={26} />,
      title: "Cloud Management",
      desc: "End-to-end cloud infrastructure management, orchestration, CI/CD automated deployment pipelines, 24/7 uptime monitoring, and cloud cost optimization.",
      tags: ["Multi-Cloud Setup", "Kubernetes & Docker", "DevOps & CI/CD", "Reliability & Uptime"],
      metric: "99.99% Availability",
    },
    {
      id: "system-design",
      icon: <Network size={26} />,
      title: "System Design",
      desc: "Architectural blueprinting from first principles. High-load distributed systems, microservices decomposition, database schema design, and zero-bottleneck data flow.",
      tags: ["Distributed Systems", "Microservices", "Scalable DB Architecture", "Fault-Tolerant Design"],
      metric: "Resilient by Design",
    },
  ];

  return (
    <div className={styles.servicesSectionRight}>
      {/* 4 Core Services Grid */}
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardSummary}>{service.desc}</p>
              <div className={styles.tagsRow}>
                {service.tags.map((tag, i) => (
                  <span key={i} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardBottom}>
              <div className={styles.impactMetric}>
                <Zap size={14} />
                <span>{service.metric}</span>
              </div>
              <button
                className={styles.cardActionLink}
                onClick={() => handleInquiry(service.title)}
                aria-label={`Inquire about ${service.title}`}
              >
                <span>Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
