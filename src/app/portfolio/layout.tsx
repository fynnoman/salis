import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeude.de";

export const metadata: Metadata = {
  title: "Referenzprojekte Pirmasens – Reinigung & Hausmeister",
  description:
    "Referenzprojekte von Salif Gebäudeservice in Pirmasens: Büroreinigung, Treppenhäuser, Glasfassaden, Entrümpelung. Echte Ergebnisse aus der Region.",
  keywords: [
    "Referenzen Gebäudereinigung Pirmasens",
    "Reinigungsprojekte Südwestpfalz",
    "Hausmeisterservice Beispiele",
    "Entrümpelung Kaiserslautern",
  ],
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
  openGraph: {
    title: "Referenzprojekte – Salif Gebäudeservice Pirmasens",
    description:
      "Unsere Referenzprojekte – Bürogebäude, Treppenhäuser, Glasfassaden und Entrümpelungen in Pirmasens und Umgebung.",
    url: `${BASE_URL}/portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Referenzprojekte Salif Gebäudeservice Pirmasens" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referenzprojekte – Salif Gebäudeservice Pirmasens",
    description: "Echte Projekte, echte Ergebnisse – Reinigung & Hausmeisterservice in Pirmasens.",
    images: ["/og-image.png"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "Referenzprojekte", item: `${BASE_URL}/portfolio` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
