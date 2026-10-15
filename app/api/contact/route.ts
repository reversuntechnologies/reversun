import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "info@reversun.com";

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Contact delivery is not configured." },
      { status: 503 }
    );
  }

  const clientKey = getClientKey(request);
  const now = Date.now();
  const current = requestLog.get(clientKey);
  if (!current || current.resetAt <= now) {
    requestLog.set(clientKey, { count: 1, resetAt: now + WINDOW_MS });
  } else if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return NextResponse.json(
      { error: "Too many inquiries. Please try again later." },
      { status: 429 }
    );
  } else {
    current.count += 1;
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120) || "Not provided";
  const email = clean(payload.email, 254);
  const type = clean(payload.type, 30);
  const inquiryArea = clean(payload.inquiryArea, 120);
  const message = clean(payload.message, 4000) || "No additional message provided.";

  if (!isValidEmail(email) || !type || !inquiryArea) {
    return NextResponse.json(
      { error: "Please provide a valid email and inquiry selection." },
      { status: 400 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Reversun Inquiry [${type.toUpperCase()}: ${inquiryArea}]`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type: ${type}`,
        `Inquiry area: ${inquiryArea}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "The inquiry could not be delivered. Please try again or email info@reversun.com directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
