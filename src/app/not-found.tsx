import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden (404)",
  description:
    "Die aufgerufene Seite existiert nicht mehr oder wurde verschoben. Zurück zur Startseite von Salif Gebäudeservice.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
          Fehler 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mb-10">
          Die von Ihnen aufgerufene Seite existiert nicht mehr oder wurde
          verschoben. Rufen Sie uns direkt an oder kehren Sie zur Startseite
          zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
          >
            Zur Startseite
          </Link>
          <a
            href="tel:+4915229043159"
            className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-6 py-3 text-primary font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            01522 904 3159 anrufen
          </a>
        </div>
      </div>
    </main>
  );
}
