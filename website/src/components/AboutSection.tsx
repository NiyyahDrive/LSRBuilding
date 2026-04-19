import { companyData } from '@/data/companyData';

export default function AboutSection() {
  const { credentials } = companyData;

  return (
    <section id="over-ons" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Story */}
          <div className="lg:col-span-7">
            <p
              className="text-xs font-medium uppercase text-ink-600 mb-6 flex items-center"
              style={{ letterSpacing: '0.22em' }}
            >
              <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
              Over LSR Building
            </p>
            <h2
              className="font-display font-light text-ink-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-10"
              style={{ letterSpacing: '-0.04em' }}
            >
              De brug tussen techniek<br />
              <span className="italic text-accent font-light">en organisatie.</span>
            </h2>
            <div className="space-y-6 text-ink-600 leading-relaxed text-lg max-w-2xl">
              <p>
                Bouw gaat zelden fout in het beton. Het gaat fout in de planning,
                de veiligheid en de communicatie tussen aannemers. LSR Building is
                opgericht vanuit die overtuiging — onder leiding van{' '}
                <strong className="text-ink-900 font-medium">Mustafa Alrubaei</strong>,
                civiel ingenieur én bedrijfskundige.
              </p>
              <p>
                Die dubbele opleiding — <strong className="text-ink-900 font-medium">Civiele Techniek</strong>{' '}
                én <strong className="text-ink-900 font-medium">Bedrijfskunde</strong> — betekent in de
                praktijk dat we niet alleen begrijpen hóé er gebouwd moet worden,
                maar ook hoe het financieel en organisatorisch klopt.
              </p>
              <p>
                Als werfleider bij Dethier, Verwater en Van Laere bouwden we
                diepgaande kennis op van industriële sites, residentiële projecten
                en civiele werken — en de hoge standaarden die daarmee samenhangen.
              </p>
            </div>

            {/* Reference companies */}
            <div className="mt-12">
              <p
                className="text-xs font-medium uppercase text-ink-600 mb-4"
                style={{ letterSpacing: '0.22em' }}
              >
                Ervaring opgedaan bij
              </p>
              <div className="flex flex-wrap gap-3">
                {['Dethier', 'Verwater', 'Van Laere'].map((co) => (
                  <span
                    key={co}
                    className="px-5 py-2 border border-ink-200 text-ink-900 text-sm font-medium bg-ink-50"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Credentials */}
          <aside className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-ink-100">
            <p
              className="text-xs font-medium uppercase text-ink-600 mb-6"
              style={{ letterSpacing: '0.22em' }}
            >
              Certificaten &amp; expertise
            </p>
            <ul className="space-y-5">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-ink-100 pb-5">
                  <div className="w-5 h-5 border border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-ink-900 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* The golden combination callout */}
            <div className="mt-10 p-6 bg-ink-900 text-ink-50">
              <p
                className="text-[10px] font-medium uppercase text-accent mb-3"
                style={{ letterSpacing: '0.22em' }}
              >
                De gouden combinatie
              </p>
              <p
                className="font-display font-light text-2xl leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Civiele techniek <span className="italic">×</span> bedrijfskunde.
              </p>
              <p className="text-ink-300 text-sm mt-4 leading-relaxed">
                Wij spreken de taal van de bouwplaats én die van de opdrachtgever.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
