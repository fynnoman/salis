"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Marquee, RevealWords } from "@/components/_design";

const ease = [0.22, 1, 0.36, 1] as const;

type ServiceLink = { label: string; href: string };
type CityBlock = {
  key: string;
  city: string;
  meta: string;
  description: string;
  services: ServiceLink[];
};

const CITIES: CityBlock[] = [
  {
    key: "pirmasens",
    city: "Pirmasens",
    meta: "Heimatmarkt · 12 Leistungen",
    description:
      "Unser Betriebssitz seit 2020. Hier arbeiten wir täglich für Privathaushalte, Hausverwaltungen, Praxen und Gewerbe — kurze Wege, oft Termine am gleichen Tag.",
    services: [
      { label: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
      { label: "Unterhaltsreinigung", href: "/unterhaltsreinigung-pirmasens" },
      { label: "Grundreinigung", href: "/grundreinigung-pirmasens" },
      { label: "Büroreinigung", href: "/bueroreinigung-pirmasens" },
      { label: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
      { label: "Fensterreinigung", href: "/fensterreinigung-pirmasens" },
      { label: "Glasreinigung", href: "/glasreinigung-pirmasens" },
      { label: "Wintergartenreinigung", href: "/wintergartenreinigung-pirmasens" },
      { label: "Dachrinnenreinigung", href: "/dachrinnenreinigung-pirmasens" },
      { label: "Hausmeisterservice", href: "/hausmeisterservice-pirmasens" },
      { label: "Entrümpelung", href: "/entruempelung-pirmasens" },
      { label: "Winterdienst", href: "/winterdienst-pirmasens" },
    ],
  },
  {
    key: "kaiserslautern",
    city: "Kaiserslautern",
    meta: "Westpfalz · 12 Leistungen",
    description:
      "In der Barbarossastadt betreuen wir Bürogebäude, Praxen, Mehrfamilienhäuser und Gewerbeobjekte mit festen Reinigungsplänen und eigenem Personal vor Ort.",
    services: [
      { label: "Gebäudereinigung", href: "/gebaeudereinigung-kaiserslautern" },
      { label: "Unterhaltsreinigung", href: "/unterhaltsreinigung-kaiserslautern" },
      { label: "Grundreinigung", href: "/grundreinigung-kaiserslautern" },
      { label: "Büroreinigung", href: "/bueroreinigung-kaiserslautern" },
      { label: "Treppenhausreinigung", href: "/treppenhausreinigung-kaiserslautern" },
      { label: "Fensterreinigung", href: "/fensterreinigung-kaiserslautern" },
      { label: "Glasreinigung", href: "/glasreinigung-kaiserslautern" },
      { label: "Wintergartenreinigung", href: "/wintergartenreinigung-kaiserslautern" },
      { label: "Dachrinnenreinigung", href: "/dachrinnenreinigung-kaiserslautern" },
      { label: "Hausmeisterservice", href: "/hausmeisterservice-kaiserslautern" },
      { label: "Entrümpelung", href: "/entruempelung-kaiserslautern" },
      { label: "Winterdienst", href: "/winterdienst-kaiserslautern" },
    ],
  },
  {
    key: "zweibruecken",
    city: "Zweibrücken",
    meta: "Südwestpfalz · 4 Leistungen",
    description:
      "Vom Outlet bis zur Rosenstadt — Wartungsverträge für Geschäfte, WEGs und Gewerbeobjekte zu fairen Festpreisen.",
    services: [
      { label: "Gebäudereinigung", href: "/gebaeudereinigung-zweibruecken" },
      { label: "Fensterreinigung", href: "/fensterreinigung-zweibruecken" },
      { label: "Hausmeisterservice", href: "/hausmeisterservice-zweibruecken" },
      { label: "Unterhaltsreinigung", href: "/unterhaltsreinigung-zweibruecken" },
    ],
  },
  {
    key: "landstuhl",
    city: "Landstuhl",
    meta: "Sickinger Höhe · 3 Leistungen",
    description:
      "Sickinger Höhe und Umgebung — Eigentümer, Vermieter und Praxen rund um die Burg. Fokus Gebäudereinigung und Hausmeisterservice.",
    services: [
      { label: "Gebäudereinigung", href: "/gebaeudereinigung-landstuhl" },
      { label: "Hausmeisterservice", href: "/hausmeisterservice-landstuhl" },
      { label: "Fensterreinigung", href: "/fensterreinigung-landstuhl" },
    ],
  },
  {
    key: "homburg",
    city: "Homburg",
    meta: "Saarpfalz · 3 Leistungen",
    description:
      "Homburg und Umgebung — Gewerbeobjekte rund um die Uniklinik und WEGs am Schlossberg.",
    services: [
      { label: "Gebäudereinigung", href: "/gebaeudereinigung-homburg" },
      { label: "Hausmeisterservice", href: "/hausmeisterservice-homburg" },
      { label: "Fensterreinigung", href: "/fensterreinigung-homburg" },
    ],
  },
];

export default function StandorteSection() {
  const [active, setActive] = useState<string>("pirmasens");
  const current = CITIES.find((c) => c.key === active) ?? CITIES[0];

  return (
    <section
      id="standorte"
      className="relative bg-ink text-bone overflow-hidden border-t border-bone/15"
    >
      {/* Header */}
      <div className="border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-2 marker-line text-bone/60">
              04 / Standorte
            </div>
            <div className="lg:col-span-7 min-w-0">
              <h2 className="font-display text-[clamp(2rem,6.5vw,6rem)] leading-[0.92] text-bone break-words">
                <RevealWords text="WIR SIND DA," />
                <br />
                <span className="text-voltage">
                  <RevealWords text="WO SIE UNS BRAUCHEN." delay={0.15} />
                </span>
              </h2>
            </div>
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: 0.2 }}
                className="font-editorial italic text-xl sm:text-2xl text-bone/70 leading-snug"
              >
                Fünf Städte. Vierunddreißig Landingpages. Eine Hotline.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* City picker — horizontal scroll on mobile */}
      <div className="border-b border-bone/15 overflow-x-auto">
        <div className="flex min-w-max">
          {CITIES.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`relative flex-1 min-w-[180px] sm:min-w-0 group px-6 sm:px-8 py-6 sm:py-8 text-left border-r border-bone/15 last:border-r-0 transition-colors ${
                active === c.key
                  ? "bg-voltage text-ink"
                  : "bg-ink text-bone hover:bg-graphite"
              }`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl sm:text-2xl lg:text-3xl leading-tight break-words">
                {c.city}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active city panel */}
      <motion.div
        key={current.key}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="relative"
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
          {/* Massive city name */}
          <div className="relative mb-12 sm:mb-16 min-w-0">
            <h3
              key={current.city + "title"}
              className="font-display text-[clamp(3rem,11vw,10rem)] leading-[0.9] text-bone tracking-tight break-words"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease }}
                  className="block"
                >
                  {current.city}.
                </motion.span>
              </span>
            </h3>
            <div className="absolute right-0 -top-6 sm:top-0 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-voltage">
              {current.meta}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="font-editorial italic text-xl sm:text-2xl leading-snug text-bone/85">
                {current.description}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-bone/15">
                {current.services.map((svc, i) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="group relative px-5 py-6 border-r border-b border-bone/15 last:border-r-0 hover:bg-voltage hover:text-ink transition-colors"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40 group-hover:text-ink/60 mb-2">
                      /{String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display text-xl sm:text-2xl leading-tight flex items-end justify-between gap-3 break-words">
                      <span className="min-w-0">{svc.label}</span>
                      <ArrowUpRight className="w-5 h-5 mt-1 shrink-0 group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Marquee with city names */}
      <div className="border-t border-bone/15 bg-ink py-3">
        <Marquee
          items={CITIES.map((c) => c.city)}
          duration={32}
          itemClassName="font-display text-bone text-4xl sm:text-6xl py-2 whitespace-nowrap"
          separator="●"
        />
      </div>
    </section>
  );
}
