import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.salif-gebaeude.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gebäudereinigung Pirmasens | Salif Gebäudeservice – Haus und mehr GbR",
    template: "%s | Salif Gebäudeservice Pirmasens",
  },
  description:
    "Gebäudereinigung, Hausmeisterservice & Entrümpelung in Pirmasens. Professionell, zuverlässig, faire Preise. Jetzt kostenlos anfragen: 01522 904 3159.",
  keywords: [
    "Gebäudereinigung Pirmasens",
    "Hausmeisterservice Pirmasens",
    "Reinigungsfirma Pirmasens",
    "Fensterreinigung Pirmasens",
    "Treppenhausreinigung Pirmasens",
    "Entrümpelung Pirmasens",
    "Umzüge Pirmasens",
    "Gebäudeservice Pirmasens",
    "Unterhaltsreinigung Pirmasens",
    "Haus und mehr GbR",
    "Salif Gebäudeservice",
    "Reinigung Südwestpfalz",
    "Hausreinigung Zweibrücken",
    "Hausreinigung Kaiserslautern",
  ],
  authors: [{ name: "Salif Gebäudeservice – Haus und mehr GbR" }],
  creator: "Salif Gebäudeservice – Haus und mehr GbR",
  publisher: "Salif Gebäudeservice – Haus und mehr GbR",
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
    siteName: "Salif Gebäudeservice – Haus und mehr GbR",
    title: "Gebäudereinigung Pirmasens | Salif Gebäudeservice",
    description:
      "Professionelle Gebäudereinigung, Hausmeisterservice & Entrümpelung in Pirmasens. Faire Preise, persönliche Beratung. ☎ 01522 904 3159.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salif Gebäudeservice – Gebäudereinigung & Hausmeisterservice Pirmasens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Pirmasens | Salif Gebäudeservice",
    description:
      "Professionelle Gebäudereinigung & Hausmeisterservice in Pirmasens. Jetzt anfragen: 01522 904 3159.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                url: BASE_URL,
                name: "Salif Gebäudeservice – Haus und mehr GbR",
                description: "Professionelle Gebäudereinigung & Hausmeisterservice in Pirmasens",
                inLanguage: "de-DE",
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${BASE_URL}/?s={search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
                "@id": `${BASE_URL}/#localbusiness`,
                name: "Salif Gebäudeservice – Haus und mehr GbR",
                alternateName: "Salif Gebäudeservice",
                url: BASE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${BASE_URL}/51D6E89F-A80E-41DF-9C4F-68DD77279567.png`,
                  width: 512,
                  height: 512,
                },
                image: `${BASE_URL}/og-image.png`,
                description:
                  "Professionelle Gebäudereinigung, Hausmeisterservice, Fensterreinigung, Treppenhausreinigung, Umzüge und Entrümpelung in Pirmasens und Umgebung.",
                telephone: "+4915229043159",
                email: "salif-dienstleistungen@gmx.de",
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
                  { "@type": "AdministrativeArea", name: "Südwestpfalz" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Dienstleistungen",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gebäudereinigung", description: "Professionelle Unterhalts- und Grundreinigung für Gewerbe und Privat" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hausmeisterservice", description: "Kleinreparaturen, Grünpflege, Winterdienst, Mülltonnenservice" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fensterreinigung", description: "Streifenfreie Glas- und Fensterreinigung" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppenhausreinigung", description: "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsflächen" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entrümpelung", description: "Wohnungsauflösung, Entrümpelung und fachgerechte Entsorgung" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umzüge & Kleintransporte", description: "Umzugsservice und Kleintransporte in Pirmasens und Umgebung" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dachrinnenreinigung", description: "Professionelle Reinigung von Dachrinnen" } },
                  ],
                },
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Was kostet eine Gebäudereinigung in Pirmasens?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Der Stundensatz für Reinigungsarbeiten liegt bei ca. 28 € pro Stunde. Der genaue Preis hängt vom Umfang, der Häufigkeit und der Art des Auftrags ab. Für größere Objekte oder Daueraufträge erstellen wir ein individuelles Angebot.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "In welchen Städten ist Salif Gebäudeservice tätig?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Wir sind hauptsächlich in Pirmasens und der Region Südwestpfalz tätig, darunter Zweibrücken, Kaiserslautern, Landau und Umgebung.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Bietet Salif Gebäudeservice auch Hausmeisterservice an?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ja, wir bieten umfassenden Hausmeisterservice an: Kleinreparaturen, Grünpflege, Winterdienst, Mülltonnenservice und mehr – alles aus einer Hand.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Wie kann ich ein unverbindliches Angebot anfragen?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sie können uns jederzeit unter 01522 904 3159 anrufen, eine WhatsApp-Nachricht schreiben oder eine E-Mail an salif-dienstleistungen@gmx.de senden. Wir melden uns schnell zurück.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <style>{`[data-nextjs-scroll-focus-boundary] > a { display: none !important; }`}</style>
        {children}
      </body>
    </html>
  );
}
