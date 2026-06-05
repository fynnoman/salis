import type { MetadataRoute } from "next";

const BASE_URL = "https://www.salif-gebaeudeservice.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Generic — alles erlauben außer interne Bereiche
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/uploads/"],
      },
      // Googlebot — explizit erlauben
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/uploads/"],
      },
      // Google Image-Bot — Bilder dürfen indexiert werden
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Bing
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/uploads/"],
      },
      // AI-Crawler — explizit erlaubt für AI-Sichtbarkeit
      // (ChatGPT, Claude, Perplexity, Gemini, etc.)
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Claude-Web", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Applebot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "FacebookExternalHit", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Twitterbot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "LinkedInBot", allow: "/", disallow: ["/api/", "/admin/"] },
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`],
    host: BASE_URL,
  };
}
