"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    q: "Was kostet Treppenhausreinigung pro Reinigung?",
    a: "Der Preis richtet sich nach der Anzahl der Stockwerke, der Fläche und dem gewünschten Reinigungsintervall. Ein typisches 4-Parteien-Haus reinigen wir bereits ab einem attraktiven Festpreis pro Einsatz. Kontaktieren Sie uns für ein individuelles Angebot.",
  },
  {
    q: "Wie oft sollte das Treppenhaus gereinigt werden?",
    a: "Das hängt von der Nutzung ab. Bei Mehrfamilienhäusern mit vielen Mietern empfehlen wir eine wöchentliche Reinigung. Kleinere Häuser kommen oft mit einer 14-tägigen oder monatlichen Reinigung aus. Wir beraten Sie gerne.",
  },
  {
    q: "Reinigen Sie auch den Keller und Gemeinschaftsflächen?",
    a: "Ja, selbstverständlich. Unsere Treppenhausreinigung umfasst auf Wunsch auch Kellerflure, Waschräume, Fahrradkeller, Eingangsbereiche und alle weiteren Gemeinschaftsflächen.",
  },
  {
    q: "Muss ich einen langfristigen Vertrag abschließen?",
    a: "Nein. Bei uns gibt es keine Mindestvertragslaufzeit. Sie können monatlich kündigen. Wir setzen auf Qualität statt auf Vertragsbindung – zufriedene Kunden bleiben freiwillig.",
  },
  {
    q: "Bringen Sie die Reinigungsmittel selbst mit?",
    a: "Ja, wir bringen alle Reinigungsmittel, Geräte und Materialien selbst mit. Sie müssen nichts bereitstellen. Wir verwenden professionelle, materialschonende Produkte.",
  },
  {
    q: "Wie schnell können Sie starten?",
    a: "In der Regel können wir innerhalb weniger Tage nach Ihrer Anfrage mit der ersten Reinigung beginnen. Rufen Sie uns an oder schreiben Sie uns per WhatsApp – wir klären alles Weitere.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease, delay: index * 0.05 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors">
        <span className="font-semibold text-[#1a3a5c] text-sm sm:text-base pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-[#22c55e] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>}
    </motion.div>
  );
}

