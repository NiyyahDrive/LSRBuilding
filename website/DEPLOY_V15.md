# LSR Building · deployment guide V1.5

Deze guide dekt beide scenario's: **klant-preview op GitHub Pages** en **productie op je eigen webserver / domein** (bijv. lsrbuilding.be).

---

## 1. Wat is er veranderd in V1.5

- Nieuwe brand-palette: warm off-white `#F7F7F5`, ink-black `#1A1A18`, accent logo-blue `#1E6091`.
- Twee fonts via `next/font`: **Fraunces** (serif display) + **Inter** (body).
- Nieuwe hero (editorial 8/4-grid met stat-stack).
- Nieuwe projects-sectie (editorial list met hover-accent).
- Navbar met logo-SVG, backdrop-blur bij scroll, underline-animatie op links.
- Footer met logo, accent-hover, geen dode links meer.
- Contact-sectie dark (ink-900), default tab = "Snel contact" om drempel te verlagen.
- Metadata compleet: Open Graph, keywords incl. Brecht/Antwerpen, icons.
- `package.json` hernoemd van `alrubaei-werken` naar `lsr-building`.
- `companyData`: duplicaat Esso-project gedifferentieerd, `EHBO-attest`.
- `globals.css`: font-bug gefixt, volledige `@theme inline` palette.

Logo-bestanden: `public/logo.svg` (icon) en `public/logo-full.svg` (icon + wordmark).

**Let op:** de logo-SVG is een vector-reconstructie gebaseerd op je geleverde PNG. Als je wilt dat de originele PNG wordt gebruikt, vervang dan `public/logo.svg` door de originele en pas de Navbar/Footer `<Image>` src-waarden aan.

---

## 2. Lokaal draaien

```bash
cd website
npm install
npm run dev        # http://localhost:3000
```

## 3. Klant-preview op GitHub Pages

Dit blijft werken zoals voorheen — URL blijft `https://niyyahdrive.github.io/LSRBuilding/`.

```bash
cd website
npm run build:ghpages   # bouwt met basePath=/LSRBuilding naar out/
npm run deploy:ghpages  # pusht out/ naar gh-pages branch
```

Of laat je GitHub Action het doen — push naar `main` en de bestaande workflow in `.github/` handelt het af (aangenomen dat die bestaat).

## 4. Productie — push naar eigen webserver

**Stap 1 — build zonder basePath:**

```bash
cd website
npm run build:prod
```

Dit produceert een volledig statische site in `out/` zonder `/LSRBuilding/`-prefix. Klaar voor deploy op root van je domein.

**Stap 2 — upload naar webserver.**

```bash
# voorbeeld: rsync naar een Linux-host
rsync -avz --delete out/ user@server:/var/www/lsrbuilding.be/

# of FTP:
# upload alles uit out/ naar public_html/ (of de document root van je host)
```

Voor Apache — zet in `.htaccess`:

```apache
# cleane URLs + index-fallback
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

Voor nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Stap 3 — HTTPS.** Gebruik Let's Encrypt (`certbot`) als je host dat niet automatisch regelt.

---

## 5. ⚠️ Belangrijk: het contact-formulier

De huidige setup gebruikt `output: "export"` (statische site). **Statische hosts ondersteunen geen API-routes.** Dat betekent: de POST naar `/api/send-mail` werkt **niet** op GitHub Pages of op een gewone webserver.

Kies één van deze drie opties:

**Optie A — Formspree / Web3Forms (aanbevolen, geen backend nodig).**
- Maak een account aan op formspree.io of web3forms.com.
- Vervang in `ContactSection.tsx` de POST-URL door je Formspree endpoint.
- Geen server-wijziging nodig, werkt op elke statische host.

**Optie B — Deploy naar Vercel / Netlify.**
- Verwijder `output: "export"` in `next.config.ts`.
- Deploy rechtstreeks vanuit GitHub naar Vercel — de API-route werkt out-of-the-box.
- Nodemailer credentials komen in Vercel env vars (`EMAIL_USER`, `EMAIL_PASSWORD`).

**Optie C — eigen Node-server.**
- Alleen als je al een VPS draait; kost extra onderhoud.

**Advies:** optie A voor nu (klant-preview + eerste productie-lancering), optie B als je later analytics/ISR/andere server-features wilt.

---

## 6. Checklist vóór client-review

- [ ] `npm run build:ghpages` draait zonder errors
- [ ] `out/index.html` bevat nieuw logo, Fraunces-headlines, italic accent
- [ ] Push `main` naar GitHub
- [ ] Preview-URL checken op desktop + mobiel
- [ ] Hover-interacties werken (CTA-knop wordt blauw, arrow schuift, underlines rollen uit)
- [ ] Contact-form test: verwacht dat POST faalt op GitHub Pages — **dit fix je vóór productie** via punt 5
- [ ] Tel. nummer `+32 492 123 811` laten verifiëren door Mustafa (mogelijk placeholder)

---

## 7. Bekende todo's voor V2

Niet in V1.5 opgenomen, maar klaar om later te doen:
- Privacy & AV pagina's (nu verwijderd uit footer — geen dode links meer)
- Case studies met metriek (€ bespaard, tijd bespaard)
- Open Graph image (nu wijst naar logo-full.svg — echte social-kaart is mooier)
- Robots.txt + sitemap.xml
- Google Analytics / Plausible
