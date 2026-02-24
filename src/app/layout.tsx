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
    default: "Salif Gebäudeservice | Haus und mehr GbR – Reinigung & Hausmeister Pirmasens",
    template: "%s | Salif Gebäudeservice Pirmasens",
  },
  description:
    "Professionelle Gebäudereinigung, Hausmeisterservice, Fensterreinigung, Umzüge & Entrümpelung in Pirmasens und Umgebung. Jetzt unverbindlich anfragen: 01522 904 3159.",
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
    title: "Salif Gebäudeservice | Reinigung & Hausmeister in Pirmasens",
    description:
      "Ihr zuverlässiger Partner für Gebäudereinigung, Hausmeisterservice, Fensterreinigung und Entrümpelung in Pirmasens. Faire Preise, professionelle Arbeit.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Salif Gebäudeservice – Haus und mehr GbR Pirmasens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salif Gebäudeservice | Reinigung & Hausmeister Pirmasens",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": BASE_URL,
              name: "Salif Gebäudeservice – Haus und mehr GbR",
              alternateName: "Salif Gebäudeservice",
              url: BASE_URL,
              logo: `${BASE_URL}/51D6E89F-A80E-41DF-9C4F-68DD77279567.png`,
              image: `${BASE_URL}/56D96AC4-821E-4D77-BDC8-CFFC22BC6193.png`,
              description:
                "Professionelle Gebäudereinigung, Hausmeisterservice, Fensterreinigung, Treppenhausreinigung, Umzüge und Entrümpelung in Pirmasens und Umgebung.",
              telephone: "+4915229043159",
              email: "salif-dienstleistungen@gmx.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Emilienstraße 5a",
                addressLocality: "Pirmasens",
                postalCode: "66955",
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
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                  ],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Bank Transfer",
              areaServed: [
                { "@type": "City", name: "Pirmasens" },
                { "@type": "City", name: "Zweibrücken" },
                { "@type": "City", name: "Kaiserslautern" },
                { "@type": "AdministrativeArea", name: "Südwestpfalz" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dienstleistungen",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gebäudereinigung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hausmeisterservice" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fensterreinigung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppenhausreinigung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entrümpelung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umzüge" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dachrinnenreinigung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kleintransporte" } },
                ],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
