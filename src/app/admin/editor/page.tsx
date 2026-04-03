"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Save,
  LogIn,
  LogOut,
  Eye,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  GripVertical,
  Check,
  AlertCircle,
  Loader2,
  Shield,
} from "lucide-react";
import type { SiteContent, AboutStat } from "@/lib/content";
import { DEFAULT_CONTENT } from "@/lib/content";

/* ─── Section Accordion ─────────────────────────────────────────────── */

function Section({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-lg font-bold text-[#1a3a5c]">{title}</h2>
        </div>
        {open ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {open && <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-5">{children}</div>}
    </div>
  );
}

/* ─── Field Components ───────────────────────────────────────────────── */

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1.5">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm resize-y"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm"
        />
      )}
    </div>
  );
}

function ListField({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-2">{label}</label>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <GripVertical className="w-4 h-4 text-gray-300 flex-shrink-0" />
            <input
              type="text"
              value={item}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
              placeholder={placeholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm"
            />
            <button
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => onChange([...items, ""])}
        className="mt-2 flex items-center gap-1.5 text-sm text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors"
      >
        <Plus className="w-4 h-4" />
        Eintrag hinzufügen
      </button>
    </div>
  );
}

/* ─── Main Editor Page ───────────────────────────────────────────────── */

export default function AdminEditorPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [original, setOriginal] = useState<string>("");
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const hasChanges = JSON.stringify(content) !== original;

  // Helper: section updater
  const set = useCallback(
    <K extends keyof SiteContent>(section: K, value: SiteContent[K]) =>
      setContent((prev) => ({ ...prev, [section]: value })),
    []
  );

  // Load content
  const loadContent = useCallback(() => {
    fetch("/api/content")
      .then((r) => r.json())
      .then((data: SiteContent) => {
        const merged: SiteContent = {
          hero: { ...DEFAULT_CONTENT.hero, ...data.hero },
          services: { ...DEFAULT_CONTENT.services, ...data.services },
          about: { ...DEFAULT_CONTENT.about, ...data.about },
          contact: { ...DEFAULT_CONTENT.contact, ...data.contact },
          seoBlock: { ...DEFAULT_CONTENT.seoBlock, ...data.seoBlock },
          footer: { ...DEFAULT_CONTENT.footer, ...data.footer },
        };
        setContent(merged);
        setOriginal(JSON.stringify(merged));
      })
      .catch(() => {});
  }, []);

  // Auto-login from session
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) {
      setPassword(saved);
      setLoggedIn(true);
      loadContent();
    }
  }, [loadContent]);

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(false);

    const res = await fetch("/api/content/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, content: DEFAULT_CONTENT }),
    });

    if (res.status === 401) {
      setLoginError(true);
      return;
    }

    // Password correct (even if save had other issues, auth passed)
    setLoggedIn(true);
    sessionStorage.setItem("admin_pw", password);
    loadContent();
  };

  // Save handler
  const save = async () => {
    setSaveState("saving");
    try {
      const res = await fetch("/api/content/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, content }),
      });
      if (res.ok) {
        setSaveState("saved");
        setOriginal(JSON.stringify(content));
        setTimeout(() => setSaveState("idle"), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setSaveState("error");
        alert(`Fehler: ${data.error || res.statusText}`);
        setTimeout(() => setSaveState("idle"), 3000);
      }
    } catch {
      setSaveState("error");
      alert("Netzwerkfehler.");
      setTimeout(() => setSaveState("idle"), 3000);
    }
  };

  // Logout
  const logout = () => {
    setLoggedIn(false);
    setPassword("");
    sessionStorage.removeItem("admin_pw");
  };

  /* ─── LOGIN SCREEN ─────────────────────────────────────────────────── */

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f2440] via-[#1a3a5c] to-[#0f2440] flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#22c55e] to-emerald-400 rounded-2xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a3a5c]">Admin Editor</h1>
              <p className="text-xs text-gray-400">Salif Gebäudeservice</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1.5">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError(false);
                }}
                placeholder="Admin-Passwort eingeben"
                className={`w-full px-4 py-3 rounded-xl border ${
                  loginError ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
                } focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800`}
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  Falsches Passwort
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#1a3a5c] hover:bg-[#0f2440] transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Anmelden
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ─── EDITOR ───────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#22c55e] to-emerald-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#1a3a5c]">Admin Editor</h1>
              <p className="text-[10px] text-gray-400">Salif Gebäudeservice</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {hasChanges && (
              <span className="text-xs text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full font-medium">
                Ungespeicherte Änderungen
              </span>
            )}

            <a
              href="/"
              target="_blank"
              className="p-2 text-gray-400 hover:text-[#1a3a5c] hover:bg-gray-100 rounded-lg transition-colors"
              title="Website ansehen"
            >
              <Eye className="w-4 h-4" />
            </a>

            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="Abmelden"
            >
              <LogOut className="w-4 h-4" />
            </button>

            <button
              onClick={save}
              disabled={saveState === "saving" || !hasChanges}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                saveState === "saved"
                  ? "bg-[#22c55e] text-white"
                  : saveState === "error"
                  ? "bg-red-500 text-white"
                  : hasChanges
                  ? "bg-[#1a3a5c] text-white hover:bg-[#0f2440]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {saveState === "saving" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Speichert…
                </>
              ) : saveState === "saved" ? (
                <>
                  <Check className="w-4 h-4" />
                  Gespeichert!
                </>
              ) : saveState === "error" ? (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Fehler
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Speichern & Veröffentlichen
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Editor Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-4">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-700">
            <strong>Hinweis:</strong> Nach dem Speichern wird die Website automatisch neu gebaut.
            Änderungen sind nach ca. 1–2 Minuten live sichtbar.
          </div>
        </div>

        {/* ── Hero Section ──────────────────────────────────────────────── */}
        <Section title="Hero / Startbereich" icon="🏠" defaultOpen>
          <Field
            label="Titel Zeile 1"
            value={content.hero.title1}
            onChange={(v) => set("hero", { ...content.hero, title1: v })}
          />
          <Field
            label="Titel Zeile 2 (grün)"
            value={content.hero.title2}
            onChange={(v) => set("hero", { ...content.hero, title2: v })}
          />
          <Field
            label="Titel Zeile 3"
            value={content.hero.title3}
            onChange={(v) => set("hero", { ...content.hero, title3: v })}
          />
          <Field
            label="Untertitel"
            value={content.hero.subtitle}
            onChange={(v) => set("hero", { ...content.hero, subtitle: v })}
            multiline
          />
          <Field
            label="SEO Screenreader-Text"
            value={content.hero.srText}
            onChange={(v) => set("hero", { ...content.hero, srText: v })}
            multiline
          />
        </Section>

        {/* ── Services Section ──────────────────────────────────────────── */}
        <Section title="Leistungen" icon="✅">
          <Field
            label="Überschrift-Label"
            value={content.services.label}
            onChange={(v) => set("services", { ...content.services, label: v })}
          />
          <Field
            label="Überschrift"
            value={content.services.title}
            onChange={(v) => set("services", { ...content.services, title: v })}
          />
          <ListField
            label="Leistungsliste"
            items={content.services.items}
            onChange={(items) => set("services", { ...content.services, items })}
            placeholder="z.B. Fensterreinigung"
          />
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">Highlight-Box</p>
            <Field
              label="Titel"
              value={content.services.highlightTitle}
              onChange={(v) => set("services", { ...content.services, highlightTitle: v })}
            />
            <Field
              label="Beschreibung"
              value={content.services.highlightText}
              onChange={(v) => set("services", { ...content.services, highlightText: v })}
              multiline
            />
          </div>
        </Section>

        {/* ── About Section ─────────────────────────────────────────────── */}
        <Section title="Über uns" icon="ℹ️">
          <Field
            label="Label"
            value={content.about.label}
            onChange={(v) => set("about", { ...content.about, label: v })}
          />
          <Field
            label="Überschrift"
            value={content.about.title}
            onChange={(v) => set("about", { ...content.about, title: v })}
          />
          <Field
            label="Highlight-Wort (grün)"
            value={content.about.titleHighlight}
            onChange={(v) => set("about", { ...content.about, titleHighlight: v })}
          />
          <Field
            label="Absatz 1"
            value={content.about.text1}
            onChange={(v) => set("about", { ...content.about, text1: v })}
            multiline
          />
          <Field
            label="Absatz 2"
            value={content.about.text2}
            onChange={(v) => set("about", { ...content.about, text2: v })}
            multiline
          />
          <ListField
            label="Key Points (Vorteile)"
            items={content.about.keyPoints}
            onChange={(keyPoints) => set("about", { ...content.about, keyPoints })}
            placeholder="z.B. Faire Preise"
          />

          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-3">Statistiken</p>
            <div className="space-y-3">
              {content.about.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const stats = [...content.about.stats];
                      stats[i] = { ...stat, value: e.target.value };
                      set("about", { ...content.about, stats });
                    }}
                    placeholder="Wert"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const stats = [...content.about.stats];
                      stats[i] = { ...stat, label: e.target.value };
                      set("about", { ...content.about, stats });
                    }}
                    placeholder="Label"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm"
                  />
                  <button
                    onClick={() => {
                      const stats = content.about.stats.filter((_, j) => j !== i);
                      set("about", { ...content.about, stats });
                    }}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const newStat: AboutStat = { value: "", label: "" };
                set("about", { ...content.about, stats: [...content.about.stats, newStat] });
              }}
              className="mt-2 flex items-center gap-1.5 text-sm text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Statistik hinzufügen
            </button>
          </div>
        </Section>

        {/* ── Contact Section ───────────────────────────────────────────── */}
        <Section title="Kontakt" icon="📞">
          <Field
            label="Label"
            value={content.contact.label}
            onChange={(v) => set("contact", { ...content.contact, label: v })}
          />
          <Field
            label="Überschrift"
            value={content.contact.title}
            onChange={(v) => set("contact", { ...content.contact, title: v })}
          />
          <Field
            label="Untertitel"
            value={content.contact.subtitle}
            onChange={(v) => set("contact", { ...content.contact, subtitle: v })}
            multiline
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Telefonnummer (Anzeige)"
              value={content.contact.phone}
              onChange={(v) => set("contact", { ...content.contact, phone: v })}
            />
            <Field
              label="Telefonnummer (Link, ohne Leerzeichen)"
              value={content.contact.phoneRaw}
              onChange={(v) => set("contact", { ...content.contact, phoneRaw: v })}
            />
          </div>
          <Field
            label="E-Mail"
            value={content.contact.email}
            onChange={(v) => set("contact", { ...content.contact, email: v })}
          />
          <Field
            label="Adresse"
            value={content.contact.address}
            onChange={(v) => set("contact", { ...content.contact, address: v })}
          />
          <Field
            label="Öffnungszeiten"
            value={content.contact.hours}
            onChange={(v) => set("contact", { ...content.contact, hours: v })}
          />
          <Field
            label="WhatsApp Button-Text"
            value={content.contact.whatsappText}
            onChange={(v) => set("contact", { ...content.contact, whatsappText: v })}
          />
        </Section>

        {/* ── SEO Textblock ─────────────────────────────────────────────── */}
        <Section title="SEO Textblock (Startseite)" icon="🔍">
          <Field
            label="Überschrift"
            value={content.seoBlock.title}
            onChange={(v) => set("seoBlock", { ...content.seoBlock, title: v })}
          />
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Absätze (HTML erlaubt für &lt;strong&gt;)</label>
            {content.seoBlock.paragraphs.map((p, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <span className="text-xs text-gray-400 mt-3 w-4 text-center flex-shrink-0">{i + 1}</span>
                <textarea
                  value={p}
                  onChange={(e) => {
                    const paragraphs = [...content.seoBlock.paragraphs];
                    paragraphs[i] = e.target.value;
                    set("seoBlock", { ...content.seoBlock, paragraphs });
                  }}
                  rows={3}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-gray-800 text-sm resize-y"
                />
                <button
                  onClick={() => {
                    const paragraphs = content.seoBlock.paragraphs.filter((_, j) => j !== i);
                    set("seoBlock", { ...content.seoBlock, paragraphs });
                  }}
                  className="p-2 mt-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                set("seoBlock", {
                  ...content.seoBlock,
                  paragraphs: [...content.seoBlock.paragraphs, ""],
                })
              }
              className="mt-1 flex items-center gap-1.5 text-sm text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Absatz hinzufügen
            </button>
          </div>
          <Field
            label="CTA-Text"
            value={content.seoBlock.ctaText}
            onChange={(v) => set("seoBlock", { ...content.seoBlock, ctaText: v })}
          />
        </Section>

        {/* ── Footer Section ────────────────────────────────────────────── */}
        <Section title="Footer" icon="📋">
          <Field
            label="Tagline / Beschreibung"
            value={content.footer.tagline}
            onChange={(v) => set("footer", { ...content.footer, tagline: v })}
            multiline
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Telefon"
              value={content.footer.phone}
              onChange={(v) => set("footer", { ...content.footer, phone: v })}
            />
            <Field
              label="E-Mail"
              value={content.footer.email}
              onChange={(v) => set("footer", { ...content.footer, email: v })}
            />
          </div>
          <Field
            label="Adresse"
            value={content.footer.address}
            onChange={(v) => set("footer", { ...content.footer, address: v })}
          />
        </Section>

        {/* Bottom spacer */}
        <div className="h-8" />
      </main>
    </div>
  );
}
