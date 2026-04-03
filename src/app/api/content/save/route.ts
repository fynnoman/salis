import { NextRequest, NextResponse } from "next/server";
import { saveContent, SiteContent } from "@/lib/content";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "default-password";

export async function POST(request: NextRequest) {
  try {
    const { password, content } = await request.json();

    if (password !== ADMIN_PASSWORD) {
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
