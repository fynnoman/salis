import contentJson from "../../content.json";

const GITHUB_OWNER = "fynnoman";
const GITHUB_REPO = "salis";
const CONTENT_PATH = "content.json";
const BRANCH = "main";

// ─── TypeScript Interfaces ──────────────────────────────────────────

export interface HeroContent {
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  srText: string;
  backgroundImage: string;
}

export interface ServicesContent {
  label: string;
  title: string;
  items: string[];
  highlightTitle: string;
  highlightText: string;
  backgroundImage: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  label: string;
  title: string;
  titleHighlight: string;
  logoImage: string;
  text1: string;
  text2: string;
  keyPoints: string[];
  stats: AboutStat[];
}

export interface ContactContent {
  label: string;
  title: string;
  subtitle: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  hours: string;
  whatsappText: string;
}

export interface SeoBlockContent {
  title: string;
  paragraphs: string[];
  ctaText: string;
}

export interface FooterContent {
  tagline: string;
  phone: string;
  email: string;
  address: string;
}

export interface SiteContent {
  hero: HeroContent;
  services: ServicesContent;
  about: AboutContent;
  contact: ContactContent;
  seoBlock: SeoBlockContent;
  footer: FooterContent;
}

// ─── Defaults (Fallback) ────────────────────────────────────────────

export const DEFAULT_CONTENT: SiteContent = contentJson as SiteContent;

// ─── Lesen (kostenlos, direkt aus Datei beim Build) ─────────────────

export function getContent(): SiteContent {
  const data = contentJson as Partial<SiteContent>;
  return {
    hero: { ...DEFAULT_CONTENT.hero, ...data.hero },
    services: { ...DEFAULT_CONTENT.services, ...data.services },
    about: { ...DEFAULT_CONTENT.about, ...data.about },
    contact: { ...DEFAULT_CONTENT.contact, ...data.contact },
    seoBlock: { ...DEFAULT_CONTENT.seoBlock, ...data.seoBlock },
    footer: { ...DEFAULT_CONTENT.footer, ...data.footer },
  };
}

// ─── Schreiben (GitHub API → Commit → Vercel Redeploy) ──────────────

export async function saveContent(content: SiteContent): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN nicht konfiguriert.");

  // 1. Aktuelle Datei-Info holen (SHA wird für Update benötigt)
  const getRes = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_PATH}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  let sha: string | undefined;
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  }

  // 2. Datei updaten (= neuer Commit ins Repo)
  const putRes = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${CONTENT_PATH}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "update: website content via admin editor",
        content: Buffer.from(JSON.stringify(content, null, 2)).toString(
          "base64"
        ),
        sha,
        branch: BRANCH,
      }),
    }
  );

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({}));
    throw new Error(
      `GitHub API Fehler: ${err.message || putRes.statusText}`
    );
  }
}
