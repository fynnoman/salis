"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, Train, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Emilienstra%C3%9Fe+5a+66955+Pirmasens";
const EMBED_URL =
  "https://maps.google.com/maps?q=Emilienstra%C3%9Fe+5a,+66955+Pirmasens&output=embed&z=15";

const infoItems = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Emilienstraße 5a", "66955 Pirmasens"],
  },
  {
    icon: Clock,
    title: "Erreichbarkeit",
    lines: ["Mo – Sa: 7:00 – 20:00 Uhr", "Sonntags auf Anfrage"],
  },
  {
    icon: Car,
    title: "Mit dem Auto",
    lines: ["Kostenlose Parkmöglichkeiten", "direkt vor dem Gebäude"],
  },
  {
    icon: Train,
    title: "Öffentliche Verkehrsmittel",
    lines: ["Bushaltestelle ca. 200 m", "Pirmasens Hbf ca. 1,5 km"],
  },
];

export default function AnfahrtPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] overflow-hidden py-24 sm:py-32">
        {/* Subtle grid */}
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
              So finden Sie uns
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Anfahrt &{" "}
              <span className="text-[#22c55e]">Kontakt</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Salif Gebäudeservice – Haus und mehr ist Ihr lokaler Partner
              für Reinigung und Hausmeisterservice im Herzen von Pirmasens. Wir
              sind schnell für Sie da – persönlich, telefonisch oder per
              WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">
              Mitten in Pirmasens – für Sie in der Nähe
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Unser Büro befindet sich in der Emilienstraße 5a im Herzen von
              Pirmasens. Ob Sie uns persönlich besuchen möchten, ein Angebot
              einholen wollen oder einfach eine kurze Rückfrage haben – wir
              sind gerne für Sie da.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Als regional verwurzeltes Unternehmen kennen wir Pirmasens und
              die umliegenden Gemeinden wie Zweibrücken, Kaiserslautern und
              Landau wie unsere Westentasche. Kurze Wege bedeuten für Sie
              schnelle Reaktionszeiten und zuverlässige Einsätze – egal ob
              einmalig oder dauerhaft.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Sie erreichen uns von Montag bis Samstag zwischen 7 und 20 Uhr.
              Außerhalb der Geschäftszeiten können Sie uns jederzeit eine
              WhatsApp-Nachricht schreiben – wir melden uns so schnell wie
              möglich zurück.
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {infoItems.map(({ icon: Icon, title, lines }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                      {title}
                    </div>
                    {lines.map((l) => (
                      <div key={l} className="text-sm font-semibold text-[#1a3a5c]">
                        {l}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="tel:015229043159"
              className="mt-8 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-base"
              style={{
                backgroundColor: "#22c55e",
                boxShadow: "0 0 32px rgba(34,197,94,0.25)",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              01522 904 3159 anrufen
            </motion.a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
              Karte – klicken zum Öffnen in Google Maps
            </p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group"
              style={{ height: 'clamp(280px, 50vw, 460px)' }}
            >
              <iframe
                src={EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Salif Gebäudeservice"
              />
              {/* Click overlay with label */}
              <div className="absolute inset-0 bg-[#1a3a5c]/0 group-hover:bg-[#1a3a5c]/10 transition-colors flex items-end justify-center pb-6">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#1a3a5c] font-bold text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#22c55e]" />
                  In Google Maps öffnen
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Emilienstraße 5a · 66955 Pirmasens
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
