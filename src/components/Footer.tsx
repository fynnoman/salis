"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";

const footerNav = [
  { name: "Start", href: "/#hero" },
  { name: "Leistungen", href: "/#services" },
  { name: "Über uns", href: "/#about" },
  { name: "Projekte", href: "/portfolio" },
  { name: "Preise", href: "/preise" },
  { name: "Anfahrt", href: "/anfahrt" },
  { name: "Kontakt", href: "/#contact" },
];

const pirmasensLinks = [
  { name: "Gebäudereinigung Pirmasens", href: "/gebaeudereinigung-pirmasens" },
  { name: "Unterhaltsreinigung Pirmasens", href: "/unterhaltsreinigung-pirmasens" },
  { name: "Grundreinigung Pirmasens", href: "/grundreinigung-pirmasens" },
  { name: "Büroreinigung Pirmasens", href: "/bueroreinigung-pirmasens" },
  { name: "Treppenhausreinigung Pirmasens", href: "/treppenhausreinigung-pirmasens" },
  { name: "Fensterreinigung Pirmasens", href: "/fensterreinigung-pirmasens" },
  { name: "Glasreinigung Pirmasens", href: "/glasreinigung-pirmasens" },
  { name: "Wintergartenreinigung Pirmasens", href: "/wintergartenreinigung-pirmasens" },
  { name: "Dachrinnenreinigung Pirmasens", href: "/dachrinnenreinigung-pirmasens" },
  { name: "Hausmeisterservice Pirmasens", href: "/hausmeisterservice-pirmasens" },
  { name: "Entrümpelung Pirmasens", href: "/entruempelung-pirmasens" },
  { name: "Winterdienst Pirmasens", href: "/winterdienst-pirmasens" },
];

const kaiserslauternLinks = [
  { name: "Gebäudereinigung Kaiserslautern", href: "/gebaeudereinigung-kaiserslautern" },
  { name: "Unterhaltsreinigung Kaiserslautern", href: "/unterhaltsreinigung-kaiserslautern" },
  { name: "Grundreinigung Kaiserslautern", href: "/grundreinigung-kaiserslautern" },
  { name: "Büroreinigung Kaiserslautern", href: "/bueroreinigung-kaiserslautern" },
  { name: "Treppenhausreinigung Kaiserslautern", href: "/treppenhausreinigung-kaiserslautern" },
  { name: "Fensterreinigung Kaiserslautern", href: "/fensterreinigung-kaiserslautern" },
  { name: "Glasreinigung Kaiserslautern", href: "/glasreinigung-kaiserslautern" },
  { name: "Wintergartenreinigung Kaiserslautern", href: "/wintergartenreinigung-kaiserslautern" },
  { name: "Dachrinnenreinigung Kaiserslautern", href: "/dachrinnenreinigung-kaiserslautern" },
  { name: "Hausmeisterservice Kaiserslautern", href: "/hausmeisterservice-kaiserslautern" },
  { name: "Entrümpelung Kaiserslautern", href: "/entruempelung-kaiserslautern" },
  { name: "Winterdienst Kaiserslautern", href: "/winterdienst-kaiserslautern" },
];

const weitereStandorte = [
  { name: "Gebäudereinigung Zweibrücken", href: "/gebaeudereinigung-zweibruecken" },
  { name: "Fensterreinigung Zweibrücken", href: "/fensterreinigung-zweibruecken" },
  { name: "Hausmeisterservice Zweibrücken", href: "/hausmeisterservice-zweibruecken" },
  { name: "Gebäudereinigung Landstuhl", href: "/gebaeudereinigung-landstuhl" },
  { name: "Hausmeisterservice Landstuhl", href: "/hausmeisterservice-landstuhl" },
  { name: "Gebäudereinigung Homburg", href: "/gebaeudereinigung-homburg" },
  { name: "Hausmeisterservice Homburg", href: "/hausmeisterservice-homburg" },
];

export default function Footer() {
  const { footer } = useContent();

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Logo as full background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <Image
          src="/51D6E89F-A80E-41DF-9C4F-68DD77279567.png"
          alt="Salif Gebäudeservice Logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top — Brand & Quick contact */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 py-14 md:py-20">
          {/* Brand */}
          <div className="md:col-span-4">
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
              {footer.tagline ||
                "Ihr Partner für Reinigung, Hausmeisterservice und Gebäudepflege in Pirmasens, Kaiserslautern und der gesamten Westpfalz."}
            </p>

            {/* Contact info */}
            <ul className="space-y-3 mt-6">
              <li>
                <a
                  href={`tel:${footer.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {footer.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {footer.address}
                </div>
              </li>
            </ul>

            <motion.a
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-white transition-all"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Alle Projekte ansehen
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Pirmasens column */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-accent mb-5 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Pirmasens
            </h4>
            <nav aria-label="Leistungen Pirmasens">
              <ul className="space-y-2.5">
                {pirmasensLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Kaiserslautern column */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-accent mb-5 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Kaiserslautern
            </h4>
            <nav aria-label="Leistungen Kaiserslautern">
              <ul className="space-y-2.5">
                {kaiserslauternLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Weitere Standorte + Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-accent mb-5 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Weitere Standorte
            </h4>
            <nav aria-label="Weitere Standorte">
              <ul className="space-y-2.5">
                {weitereStandorte.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mt-8 mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2.5">
                {footerNav.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 md:py-10 gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Salif Gebäudeservice – Haus und mehr.
            Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-white/40 hover:text-accent text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/40 hover:text-accent text-sm transition-colors"
            >
              Datenschutz
            </Link>

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

        {/* Designer credit */}
        <div className="mt-4 pt-4 border-t border-white/[0.06]">
          <p className="text-white/30 text-xs text-center">
            designed by{" "}
            <a
              href="https://fylumarketing.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-accent"
            >
              fylu - marketing fylumarketing.de
            </a>
          </p>
        </div>
      </div>

      {/* Unsichtbarer Taskey-Link */}
      <a
        href="https://www.taskeyapp.com"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        .
      </a>
    </footer>
  );
}
