"use client";

import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "Products", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "Gallery", href: "#gallery" },

  ],
  about: [
    { label: "History", href: "#about" },
    { label: "Achievements", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ],
  service: [
    { label: "Standards", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-foreground">
              Taban Niroo
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              High-voltage composite insulators. Power transmission. IEC. Shiraz, Iran. Since 1998.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Standards</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Taban Niroo. All rights reserved.
          </p>

          

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="https://www.taban-niroo.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">taban-niroo.com</a>
            <a href="mailto:info@taban-niroo.com" className="transition-colors hover:text-foreground">info@taban-niroo.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
