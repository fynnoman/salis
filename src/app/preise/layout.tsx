import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Preise für Gebäudereinigung & Hausmeisterservice in Pirmasens. Ca. 28 €/Stunde – faire Konditionen, kein Kleingedrucktes. Jetzt Angebot anfragen.",
  keywords: [
    "Reinigung Preise Pirmasens",
    "Gebäudereinigung Kosten",
    "Hausmeisterservice Stundensatz",
    "Reinigungsfirma Preisliste Pirmasens",
  ],
  alternates: {
    canonical: "https://www.salif-gebaeude.de/preise",
  },
  openGraph: {
    title: "Preise | Salif Gebäudeservice Pirmasens",
    description:
      "Faire Preise für Reinigung & Hausmeisterservice in Pirmasens. Ca. 28 €/Stunde. Individuelle Angebote auf Anfrage.",
    url: "https://www.salif-gebaeude.de/preise",
  },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
