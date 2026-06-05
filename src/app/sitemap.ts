import type { MetadataRoute } from "next";
import { CITIES, SERVICES, type CityKey, type ServiceKey } from "@/lib/landingData";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

// Welche (Service × Stadt) Kombinationen tatsächlich als Route existieren.
// Muss synchron mit den App-Router-Ordnern bleiben.
const LANDING_COMBINATIONS: Array<{ service: ServiceKey; city: CityKey }> = [
  // Pirmasens (Heimatmarkt — alle 12)
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

  // Kaiserslautern (12)
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

/**
 * Hauptkategorien — höhere Priorität (Money-Pages)
 */
const PRIORITY_SERVICES: ServiceKey[] = [
  "gebaeudereinigung",
  "unterhaltsreinigung",
  "fensterreinigung",
  "hausmeisterservice",
  "entruempelung",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/preise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/anfahrt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  const landingUrls: MetadataRoute.Sitemap = LANDING_COMBINATIONS.map(
    ({ service, city }) => {
      const isMainCity = city === "pirmasens" || city === "kaiserslautern";
      const isPriorityService = PRIORITY_SERVICES.includes(service);

      // Priorität nach Stadt × Service-Stufe
      let priority = 0.7;
      if (isMainCity && isPriorityService) priority = 0.9;
      else if (isMainCity) priority = 0.85;
      else if (isPriorityService) priority = 0.75;

      return {
        url: `${BASE_URL}/${service}-${city}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
        // Image-Extension für Image-SEO
        images: [`${BASE_URL}/og-image.png`],
      };
    }
  );

  // Type-asserter — Imports werden indirekt genutzt
  void SERVICES;
  void CITIES;

  return [...staticUrls, ...landingUrls];
}
