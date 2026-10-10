"use client";

import React, { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";
import ProjectModal from "./ProjectModal";
import SideNumberNav from "./SideNumberNav";

export default function SiteLayout({ children }: { children: ReactNode }) {
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
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => handleOpenContact("Nav Consultation")}
      />

      {/* Floating Side Number Navigation (01, 02, 03, 04, 05) */}
      <SideNumberNav />

      <main style={{ minHeight: "calc(100vh - 160px)" }}>{children}</main>

      <Footer onOpenContact={() => handleOpenContact("Footer Consultation")} />

      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTopic={modalTopic}
      />
    </>
  );
}
