import { NextResponse } from 'next/server';

/**
 * DEPRECATED — niet meer in gebruik vanaf V1.5.
 *
 * Het contactformulier verstuurt nu rechtstreeks naar een externe
 * form-service (default: FormSubmit.co) via de client-side fetch.
 * Dit werkt op statische hosts (GitHub Pages, Apache, nginx) waar
 * Next.js API-routes niet beschikbaar zijn.
 *
 * Deze endpoint geeft 410 Gone terug voor oude clients.
 * Als je later deployt naar Vercel/Netlify kun je hier de oude
 * nodemailer-logica terugzetten.
 */
export async function POST() {
  return NextResponse.json(
    { error: 'Endpoint verplaatst. Gebruik het contactformulier op de site.' },
    { status: 410 }
  );
}
