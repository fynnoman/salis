"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    q: "Was kostet ein Hausmeisterservice pro Monat?",
    a: "Die monatliche Pauschale richtet sich nach dem Leistungsumfang und der Objektgröße. Für ein kleines Mehrfamilienhaus mit Grünpflege und Winterdienst starten die Kosten bei einem attraktiven Monatspreis. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
  {
    q: "Welche Aufgaben übernimmt der Hausmeisterservice?",
    a: "Wir übernehmen Grünpflege (Rasenmähen, Hecken schneiden, Unkraut entfernen), Winterdienst (Schnee räumen, Streuen), Kleinreparaturen (Glühbirnen, Wasserhähne, Türen, Schlösser), Mülltonnenservice und regelmäßige Kontrollgänge.",
  },
  {
    q: "Bieten Sie auch Winterdienst am Wochenende und Feiertagen an?",
    a: "Ja. Winterdienst ist auch am Wochenende und an Feiertagen möglich – auch frühmorgens, damit Gehwege rechtzeitig geräumt und gestreut sind. Ihre Verkehrssicherungspflicht ist damit abgedeckt.",
  },
  {
    q: "Kann ich Hausmeisterservice und Treppenhausreinigung kombinieren?",
    a: "Ja, das ist sogar unsere Stärke. Viele unserer Kunden nutzen unseren Komplett-Service: Hausmeisterservice plus Treppenhausreinigung plus Gebäudereinigung – alles aus einer Hand, ein Ansprechpartner.",
  },
  {
    q: "Wie schnell reagieren Sie bei Notfällen?",
    a: "Bei dringenden Angelegenheiten sind wir unter 01522 904 3159 erreichbar und reagieren so schnell wie möglich. Für vertragliche Kunden bieten wir priorisierte Reaktionszeiten an.",
  },
  {
    q: "Muss ich einen langfristigen Vertrag abschließen?",
    a: "Nein. Bei uns gibt es keine Mindestvertragslaufzeit. Wir setzen auf Qualität – zufriedene Kunden bleiben freiwillig. Sie können monatlich kündigen.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease, delay: index * 0.05 }} className="border border-gray-100 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors">
        <span className="font-semibold text-[#1a3a5c] text-sm sm:text-base pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-[#22c55e] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>}
    </motion.div>
  );
}

