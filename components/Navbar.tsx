"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Search, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenSearch, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Product", href: "/product" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoArea} onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-icon.png"
            alt="Reversun Logo"
            width={44}
            height={44}
            style={{ width: "auto", height: "44px" }}
            className={styles.logoImg}
            priority
          />
          <span className={styles.logoText}>
            REVER<span className={styles.logoTextOrange}>SUN</span>
          </span>
        </Link>

        {/* Quick Search Pill (Like DoodleByte Reference) */}
        <button
          className={styles.searchBar}
          onClick={onOpenSearch}
          aria-label="Search Reversun features and services"
        >
          <div className={styles.searchIconGrid}>
            <span className={styles.gridDot} />
            <span className={styles.gridDot} />
            <span className={styles.gridDot} />
            <span className={styles.gridDot} />
            <span className={styles.gridDot} />
            <span className={styles.gridDot} />
          </div>
          <span>Search Services, Tech...</span>
          <span className={styles.searchShortcut}>⌘K</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeNavLink : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && <span className={styles.activeIndicator} />}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button */}
        <button
          className={styles.ctaBtn}
          onClick={onOpenContact}
          id="nav-lets-talk-btn"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight size={18} />
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={styles.mobileDrawer}>
          <button
            className={styles.searchBar}
            onClick={() => {
              setMobileOpen(false);
              onOpenSearch();
            }}
            style={{ display: "flex", width: "100%" }}
          >
            <Search size={16} />
            <span>Search Services, Tech & Products...</span>
          </button>

          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      isActive ? styles.activeNavLink : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className={styles.ctaBtn}
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
