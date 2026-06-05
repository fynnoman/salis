"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ChevronDown,
  Plus,
  ShieldCheck,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import {
  Marquee,
  MagneticLink,
  RevealWords,
  RotaryBadge,
  LiveClock,
} from "@/components/_design";

const ease = [0.22, 1, 0.36, 1] as const;

/* PUBLIC API — kept compatible with src/lib/landingData.ts */
export type LandingFAQ = { q: string; a: string };
export type LandingService = { title: string; text: string };
export type LandingStep = { step: string; title: string; desc: string };
export type LandingLink = { label: string; href: string };

export type LandingPageData = {
  service: string;
  city: string;
  kicker: string;
  h1Highlight: string;
  introLead: string;
  introSecondary: string;
  breadcrumbLabel: string;
  whyParagraphs: string[];
  services: LandingService[];
  steps: LandingStep[];
  pricingParagraphs: string[];
  referenceTitle: string;
  referenceText: string;
  trustBullets: string[];
  faqs: LandingFAQ[];
  crossLinks: LandingLink[];
  path: string;
  neighborhoods: string[];
};

function FAQItem({ faq, index }: { faq: LandingFAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease, delay: index * 0.04 }}
      className="group border-t border-ink/15 last:border-b last:border-ink/15"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 sm:py-8 text-left transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-5 flex-1 min-w-0">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink/40 w-8 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg sm:text-2xl lg:text-3xl leading-[1.1] text-ink group-hover:text-voltage-dim transition-colors break-words min-w-0">
            {faq.q}
          </span>
        </div>
        <ChevronDown
          className={`w-6 h-6 shrink-0 text-voltage-dim transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease }}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-0 sm:pl-[3.25rem] max-w-3xl text-base sm:text-lg leading-relaxed text-ink/75 font-editorial italic">
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
    <main className="min-h-screen bg-bone text-ink">
      {/* JSON-LD */}
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
                areaServed: { "@type": "City", name: data.city },
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
      <section className="relative bg-ink text-bone overflow-hidden grain">
        {/* status bar */}
        <div className="border-b border-bone/15 px-5 sm:px-8 lg:px-12 py-3.5 flex justify-between items-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em]">
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-voltage transition-colors flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" />
              Home
            </Link>
            <span aria-hidden className="text-bone/30">/</span>
            <span className="text-bone/70 truncate max-w-[60vw] sm:max-w-none">
              {data.breadcrumbLabel}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-bone/50">
            <span className="flex items-center gap-2 text-voltage">
              <span className="relative inline-flex w-1.5 h-1.5 bg-voltage rounded-full">
                <span className="absolute inset-0 rounded-full bg-voltage animate-ping" />
              </span>
              Verfügbar
            </span>
            <LiveClock />
          </div>
        </div>

        {/* grid + voltage glow */}
        <div className="absolute inset-x-0 top-12 bottom-0 grid-bg-light pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-voltage/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-9">
              <div className="marker-line text-bone/60 mb-6 sm:mb-10">
                01 / {data.kicker}
              </div>

              <h1 className="font-display text-bone leading-[0.92] break-words hyphens-auto min-w-0">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.1 }}
                  className="block text-[clamp(1.8rem,5.5vw,5.5rem)]"
                >
                  {data.service}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.22 }}
                  className="block text-[clamp(1.8rem,5.5vw,5.5rem)] text-voltage"
                >
                  {data.city}.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.34 }}
                  className="block text-[clamp(1.2rem,3vw,2.5rem)] font-editorial italic text-bone/85 mt-4"
                  style={{ textTransform: "none", letterSpacing: 0, fontWeight: 400, lineHeight: 1.15 }}
                >
                  {data.h1Highlight}.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
                className="mt-8 sm:mt-12 max-w-2xl text-base sm:text-lg leading-relaxed text-bone/80"
              >
                {data.introLead}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.6 }}
                className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-bone/60"
                dangerouslySetInnerHTML={{ __html: data.introSecondary }}
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.7 }}
                className="mt-10 sm:mt-14 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <MagneticLink
                  href={`tel:${phoneRaw}`}
                  className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-4 sm:py-5 bg-voltage text-ink font-display text-xl sm:text-2xl uppercase tracking-tight border-2 border-voltage hover:bg-bone hover:border-bone transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {phone}
                  <span
                    aria-hidden
                    className="absolute -top-2 -right-2 w-4 h-4 bg-rust rounded-full animate-voltage-pulse"
                  />
                </MagneticLink>
                <MagneticLink
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 sm:py-5 border-2 border-bone/30 text-bone font-display text-lg sm:text-xl uppercase hover:border-voltage hover:text-voltage transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </MagneticLink>
                <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 ml-auto">
                  <Clock className="w-3 h-3" />
                  Mo – Sa · 07 – 20
                </span>
              </motion.div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6 lg:items-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.6 }}
              >
                <RotaryBadge size={130} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-bone/15 bg-ink py-1">
          <Marquee
            items={[data.service, data.city, "Festpreis", "Eigenes Team", "Versichert"]}
            duration={32}
            itemClassName="font-display text-bone text-2xl sm:text-4xl py-2 whitespace-nowrap"
            separator="◆"
          />
        </div>
      </section>

      {/* WARUM */}
      <section className="bg-bone text-ink border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-2 marker-line text-ink/60">
              02 / Warum
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0 mb-10">
                <RevealWords
                  text={`Warum ${data.service} in ${data.city} sich lohnt.`}
                />
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 text-base sm:text-lg leading-relaxed text-ink/80 max-w-5xl">
                {data.whyParagraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN — alternating dark */}
      <section className="bg-ink text-bone border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-2 marker-line text-bone/60">
              03 / Leistungen
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0">
                <RevealWords text={`Unsere ${data.service} im Detail.`} />
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-t border-bone/15">
            {data.services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
                className="group relative p-6 sm:p-10 border-r border-b border-bone/15 last:border-r-0 md:nth-[2n]:border-r-0 hover:bg-graphite transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-bone/40">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <Plus className="w-4 h-4 text-voltage" />
                </div>
                <h3 className="mt-4 font-display text-xl sm:text-2xl lg:text-3xl leading-[1.1] text-bone group-hover:text-voltage transition-colors break-words">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-bone/70 max-w-xl">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-bone text-ink border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-2 marker-line text-ink/60">
              04 / Ablauf
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0">
                <RevealWords text="So läuft Ihr Auftrag." />
              </h2>
            </div>
          </div>

          <div className="grid gap-0 border-t border-ink/15">
            {data.steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 sm:py-10 border-b border-ink/15"
              >
                <div className="lg:col-span-2 font-mono text-xs uppercase tracking-[0.22em] text-ink/40 pt-1">
                  Schritt {item.step}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl leading-[1.1] text-ink group-hover:text-voltage-dim transition-colors break-words">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-6 text-base sm:text-lg leading-relaxed text-ink/75">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KOSTEN */}
      <section className="relative bg-rust text-bone overflow-hidden">
        <div className="absolute inset-0 hatch-bg-light pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2 marker-line text-bone/80">
              05 / Preis
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.92] break-words min-w-0 mb-6">
                Was kostet das?
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-bone/95 max-w-2xl">
                {data.pricingParagraphs.map((p, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end items-start">
              <div className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] text-bone">
                €€
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="bg-bone text-ink border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-8">
            <div className="lg:col-span-2 marker-line text-ink/60">
              06 / Gebiet
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0">
                <RevealWords text={`In ganz ${data.city} unterwegs.`} />
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.neighborhoods.map((n, i) => (
              <motion.span
                key={n}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease, delay: i * 0.03 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink/20 text-sm font-mono uppercase tracking-[0.15em] hover:bg-ink hover:text-bone transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-voltage-dim" />
                {n}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENZ */}
      <section className="bg-ink text-bone border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2 marker-line text-bone/60">
              07 / Referenz
            </div>
            <div className="lg:col-span-10">
              <div className="font-editorial italic text-xl sm:text-2xl lg:text-3xl leading-[1.2] text-bone/90 max-w-4xl">
                „{data.referenceText}"
              </div>
              <div className="mt-8 marker-line text-voltage">
                {data.referenceTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-bone text-ink border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-2 marker-line text-ink/60">
              08 / Versprechen
            </div>
            <div className="lg:col-span-10 grid sm:grid-cols-2 gap-0 border-t border-ink/15">
              {data.trustBullets.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  className="flex items-start gap-4 py-6 px-2 sm:px-6 border-b border-ink/15 sm:[&:nth-child(2n+1)]:border-r sm:[&:nth-child(2n+1)]:border-ink/15"
                >
                  <ShieldCheck className="w-5 h-5 text-voltage-dim shrink-0 mt-1" />
                  <span className="text-base sm:text-lg leading-relaxed">
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bone text-ink border-b border-ink/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-6">
            <div className="lg:col-span-2 marker-line text-ink/60">
              09 / FAQ
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0">
                <RevealWords text="Häufige Fragen." />
              </h2>
            </div>
          </div>
          <div>
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-ink text-bone border-b border-bone/15">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-2 marker-line text-bone/60">
              10 / Weiter
            </div>
            <div className="lg:col-span-10">
              <h2 className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[0.92] break-words min-w-0">
                <RevealWords text="Mehr aus dem Programm." />
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-bone/15">
            {data.crossLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-5 py-6 border-r border-b border-bone/15 last:border-r-0 hover:bg-voltage hover:text-ink transition-colors flex items-end justify-between gap-4"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40 group-hover:text-ink/60 mb-2">
                    /{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-lg sm:text-xl lg:text-2xl leading-tight break-words">
                    {link.label}
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 shrink-0 group-hover:rotate-45 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-voltage text-ink overflow-hidden">
        <div className="absolute inset-0 hatch-bg pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 relative">
          <div className="flex items-center gap-1 mb-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-5 h-5" fill="#0a0a0a" strokeWidth={0} />
            ))}
            <span className="ml-3 font-mono text-xs uppercase tracking-[0.22em]">
              Festpreis · Termin meist diese Woche
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[0.92] break-words min-w-0 mb-10">
            <RevealWords text={`Jetzt Angebot für ${data.city}.`} />
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticLink
              href={`tel:${phoneRaw}`}
              className="group inline-flex items-center gap-3 px-7 sm:px-9 py-4 sm:py-5 bg-ink text-bone font-display text-xl sm:text-2xl uppercase tracking-tight border-2 border-ink hover:bg-bone hover:text-ink transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phone}
            </MagneticLink>
            <MagneticLink
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 sm:py-5 border-2 border-ink text-ink font-display text-lg sm:text-xl uppercase hover:bg-ink hover:text-voltage transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </MagneticLink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
