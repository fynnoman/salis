import type { Metadata } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  title: "Hausmeisterservice Pirmasens | Zuverlässig & Flexibel",
  description:
    "Hausmeisterservice in Pirmasens: Grünpflege, Winterdienst, Kleinreparaturen & mehr. Lokal, zuverlässig, alles aus einer Hand. Jetzt anfragen.",
  keywords: [
    "Hausmeisterservice Pirmasens",
    "Hausmeister Pirmasens",
    "Winterdienst Pirmasens",
    "Grünpflege Pirmasens",
    "Facility Management Pirmasens",
  ],
  alternates: {
    canonical: `${BASE_URL}/hausmeisterservice-pirmasens`,
  },
  openGraph: {
    title: "Hausmeisterservice Pirmasens | Salif Gebäudeservice",
    description: "Professioneller Hausmeisterservice in Pirmasens: Grünpflege, Winterdienst, Kleinreparaturen. Alles aus einer Hand.",
    url: `${BASE_URL}/hausmeisterservice-pirmasens`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hausmeisterservice Pirmasens – Salif Gebäudeservice" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hausmeisterservice Pirmasens | Salif Gebäudeservice",
    description: "Hausmeisterservice in Pirmasens. Zuverlässig, flexibel, faire Preise. Jetzt anfragen.",
    images: ["/og-image.png"],
  },
};

export default function HausmeisterserviceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Startseite", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Hausmeisterservice Pirmasens", item: `${BASE_URL}/hausmeisterservice-pirmasens` }] }) }} />
      {children}
    </>
  );
}
