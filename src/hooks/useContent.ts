"use client";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content";
import { DEFAULT_CONTENT } from "@/lib/content";

export function useContent() {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  useEffect(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data: Partial<SiteContent>) =>
        setContent({
          hero: { ...DEFAULT_CONTENT.hero, ...data.hero },
          services: { ...DEFAULT_CONTENT.services, ...data.services },
          about: { ...DEFAULT_CONTENT.about, ...data.about },
          contact: { ...DEFAULT_CONTENT.contact, ...data.contact },
          seoBlock: { ...DEFAULT_CONTENT.seoBlock, ...data.seoBlock },
          footer: { ...DEFAULT_CONTENT.footer, ...data.footer },
        })
      )
      .catch(() => {});
  }, []);

  return content;
}
