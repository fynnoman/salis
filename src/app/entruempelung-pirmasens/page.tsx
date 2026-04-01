"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    q: "Was kostet eine Wohnungsauflösung in Pirmasens?",
    a: "Der Preis hängt von der Wohnungsgröße, der Menge an Gegenständen und dem Stockwerk ab. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot – ohne Überraschungen. Bei verwertbaren Gegenständen ist eine Anrechnung auf den Preis möglich.",
  },
  {
    q: "Wie schnell können Sie mit der Entrümpelung starten?",
    a: "In dringenden Fällen können wir oft innerhalb von 1–2 Tagen starten. Rufen Sie uns an oder schreiben Sie per WhatsApp – wir finden schnell einen Termin.",
  },
  {
    q: "Entsorgen Sie auch Sperrmüll und Elektrogeräte?",
    a: "Ja, wir übernehmen die komplette Entsorgung inkl. Sperrmüll, Elektrogeräte und Sondermüll. Alles wird fachgerecht und umweltgerecht entsorgt – Sie müssen sich um nichts kümmern.",
  },
  {
    q: "Übernehmen Sie auch die Endreinigung nach der Entrümpelung?",
    a: "Ja, unsere Entrümpelung beinhaltet auf Wunsch eine besenreine Übergabe. Die Räume werden nach der Räumung gründlich gereinigt und sind sofort bezugs- oder übergabefertig.",
  },
  {
    q: "Können Wertgegenstände separiert werden?",
    a: "Selbstverständlich. Vor der Entrümpelung besprechen wir mit Ihnen, welche Gegenstände aufbewahrt, gespendet oder verkauft werden sollen. Bei Nachlassentrümpelungen gehen wir besonders sensibel und respektvoll vor.",
  },
  {
    q: "Arbeiten Sie auch in Zweibrücken und Kaiserslautern?",
    a: "Ja, wir sind in der gesamten Südwestpfalz tätig: Pirmasens, Zweibrücken, Kaiserslautern, Landau, Rodalben, Dahn und Umgebung. Für größere Aufträge fahren wir auch weiter.",
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

export default function EntruempelungPage() {
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
              <li className="text-white/70">Entrümpelung Pirmasens</li>
            </ol>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />Zurück zur Startseite
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">Komplettservice</span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Entrümpelung Pirmasens —{" "}
              <span className="text-[#22c55e]">Schnell, komplett</span> und stressfrei
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Egal ob Wohnungsauflösung, Nachlassentrümpelung, Kellerentrümpelung oder Entrümpelung vor dem Umzug – <strong className="text-white/80">Salif Gebäudeservice</strong> macht das schnell und sauber. Komplettservice: Räumung, fachgerechte Entsorgung und besenreine Übergabe – alles aus einer Hand.
            </p>
            <p className="text-white/50 text-base mt-4 leading-relaxed">
              Wir sind in Pirmasens, Zweibrücken, Kaiserslautern und der gesamten Südwestpfalz für Sie im Einsatz. Schnell, fair und diskret – oft innerhalb von nur 1–2 Tagen erledigt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wann braucht man Entrümpelung */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Wann braucht man eine professionelle Entrümpelung?</h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            <p>Es gibt viele Situationen, in denen eine professionelle Entrümpelung die beste Lösung ist:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" /><span><strong className="text-[#1a3a5c]">Mieterwechsel:</strong> Die alte Wohnung muss geräumt und besenrein übergeben werden. Vermieter müssen sicherstellen, dass die Wohnung schnell wieder vermietbar ist.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" /><span><strong className="text-[#1a3a5c]">Nachlassauflösung:</strong> Nach einem Todesfall muss der Haushalt aufgelöst werden. Wir gehen dabei besonders sensibel und respektvoll vor und separieren Wertgegenstände nach Ihren Wünschen.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" /><span><strong className="text-[#1a3a5c]">Umzug:</strong> Das alte Zuhause muss leer und sauber übergeben werden. Wir räumen alles, was nicht mit umzieht, und reinigen die Wohnung anschließend.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" /><span><strong className="text-[#1a3a5c]">Keller & Dachboden:</strong> Über die Jahre sammelt sich vieles an. Wir räumen Keller und Dachböden komplett – auch verwinkelte Räume und schwere Gegenstände.</span></li>
            </ul>
            <p>Selbst machen? Ist stressig, dauert ewig und wohin mit dem ganzen Müll? Profis sind schneller und oft günstiger als man denkt. Ein Anruf genügt.</p>
          </div>
        </motion.div>
      </section>

      {/* Leistungen */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Unsere Entrümpelungs-Leistungen</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Wohnungsauflösung — Komplette Räumung", text: "Vom Keller bis zum Dachboden – wir räumen die gesamte Wohnung. Möbel, Hausrat, Elektrogeräte, Textilien – alles wird sortiert, abtransportiert und fachgerecht entsorgt. Sie müssen sich um nichts kümmern." },
              { title: "Nachlassentrümpelung — Sensibel und respektvoll", text: "Bei Nachlassauflösungen ist Fingerspitzengefühl gefragt. Wertgegenstände, Erinnerungsstücke und Dokumente werden sorgfältig separiert und Ihnen übergeben. Wir arbeiten diskret und respektvoll." },
              { title: "Keller- & Dachbodenräumung — Auch schwere Gegenstände", text: "Verwinkelte Kellerräume, enge Treppen, schwere Möbelstücke – für unser erfahrenes Team kein Problem. Wir räumen jeden Raum komplett und hinterlassen ihn besenrein." },
              { title: "Besenreine Übergabe — Sofort bezugsfertig", text: "Nach der Entrümpelung reinigen wir die Räume gründlich. Die Wohnung ist sofort übergabe- oder bezugsfertig – ideal für Vermieter, die schnell neu vermieten möchten." },
              { title: "Fachgerechte Entsorgung — Mülltrennung und Recycling", text: "Wir entsorgen alles fachgerecht und umweltbewusst: Restmüll, Sperrmüll, Elektrogeräte, Sondermüll. Was noch brauchbar ist, wird nach Möglichkeit gespendet oder recycelt." },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">So läuft eine Entrümpelung bei uns ab</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Kostenlose Besichtigung vor Ort", desc: "Wir kommen zu Ihnen, begutachten die Räumlichkeiten und besprechen den Umfang der Entrümpelung. Welche Gegenstände sollen separiert werden? Gibt es Besonderheiten?" },
              { step: "2", title: "Verbindliches Festpreisangebot", desc: "Sie erhalten ein transparentes Festpreisangebot. Keine bösen Überraschungen, keine versteckten Kosten. Bei verwertbaren Gegenständen rechnen wir den Wert auf den Preis an." },
              { step: "3", title: "Terminvereinbarung", desc: "Sie bestimmen den Termin. Bei dringenden Fällen können wir oft innerhalb von 1–2 Tagen starten." },
              { step: "4", title: "Entrümpelung & Entsorgung", desc: "Unser Team räumt alle Räume komplett, sortiert und transportiert ab. Alles wird fachgerecht entsorgt oder recycelt." },
              { step: "5", title: "Endreinigung & besenreine Übergabe", desc: "Die Räume werden gründlich gereinigt und sind sofort übergabe- oder bezugsfertig. Komplett-Service aus einer Hand." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease, delay: i * 0.07 }} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="text-[#22c55e] font-bold text-sm">{item.step}</span></div>
                <div><h3 className="font-bold text-[#1a3a5c] mb-1">{item.title}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Kosten */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Was kostet eine Entrümpelung in Pirmasens?</h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>Der Preis hängt von der Wohnungsgröße, der Menge an Gegenständen, dem Stockwerk und dem Aufwand ab. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.</p>
              <p>Sind verwertbare Gegenstände vorhanden, rechnen wir deren Wert auf den Preis an – das kann die Kosten deutlich senken. Transparenz und Fairness sind uns wichtig. Weitere Informationen auf unserer <Link href="/preise" className="text-[#22c55e] hover:underline font-semibold">Preisseite</Link>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Häufige Fragen zur Entrümpelung</h2>
          </motion.div>
          <div className="space-y-3">{faqs.map((faq, i) => (<FAQItem key={i} faq={faq} index={i} />))}</div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Weitere Leistungen in Pirmasens</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
              { label: "Hausmeisterservice", href: "/hausmeisterservice-pirmasens" },
              { label: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
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
