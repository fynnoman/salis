"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
  {
    q: "Was kostet eine professionelle Gebäudereinigung in Pirmasens?",
    a: "Der Preis richtet sich nach Fläche, Art der Reinigung und Häufigkeit. Unser Richtwert liegt bei ca. 28 € pro Stunde. Für regelmäßige Aufträge und größere Objekte erstellen wir gerne ein individuelles Angebot zum Festpreis. Rufen Sie uns einfach an oder schreiben Sie uns per WhatsApp.",
  },
  {
    q: "Wie oft sollte eine Gebäudereinigung durchgeführt werden?",
    a: "Das hängt von der Nutzung ab. Büros und Praxen empfehlen wir eine wöchentliche Unterhaltsreinigung. Treppenhäuser je nach Mieterzahl wöchentlich bis monatlich. Grundreinigungen werden meist 1–2 Mal jährlich durchgeführt. Wir beraten Sie gerne individuell.",
  },
  {
    q: "Reinigen Sie auch am Wochenende oder abends?",
    a: "Ja, wir sind flexibel und passen uns Ihren Betriebszeiten an. Viele unserer Gewerbekunden wünschen eine Reinigung nach Feierabend oder am Wochenende – das ist für uns kein Problem.",
  },
  {
    q: "Muss ich einen langfristigen Vertrag abschließen?",
    a: "Nein. Bei Salif Gebäudeservice gibt es keine Mindestvertragslaufzeit. Sie können monatlich kündigen. Natürlich freuen wir uns über eine langfristige Zusammenarbeit, aber Flexibilität ist uns wichtig.",
  },
  {
    q: "Welche Reinigungsmittel verwenden Sie?",
    a: "Wir verwenden professionelle Reinigungsmittel, die effektiv und materialschonend sind. Auf Wunsch setzen wir auch umweltfreundliche Produkte ein. Alle Mittel und Geräte bringen wir selbst mit.",
  },
  {
    q: "In welchem Umkreis von Pirmasens sind Sie tätig?",
    a: "Wir sind in Pirmasens und der gesamten Südwestpfalz tätig, darunter Zweibrücken, Kaiserslautern, Landau, Rodalben, Dahn und Waldfischbach-Burgalben. Für größere Aufträge fahren wir auch weiter.",
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
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-[#1a3a5c] text-sm sm:text-base pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-[#22c55e] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
          {faq.a}
        </div>
      )}
    </motion.div>
  );
}

