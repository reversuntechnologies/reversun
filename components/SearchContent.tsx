import Link from "next/link";
import styles from "./SearchContent.module.css";

type SearchContentVariant = "services" | "products" | "clients";

type FaqItem = {
  question: string;
  answer: string;
};

const content = {
  services: {
    title: "Engineering Services, Explained",
    intro:
      "Reversun helps teams design, build and operate web products, AI workflows, cloud platforms and distributed systems. Engagements begin with a technical brief, continue through an agreed delivery plan, and finish with documented handover and support options.",
    sections: [
      {
        title: "What does Reversun build?",
        text: "Reversun builds web and mobile applications, AI and automation workflows, cloud infrastructure and system architectures. The public service areas are Web & App Development, AI & Automation, Cloud Infrastructure and System Design.",
      },
      {
        title: "How an engineering engagement works",
        text: "The first step is a direct inquiry describing the product, operational bottleneck or architecture question. Reversun can then scope the desired outcome, identify constraints, propose a technical path and agree on delivery milestones before implementation begins.",
      },
      {
        title: "Who are these services for?",
        text: "The services are intended for teams that need a product built, an operational workflow automated, a cloud environment organized or a high-load system designed. The right scope depends on the current system, security needs, users and delivery target.",
      },
    ],
    faqs: [
      {
        question: "What is Reversun's AI and automation service?",
        answer: "Reversun's AI and automation service covers autonomous agent workflows, process automation, retrieval-augmented search, LLM integrations and intelligent pipelines for operational use cases.",
      },
      {
        question: "Can Reversun build web and mobile applications?",
        answer: "Yes. Reversun builds full-stack web applications and cross-platform mobile applications using modern web technologies such as React, Next.js and TypeScript, with the final stack chosen for the product requirements.",
      },
      {
        question: "What does system design work include?",
        answer: "System design work can include distributed-system boundaries, microservice decomposition, database architecture, messaging, fault tolerance and data-flow decisions for systems that need to scale reliably.",
      },
      {
        question: "How do I start a project with Reversun?",
        answer: "Start by sending an inquiry with the product, service area, current constraint and desired outcome. Reversun uses that information to prepare a direct technical discussion through the contact channel.",
      },
    ],
  },
  products: {
    title: "Product Details and Answers",
    intro:
      "Reversun's public product portfolio includes Presenza, a smart attendance application for educational environments, and QuanBit, an interactive quantum algorithm learning platform. Each product page describes its intended use and currently documented capabilities.",
    sections: [
      {
        title: "Presenza: attendance workflow",
        text: "Presenza is designed to complete classroom and college attendance in approximately one minute. Its documented product capabilities include attendance capture, faculty verification dashboards, absent tracking and departmental reporting.",
      },
      {
        title: "QuanBit: quantum learning workflow",
        text: "QuanBit is an interactive quantum computation learning platform. Its documented capabilities include a Quantum Circuit Lab with Qiskit Aer simulation, 3D Bloch sphere visualization, an AI Socratic tutor and practice-oriented circuit learning.",
      },
      {
        title: "Product access and inquiries",
        text: "Presenza inquiries can be sent through Reversun's contact page. QuanBit has a public product destination at quanbit.tech, and Reversun can be contacted for product or partnership questions.",
      },
    ],
    faqs: [
      {
        question: "What is Presenza?",
        answer: "Presenza is Reversun's smart attendance application for classrooms and colleges. It is designed for rapid attendance capture, faculty verification, absent tracking and departmental reporting in an approximately one-minute workflow.",
      },
      {
        question: "What is QuanBit?",
        answer: "QuanBit is Reversun's interactive quantum algorithm learning and simulation platform. It includes a Quantum Circuit Lab, Qiskit Aer simulation, 3D quantum visualization and an AI Socratic tutoring experience.",
      },
      {
        question: "Where can I learn more about QuanBit?",
        answer: "QuanBit's public website is available at quanbit.tech. Reversun's product page also summarizes the platform and provides an inquiry path.",
      },
      {
        question: "Can I ask Reversun about a product deployment?",
        answer: "Yes. Product deployment and partnership questions can be sent through Reversun's contact page, where the product and the context of the inquiry can be selected.",
      },
    ],
  },
  clients: {
    title: "Public Product Evidence",
    intro:
      "Client names and deployment details are not published where confidentiality agreements apply. The public evidence below is limited to Reversun-owned products and capabilities that are described on this site, so no client identity or performance result is implied.",
    sections: [
      {
        title: "Presenza product evidence",
        text: "The public Presenza description documents a classroom and college attendance workflow, including approximately one-minute attendance capture, faculty verification dashboards, absent tracking and departmental reports.",
      },
      {
        title: "QuanBit product evidence",
        text: "The public QuanBit description documents a quantum learning workflow with Qiskit Aer simulation, a circuit builder, 3D Bloch sphere visualization, AI Socratic tutoring and practice feedback. The product's public destination is quanbit.tech.",
      },
      {
        title: "What is not published",
        text: "No client names, confidential architecture diagrams, testimonials or private production benchmarks are presented here. Reversun should publish those details only after receiving the relevant client's written approval.",
      },
    ],
    faqs: [
      {
        question: "Why are Reversun client case studies not listed?",
        answer: "Reversun states that client collaborations and production architectures are being documented under NDA. The public page therefore avoids naming clients or publishing confidential implementation details.",
      },
      {
        question: "What public evidence is available today?",
        answer: "The public evidence available today is Reversun's own product documentation for Presenza and QuanBit, plus the service descriptions and technical capabilities published on this site.",
      },
      {
        question: "Can Reversun share a private architecture discussion?",
        answer: "A prospective partner can contact Reversun to discuss a project and determine what technical information can be shared under an appropriate confidentiality agreement.",
      },
    ],
  },
} satisfies Record<SearchContentVariant, {
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
  faqs: FaqItem[];
}>;

