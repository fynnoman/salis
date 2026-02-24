"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { name: "Start", href: "#hero" },
  { name: "Leistungen", href: "#services" },
  { name: "Über uns", href: "#about" },
  { name: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Logo as full background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]">
        <Image
          src="/51D6E89F-A80E-41DF-9C4F-68DD77279567.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer */}
        <div className="grid md:grid-cols-3 gap-16 py-28">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-emerald-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">SALIF</span>
                <span className="block text-[10px] tracking-widest uppercase text-white/60">
                  Gebäudeservice
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Haus und mehr GbR – Ihre zuverlässigen Dienstleistungen aus einer
              Hand in Pirmasens und Umgebung.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:015229043159"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  01522 904 3159
                </a>
              </li>
              <li>
                <a
                  href="mailto:salif-dienstleistungen@gmx.de"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  salif-dienstleistungen@gmx.de
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Emilienstraße 5a, 66955 Pirmasens
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-10 gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Salif Gebäudeservice – Haus und mehr
            GbR. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            <a href="/impressum" className="text-white/40 hover:text-accent text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-white/40 hover:text-accent text-sm transition-colors">
              Datenschutz
            </a>

            {/* Back to top */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-white/40 hover:text-accent text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              Nach oben
              <ArrowUp className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
