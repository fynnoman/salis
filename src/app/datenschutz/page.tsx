import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Salif Haus und Mehr gemäß DSGVO. Informationen zur Datenverarbeitung auf unserer Website.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.salif-gebaeude.de/datenschutz" },
};

export default function DatenschutzPage() {
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

        <h1 className="text-4xl font-bold text-[#1a3a5c] mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-400 text-sm mb-12">Stand: Februar 2026</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-[#1a3a5c] mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">2. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              Salif Haus und Mehr<br />
              Emilienstraße 5a<br />
              66955 Pirmasens<br /><br />
              Telefon: 01522 904 3159<br />
              E-Mail:{" "}
              <a href="mailto:salif-dienstleistungen@gmx.de" className="text-[#22c55e] hover:underline">
                salif-dienstleistungen@gmx.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">3. Datenerfassung auf dieser Website</h2>

            <h3 className="font-semibold text-[#1a3a5c] mb-1">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser
              Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und Optimierung seiner
              Website.
            </p>

            <h3 className="font-semibold text-[#1a3a5c] mb-1 mt-6">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, werden die übermittelten
              Daten (Name, Anfrage etc.) bei uns gespeichert, um Ihre Anfrage zu bearbeiten. Diese
              Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f
              DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">4. Google Maps</h2>
            <p>
              Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von
              Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in
              der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der
              Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Wenn Google Maps
              aktiviert ist, kann Google zum Zwecke der einheitlichen Darstellung der Schriftarten
              Google Web Fonts verwenden.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
              Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
              angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
              f DSGVO dar.
            </p>
            <p className="mt-3">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
              Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">5. Ihre Rechte</h2>
            <p className="mb-3">Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO)</li>
              <li>Ihre Daten in einem maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)</li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:salif-dienstleistungen@gmx.de" className="text-[#22c55e] hover:underline">
                salif-dienstleistungen@gmx.de
              </a>
            </p>
            <p className="mt-3">
              Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Rheinland-Pfalz.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">6. Datensicherheit</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
              Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
              ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">7. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden
              ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website
              erforderlich sind. Eine Einwilligung ist hierfür nicht erforderlich (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">8. Aktualität dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie stets den
              aktuellen rechtlichen Anforderungen entsprechen zu lassen. Die jeweils aktuelle
              Datenschutzerklärung gilt für Ihren Besuch auf der Website.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
