"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center pointer-events-none">
      {/* NAVBAR PILL */}
      <div
        className={`
          pointer-events-auto
          flex w-full max-w-6xl items-center justify-between
          rounded-full
          transition-all duration-300 ease-out
          ${
            isScrolled
              ? "h-14 bg-white/85 backdrop-blur-xl shadow-lg border border-black/5 px-6"
              : "h-12 bg-white/30 backdrop-blur-md border border-white/30 px-5"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`text-sm font-semibold tracking-[0.18em] uppercase transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Taban Niroo
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-7 text-sm transition-colors ${
            isScrolled ? "text-black/70" : "text-white/80"
          }`}
        >
          <Link href="/about" className="hover:text-black">
            About Us
          </Link>
          <Link href="/products" className="hover:text-black">
            Products
          </Link>
          <Link href="/projects" className="hover:text-black">
            Projects &amp; Partners
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog – R&amp;D
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={`rounded-full px-5 h-9 flex items-center text-sm font-medium transition-all ${
              isScrolled
                ? "bg-black text-white hover:bg-black/90"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-[4.5rem] z-40 rounded-2xl border border-border bg-background/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6">
            {[
              ["About Us", "/about"],
              ["Products", "/products"],
              ["Projects & Partners", "/projects"],
              ["Blog – R&D", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-lg text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
