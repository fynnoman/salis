"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export type LandingFAQ = { q: string; a: string };
export type LandingService = { title: string; text: string };
export type LandingStep = { step: string; title: string; desc: string };
export type LandingLink = { label: string; href: string };

export type LandingPageData = {
  /** SEO display name e.g. "Wintergartenreinigung" */
  service: string;
  /** city e.g. "Kaiserslautern" */
  city: string;
  /** small kicker above H1, e.g. "Strahlende Fassaden vom Profi" */
  kicker: string;
  /** H1 highlight phrase, gets accent color */
  h1Highlight: string;
  /** main intro paragraph */
  introLead: string;
  /** secondary intro paragraph (HTML allowed) */
  introSecondary: string;
  /** crumb label */
  breadcrumbLabel: string;
  /** "Warum lohnt es sich" rich paragraphs */
  whyParagraphs: string[];
  /** service bullets */
  services: LandingService[];
  /** process steps */
  steps: LandingStep[];
  /** pricing paragraphs (HTML allowed) */
  pricingParagraphs: string[];
  /** reference / case study */
  referenceTitle: string;
  referenceText: string;
  /** local trust signals shown above CTA */
  trustBullets: string[];
  /** FAQs */
  faqs: LandingFAQ[];
  /** internal cross-links */
  crossLinks: LandingLink[];
  /** the canonical URL path (e.g. "/wintergartenreinigung-kaiserslautern") */
  path: string;
  /** Stadtteile / local neighborhoods for embedded local references */
  neighborhoods: string[];
};

function FAQItem({ faq, index }: { faq: LandingFAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease, delay: index * 0.04 }}
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/70 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1a3a5c] text-sm sm:text-base pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#22c55e] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {faq.a}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LandingPageTemplate({ data }: { data: LandingPageData }) {
  const phone = "01522 904 3159";
  const phoneRaw = "015229043159";
  const waNumber = "4915229043159";

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD: Breadcrumb + Service + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Startseite",
                    item: "https://www.salif-gebaeudeservice.de",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: data.breadcrumbLabel,
                    item: `https://www.salif-gebaeudeservice.de${data.path}`,
                  },
                ],
              },
              {
                "@type": "Service",
                serviceType: data.service,
                provider: {
                  "@type": "LocalBusiness",
                  name: "Salif Gebäudeservice",
                  telephone: "+4915229043159",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Emilienstraße 5a",
                    addressLocality: "Pirmasens",
                    postalCode: "66955",
                    addressRegion: "Rheinland-Pfalz",
                    addressCountry: "DE",
                  },
                },
                areaServed: {
                  "@type": "City",
                  name: data.city,
                },
                name: `${data.service} ${data.city}`,
                description: data.introLead,
              },
              {
                "@type": "FAQPage",
                mainEntity: data.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-[#1a3a5c] overflow-hidden py-24 sm:py-32">
        {/* Layered grid + radial glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] bg-[#22c55e]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/70">{data.breadcrumbLabel}</li>
            </ol>
          </nav>

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
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex items-center gap-2 text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              {data.kicker}
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              {data.service} {data.city} —{" "}
              <span className="text-[#22c55e]">{data.h1Highlight}</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
              {data.introLead}
            </p>
            <p
              className="text-white/55 text-base mt-4 leading-relaxed max-w-2xl"
              dangerouslySetInnerHTML={{ __html: data.introSecondary }}
            />

            {/* Inline-CTA */}
            <div className="flex flex-wrap items-center gap-3 mt-9">
              <motion.a
                href={`tel:${phoneRaw}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#22c55e] text-white font-bold text-sm sm:text-base"
                style={{ boxShadow: "0 0 24px rgba(34,197,94,0.25)" }}
              >
                <Phone className="w-4 h-4" />
                {phone}
              </motion.a>
              <motion.a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
              <span className="inline-flex items-center gap-2 text-white/40 text-xs sm:text-sm">
                <Clock className="w-3.5 h-3.5" />
                Mo – Sa, 7 – 20 Uhr
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WARUM */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
            Warum professionelle {data.service.toLowerCase()} in {data.city} sich
            lohnt
          </h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            {data.whyParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* LEISTUNGEN */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">
              Unsere Leistungen rund um {data.service} in {data.city}
            </h2>
          </motion.div>
          <div className="space-y-8">
            {data.services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#1a3a5c] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">
            So läuft Ihre {data.service} in {data.city} ab
          </h2>
          <div className="space-y-6">
            {data.steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#22c55e] font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* KOSTEN */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
              Was kostet {data.service} in {data.city}?
            </h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              {data.pricingParagraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOCAL / NEIGHBORHOODS */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
            {data.service} in ganz {data.city} und Umgebung
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Wir sind in folgenden Stadtteilen und Umlandgemeinden für Sie im
            Einsatz — schnelle Termine, kurze Wege, faire Preise:
          </p>
          <div className="flex flex-wrap gap-2">
            {data.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm bg-white border border-gray-200 text-[#1a3a5c] hover:border-[#22c55e]/40 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#22c55e]" />
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* REFERENZ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
              Referenz — {data.referenceTitle}
            </h2>
            <div className="flex items-start gap-3 text-gray-600 text-base sm:text-lg leading-relaxed">
              <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
              <p>{data.referenceText}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BULLETS */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {data.trustBullets.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white"
            >
              <ShieldCheck className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm leading-relaxed">{t}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">
              Häufige Fragen zur {data.service} in {data.city}
            </h2>
          </motion.div>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">
          Weitere Leistungen & Standorte
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.crossLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all text-sm font-semibold text-[#1a3a5c]"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 text-[#22c55e] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#1a3a5c] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#22c55e]"
                  fill="#22c55e"
                  strokeWidth={0}
                />
              ))}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Jetzt unverbindliches Angebot für {data.city} anfordern
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Antwort
              meistens innerhalb weniger Stunden.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`tel:${phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-lg bg-[#22c55e]"
                style={{ boxShadow: "0 0 32px rgba(34,197,94,0.25)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                {phone}
              </motion.a>
              <motion.a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-[#22c55e] text-lg border-2 border-[#22c55e]/30 hover:bg-[#22c55e]/10 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