function getStructuredData(variant: SearchContentVariant, faqs: FaqItem[]) {
  const baseUrl = "https://www.reversun.com";
  const pagePath = variant === "services" ? "/services" : variant === "products" ? "/product" : "/clients";
  const pageUrl = `${baseUrl}${pagePath}`;
  const pageName = variant === "services" ? "Engineering Services" : variant === "products" ? "Proprietary Software Products" : "Client Partnerships and Public Product Evidence";

  const itemList = variant === "services"
    ? ["AI & Automation", "Web & App Development", "Cloud Infrastructure", "System Design"].map((name) => ({
        "@type": "Service",
        name,
        provider: { "@id": `${baseUrl}/#organization` },
      }))
    : ["Presenza", "QuanBit"].map((name) => ({
        "@type": "SoftwareApplication",
        name,
        author: { "@id": `${baseUrl}/#organization` },
      }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: pageName, item: pageUrl },
        ],
      },
      {
        "@type": variant === "clients" ? "CollectionPage" : "ItemList",
        "@id": `${pageUrl}#page`,
        name: pageName,
        url: pageUrl,
        ...(variant === "clients" ? {} : { itemListElement: itemList }),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export default function SearchContent({ variant }: { variant: SearchContentVariant }) {
  const pageContent = content[variant];
  const structuredData = getStructuredData(variant, pageContent.faqs);

  return (
    <section className={styles.searchContent} aria-labelledby={`${variant}-answers-title`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.contentHeader}>
        <span className={styles.eyebrow}>SEARCH ANSWERS</span>
        <h2 id={`${variant}-answers-title`}>{pageContent.title}</h2>
        <p>{pageContent.intro}</p>
      </div>

      <div className={styles.answerGrid}>
        {pageContent.sections.map((section) => (
          <article key={section.title} className={styles.answerCard}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.faqSection}>
        <div className={styles.faqHeading}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2>Questions teams ask</h2>
        </div>
        <div className={styles.faqList}>
          {pageContent.faqs.map((faq) => (
            <details key={faq.question} className={styles.faqItem}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <Link href="/contact" className={styles.contentCta}>
        Discuss a project with Reversun
      </Link>
    </section>
  );
}
