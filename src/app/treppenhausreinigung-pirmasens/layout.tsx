import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  title: "Treppenhausreinigung Pirmasens | Sauber & Zuverlässig",
  description:
    "Treppenhausreinigung in Pirmasens: Regelmäßig, gründlich & flexibel. Für Vermieter und Hausverwaltungen. Faire Preise. Jetzt Angebot anfordern.",
  keywords: [
    "Treppenhausreinigung Pirmasens",
    "Treppenhaus reinigen Pirmasens",
    "Reinigung Treppenhaus Pirmasens",
    "Hausverwaltung Reinigung Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/treppenhausreinigung-pirmasens`,
  },
  openGraph: {
    title: "Treppenhausreinigung Pirmasens | Salif Gebäudeservice",
    description:
      "Regelmäßige Treppenhausreinigung in Pirmasens für Vermieter & Hausverwaltungen. Zuverlässig, gründlich, faire Preise.",
    url: `${BASE_URL}/treppenhausreinigung-pirmasens`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Treppenhausreinigung Pirmasens – Salif Gebäudeservice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treppenhausreinigung Pirmasens | Salif Gebäudeservice",
    description: "Treppenhausreinigung in Pirmasens. Für Vermieter & Hausverwaltungen. Jetzt Angebot anfordern.",
    images: ["/og-image.png"],
  },
};

export default function TreppenhausreinigungLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Treppenhausreinigung Pirmasens", item: `${BASE_URL}/treppenhausreinigung-pirmasens` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
