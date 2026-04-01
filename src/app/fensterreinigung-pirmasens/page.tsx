"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    q: "Was kostet Fensterreinigung pro Fenster?",
    a: "Der Preis hängt von Größe, Erreichbarkeit und ob ein- oder beidseitig gereinigt wird ab. Für ein Standardfenster (beidseitig inkl. Rahmen) liegen die Kosten im einstelligen Euro-Bereich. Kontaktieren Sie uns für ein genaues Angebot basierend auf Ihrem Objekt.",
  },
  {
    q: "Werden auch Rahmen und Fensterbänke gereinigt?",
    a: "Ja, unsere Fensterreinigung umfasst standardmäßig Glas, Rahmen, Falze und Fensterbänke. Sie erhalten eine Komplettreinigung – nicht nur sauberes Glas.",
  },
  {
    q: "Wie oft sollte man Fenster professionell reinigen lassen?",
    a: "Für Privathaushalte empfehlen wir 2–4 Mal im Jahr. Gewerbeflächen und Schaufenster sollten je nach Lage und Verschmutzung monatlich oder sogar wöchentlich gereinigt werden.",
  },
  {
    q: "Reinigen Sie auch Dachfenster und schwer erreichbare Stellen?",
    a: "Ja, wir verfügen über professionelle Ausrüstung für schwer erreichbare Fenster, Dachfenster, Oberlichter und hohe Glasfronten. Sicherheit und Qualität stehen dabei an erster Stelle.",
  },
  {
    q: "Arbeiten Sie auch bei schlechtem Wetter?",
    a: "Bei leichtem Regen können wir arbeiten – das Ergebnis bleibt streifenfrei dank professioneller Technik. Bei starkem Regen oder Sturm verschieben wir den Termin im Sinne der Sicherheit und Qualität.",
  },
  {
    q: "Wie schnell können Sie einen Termin machen?",
    a: "In der Regel können wir innerhalb weniger Tage einen Termin anbieten. Rufen Sie uns an oder schreiben Sie uns per WhatsApp – wir klären den nächsten freien Termin.",
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

export default function FensterreinigungPage() {
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
              <li className="text-white/70">Fensterreinigung Pirmasens</li>
            </ol>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">Streifenfrei vom Profi</span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Fensterreinigung Pirmasens —{" "}
              <span className="text-[#22c55e]">Streifenfreier Durchblick</span> vom Profi
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Saubere Fenster machen einen riesigen Unterschied – mehr Licht, ein besserer Eindruck und Werterhaltung Ihrer Immobilie. Aber richtig Fensterputzen ist zeitaufwändig und bei hohen Fenstern oder Glasfassaden sogar gefährlich.
            </p>
            <p className="text-white/50 text-base mt-4 leading-relaxed">
              <strong className="text-white/80">Salif Gebäudeservice</strong> übernimmt die professionelle Fensterreinigung in Pirmasens, Zweibrücken und der Südwestpfalz. Mit Profi-Ausrüstung, geschultem Personal und der Erfahrung aus hunderten gereinigten Fenstern – für Privathaushalte und Gewerbekunden gleichermaßen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warum lohnt es sich */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Warum professionelle Fensterreinigung sich lohnt</h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Fensterputzen gehört zu den unbeliebtesten Hausarbeiten – und das zu Recht. Ein durchschnittliches Einfamilienhaus hat 15 bis 20 Fenster. Beidseitig gereinigt inkl. Rahmen und Fensterbänken sind das schnell 3 bis 4 Stunden Arbeit. Und das Ergebnis? Oft Streifen, Schlieren und übersehene Ecken.
            </p>
            <p>
              Mit professioneller Ausrüstung – Einwascher, Abzieher, osmotisch gereinigtem Wasser – erzielen wir in deutlich weniger Zeit ein perfektes, streifenfreies Ergebnis. Dazu kommt die Sicherheit: Schwer erreichbare Fenster, Dachfenster oder hohe Glasfronten sind für ungeschulte Personen ein Risiko. Wir haben die richtige Ausrüstung und Erfahrung.
            </p>
            <p>
              Für Gewerbetreibende gilt: Saubere Schaufenster ziehen Laufkundschaft an. Ein verschmutztes Schaufenster dagegen signalisiert Vernachlässigung – und potenzielle Kunden gehen weiter zum nächsten Laden. Regelmäßige professionelle Fensterreinigung ist eine Investition, die sich unmittelbar auszahlt.
            </p>
            <p>
              Und nicht zuletzt: Regelmäßige Reinigung verlängert die Lebensdauer Ihrer Fenster. Schmutz, Kalk und Umweltablagerungen können Glas und Rahmen langfristig beschädigen. Professionelle Pflege beugt dem vor.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leistungen */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Unsere Fensterreinigung-Leistungen</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Fensterreinigung Privat — Einfamilienhäuser, Wohnungen, Wintergärten", text: "Ob Einfamilienhaus, Mietwohnung oder Wintergarten – wir reinigen Ihre Fenster professionell und streifenfrei. Innen und außen, inkl. Rahmen, Falze und Fensterbänke. Besonders beliebt vor und nach der Heizperiode: der Frühjahrs- und Herbstputz für klare Sicht." },
              { title: "Fensterreinigung Gewerbe — Büros, Ladenfronten, Schaufenster, Glasfassaden", text: "Für Geschäfte, Büros und Gewerbebetriebe bieten wir regelmäßige Fensterreinigung an. Schaufenster, Glasfassaden und Eingangsbereiche werden streifenfrei gereinigt – für einen professionellen Auftritt gegenüber Kunden und Geschäftspartnern." },
              { title: "Rahmen, Falze & Fensterbänke — Komplettreinigung", text: "Sauberes Glas allein reicht nicht. Wir reinigen auch Rahmen, Falze und Fensterbänke gründlich. So entsteht ein durchgehend gepflegtes Bild – und Schmutzablagerungen in den Falzen, die langfristig zu Schäden führen können, werden entfernt." },
              { title: "Schwer erreichbare Fenster — Dachfenster, Oberlichter, hohe Glasfronten", text: "Dachfenster, Oberlichter und hohe Glasfronten sind für Laien kaum sicher zu reinigen. Mit professioneller Ausrüstung und Erfahrung erreichen wir auch schwierige Stellen sicher und effizient – ohne Risiko für Sie oder Ihre Immobilie." },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">Ablauf einer Fensterreinigung</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Anruf oder WhatsApp", desc: "Melden Sie sich telefonisch oder per WhatsApp. Wir klären die wichtigsten Details: Wie viele Fenster? Welche Etage? Privat oder Gewerbe?" },
              { step: "2", title: "Kurze Abfrage & Angebot am gleichen Tag", desc: "Anhand Ihrer Angaben erstellen wir noch am gleichen Tag ein transparentes Angebot. Bei größeren Objekten kommen wir für eine kurze Besichtigung vorbei." },
              { step: "3", title: "Terminvereinbarung", desc: "Sie wählen den Termin – wir sind flexibel. Morgens, nachmittags, am Wochenende – was Ihnen passt." },
              { step: "4", title: "Professionelle Reinigung", desc: "Unser Team reinigt alle Fenster inkl. Glas, Rahmen und Fensterbank. Streifenfrei und gründlich – mit Profi-Ausrüstung." },
              { step: "5", title: "Abnahme und fertig", desc: "Sie prüfen das Ergebnis. Nicht zufrieden? Wir bessern sofort nach. Ihre Zufriedenheit ist unser Anspruch." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease, delay: i * 0.07 }} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#22c55e] font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a5c] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Kosten */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Was kostet Fensterreinigung in Pirmasens?</h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>Die Kosten hängen von der Anzahl und Größe der Fenster, der Erreichbarkeit und ob ein- oder beidseitig gereinigt wird ab. Wir kalkulieren transparent und fair – Sie wissen vorher genau, was es kostet.</p>
              <p>Weitere Informationen finden Sie auf unserer <Link href="/preise" className="text-[#22c55e] hover:underline font-semibold">Preisseite</Link>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referenz */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Referenz — Glasfassade Stadtmitte</h2>
          <div className="flex items-start gap-3 text-gray-600 text-base sm:text-lg leading-relaxed">
            <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
            <p><strong className="text-[#1a3a5c]">Glasfassade Stadtmitte Pirmasens:</strong> Außenreinigung einer vollverglasten Ladenfront in der Pirmasenser Innenstadt – mit Profi-Ausrüstung streifenfrei gereinigt. Der Kunde war begeistert vom Vorher-Nachher-Unterschied und hat uns für eine regelmäßige monatliche Reinigung beauftragt.</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Häufige Fragen zur Fensterreinigung</h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((faq, i) => (<FAQItem key={i} faq={faq} index={i} />))}</div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Weitere Leistungen in Pirmasens</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
            { label: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
            { label: "Entrümpelung", href: "/entruempelung-pirmasens" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center justify-between gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all text-sm font-semibold text-[#1a3a5c]">
              {link.label}<ArrowRight className="w-4 h-4 text-[#22c55e]" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[#1a3a5c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Jetzt unverbindliches Angebot anfordern</h2>
            <p className="text-white/60 text-lg mb-8">Rufen Sie uns an oder schreiben Sie uns per WhatsApp.</p>
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
