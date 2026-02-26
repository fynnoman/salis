import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Referenzprojekte von Salif Gebäudeservice – echte Arbeiten aus Pirmasens und Umgebung. Gebäudereinigung, Hausmeisterservice, Entrümpelung und mehr.",
  alternates: {
    canonical: "https://www.salif-gebaeude.de/portfolio",
  },
  openGraph: {
    title: "Projekte | Salif Gebäudeservice Pirmasens",
    description:
      "Unsere Referenzprojekte – von Bürogebäuden über Treppenhäuser bis hin zu Glasfassaden und Entrümpelungen.",
    url: "https://www.salif-gebaeude.de/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
