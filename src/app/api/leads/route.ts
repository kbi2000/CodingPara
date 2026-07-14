import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  kind: z.enum(["contact", "audit"]),
  name: z.string().trim().min(2).max(80),
  email: z.string().email(),
  phone: z.string().trim().min(8).max(20),
  service: z.string().min(1).max(80),
  budget: z.string().max(50).optional(),
  timeline: z.string().max(50).optional(),
  message: z.string().trim().min(20).max(3000),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
  startedAt: z.number(),
});

const hits = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  const ipAddress =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = hits.get(ipAddress);

  if (entry && entry.reset > now && entry.count >= 5) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  hits.set(
    ipAddress,
    !entry || entry.reset <= now
      ? { count: 1, reset: now + 60_000 }
      : { ...entry, count: entry.count + 1 },
  );

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid submission",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (now - parsed.data.startedAt < 1500) {
    return NextResponse.json({ error: "Submission rejected" }, { status: 400 });
  }

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!endpoint || !secret) {
    console.error("Google Apps Script lead delivery is not configured");
    return NextResponse.json(
      { error: "Lead delivery is not configured" },
      { status: 503 },
    );
  }

  const payload = {
    secret,
    kind: parsed.data.kind,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    service: parsed.data.service,
    budget: parsed.data.budget ?? "",
    timeline: parsed.data.timeline ?? "",
    message: parsed.data.message,
    consent: parsed.data.consent,
    startedAt: parsed.data.startedAt,
    receivedAt: new Date(now).toISOString(),
    ipAddress,
    userAgent: request.headers.get("user-agent") ?? "unknown",
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    const result = (await response.json()) as { ok?: boolean; error?: string };
    if (!result.ok) throw new Error(result.error || "Unknown delivery error");
  } catch (error) {
    console.error("Lead delivery failed", error);
    return NextResponse.json(
      { error: "Lead delivery failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
