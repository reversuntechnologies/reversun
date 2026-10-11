"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    { name: "Products", href: "/product" },
    { name: "Clients", href: "/clients" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoArea} onClick={() => setMobileOpen(false)} aria-label="Reversun Home">
          <Image
            src="/REVERSUN LOGO.svg"
            alt="Reversun"
            width={180}
            height={42}
            style={{ width: "auto", height: "40px" }}
            className={styles.logoImg}
            priority
          />
        </Link>

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

        {/* Contact Us Action Link */}
        <Link
          href="/contact"
          className={`${styles.ctaBtn} ${pathname === "/contact" ? styles.activeCtaBtn : ""}`}
          id="nav-contact-btn"
          style={{ textDecoration: "none" }}
        >
          <span>Contact Us</span>
        </Link>

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
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={styles.ctaBtn}
            onClick={() => setMobileOpen(false)}
            style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
          >
            <span>Contact Us</span>
          </Link>
        </div>
      )}
    </header>
  );
}
