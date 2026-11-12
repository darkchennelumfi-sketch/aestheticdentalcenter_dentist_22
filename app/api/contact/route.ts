import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(24)
    .regex(/^[0-9()#&+*\-=.\s]+$/),
  message: z.string().trim().min(10).max(2000),
});

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimit = new Map<string, RateLimitEntry>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function getClientKey(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);

  if (!current || current.resetAt < now) {
    rateLimit.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  const key = getClientKey(request);

  if (isRateLimited(key)) {
    return NextResponse.json(
      { error: "Too many requests. Please call our office instead." },
      { status: 429 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the form and try again." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "aestheticdentalbismarck.com",
          submittedAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (!response.ok) {
        throw new Error("Webhook rejected the submission.");
      }
    } catch {
      return NextResponse.json(
        {
          error:
            "Your message could not be delivered. Please call 701-214-5552.",
        },
        { status: 502 },
      );
    }
  } else {
    // Without a configured webhook, accept the submission so the preview form
    // remains fully usable. Delivery can be enabled with CONTACT_WEBHOOK_URL.
    console.info("[contact] Submission received (no webhook configured).");
  }

  return NextResponse.json({ ok: true });
}
