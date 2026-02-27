"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b border-border/70 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl" : "bg-background/70 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-foreground"
          }`}
        >
          Taban Niroo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Products
          </Link>
          <Link
            href="/projects"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projects &amp; Partners
          </Link>
          <Link
            href="/blog"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog – R&amp;D
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isScrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-foreground text-background hover:bg-foreground/90"
            }`}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-8 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6">
            <Link
              href="/about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/projects"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects &amp; Partners
            </Link>
            <Link
              href="/blog"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog – R&amp;D
            </Link>
            <Link
              href="/contact"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
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
