"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Info, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const leistungen = [
  {
    kategorie: "Gebäudereinigung",
    items: [
      "Unterhaltsreinigung (Büros, Treppenhäuser)",
      "Grundreinigung & Intensivreinigung",
      "Fenster- & Glasreinigung",
      "Bodenreinigung & -pflege",
    ],
  },
  {
    kategorie: "Hausmeisterservice",
    items: [
      "Kleinreparaturen & Instandhaltung",
      "Grünpflege & Außenanlagen",
      "Winterdienst & Streudienst",
      "Mülltonnen- & Containerservice",
    ],
  },
  {
    kategorie: "Umzüge & Entrümpelung",
    items: [
      "Wohnungsauflösungen",
      "Entrümpelung & Entsorgung",
      "Kleintransporte & Umzüge",
      "Besenreine Übergabe",
    ],
  },
];

const hinweise = [
  "Der Stundensatz liegt in der Regel bei ca. 28 € pro Stunde.",
  "Der Gesamtpreis richtet sich nach Umfang, Aufwand und Häufigkeit des Auftrags.",
  "Regelmäßige Aufträge (z. B. wöchentlich oder monatlich) können günstiger kalkuliert werden.",
  "Für größere Objekte oder Dauerpflege erstellen wir gerne ein individuelles Angebot.",
  "Alle Preise verstehen sich als Nettopreise zzgl. gesetzlicher MwSt.",
];

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">
              Transparente Preise
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Faire Preise –{" "}
              <span className="text-[#22c55e]">kein Kleingedrucktes</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Bei Salif Gebäudeservice glauben wir an faire und transparente
              Preisgestaltung. Kein versteckter Aufwand, keine Überraschungen –
              nur ehrliche Arbeit zu einem fairen Preis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stundensatz Highlight */}
      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-4">
            Was kosten unsere Leistungen?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Jeder Auftrag ist anders – Größe des Objekts, Häufigkeit, Art der
            Tätigkeit und Aufwand spielen alle eine Rolle. Deshalb gibt es
            keinen starren Fixpreis. Was wir Ihnen aber sagen können:
          </p>
        </motion.div>

        {/* Big price card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{ backgroundColor: "#1a3a5c" }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: "#22c55e" }} />

          <div className="relative z-10 p-10 sm:p-16 flex flex-col sm:flex-row items-center gap-10">
            <div className="text-center sm:text-left flex-1">
              <div className="text-[#22c55e] text-xs font-bold tracking-widest uppercase mb-3">
                Richtwert Stundensatz
              </div>
              <div className="flex items-end gap-3 justify-center sm:justify-start mb-4">
                <span className="text-7xl sm:text-8xl font-black text-white leading-none">28</span>
                <div className="pb-3">
                  <span className="text-3xl font-bold text-white">€</span>
                  <span className="block text-white/50 text-sm">/Stunde</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Dies ist ein Richtwert. Der tatsächliche Preis hängt vom
                Umfang, der Häufigkeit und der Art des Auftrags ab. Für ein
                genaues Angebot kontaktieren Sie uns einfach – kostenlos und
                unverbindlich.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="tel:015229043159"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-black text-base"
                style={{ backgroundColor: "#22c55e", boxShadow: "0 0 32px rgba(34,197,94,0.3)" }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                Angebot anfragen
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Hinweise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-3xl p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
            <h3 className="font-bold text-[#1a3a5c] text-lg">Was beeinflusst den Preis?</h3>
          </div>
          <ul className="space-y-3">
            {hinweise.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
              >
                <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Leistungen Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-8 text-center">
            Unsere Leistungsbereiche
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {leistungen.map(({ kategorie, items }, i) => (
              <motion.div
                key={kategorie}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6"
              >
                <div className="w-8 h-1 rounded-full bg-[#22c55e] mb-4" />
                <h3 className="font-bold text-[#1a3a5c] mb-4">{kategorie}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center rounded-3xl bg-[#1a3a5c] p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Kostenloses Angebot anfordern
            </h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Schildern Sie uns Ihren Bedarf – wir melden uns schnell mit einem
              fairen, individuellen Angebot zurück.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/4915229043159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-black"
                style={{ backgroundColor: "#22c55e", boxShadow: "0 0 32px rgba(34,197,94,0.3)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:015229043159"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white border border-white/20 hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                01522 904 3159
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
