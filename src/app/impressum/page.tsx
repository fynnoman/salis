import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Salif Gebäudeservice – Haus und mehr GbR, Emilienstraße 5a, 66955 Pirmasens. Rechtliche Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.salif-gebaeude.de/impressum" },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-[#1a3a5c] mb-2">Impressum</h1>
        <p className="text-gray-400 text-sm mb-12">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Unternehmensangaben</h2>
            <p>
              Salif Gebäudeservice – Haus und mehr GbR<br />
              Emilienstraße 5a<br />
              66955 Pirmasens<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Vertreten durch die Gesellschafter</h2>
            <p>
              Salif Diallo<br />
              (weitere Gesellschafter auf Anfrage)
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Kontakt</h2>
            <p>
              Telefon: 01522 904 3159<br />
              E-Mail:{" "}
              <a href="mailto:salif-dienstleistungen@gmx.de" className="text-[#22c55e] hover:underline">
                salif-dienstleistungen@gmx.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              Wird auf Anfrage mitgeteilt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Dienstleistungsgewerbe (Gebäudereinigung, Hausmeisterservice, Umzüge)<br />
              Zuständige Kammer: Handwerkskammer der Pfalz<br />
              Berufsrechtliche Regelungen: Handwerksordnung (HwO)
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Salif Diallo<br />
              Emilienstraße 5a<br />
              66955 Pirmasens
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
              wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Inhalte umgehend entfernen.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