export default function GebaeudereinigungPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#1a3a5c] overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white/70">Gebäudereinigung Pirmasens</li>
            </ol>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3">
              Professionelle Reinigung
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Gebäudereinigung Pirmasens —{" "}
              <span className="text-[#22c55e]">Professionelle Sauberkeit</span> für Ihr Gebäude
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Saubere Räume sind die Grundlage für ein professionelles Arbeitsumfeld und zufriedene Mieter. Ob Bürogebäude, Arztpraxis, Mehrfamilienhaus oder Gewerbefläche – <strong className="text-white/80">Salif Gebäudeservice</strong> ist Ihre Reinigungsfirma für professionelle Gebäudereinigung in Pirmasens.
            </p>
            <p className="text-white/50 text-base mt-4 leading-relaxed">
              Als lokales Reinigungsunternehmen seit 2020 sorgen wir in Pirmasens, Zweibrücken, Kaiserslautern, Landau und der gesamten Südwestpfalz für nachhaltige Sauberkeit. Unser erfahrenes Team arbeitet gründlich, zuverlässig und zu fairen Preisen – ohne Mindestvertragslaufzeit. Von der regelmäßigen Unterhaltsreinigung bis zur intensiven Grundreinigung: Wir sind Ihr Partner für alle Reinigungsaufgaben rund um Ihr Gebäude.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warum professionelle Gebäudereinigung */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
            Warum professionelle Gebäudereinigung für Ihr Unternehmen wichtig ist
          </h2>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Der erste Eindruck zählt – und saubere Räume sind dabei entscheidend. Ein gepflegtes Büro signalisiert Kunden und Geschäftspartnern Professionalität und Wertschätzung. Verschmutzte Böden, verstaubte Oberflächen oder unangenehme Gerüche dagegen schrecken ab und hinterlassen einen negativen Eindruck, der nur schwer zu korrigieren ist.
            </p>
            <p>
              Doch professionelle Gebäudereinigung ist mehr als nur Optik. In Arztpraxen, Büros und Gemeinschaftsräumen gelten strenge Hygiene-Vorschriften. Regelmäßige professionelle Reinigung stellt sicher, dass diese Standards eingehalten werden – und schützt die Gesundheit Ihrer Mitarbeiter und Kunden.
            </p>
            <p>
              Hinzu kommt der wirtschaftliche Aspekt: Saubere Gebäude behalten ihren Wert. Böden, Fliesen und Oberflächen halten deutlich länger, wenn sie fachgerecht gepflegt werden. Und Ihre Mitarbeiter können sich auf ihre eigentliche Arbeit konzentrieren, statt selbst zum Putzlappen zu greifen. Das spart Zeit, steigert die Produktivität und senkt langfristig die Kosten.
            </p>
            <p>
              Stellen Sie sich vor: Ein potenzieller Kunde betritt Ihr Büro und sieht verschmutzte Fenster und staubige Regale. Oder ein neuer Mieter besichtigt eine Wohnung mit verdrecktem Treppenhaus. In beiden Fällen entsteht sofort ein schlechter Eindruck – der vermeidbar gewesen wäre.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Leistungen */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">
              Unsere Gebäudereinigung-Leistungen im Überblick
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Unterhaltsreinigung — Regelmäßige Sauberkeit für Büros und Gewerbe",
                text: "Die Unterhaltsreinigung ist das Fundament unserer Arbeit. Wir reinigen Ihre Räumlichkeiten nach einem festen Plan – täglich, wöchentlich oder in jedem gewünschten Intervall. Böden wischen, Oberflächen abwischen, Sanitäranlagen reinigen, Mülleimer leeren – alles wird zuverlässig erledigt, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Besonders für Büros, Praxen und Gewerbeflächen in Pirmasens ist die regelmäßige Unterhaltsreinigung unverzichtbar.",
              },
              {
                title: "Grundreinigung — Intensivreinigung für stark verschmutzte Flächen",
                text: "Wenn eine normale Reinigung nicht mehr reicht, ist eine Grundreinigung gefragt. Wir entfernen hartnäckige Verschmutzungen von Böden, Fliesen und Sanitäranlagen. Ideal nach einem Mieterwechsel, nach Bauarbeiten oder wenn Räume lange nicht intensiv gereinigt wurden. Mit professionellen Maschinen und Reinigungsmitteln bringen wir jede Fläche wieder auf Vordermann.",
              },
              {
                title: "Büroreinigung — Arbeitsplätze professionell gereinigt",
                text: "Saubere Schreibtische, hygienische Teeküchen, frische Sanitärräume – unsere Büroreinigung sorgt dafür, dass sich Ihre Mitarbeiter wohlfühlen und produktiv arbeiten können. Wir reinigen nach Feierabend oder am Wochenende, damit der Bürobetrieb nicht gestört wird. Jeder Arbeitsplatz wird individuell betreut.",
              },
              {
                title: "Sonderreinigung — Baureinigung, Events und Desinfektion",
                text: "Nach Bauarbeiten, Veranstaltungen oder bei besonderen Hygiene-Anforderungen bieten wir maßgeschneiderte Sonderreinigungen an. Baureinigung entfernt Staub und Rückstände nach Renovierungen. Event-Reinigung bringt Ihre Räume nach Veranstaltungen wieder in Top-Zustand. Desinfektionsreinigung sorgt für maximale Hygiene in sensiblen Bereichen.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm"
              >
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-8">
            So läuft eine Gebäudereinigung bei Salif ab
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Kostenlose Besichtigung vor Ort", desc: "Wir kommen zu Ihnen, begutachten die Räumlichkeiten und besprechen Ihre Wünsche. Dabei notieren wir Fläche, Art der Verschmutzung und gewünschte Reinigungsintervalle." },
              { step: "2", title: "Individuelles Angebot innerhalb von 24 Stunden", desc: "Nach der Besichtigung erhalten Sie ein transparentes Angebot – ohne versteckte Kosten. Bei regelmäßigen Aufträgen bieten wir attraktive Pauschalen an." },
              { step: "3", title: "Terminvereinbarung nach Ihren Wünschen", desc: "Sie bestimmen den Zeitpunkt: morgens, abends, am Wochenende – wir richten uns nach Ihrem Betriebsablauf und stören Ihren Geschäftsbetrieb nicht." },
              { step: "4", title: "Professionelle Reinigung", desc: "Unser geschultes Team reinigt gründlich und effizient mit professioneller Ausrüstung und hochwertigen Reinigungsmitteln. Jeder Auftrag wird mit höchster Sorgfalt erledigt." },
              { step: "5", title: "Qualitätskontrolle und Feedback", desc: "Nach der Reinigung prüfen wir das Ergebnis. Ihre Zufriedenheit ist unser Maßstab. Sie haben Anmerkungen? Wir passen unseren Service jederzeit an." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                className="flex gap-4"
              >
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
          <p className="text-gray-500 italic mt-8 text-sm">
            „Sie müssen nur einmal anrufen — den Rest erledigen wir."
          </p>
        </motion.div>
      </section>

      {/* Kosten */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
              Was kostet Gebäudereinigung in Pirmasens?
            </h2>
            <div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Die Kosten für eine professionelle Gebäudereinigung hängen von mehreren Faktoren ab: der zu reinigenden Fläche, der Art der Reinigung (Unterhaltsreinigung, Grundreinigung, Sonderreinigung) und der Häufigkeit des Einsatzes.
              </p>
              <p>
                Unser Richtwert liegt bei ca. <strong className="text-[#1a3a5c]">28 € pro Stunde</strong>. Für regelmäßige Aufträge – zum Beispiel wöchentliche Büroreinigung oder monatliche Treppenhausreinigung – können wir günstigere Pauschalen anbieten. Größere Objekte kalkulieren wir individuell.
              </p>
              <p>
                Wir arbeiten transparent und fair: Sie erhalten ein detailliertes Angebot vor Auftragsbeginn, ohne versteckte Kosten und ohne Mindestvertragslaufzeit. Detaillierte Informationen finden Sie auf unserer{" "}
                <Link href="/preise" className="text-[#22c55e] hover:underline font-semibold">Preisseite</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ergebnisse */}
      <section className="py-20 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-6">
            Ergebnisse die überzeugen
          </h2>
          <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
              <p><strong className="text-[#1a3a5c]">Bürogebäude Pirmasens:</strong> Wöchentliche Unterhaltsreinigung eines 3-stöckigen Bürokomplexes – seit 2024 zuverlässig und ohne Beanstandungen.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
              <p><strong className="text-[#1a3a5c]">Mehrfamilienhaus Zweibrücken:</strong> Monatliche Treppenhausreinigung aller Gemeinschaftsflächen für einen privaten Vermieter – zufriedene Mieter, kein Putzplan-Streit mehr.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-1" />
              <p><strong className="text-[#1a3a5c]">Gewerbefläche Kaiserslautern:</strong> Grundreinigung nach Renovierung mit anschließender regelmäßiger Unterhaltsreinigung – besenrein und bezugsfertig in einem Tag.</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Mehr Referenzprojekte finden Sie auf unserer{" "}
            <Link href="/portfolio" className="text-[#22c55e] hover:underline font-semibold">Portfolio-Seite</Link>.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-10">
              Häufige Fragen zur Gebäudereinigung in Pirmasens
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Interne Links */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">Weitere Leistungen in Pirmasens</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: "Treppenhausreinigung", href: "/treppenhausreinigung-pirmasens" },
            { label: "Fensterreinigung", href: "/fensterreinigung-pirmasens" },
            { label: "Entrümpelung", href: "/entruempelung-pirmasens" },
            { label: "Hausmeisterservice", href: "/hausmeisterservice-pirmasens" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between gap-2 p-4 rounded-xl border border-gray-100 hover:border-[#22c55e]/40 hover:shadow-sm transition-all text-sm font-semibold text-[#1a3a5c]"
            >
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Jetzt unverbindliches Angebot anfordern
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Rufen Sie uns an oder schreiben Sie uns per WhatsApp – wir melden uns schnell zurück.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:015229043159"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-white text-lg bg-[#22c55e]"
                style={{ boxShadow: "0 0 32px rgba(34,197,94,0.25)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                01522 904 3159
              </motion.a>
              <motion.a
                href="https://wa.me/4915229043159"
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
