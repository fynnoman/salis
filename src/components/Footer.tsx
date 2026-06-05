"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useContent } from "@/hooks/useContent";
import { Marquee, MagneticLink, LiveClock, RotaryBadge } from "@/components/_design";

const ease = [0.22, 1, 0.36, 1] as const;

const navLinks = [
  { name: "Start", href: "/#hero" },
  { name: "Leistungen", href: "/#services" },
  { name: "Über uns", href: "/#about" },
  { name: "Standorte", href: "/#standorte" },
  { name: "Projekte", href: "/portfolio" },
  { name: "Preise", href: "/preise" },
  { name: "Anfahrt", href: "/anfahrt" },
];

const pirmasens = [
  { name: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
  { name: "Unterhaltsreinigung", href: "/unterhaltsreinigung-pirmasens" },
  { name: "Grundreinigung", href: "/grundreinigung-pirmasens" },
  { name: "Büroreinigung", href: "/bueroreinigung-pirmasens" },
  { name: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
  { name: "Fensterreinigung", href: "/fensterreinigung-pirmasens" },
  { name: "Glasreinigung", href: "/glasreinigung-pirmasens" },
  { name: "Wintergartenreinigung", href: "/wintergartenreinigung-pirmasens" },
  { name: "Dachrinnenreinigung", href: "/dachrinnenreinigung-pirmasens" },
  { name: "Hausmeisterservice", href: "/hausmeisterservice-pirmasens" },
  { name: "Entrümpelung", href: "/entruempelung-pirmasens" },
  { name: "Winterdienst", href: "/winterdienst-pirmasens" },
];

const kaiserslautern = [
  { name: "Gebäudereinigung", href: "/gebaeudereinigung-kaiserslautern" },
  { name: "Unterhaltsreinigung", href: "/unterhaltsreinigung-kaiserslautern" },
  { name: "Grundreinigung", href: "/grundreinigung-kaiserslautern" },
  { name: "Büroreinigung", href: "/bueroreinigung-kaiserslautern" },
  { name: "Treppenhausreinigung", href: "/treppenhausreinigung-kaiserslautern" },
  { name: "Fensterreinigung", href: "/fensterreinigung-kaiserslautern" },
  { name: "Glasreinigung", href: "/glasreinigung-kaiserslautern" },
  { name: "Wintergartenreinigung", href: "/wintergartenreinigung-kaiserslautern" },
  { name: "Dachrinnenreinigung", href: "/dachrinnenreinigung-kaiserslautern" },
  { name: "Hausmeisterservice", href: "/hausmeisterservice-kaiserslautern" },
  { name: "Entrümpelung", href: "/entruempelung-kaiserslautern" },
  { name: "Winterdienst", href: "/winterdienst-kaiserslautern" },
];

const weitere = [
  { name: "Zweibrücken — Gebäudereinigung", href: "/gebaeudereinigung-zweibruecken" },
  { name: "Zweibrücken — Fensterreinigung", href: "/fensterreinigung-zweibruecken" },
  { name: "Zweibrücken — Hausmeister", href: "/hausmeisterservice-zweibruecken" },
  { name: "Landstuhl — Gebäudereinigung", href: "/gebaeudereinigung-landstuhl" },
  { name: "Landstuhl — Hausmeister", href: "/hausmeisterservice-landstuhl" },
  { name: "Homburg — Gebäudereinigung", href: "/gebaeudereinigung-homburg" },
  { name: "Homburg — Hausmeister", href: "/hausmeisterservice-homburg" },
];

function LinkColumn({
  label,
  items,
}: {
  label: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <div className="marker-line text-voltage mb-5">{label}</div>
      <ul className="space-y-1.5">
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-2 text-bone/70 hover:text-voltage text-sm transition-colors"
            >
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                →
              </span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                {l.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { footer } = useContent();
  const phoneRaw = footer.phone.replace(/\s/g, "");

  return (
    <footer className="relative bg-ink text-bone overflow-hidden border-t border-bone/15">
      {/* TOP MARQUEE — giant SALIF */}
      <div className="border-b border-bone/15 py-2 bg-voltage text-ink">
        <Marquee
          items={["Salif", "Salif", "Salif", "Salif", "Salif"]}
          duration={28}
          itemClassName="font-display text-[clamp(4rem,12vw,14rem)] leading-[0.85]"
          separator="◆"
        />
      </div>

      {/* CTA section */}
      <div className="border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2 marker-line text-bone/60">
              05 / Kontakt
            </div>
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.85] text-bone">
                Eine Nummer.
                <br />
                <span className="text-voltage">Ein Ergebnis.</span>
              </h2>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <MagneticLink
                  href={`tel:${phoneRaw}`}
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-voltage text-ink font-display text-xl sm:text-2xl uppercase tracking-tight hover:bg-bone transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {footer.phone}
                </MagneticLink>
                <MagneticLink
                  href={`mailto:${footer.email}`}
                  className="group inline-flex items-center gap-3 px-6 py-4 sm:py-5 border-2 border-bone/30 text-bone font-display text-lg uppercase hover:border-voltage hover:text-voltage transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  E-Mail
                </MagneticLink>
              </div>

              <p className="font-editorial italic text-xl text-bone/70 max-w-xl">
                {footer.tagline}
              </p>
            </div>

            <div className="lg:col-span-3 lg:text-right space-y-4">
              <RotaryBadge size={120} />
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-bone/50 space-y-1.5 mt-4">
                <div className="flex lg:justify-end items-center gap-2">
                  <MapPin className="w-3 h-3 text-voltage" />
                  {footer.address}
                </div>
                <div>Mo – Sa · 07 – 20 Uhr</div>
                <div>
                  Live <LiveClock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LINK GRID */}
      <div className="border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <LinkColumn label="Navigation" items={navLinks} />
            <LinkColumn label="Pirmasens" items={pirmasens} />
            <LinkColumn label="Kaiserslautern" items={kaiserslautern} />
            <LinkColumn label="Weitere Städte" items={weitere} />
          </div>
        </div>
      </div>

      {/* MONOGRAM */}
      <div className="relative overflow-hidden border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20 relative">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease }}
            className="font-display text-[clamp(8rem,30vw,28rem)] leading-[0.78] text-bone/95 select-none"
          >
            SALIF.
          </motion.div>
          <div className="absolute right-6 top-6 marker-line text-bone/50">
            ©{new Date().getFullYear()}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
          © {new Date().getFullYear()} Salif Gebäudeservice — Haus und Mehr ·
          Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em]">
          <Link
            href="/impressum"
            className="text-bone/40 hover:text-voltage transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-bone/40 hover:text-voltage transition-colors"
          >
            Datenschutz
          </Link>
          <a
            href="#hero"
            className="flex items-center gap-2 text-bone/40 hover:text-voltage transition-colors"
          >
            Nach oben
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="border-t border-bone/[0.06]">
        <p className="text-bone/30 text-[10px] uppercase tracking-[0.22em] font-mono text-center py-3">
          designed by{" "}
          <a
            href="https://fylumarketing.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone/60 hover:text-voltage"
          >
            fylu · fylumarketing.de
          </a>
        </p>
      </div>

      {/* Hidden Taskey link kept */}
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

      {/* satisfy unused import */}
      <span hidden>
        <ArrowUpRight />
      </span>
    </footer>
  );
}
