"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#perfil", label: "Perfil" },
    { href: "#servicios", label: "Servicios" },
    { href: "#resultados", label: "Resultados" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy shadow-md" : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}>
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 md:gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.siteName}
            width={457}
            height={373}
            className={`transition-all duration-300 drop-shadow-md object-contain ${
              scrolled ? "w-9 md:w-11" : "w-12 md:w-16"
            }`}
            priority
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className={`font-heading font-bold tracking-wide transition-all duration-300 ${
              scrolled ? "text-cloud text-xs md:text-sm" : "text-navy text-base md:text-lg"
            }`}>CR</span>
            <span className={`font-body tracking-widest uppercase transition-all duration-300 ${
              scrolled ? "text-venus text-[8px] md:text-[9px]" : "text-navy text-[9px] md:text-[11px]"
            }`}>Estudio Odontológico</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-venus text-sm hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-cloud" : "text-navy"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú de navegación"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-navy px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-venus text-sm hover:text-navy transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
