import Link from 'next/link';

const stats = [
  { num: '10+',     label: 'jaar ervaring in België & Palestina' },
  { num: 'VOL VCA', label: 'gecertificeerd veiligheidssupervisor' },
  { num: '2×',      label: 'bachelor — civiele techniek & bedrijfskunde' },
  { num: '3',       label: 'referenties: Dethier · Verwater · Van Laere' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-ink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-28 md:pt-32 md:pb-40 lg:pt-44 lg:pb-56">
        <div className="grid grid-cols-12 gap-8 items-end">
          {/* Copy */}
          <div className="col-span-12 lg:col-span-8">
            <p className="text-xs font-medium uppercase text-ink-600 mb-10 flex items-center" style={{ letterSpacing: '0.22em' }}>
              <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
              LSR Building — Brecht / Antwerpen
            </p>

            <h1
              className="font-display font-light text-ink-900 text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-10"
              style={{ letterSpacing: '-0.04em' }}
            >
              Uw bouwproject.
              <br />
              <span className="italic text-accent font-light">Onze regie.</span>
            </h1>

            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mb-14 font-normal">
              Projectcoördinatie waar civiele techniek en bedrijfskunde samenkomen.
              Gebouwd op tien jaar ervaring, geleid door civiel ingenieur
              Mustafa Alrubaei.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink-900 text-ink-50 px-7 py-4 text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-500"
              >
                <span>Offerte aanvragen</span>
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#diensten"
                className="group relative pb-1 text-sm font-medium text-ink-900"
              >
                <span>Onze diensten bekijken</span>
                <span className="absolute left-0 bottom-0 h-px w-full bg-ink-900" />
                <span className="absolute left-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Trust stack */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-12 lg:border-l lg:border-ink-100">
            <ul className="space-y-8">
              {stats.map((s) => (
                <li key={s.num}>
                  <div
                    className="font-display text-4xl text-ink-900 font-light leading-none mb-1"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm text-ink-600 leading-snug">{s.label}</div>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Brand signature */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-ink-100 flex flex-wrap justify-between items-center gap-4 text-xs text-ink-600">
          <span className="uppercase" style={{ letterSpacing: '0.22em' }}>
            Civiele techniek · Renovatie · Projectcoördinatie
          </span>
          <span>VOL VCA · actief in Vlaanderen</span>
        </div>
      </div>
    </section>
  );
}
