"use client";

import { useState } from "react";
import { PROFILE } from "@/data/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";
import Blueprint from "./Blueprint";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const activeSection = useScrollSpy();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (link: (typeof NAV_LINKS)[number], onClick?: () => void) => (
    <a
      key={link.href}
      href={link.href}
      className="navlink"
      data-active={activeSection === link.href.slice(1)}
      onClick={onClick}
    >
      {link.label}
    </a>
  );

  return (
    <header className="site-header">
      <div className="site-header-inner wrap">
        <a href="#top" className="brand">
          <Blueprint className="brand-mark">JD</Blueprint>
          <span className="brand-name">{PROFILE.name}</span>
        </a>

        <nav className="site-nav">
          {NAV_LINKS.map((link) => navLink(link))}
        </nav>

        <div className="site-nav-actions">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ letterSpacing: ".06em", textTransform: "uppercase" }}
          >
            Résumé
          </a>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className="mobile-panel" data-open={menuOpen}>
        {NAV_LINKS.map((link) => navLink(link, () => setMenuOpen(false)))}
      </div>
    </header>
  );
}
