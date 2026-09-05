import { NextResponse } from 'next/server';

type Entry = { section: string; label: string; value: string };

const ALLOWED_TYPES = new Set(['Enrolment application', 'Book a Visit', 'Contact enquiry']);
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestLog = new Map<string, number[]>();

const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]!));
const formatValue = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) ? value.split('-').reverse().join('-') : value;

function isRateLimited(request: Request) {
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const now = Date.now();
  const recent = (requestLog.get(clientIp) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) return true;
  recent.push(now);
  requestLog.set(clientIp, recent);
  return false;
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get('content-type')?.startsWith('application/json')) {
      return NextResponse.json({ error: 'Unsupported request type' }, { status: 415 });
    }
    const allowedOrigin = process.env.FORM_ALLOWED_ORIGIN;
    if (process.env.NODE_ENV === 'production' && (!allowedOrigin || request.headers.get('origin') !== allowedOrigin)) {
      return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 });
    }
    if (isRateLimited(request)) {
      return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
    }

    const body = await request.json() as { type?: string; campus?: string; entries?: Entry[]; website?: string };
    const campus = String(body.campus || '');
    const campusRecipients: Record<string, string | undefined> = {
      'Al Mouj': process.env.FORM_AL_MOUJ_RECIPIENT,
      'Al Qurum': process.env.FORM_AL_QURUM_RECIPIENT,
    };
    const recipient = campusRecipients[campus];
    const itRecipient = process.env.FORM_IT_RECIPIENT;
    const entries = Array.isArray(body.entries) ? body.entries.slice(0, 250) : [];
    if (body.website || !process.env.RESEND_API_KEY || !recipient || !itRecipient || !body.type || !ALLOWED_TYPES.has(body.type) || entries.length === 0 || entries.some((entry) => typeof entry.section !== 'string' || typeof entry.label !== 'string' || typeof entry.value !== 'string' || !entry.label || !entry.value || entry.section.length > 200 || entry.label.length > 500 || entry.value.length > 5000)) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    const sections = new Map<string, Entry[]>();
    for (const entry of entries) sections.set(entry.section, [...(sections.get(entry.section) || []), entry]);
    const html = [...sections.entries()].map(([section, values]) => `
      <h2>${escapeHtml(section)}</h2><ol>
      ${values.map(({ label, value }) => `<li><strong>${escapeHtml(label)}</strong><br>${escapeHtml(formatValue(value)).replace(/\n/g, '<br>')}</li>`).join('')}
      </ol>`).join('');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.FORM_FROM_EMAIL || 'Shomoukh Website <forms@shomoukh.com>',
        to: [recipient, itRecipient],
        subject: `${body.type} — ${campus}`,
        html: `<h1>New ${escapeHtml(body.type)}</h1><p>Campus: <strong>${escapeHtml(campus)}</strong></p>${html}`,
      }),
    });
    if (!response.ok) throw new Error(await response.text());
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Form email failed:', error);
    return NextResponse.json({ error: 'Unable to deliver submission' }, { status: 500 });
  }
}
