"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWishlist } from "@/lib/wishlist";
import {
  IconCouronne,
  IconCoeur,
  IconTelephone,
  IconWhatsApp,
  IconInstagram,
  IconPin,
} from "./icons/CoutureIcons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { count } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/les-mariees", label: "Les Mariées" },
    { href: "/haute-couture-atelier", label: "L'Atelier" },
    { href: "/ceremonies-couleurs", label: "Cérémonies" },
    { href: "/accessoires", label: "Accessoires" },
    { href: "/reels-galerie", label: "Galerie & Reels" },
    { href: "/trouver-ma-silhouette", label: "Silhouette Quiz" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0E0B12]/92 backdrop-blur-md border-b border-[#D8BE8F]/15 py-3 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-[#0E0B12]/80 via-[#0E0B12]/40 to-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo: Crown + Pink Script Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-1 focus:ring-[#D4688A] rounded-sm py-1"
          aria-label="Rue des Princesses - Accueil"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#17121C] border border-[#D8BE8F]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D4688A]/60 shadow-[0_0_12px_rgba(212,104,138,0.2)]">
            <IconCouronne className="w-4 h-4 sm:w-5 sm:h-5 text-[#D8BE8F] transition-colors group-hover:text-[#D4688A]" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-2xl tracking-wide font-normal text-[#F8F2EA] transition-colors group-hover:text-white"
              style={{
                fontFamily: "var(--font-pinyon), cursive",
                color: "#D4688A",
              }}
            >
              Rue des Princesses
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#D8BE8F]/90 font-light -mt-1">
              Atelier · Perpignan
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-[0.14em] uppercase font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? "text-[#D4688A]"
                    : "text-[#D9D5E4]/80 hover:text-[#F8F2EA]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4688A] shadow-[0_0_6px_#D4688A]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Wishlist + RDV + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Wishlist Heart Link */}
          <Link
            href="/mes-coups-de-coeur"
            className="relative p-2 rounded-full border border-white/10 hover:border-[#D4688A]/50 bg-[#17121C]/60 text-[#F8F2EA] transition-all hover:scale-105"
            aria-label={`Mes coups de cœur (${count})`}
          >
            <IconCoeur
              className={`w-5 h-5 transition-colors ${
                count > 0 ? "text-[#D4688A] fill-[#D4688A]" : "text-[#D9D5E4]"
              }`}
            />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D4688A] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                {count}
              </span>
            )}
          </Link>

          {/* Desktop RDV Button */}
          <Link
            href="/rendez-vous"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#D4688A] hover:bg-[#BF5374] text-white text-xs tracking-wider uppercase font-medium btn-shine-sweep shadow-[0_0_15px_rgba(212,104,138,0.35)] transition-all"
          >
            Prendre Rendez-vous
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#F8F2EA] hover:text-[#D4688A] focus:outline-none focus:ring-1 focus:ring-[#D4688A]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "w-6 rotate-45 translate-y-2 text-[#D4688A]" : "w-6"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4 text-[#D8BE8F]"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 ${
                  isOpen
                    ? "w-6 -rotate-45 -translate-y-2 text-[#D4688A]"
                    : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* FULL-SCREEN Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0E0B12] z-50 flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 lg:hidden overflow-y-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <IconCouronne className="w-5 h-5 text-[#D8BE8F]" />
            <span
              className="text-2xl text-[#D4688A]"
              style={{ fontFamily: "var(--font-pinyon), cursive" }}
            >
              Rue des Princesses
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#F8F2EA] hover:text-[#D4688A] text-xl"
            aria-label="Fermer le menu"
          >
            ✕
          </button>
        </div>

        {/* Large Couture Navigation Links */}
        <nav
          className="my-auto py-8 flex flex-col gap-5 sm:gap-6"
          aria-label="Menu mobile"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl sm:text-3xl font-serif tracking-tight text-[#F8F2EA] hover:text-[#D4688A] transition-colors flex items-center justify-between group"
              style={{
                fontFamily: "var(--font-bodoni), Georgia, serif",
                transitionDelay: `${idx * 40}ms`,
              }}
            >
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                {link.label}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#D8BE8F]/60 group-hover:text-[#D4688A]">
                {`0${idx + 1}`}
              </span>
            </Link>
          ))}

          <Link
            href="/mes-coups-de-coeur"
            onClick={() => setIsOpen(false)}
            className="text-xl font-serif text-[#D4688A] pt-4 border-t border-white/10 flex items-center gap-3"
          >
            <IconCoeur className="w-5 h-5 fill-[#D4688A]" />
            Mes coups de cœur ({count})
          </Link>
        </nav>

        {/* Bottom Contact & Atelier Details */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4 text-xs text-[#D9D5E4]">
          <div className="flex items-start gap-2.5">
            <IconPin className="w-4 h-4 text-[#D8BE8F] shrink-0 mt-0.5" />
            <span>21 Rue Rem Villeneuve, 66000 Perpignan, France</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="tel:+33646858626"
              className="flex items-center gap-1.5 text-[#F8F2EA] hover:text-[#D4688A]"
            >
              <IconTelephone className="w-4 h-4 text-[#D8BE8F]" />
              06 46 85 86 26
            </a>
            <a
              href="https://wa.me/33646858626"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F8F2EA] hover:text-[#25D366]"
            >
              <IconWhatsApp className="w-4 h-4 text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/rue_des_princesses_66/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F8F2EA] hover:text-[#D4688A]"
            >
              <IconInstagram className="w-4 h-4 text-[#D4688A]" />
              Instagram
            </a>
          </div>

          <Link
            href="/rendez-vous"
            onClick={() => setIsOpen(false)}
            className="w-full mt-2 py-3 rounded-full bg-[#D4688A] text-white text-center text-xs tracking-wider uppercase font-semibold shadow-lg shadow-[#D4688A]/30"
          >
            Prendre rendez-vous à l&apos;atelier
          </Link>
        </div>
      </div>
    </header>
  );
}
