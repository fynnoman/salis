import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  title: "Entrümpelung Pirmasens | Schnell & Komplett",
  description:
    "Entrümpelung in Pirmasens: Wohnungsauflösung, Kellerentrümpelung & besenreine Übergabe. Schnell, fair & komplett. Jetzt Angebot anfordern.",
  keywords: [
    "Entrümpelung Pirmasens",
    "Wohnungsauflösung Pirmasens",
    "Haushaltsauflösung Pirmasens",
    "Kellerentrümpelung Pirmasens",
    "Entrümpelungsfirma Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/entruempelung-pirmasens`,
  },
  openGraph: {
    title: "Entrümpelung Pirmasens | Salif Gebäudeservice",
    description: "Entrümpelung in Pirmasens: Wohnungsauflösung, Kellerräumung & besenreine Übergabe. Schnell und fair.",
    url: `${BASE_URL}/entruempelung-pirmasens`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Entrümpelung Pirmasens – Salif Gebäudeservice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung Pirmasens | Salif Gebäudeservice",
    description: "Entrümpelung in Pirmasens. Schnell, komplett, faire Preise. Jetzt Angebot anfordern.",
    images: ["/og-image.png"],
  },
};

export default function EntruempelungLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Entrümpelung Pirmasens", item: `${BASE_URL}/entruempelung-pirmasens` }] }) }} />
      {children}
    </>
  );
}
