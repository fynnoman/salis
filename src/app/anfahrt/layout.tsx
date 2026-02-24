import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfahrt",
  description:
    "Salif Gebäudeservice in Pirmasens – Emilienstraße 5a, 66955 Pirmasens. Anfahrtsbeschreibung, Öffnungszeiten und Kontakt. Erreichbar Mo–Sa 7–20 Uhr.",
  keywords: [
    "Salif Gebäudeservice Adresse",
    "Reinigungsfirma Pirmasens Adresse",
    "Pirmasens Emilienstraße",
    "Anfahrt Pirmasens",
  ],
  alternates: {
    canonical: "https://www.salif-gebaeude.de/anfahrt",
  },
  openGraph: {
    title: "Anfahrt | Salif Gebäudeservice Pirmasens",
    description:
      "So finden Sie uns: Emilienstraße 5a, 66955 Pirmasens. Erreichbar Mo–Sa 7–20 Uhr per Telefon, E-Mail oder WhatsApp.",
    url: "https://www.salif-gebaeude.de/anfahrt",
  },
};

export default function AnfahrtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
