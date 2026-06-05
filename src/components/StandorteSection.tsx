"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type ServiceLink = { label: string; href: string };
type CityBlock = {
  key: string;
  city: string;
  region: string;
  description: string;
  services: ServiceLink[];
};

const CITIES: CityBlock[] = [
  {
    key: "pirmasens",
    city: "Pirmasens",
    region: "Südwestpfalz · Sitz unseres Betriebs",
    description:
      "Unser Heimatmarkt – hier sind wir täglich für Privathaushalte, Hausverwaltungen und Gewerbekunden im Einsatz. Kurze Wege, oft Termine am gleichen Tag möglich.",
    services: [
      { label: "Gebäudereinigung Pirmasens", href: "/gebaeudereinigung-pirmasens" },
      { label: "Unterhaltsreinigung Pirmasens", href: "/unterhaltsreinigung-pirmasens" },
      { label: "Grundreinigung Pirmasens", href: "/grundreinigung-pirmasens" },
      { label: "Büroreinigung Pirmasens", href: "/bueroreinigung-pirmasens" },
      { label: "Treppenhausreinigung Pirmasens", href: "/treppenhausreinigung-pirmasens" },
      { label: "Fensterreinigung Pirmasens", href: "/fensterreinigung-pirmasens" },
      { label: "Glasreinigung Pirmasens", href: "/glasreinigung-pirmasens" },
      { label: "Wintergartenreinigung Pirmasens", href: "/wintergartenreinigung-pirmasens" },
      { label: "Dachrinnenreinigung Pirmasens", href: "/dachrinnenreinigung-pirmasens" },
      { label: "Hausmeisterservice Pirmasens", href: "/hausmeisterservice-pirmasens" },
      { label: "Entrümpelung Pirmasens", href: "/entruempelung-pirmasens" },
      { label: "Winterdienst Pirmasens", href: "/winterdienst-pirmasens" },
    ],
  },
  {
    key: "kaiserslautern",
    city: "Kaiserslautern",
    region: "Westpfalz · Komplette Dienstleistungspalette",
    description:
      "In der Barbarossastadt betreuen wir Bürogebäude, Universitäts-Liegenschaften, Praxen, Mehrfamilienhäuser und Gewerbeobjekte mit festen Reinigungsplänen und eigenem Personal vor Ort.",
    services: [
      { label: "Gebäudereinigung Kaiserslautern", href: "/gebaeudereinigung-kaiserslautern" },
      { label: "Unterhaltsreinigung Kaiserslautern", href: "/unterhaltsreinigung-kaiserslautern" },
      { label: "Grundreinigung Kaiserslautern", href: "/grundreinigung-kaiserslautern" },
      { label: "Büroreinigung Kaiserslautern", href: "/bueroreinigung-kaiserslautern" },
      { label: "Treppenhausreinigung Kaiserslautern", href: "/treppenhausreinigung-kaiserslautern" },
      { label: "Fensterreinigung Kaiserslautern", href: "/fensterreinigung-kaiserslautern" },
      { label: "Glasreinigung Kaiserslautern", href: "/glasreinigung-kaiserslautern" },
      { label: "Wintergartenreinigung Kaiserslautern", href: "/wintergartenreinigung-kaiserslautern" },
      { label: "Dachrinnenreinigung Kaiserslautern", href: "/dachrinnenreinigung-kaiserslautern" },
      { label: "Hausmeisterservice Kaiserslautern", href: "/hausmeisterservice-kaiserslautern" },
      { label: "Entrümpelung Kaiserslautern", href: "/entruempelung-kaiserslautern" },
      { label: "Winterdienst Kaiserslautern", href: "/winterdienst-kaiserslautern" },
    ],
  },
  {
    key: "zweibruecken",
    city: "Zweibrücken",
    region: "Südwestpfalz · Regelmäßige Einsätze",
    description:
      "Vom Outlet bis zur Rosenstadt: wir reinigen Geschäfte, WEGs und Gewerbeobjekte in Zweibrücken mit festen Wartungsverträgen und fairen Festpreisen.",
    services: [
      { label: "Gebäudereinigung Zweibrücken", href: "/gebaeudereinigung-zweibruecken" },
      { label: "Fensterreinigung Zweibrücken", href: "/fensterreinigung-zweibruecken" },
      { label: "Hausmeisterservice Zweibrücken", href: "/hausmeisterservice-zweibruecken" },
      { label: "Unterhaltsreinigung Zweibrücken", href: "/unterhaltsreinigung-zweibruecken" },
    ],
  },
  {
    key: "landstuhl",
    city: "Landstuhl",
    region: "Sickinger Höhe · Schnelle Anfahrt",
    description:
      "In Landstuhl betreuen wir Eigentümer, Vermieter und Praxen rund um die Sickinger Höhe – mit Fokus auf Gebäudereinigung und klassischen Hausmeisterservice.",
    services: [
      { label: "Gebäudereinigung Landstuhl", href: "/gebaeudereinigung-landstuhl" },
      { label: "Hausmeisterservice Landstuhl", href: "/hausmeisterservice-landstuhl" },
      { label: "Fensterreinigung Landstuhl", href: "/fensterreinigung-landstuhl" },
    ],
  },
  {
    key: "homburg",
    city: "Homburg",
    region: "Saarpfalz · Region grenzüberschreitend",
    description:
      "In Homburg und Umgebung sind wir für Gewerbeobjekte rund um die Uniklinik und für WEGs am Schlossberg im Einsatz.",
    services: [
      { label: "Gebäudereinigung Homburg", href: "/gebaeudereinigung-homburg" },
      { label: "Hausmeisterservice Homburg", href: "/hausmeisterservice-homburg" },
      { label: "Fensterreinigung Homburg", href: "/fensterreinigung-homburg" },
    ],
  },
];

export default function StandorteSection() {
  const [activeCity, setActiveCity] = useState<string>("pirmasens");
  const active = CITIES.find((c) => c.key === activeCity) ?? CITIES[0];

  return (
    <section
      id="standorte"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* soft decorative glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#22c55e]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1a3a5c]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">
            Standorte & Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a5c] leading-tight">
            Wir sind dort, wo{" "}
            <span className="bg-gradient-to-r from-[#22c55e] to-emerald-400 bg-clip-text text-transparent">
              Sie uns brauchen
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mt-5">
            Wählen Sie Ihren Standort und sehen Sie alle Leistungen, die wir dort
            anbieten. Jede Stadt hat eine eigene Seite je Leistung – mit lokalen
            Referenzen, fairen Festpreisen und festen Ansprechpartnern.
          </p>
        </motion.div>

        {/* City Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CITIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCity(c.key)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCity === c.key
                  ? "bg-[#1a3a5c] text-white shadow-md"
                  : "bg-gray-100 text-[#1a3a5c] hover:bg-gray-200"
              }`}
            >
              <span className="flex items-center gap-2">
                <MapPin
                  className={`w-4 h-4 ${
                    activeCity === c.key ? "text-[#22c55e]" : "text-[#1a3a5c]/40"
                  }`}
                />
                {c.city}
              </span>
            </button>
          ))}
        </div>

        {/* Active city card */}
        <motion.div
          key={active.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm"
        >
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {active.region}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1a3a5c] mb-3">
                Leistungen in {active.city}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-2.5">
                {active.services.map((svc, i) => (
                  <motion.div
                    key={svc.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease, delay: i * 0.03 }}
                  >
                    <Link
                      href={svc.href}
                      className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all"
                    >
                      <span className="text-sm font-medium text-[#1a3a5c] group-hover:text-[#1a3a5c]">
                        {svc.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#22c55e] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
