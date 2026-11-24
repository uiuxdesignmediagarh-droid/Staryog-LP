import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Invalid details" }, { status: 422 });
  }
  const lead = {
    name,
    email,
    phone,
    role: String(body.role ?? ""),
    source: String(body.source ?? ""),
    createdAt: new Date().toISOString(),
  };

  // 1) Optional webhook (Zapier / Make / Google Sheets / CRM)
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
    } catch (err) {
      console.error("Lead webhook failed", err);
    }
  }

  // 2) Local file for development (data/leads.jsonl, git-ignored)
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n");
  } catch (err) {
    console.error("Could not write lead file", err);
  }
  console.log("New lead:", lead);
  return NextResponse.json({ ok: true });
}
