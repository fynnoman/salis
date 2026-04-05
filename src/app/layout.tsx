import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Salif Gebäudeservice | Reinigung Pirmasens",
    template: "%s | Salif Gebäudeservice",
  },
  description:
    "Salif Gebäudeservice – Ihre Reinigungsfirma in Pirmasens. Professionelle Gebäudereinigung, Fensterreinigung, Treppenhausreinigung, Hausmeisterservice & Entrümpelung. ✓ Faire Preise ✓ Zuverlässig ✓ Jetzt Angebot anfragen: 01522 904 3159.",
  keywords: [
    "Reinigung Pirmasens",
    "Gebäudereinigung Pirmasens",
    "Reinigungsfirma Pirmasens",
    "Reinigungsunternehmen Pirmasens",
    "Putzfirma Pirmasens",
    "Hausmeisterservice Pirmasens",
    "Fensterreinigung Pirmasens",
    "Treppenhausreinigung Pirmasens",
    "Entrümpelung Pirmasens",
    "Umzüge Pirmasens",
    "Gebäudeservice Pirmasens",
    "Unterhaltsreinigung Pirmasens",
    "Grundreinigung Pirmasens",
    "Büroreinigung Pirmasens",
    "Glasreinigung Pirmasens",
    "Dachrinnenreinigung Pirmasens",
    "Winterdienst Pirmasens",
    "Salif Gebäudeservice",
    "Salif Haus und Mehr",
    "Reinigung Südwestpfalz",
    "Gebäudereinigung Zweibrücken",
    "Reinigungsservice Kaiserslautern",
  ],
  authors: [{ name: "Salif Gebäudeservice" }],
  creator: "Salif Gebäudeservice",
  publisher: "Salif Gebäudeservice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Salif Gebäudeservice",
    title: "Salif Gebäudeservice | Reinigung Pirmasens",
    description:
      "Professionelle Gebäudereinigung, Fensterreinigung, Hausmeisterservice & Entrümpelung in Pirmasens. ✓ Faire Preise ✓ Zuverlässig ✓ Jetzt anfragen: 01522 904 3159.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salif Gebäudeservice – Reinigung & Hausmeisterservice Pirmasens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salif Gebäudeservice | Reinigung Pirmasens",
    description:
      "Professionelle Gebäudereinigung & Hausmeisterservice in Pirmasens. Jetzt anfragen: 01522 904 3159.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "googleb3500a0ecacad6bc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a3a5c" />
        <meta name="geo.region" content="DE-RP" />
        <meta name="geo.placename" content="Pirmasens" />
        <meta name="geo.position" content="49.2;7.6" />
        <meta name="ICBM" content="49.2, 7.6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Schema 1: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${BASE_URL}/#website`,
              url: BASE_URL,
              name: "Salif Gebäudeservice – Haus und Mehr",
              description: "Professionelle Reinigung & Hausmeisterservice in Pirmasens",
              inLanguage: "de-DE",
              publisher: {
                "@type": "Organization",
                name: "Salif Gebäudeservice – Haus und Mehr",
                url: BASE_URL,
              },
            }),
          }}
        />
        {/* Schema 2: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": `${BASE_URL}/#localbusiness`,
              name: "Salif Gebäudeservice",
              alternateName: ["Salif Haus und Mehr", "Salif Gebäudeservice – Haus und mehr"],
              url: BASE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/51D6E89F-A80E-41DF-9C4F-68DD77279567.png`,
                width: 512,
                height: 512,
              },
              image: `${BASE_URL}/og-image.png`,
              description:
                "Professionelle Gebäudereinigung, Hausmeisterservice, Fensterreinigung, Treppenhausreinigung, Umzüge und Entrümpelung in Pirmasens und Umgebung. Ihre zuverlässige Reinigungsfirma in der Südwestpfalz.",
              telephone: "+4915229043159",
              email: "salif-dienstleistungen@gmx.de",
              foundingDate: "2020",
              founder: {
                "@type": "Person",
                name: "Salif",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 10,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Emilienstraße 5a",
                addressLocality: "Pirmasens",
                postalCode: "66955",
                addressRegion: "Rheinland-Pfalz",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.2,
                longitude: 7.6,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Bar, Überweisung",
              areaServed: [
                { "@type": "City", name: "Pirmasens" },
                { "@type": "City", name: "Zweibrücken" },
                { "@type": "City", name: "Kaiserslautern" },
                { "@type": "City", name: "Landau" },
                { "@type": "City", name: "Rodalben" },
                { "@type": "City", name: "Dahn" },
                { "@type": "City", name: "Waldfischbach-Burgalben" },
                { "@type": "AdministrativeArea", name: "Südwestpfalz" },
                { "@type": "AdministrativeArea", name: "Rheinland-Pfalz" },
              ],
              knowsLanguage: ["de", "fr"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Reinigung & Gebäudeservice Dienstleistungen",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gebäudereinigung Pirmasens", description: "Professionelle Unterhalts- und Grundreinigung für Gewerbe und Privat in Pirmasens" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hausmeisterservice Pirmasens", description: "Kleinreparaturen, Grünpflege, Winterdienst, Mülltonnenservice in Pirmasens" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fensterreinigung Pirmasens", description: "Streifenfreie Glas- und Fensterreinigung für Privat und Gewerbe" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppenhausreinigung Pirmasens", description: "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsflächen" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entrümpelung Pirmasens", description: "Wohnungsauflösung, Entrümpelung und fachgerechte Entsorgung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umzüge & Kleintransporte", description: "Umzugsservice und Kleintransporte in Pirmasens und Umgebung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dachrinnenreinigung", description: "Professionelle Reinigung von Dachrinnen" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grundreinigung", description: "Intensive Grundreinigung für stark verschmutzte Räumlichkeiten" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Büroreinigung Pirmasens", description: "Regelmäßige Reinigung von Büros und Gewerbeflächen" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winterdienst Pirmasens", description: "Schneeräumung und Streudienst für Privat und Gewerbe" } },
                ],
              },
            }),
          }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <style>{`[data-nextjs-scroll-focus-boundary] > a { display: none !important; }`}</style>
        {children}
      </body>
    </html>
  );
}
