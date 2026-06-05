import type { MetadataRoute } from "next";
import { CITIES, SERVICES, type CityKey, type ServiceKey } from "@/lib/landingData";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

/**
 * Welche (Service × Stadt) Kombinationen wirklich existieren.
 * Muss synchron mit den vorhandenen App-Router-Ordnern bleiben.
 */
const LANDING_COMBINATIONS: Array<{ service: ServiceKey; city: CityKey }> = [
  // Pirmasens — vorhandene + neue Kategorien
  { service: "gebaeudereinigung", city: "pirmasens" },
  { service: "fensterreinigung", city: "pirmasens" },
  { service: "treppenhausreinigung", city: "pirmasens" },
  { service: "hausmeisterservice", city: "pirmasens" },
  { service: "entruempelung", city: "pirmasens" },
  { service: "wintergartenreinigung", city: "pirmasens" },
  { service: "unterhaltsreinigung", city: "pirmasens" },
  { service: "grundreinigung", city: "pirmasens" },
  { service: "bueroreinigung", city: "pirmasens" },
  { service: "dachrinnenreinigung", city: "pirmasens" },
  { service: "winterdienst", city: "pirmasens" },
  { service: "glasreinigung", city: "pirmasens" },

  // Kaiserslautern — komplett
  { service: "gebaeudereinigung", city: "kaiserslautern" },
  { service: "fensterreinigung", city: "kaiserslautern" },
  { service: "treppenhausreinigung", city: "kaiserslautern" },
  { service: "hausmeisterservice", city: "kaiserslautern" },
  { service: "entruempelung", city: "kaiserslautern" },
  { service: "wintergartenreinigung", city: "kaiserslautern" },
  { service: "unterhaltsreinigung", city: "kaiserslautern" },
  { service: "grundreinigung", city: "kaiserslautern" },
  { service: "bueroreinigung", city: "kaiserslautern" },
  { service: "dachrinnenreinigung", city: "kaiserslautern" },
  { service: "winterdienst", city: "kaiserslautern" },
  { service: "glasreinigung", city: "kaiserslautern" },

  // Zweibrücken
  { service: "gebaeudereinigung", city: "zweibruecken" },
  { service: "fensterreinigung", city: "zweibruecken" },
  { service: "hausmeisterservice", city: "zweibruecken" },
  { service: "unterhaltsreinigung", city: "zweibruecken" },

  // Landstuhl
  { service: "gebaeudereinigung", city: "landstuhl" },
  { service: "hausmeisterservice", city: "landstuhl" },
  { service: "fensterreinigung", city: "landstuhl" },

  // Homburg
  { service: "gebaeudereinigung", city: "homburg" },
  { service: "hausmeisterservice", city: "homburg" },
  { service: "fensterreinigung", city: "homburg" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/preise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/anfahrt`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE_URL}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  const landingUrls: MetadataRoute.Sitemap = LANDING_COMBINATIONS.map(
    ({ service, city }) => {
      const isPirmasens = city === "pirmasens";
      const isKaiserslautern = city === "kaiserslautern";
      return {
        url: `${BASE_URL}/${service}-${city}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        // höhere Priority für Hauptstädte
        priority: isPirmasens ? 0.9 : isKaiserslautern ? 0.9 : 0.75,
      };
    }
  );

  // Verhindere "unused import" Warnungen
  void SERVICES;
  void CITIES;

  return [...staticUrls, ...landingUrls];
}
