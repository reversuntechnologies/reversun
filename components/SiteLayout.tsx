"use client";

import React, { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";
import ProjectModal from "./ProjectModal";
import SideNumberNav from "./SideNumberNav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("");

  const handleOpenContact = (topic: string = "General Inquiry") => {
    setModalTopic(topic);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar
        onOpenContact={() => handleOpenContact("Nav Consultation")}
      />

      {/* Floating Side Number Navigation (01, 02, 03, 04, 05) */}
      <SideNumberNav />

      <main
        key={pathname}
        className="pageTransitionWrapper"
        style={{ minHeight: "calc(100vh - 160px)" }}
      >
        {children}
      </main>

      <Footer onOpenContact={() => handleOpenContact("Footer Consultation")} />

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic={modalTopic}
      />
    </>
  );
}
