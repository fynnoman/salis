import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeude.de";

export const metadata: Metadata = {
  title: "Anfahrt & Kontakt – Salif Gebäudeservice Pirmasens",
  description:
    "Salif Gebäudeservice, Emilienstraße 5a, 66955 Pirmasens. Erreichbar Mo–Sa 7–20 Uhr. Anfahrtsbeschreibung, Karte & Kontaktdaten auf einen Blick.",
  keywords: [
    "Salif Gebäudeservice Adresse",
    "Reinigungsfirma Pirmasens Adresse",
    "Emilienstraße Pirmasens",
    "Anfahrt Reinigung Pirmasens",
    "Kontakt Gebäudeservice Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/anfahrt`,
  },
  openGraph: {
    title: "Anfahrt & Kontakt – Salif Gebäudeservice Pirmasens",
    description:
      "Emilienstraße 5a, 66955 Pirmasens. Erreichbar Mo–Sa 7–20 Uhr per Telefon, WhatsApp oder E-Mail.",
    url: `${BASE_URL}/anfahrt`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Anfahrt Salif Gebäudeservice Pirmasens" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anfahrt & Kontakt – Salif Gebäudeservice Pirmasens",
    description: "Emilienstraße 5a, 66955 Pirmasens. Mo–Sa 7–20 Uhr erreichbar.",
    images: ["/og-image.png"],
  },
};

export default function AnfahrtLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", position: 2, name: "Anfahrt & Kontakt", item: `${BASE_URL}/anfahrt` },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
