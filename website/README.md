# Alrubaei Werken - Professionele Werfleiding Website

Moderne, responsieve bedrijfswebsite voor Mustafa Alrubaei's werfleiding- en civiele engineeringservices.

## 🌟 Functies

- **Modern Design**: Schoon, minimalistische UI met professionele layout
- **Responsief**: Perfect op desktop, tablet en mobiel apparaten
- **Optimized Performance**: Gebouwd met Next.js 16 en Turbopack
- **SEO Ready**: Meta tags, structured data en performance optimized
- **Contact Formulier**: Volledig werkend contactformulier
- **Smooth Scrolling**: Mooie navigatie met smooth scroll effecten
- **Tailwind CSS**: Moderne, utility-first styling

## 🚀 Secties

1. **Hero Section** - Professionele introductie met statistieken
2. **Services** - 6 kernservices van het bedrijf
3. **Projecten** - Timeline van afgeronde projecten
4. **Ervaring** - Opleiding, talen en vaardigheden
5. **Contact** - Contactgegevens en contactformulier

## 🛠️ Technologie Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist (Google Fonts)
- **Package Manager**: npm

## 📦 Installatie

```bash
# Clone of download het project
cd website

# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📝 Beschikbare Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Projectstructuur

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout met Navbar & Footer
│   │   ├── page.tsx        # Homepage met alle secties
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer component
│   │   ├── HeroSection.tsx # Hero/landing section
│   │   ├── ServicesSection.tsx    # Services showcase
│   │   ├── ProjectsSection.tsx    # Project timeline
│   │   ├── ExperienceSection.tsx  # Experience & skills
│   │   └── ContactSection.tsx     # Contact form
│   └── data/
│       └── companyData.ts  # Bedrijfsgegevens & content
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Bedrijfsgegevens aanpassen
Wijzig `/src/data/companyData.ts`:
```typescript
export const companyData = {
  owner: {
    name: "Jouw Naam",
    title: "Jouw Titel",
    email: "email@example.com",
    // ...meer velden
  },
  // ...services, projects, etc.
}
```

### Kleuren aanpassen
Wijzig de Tailwind CSS klassen in de componenten. Standaard wordt blauw (#2563eb) gebruikt.

### Content toevoegen
- Services: Voeg items toe in `companyData.ts` → `services` array
- Projects: Voeg projecten toe in `projects` array
- Skills: Voeg vaardigheden toe in `skills` array

## 🚀 Deployment

### Vercel (Aanbevolen)
```bash
# Push naar GitHub
git push origin main

# Verbind op Vercel.com en deploy automatisch
```

### Andere hosting
```bash
npm run build
# Upload de `.next` folder en `public` naar je hosting
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Licentie

© 2024 Alrubaei Werken. Alle rechten voorbehouden.

## 👨‍💼 Contact

**Mustafa Alrubaei**
- 📧 mustafaalrobaei@gmail.com
- 📞 +32 473 258 539
- 📍 Ostaeyenlaan 5 bus 101, 2960 Brecht, België

---

**Gemaakt met ❤️ voor professionele werfleiding services**
