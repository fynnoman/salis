import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.xn--salif-gebudeservice-owb.de/sitemap.xml",
    host: "https://www.xn--salif-gebudeservice-owb.de",
  };
}