export default function HausmeisterservicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white/70">Hausmeisterservice Pirmasens</li>
            </ol>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />Zurück zur Startseite
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">Alles aus einer Hand</span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Hausmeisterservice Pirmasens —{" "}
              <span className="text-[#22c55e]">Ihr Gebäude</span> in guten Händen
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Ein guter Hausmeister kümmert sich um alles, was anfällt – Grünpflege im Sommer, Winterdienst im Winter, Kleinreparaturen ganzjährig. <strong className="text-white/80">Salif Gebäudeservice</strong> bietet professionellen Hausmeisterservice in Pirmasens und der Südwestpfalz.
            </p>
            <p className="text-white/50 text-base mt-4 leading-relaxed">
              Für Vermieter, Hausverwaltungen und Eigentümergemeinschaften: Ein Ansprechpartner für alle Belange rund um Ihr Gebäude. Lokal, persönlich, zuverlässig – seit 2020. Kombinierbar mit unserer Gebäudereinigung und Treppenhausreinigung für einen echten Komplett-Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warum Hausmeisterservice */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Warum ein professioneller Hausmeisterservice sinnvoll ist</h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Als Vermieter oder Hausverwaltung tragen Sie Verantwortung: Verkehrssicherungspflicht, Winterdienst, Grünpflege – all das muss zuverlässig erledigt werden. Ein Versäumnis kann zu Unfällen und Haftungsansprüchen führen. Professioneller Hausmeisterservice nimmt Ihnen diese Last ab.
            </p>
            <p>
              Gepflegte Außenanlagen und ein gut instandgehaltenes Gebäude tragen zur Werterhaltung Ihrer Immobilie bei. Zufriedene Mieter, die in einem sauberen und gepflegten Umfeld leben, bleiben länger – weniger Fluktuation bedeutet weniger Kosten und Aufwand für Sie.
            </p>
            <p>
              Und es spart Ihnen Zeit: Statt am Wochenende selbst den Rasen zu mähen oder bei Schneefall um 5 Uhr morgens aufzustehen, erledigt unser Team alles zuverlässig. Ein Anruf statt stundenlanger Eigenarbeit – damit Sie sich auf das Wesentliche konzentrieren können.
            </p>
            <p>
              Besonders der Winterdienst ist ein heikles Thema: Wer nicht rechtzeitig räumt und streut, haftet bei Unfällen. Mit unserem Winterdienst sind Sie auf der sicheren Seite – auch an Wochenenden und Feiertagen, auch frühmorgens.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leistungen */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Unsere Hausmeister-Leistungen</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Grünpflege — Rasen, Hecken, Unkraut, Laub", text: "Rasenmähen, Hecken schneiden, Unkraut entfernen, Laubbeseitigung im Herbst – wir halten Ihre Außenanlagen das ganze Jahr über gepflegt. Regelmäßig nach Plan oder saisonal auf Abruf." },
              { title: "Winterdienst — Schnee räumen, Streuen, Gehwege sichern", text: "Zuverlässiger Winterdienst auch frühmorgens, am Wochenende und an Feiertagen. Gehwege, Einfahrten und Parkflächen werden geräumt und gestreut. Ihre Verkehrssicherungspflicht ist damit erfüllt." },
              { title: "Kleinreparaturen — Glühbirnen, Wasserhähne, Türen, Schlösser", text: "Glühbirne defekt? Wasserhahn tropft? Tür klemmt? Schloss klemmt? Wir erledigen Kleinreparaturen schnell und unkompliziert – ohne dass Sie einen teuren Handwerker rufen müssen." },
              { title: "Mülltonnenservice — Bereitstellung, Rückstellung, Reinigung", text: "Wir stellen die Mülltonnen zur Abholung bereit, holen sie zurück und reinigen sie bei Bedarf. Ein kleiner Service, der den Alltag Ihrer Mieter deutlich angenehmer macht." },
              { title: "Kontrollgänge — Regelmäßige Begehungen und Schadensmeldung", text: "Regelmäßige Kontrollgänge durch das Gebäude: Heizungsanlagen prüfen, Wasserleitungen kontrollieren, Schäden frühzeitig erkennen und melden. Prävention statt teure Reparaturen." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease, delay: i * 0.07 }} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-[#1a3a5c] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">So funktioniert unser Hausmeisterservice</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Erstgespräch — Was brauchen Sie?", desc: "Wir besprechen Ihre Anforderungen: Welche Leistungen benötigen Sie? Wie groß ist das Objekt? Wie häufig soll der Service stattfinden?" },
              { step: "2", title: "Individuelles Leistungspaket", desc: "Wir stellen ein maßgeschneidertes Leistungspaket zusammen – genau auf Ihr Objekt und Ihre Bedürfnisse zugeschnitten. Transparente Monatspauschale, keine versteckten Kosten." },
              { step: "3", title: "Regelmäßiger Service nach Plan", desc: "Unser Team kommt regelmäßig nach festem Plan. Grünpflege im Sommer, Winterdienst im Winter, Kleinreparaturen und Kontrollgänge ganzjährig." },
              { step: "4", title: "Erreichbar bei Notfällen", desc: "Wasserrohrbruch? Sturmschaden? Wir sind unter 01522 904 3159 erreichbar und reagieren schnell. Für Vertragskunden bieten wir priorisierte Reaktionszeiten." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease, delay: i * 0.07 }} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-[#22c55e] font-bold text-sm">{item.step}</span></div>
                <div><h3 className="font-bold text-[#1a3a5c] mb-1">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">Kombinierbar mit <Link href="/treppenhausreinigung-pirmasens" className="text-[#22c55e] hover:underline">Treppenhausreinigung</Link> und <Link href="/gebaeudereinigung-pirmasens" className="text-[#22c55e] hover:underline">Gebäudereinigung</Link> für einen echten Komplett-Service.</p>
        </motion.div>
      </section>

      {/* Kosten */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Was kostet Hausmeisterservice in Pirmasens?</h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>Die Kosten richten sich nach dem Leistungsumfang und der Objektgröße. Wir bieten transparente Monatspauschalen, die alle vereinbarten Leistungen abdecken – keine versteckten Kosten, keine Überraschungen.</p>
              <p>Kein Mindestvertrag – Sie können monatlich kündigen. Faire Preise für zuverlässige Arbeit. Detaillierte Informationen auf unserer <Link href="/preise" className="text-[#22c55e] hover:underline font-semibold">Preisseite</Link>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referenz */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Referenz — Dauerhafter Hausmeistervertrag Pirmasens</h2>
          <div className="flex items-start gap-3 text-gray-600 text-base sm:text-lg leading-relaxed">
            <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
            <p><strong className="text-[#1a3a5c]">Wohnanlage Pirmasens:</strong> Seit 2022 betreuen wir eine Wohnanlage in Pirmasens mit Komplett-Hausmeisterservice: Kleinreparaturen, Grünpflege, Winterdienst und Mülltonnen-Service. Zuverlässig das ganze Jahr über – ein Ansprechpartner für alle Belange rund ums Gebäude.</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Häufige Fragen zum Hausmeisterservice</h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((faq, i) => (<FAQItem key={i} faq={faq} index={i} />))}</div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Weitere Leistungen in Pirmasens</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
              { label: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
              { label: "Entrümpelung", href: "/entruempelung-pirmasens" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center justify-between gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all text-sm font-semibold text-[#1a3a5c]">
                {link.label}<ArrowRight className="w-4 h-4 text-[#22c55e]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#1a3a5c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Jetzt unverbindliches Angebot anfordern</h2>
            <p className="text-white/60 text-lg mb-8">Rufen Sie uns an oder schreiben Sie uns per WhatsApp – wir melden uns schnell zurück.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a href="tel:015229043159" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-lg bg-[#22c55e]" style={{ boxShadow: "0 0 32px rgba(34,197,94,0.25)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}><Phone className="w-5 h-5" />01522 904 3159</motion.a>
              <motion.a href="https://wa.me/4915229043159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-[#22c55e] text-lg border-2 border-[#22c55e]/30 hover:bg-[#22c55e]/10 transition-colors" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}><MessageCircle className="w-5 h-5" />WhatsApp schreiben</motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