export default function TreppenhausreinigungPage() {
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
              <li className="text-white/70">Treppenhausreinigung Pirmasens</li>
            </ol>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">Für Vermieter & Hausverwaltungen</span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Treppenhausreinigung Pirmasens —{" "}
              <span className="text-[#22c55e]">Saubere Treppenhäuser</span> ohne Aufwand
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Treppenhäuser sind die Visitenkarte eines Hauses. Verschmutzte Flure und Treppen sorgen für Beschwerden der Mieter und einen schlechten Eindruck bei Besuchern. <strong className="text-white/80">Salif Gebäudeservice</strong> übernimmt die regelmäßige Treppenhausreinigung in Pirmasens, Zweibrücken und der Südwestpfalz – zuverlässig, gründlich und zu fairen Preisen.
            </p>
            <p className="text-white/50 text-base mt-4 leading-relaxed">
              Als lokale Reinigungsfirma kennen wir die Anforderungen von Vermietern und Hausverwaltungen genau. Ob wöchentlich, 14-tägig oder monatlich – wir passen den Reinigungsplan an Ihre Bedürfnisse an. Keine Mindestvertragslaufzeit, persönliche Betreuung und immer zuverlässig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warum professionelle Treppenhausreinigung */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
            Warum Vermieter und Hausverwaltungen eine professionelle Treppenhausreinigung brauchen
          </h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Kennen Sie das? Der Putzplan hängt im Treppenhaus, aber niemand hält sich daran. Mieter beschweren sich übereinander, Streit entsteht – und am Ende machen Sie als Vermieter die Arbeit doch selbst. Dieses Problem lösen wir ein für alle Mal.
            </p>
            <p>
              Eine professionelle Treppenhausreinigung sorgt für zufriedene Mieter und weniger Fluktuation. Gepflegte Gemeinschaftsflächen signalisieren Wertschätzung und tragen zur Werterhaltung Ihrer Immobilie bei. Verschmutzte Böden sind außerdem ein Sicherheitsrisiko: Rutschgefahr kann zu Unfällen und Haftungsansprüchen führen.
            </p>
            <p>
              Für Vermieter, die es bisher selbst gemacht haben, bedeutet professionelle Treppenhausreinigung vor allem eines: Zeitersparnis. Statt am Wochenende den Wischmop zu schwingen, können Sie sich auf die Verwaltung Ihrer Immobilien konzentrieren – oder einfach Ihre Freizeit genießen.
            </p>
            <p>
              Und für Hausverwaltungen mit mehreren Objekten bieten wir maßgeschneiderte Lösungen: ein Ansprechpartner für alle Ihre Liegenschaften in Pirmasens und Umgebung, mit transparenter Abrechnung und zuverlässiger Ausführung.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leistungen */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Was unsere Treppenhausreinigung beinhaltet</h2>
          </motion.div>
          <div className="space-y-8">
            {[
              { title: "Treppenreinigung — Stufen, Geländer, Ecken und Kanten", text: "Jede Stufe wird gründlich gewischt, Geländer und Handläufe abgewischt, Ecken und Kanten sorgfältig gereinigt. Wir achten auf Details, die bei einer oberflächlichen Reinigung gerne übersehen werden – für ein durchgehend sauberes Erscheinungsbild vom Erdgeschoss bis zum Dachboden." },
              { title: "Flure & Eingangsbereich — Erster Eindruck zählt", text: "Der Eingangsbereich ist das Erste, was Besucher und Mieter sehen. Wir reinigen Fußmatten, wischen Briefkästen ab, putzen Eingangstüren und Glaselemente und sorgen dafür, dass der Flur stets einladend aussieht. Saisonale Verschmutzungen wie Laub im Herbst oder Streusalz im Winter entfernen wir zuverlässig." },
              { title: "Fenster im Treppenhaus — Licht und Durchblick", text: "Treppenhausfenster werden oft vergessen. Wir reinigen Glas, Rahmen und Fensterbänke, damit maximales Tageslicht ins Treppenhaus fällt. Saubere Fenster machen einen großen Unterschied im Gesamteindruck des Gebäudes." },
              { title: "Gemeinschaftsflächen — Keller, Waschraum, Fahrradkeller", text: "Auf Wunsch reinigen wir auch Kellerflure, Waschräume, Fahrradkeller und weitere Gemeinschaftsflächen. So ist Ihr gesamtes Gebäude durchgehend gepflegt – nicht nur das Treppenhaus." },
              { title: "Flexible Intervalle — Wöchentlich, 14-tägig oder monatlich", text: "Sie bestimmen den Rhythmus. Wir bieten wöchentliche, 14-tägige und monatliche Reinigungsintervalle an – ganz nach dem Bedarf Ihrer Immobilie und Ihrer Mieter. Bei Bedarf passen wir den Plan jederzeit an." },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">So läuft es ab — In 4 Schritten zum sauberen Treppenhaus</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Kostenloses Erstgespräch & Besichtigung", desc: "Wir besichtigen Ihr Objekt, zählen die Stockwerke, messen die Flächen und besprechen Ihre Wünsche. Was soll gereinigt werden? Wie oft? Gibt es Besonderheiten?" },
              { step: "2", title: "Individuelles Angebot", desc: "Sie erhalten ein transparentes Festpreisangebot basierend auf Fläche, Stockwerken und Intervall. Keine versteckten Kosten, keine Überraschungen." },
              { step: "3", title: "Reinigung nach festem Plan", desc: "Unser Team reinigt an festgelegten Tagen zu festgelegten Zeiten. Ihre Mieter können sich auf die Regelmäßigkeit verlassen. Der Putzplan-Streit gehört der Vergangenheit an." },
              { step: "4", title: "Regelmäßige Qualitätskontrolle", desc: "Wir überprüfen regelmäßig die Ergebnisse und holen Ihr Feedback ein. Bei Reklamationen reagieren wir sofort – Ihre Zufriedenheit steht an erster Stelle." },
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
          <p className="text-gray-500 text-sm mt-6">Keine Mindestlaufzeit – monatlich kündbar.</p>
        </motion.div>
      </section>

      {/* Kosten */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Was kostet Treppenhausreinigung in Pirmasens?</h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>Der Preis für die Treppenhausreinigung hängt von der Anzahl der Stockwerke, der zu reinigenden Fläche und dem gewünschten Intervall ab. Je häufiger und regelmäßiger die Reinigung, desto günstiger wird der Einzelpreis.</p>
              <p>Wir bieten faire Festpreise ohne versteckte Kosten und ohne Mindestvertrag. Detaillierte Informationen finden Sie auf unserer <Link href="/preise" className="text-[#22c55e] hover:underline font-semibold">Preisseite</Link>.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">Ergebnisse die überzeugen</h2>
          <div className="flex items-start gap-3 text-gray-600 text-base sm:text-lg leading-relaxed">
            <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
            <p><strong className="text-[#1a3a5c]">Mehrfamilienhaus Zweibrücken:</strong> Monatliche Reinigung aller Treppenhäuser und Gemeinschaftsflächen für einen privaten Vermieter — seit 2023 zuverlässig betreut. Zufriedene Mieter, kein Putzplan-Streit mehr, professionelles Erscheinungsbild.</p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">Häufige Fragen zur Treppenhausreinigung</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (<FAQItem key={i} faq={faq} index={i} />))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Weitere Leistungen in Pirmasens</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Gebäudereinigung", href: "/gebaeudereinigung-pirmasens" },
            { label: "Fensterreinigung", href: "/fensterreinigung-pirmasens" },
            { label: "Hausmeisterservice", href: "/hausmeisterservice-pirmasens" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center justify-between gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all text-sm font-semibold text-[#1a3a5c]">
              {link.label}
              <ArrowRight className="w-4 h-4 text-[#22c55e]" />
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
            <p className="text-white/60 text-lg mb-8">Rufen Sie uns an oder schreiben Sie uns per WhatsApp – wir melden uns schnell zurück.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a href="tel:015229043159" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-lg bg-[#22c55e]" style={{ boxShadow: "0 0 32px rgba(34,197,94,0.25)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Phone className="w-5 h-5" />01522 904 3159
              </motion.a>
              <motion.a href="https://wa.me/4915229043159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-[#22c55e] text-lg border-2 border-[#22c55e]/30 hover:bg-[#22c55e]/10 transition-colors" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <MessageCircle className="w-5 h-5" />WhatsApp schreiben
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
