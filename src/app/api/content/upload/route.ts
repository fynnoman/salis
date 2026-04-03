import { NextRequest, NextResponse } from "next/server";

const GITHUB_OWNER = "fynnoman";
const GITHUB_REPO = "salis";
const BRANCH = "main";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "default-password";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const password = formData.get("password") as string;
    const file = formData.get("file") as File;
    const filename = formData.get("filename") as string;

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json({ error: "GITHUB_TOKEN nicht konfiguriert." }, { status: 503 });
    }

    if (!file || !filename) {
      return NextResponse.json({ error: "Datei oder Dateiname fehlt." }, { status: 400 });
    }

    // Dateiname bereinigen
    const safeName = filename
      .replace(/[^a-zA-Z0-9._-]/g, "-")
      .toLowerCase();
    const filePath = `public/uploads/${safeName}`;

    // Datei als Base64 konvertieren
    const arrayBuffer = await file.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    // Prüfen ob Datei schon existiert (SHA für Update)
    const getRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${BRANCH}`,
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

    // Datei hochladen / überschreiben
    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `upload: ${safeName} via admin editor`,
          content: base64,
          sha,
          branch: BRANCH,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.json().catch(() => ({}));
      throw new Error(`GitHub API Fehler: ${err.message || putRes.statusText}`);
    }

    // Pfad zurückgeben (relativ zu public/)
    return NextResponse.json({ path: `/uploads/${safeName}` });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Fehler beim Hochladen." },
      { status: 500 }
    );
  }
}
