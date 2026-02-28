import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeude.de";

export const metadata: Metadata = {
  title: "Preise Gebäudereinigung Pirmasens – ab 28 €/Std.",
  description:
    "Faire Preise für Gebäudereinigung & Hausmeisterservice in Pirmasens. Richtwert ca. 28 €/Stunde. Kein Kleingedrucktes – jetzt kostenloses Angebot anfragen!",
  keywords: [
    "Reinigung Preise Pirmasens",
    "Gebäudereinigung Kosten Pirmasens",
    "Hausmeisterservice Stundensatz",
    "Reinigungsfirma Preisliste Pirmasens",
    "Unterhaltsreinigung Preis",
  ],
  alternates: {
    canonical: `${BASE_URL}/preise`,
  },
  openGraph: {
    title: "Preise Gebäudereinigung Pirmasens – ab 28 €/Std.",
    description:
      "Faire Preise für Reinigung & Hausmeisterservice in Pirmasens. Ca. 28 €/Stunde – individuelle Angebote auf Anfrage.",
    url: `${BASE_URL}/preise`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Preise Salif Gebäudeservice Pirmasens" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise Gebäudereinigung Pirmasens – ab 28 €/Std.",
    description: "Faire Preise für Reinigung & Hausmeisterservice in Pirmasens. Jetzt Angebot anfragen.",
    images: ["/og-image.png"],
  },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Preise", item: `${BASE_URL}/preise` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
