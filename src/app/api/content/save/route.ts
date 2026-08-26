import { NextRequest, NextResponse } from "next/server";
import { saveContent, SiteContent } from "@/lib/content";

export async function POST(request: NextRequest) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD nicht konfiguriert." },
        { status: 503 }
      );
    }

    const { password, content } = await request.json();

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Falsches Passwort." },
        { status: 401 }
      );
    }

    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json(
        { error: "GITHUB_TOKEN nicht konfiguriert." },
        { status: 503 }
      );
    }

    await saveContent(content as SiteContent);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Save error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Fehler beim Speichern.",
      },
      { status: 500 }
    );
  }
}
