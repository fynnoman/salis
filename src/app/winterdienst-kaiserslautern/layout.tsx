import type { Metadata } from "next";
import { buildSeoMeta } from "@/lib/landingData";

const meta = buildSeoMeta("winterdienst", "kaiserslautern");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: { canonical: meta.canonical },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: "Salif Gebäudeservice",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
