import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  title: "Gebäudereinigung Pirmasens | Professionell & Zuverlässig",
  description:
    "Gebäudereinigung in Pirmasens: Büroreinigung, Unterhaltsreinigung & Grundreinigung für Gewerbe und Privat. Faire Preise. Jetzt Angebot anfordern.",
  keywords: [
    "Gebäudereinigung Pirmasens",
    "Büroreinigung Pirmasens",
    "Unterhaltsreinigung Pirmasens",
    "Grundreinigung Pirmasens",
    "Reinigungsfirma Pirmasens",
    "Gewerbereinigung Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/gebaeudereinigung-pirmasens`,
  },
  openGraph: {
    title: "Gebäudereinigung Pirmasens | Salif Gebäudeservice",
    description:
      "Professionelle Gebäudereinigung in Pirmasens: Unterhaltsreinigung, Grundreinigung & Büroreinigung. Faire Preise, zuverlässig.",
    url: `${BASE_URL}/gebaeudereinigung-pirmasens`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gebäudereinigung Pirmasens – Salif Gebäudeservice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Pirmasens | Salif Gebäudeservice",
    description: "Professionelle Gebäudereinigung in Pirmasens. Faire Preise. Jetzt Angebot anfordern.",
    images: ["/og-image.png"],
  },
};

export default function GebaeudereinigungLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Gebäudereinigung Pirmasens", item: `${BASE_URL}/gebaeudereinigung-pirmasens` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
