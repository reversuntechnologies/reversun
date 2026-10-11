"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideNumberNav.module.css";

export default function SideNumberNav() {
  const pathname = usePathname();

  const navItems = [
    { num: "01", label: "Home", href: "/" },
    { num: "02", label: "Services", href: "/services" },
    { num: "03", label: "Products", href: "/product" },
    { num: "04", label: "Clients", href: "/clients" },
    { num: "05", label: "Contact Us", href: "/contact" },
  ];

  return (
    <aside className={styles.sideNavWrapper} aria-label="Page navigation numbers">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <div key={item.num} className={styles.navItem}>
            {/* Hover Tooltip with section name */}
            <div className={styles.tooltip}>
              <span className={styles.tooltipDot} />
              <span>{item.label}</span>
            </div>

            {/* Circular Number Pill */}
            <Link
              href={item.href}
              className={`${styles.numCircle} ${
                isActive ? styles.activeCircle : ""
              }`}
              aria-label={`Go to ${item.label} (Page ${item.num})`}
            >
              {item.num}
            </Link>
          </div>
        );
      })}
    </aside>
  );
}
