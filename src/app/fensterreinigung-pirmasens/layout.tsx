import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  title: "Fensterreinigung Pirmasens | Streifenfrei & Professionell",
  description:
    "Fensterreinigung in Pirmasens: Streifenfreie Glas- & Rahmenreinigung für Privat und Gewerbe. Profi-Ausrüstung. Jetzt Angebot anfordern.",
  keywords: [
    "Fensterreinigung Pirmasens",
    "Glasreinigung Pirmasens",
    "Fensterputzer Pirmasens",
    "Schaufensterreinigung Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/fensterreinigung-pirmasens`,
  },
  openGraph: {
    title: "Fensterreinigung Pirmasens | Salif Gebäudeservice",
    description: "Streifenfreie Fensterreinigung in Pirmasens für Privat und Gewerbe. Profi-Ausrüstung, faire Preise.",
    url: `${BASE_URL}/fensterreinigung-pirmasens`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Fensterreinigung Pirmasens – Salif Gebäudeservice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fensterreinigung Pirmasens | Salif Gebäudeservice",
    description: "Streifenfreie Fensterreinigung in Pirmasens. Jetzt Angebot anfordern.",
    images: ["/og-image.png"],
  },
};

export default function FensterreinigungLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Fensterreinigung Pirmasens", item: `${BASE_URL}/fensterreinigung-pirmasens` }] }) }} />
      {children}
    </>
  );
}
