"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contacto" },
];

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      for (const link of navLinks) {
        const element = document.getElementById(link.href.slice(1));
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = element.id;
        }
      }

      setActiveSection((previous) =>
        previous === current ? previous : current,
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top + window.scrollY - 80;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-[#020617]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            onClick={(event) => handleLinkClick(event, "#hero")}
            aria-label="Ir al inicio"
            className={`inline-flex min-h-11 min-w-11 items-center text-xl font-bold text-white ${focusStyles}`}
          >
            JH<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded px-1 text-sm font-medium transition-colors hover:text-blue-300 ${focusStyles} ${isActive ? "text-blue-400" : "text-slate-300"}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-200 hover:bg-slate-900 hover:text-white md:hidden ${focusStyles}`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-slate-800 bg-[#020617] md:hidden"
        >
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleLinkClick(event, link.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-slate-900 hover:text-blue-300 ${focusStyles} ${isActive ? "text-blue-400" : "text-slate-200"}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
