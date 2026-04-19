import { companyData } from '@/data/companyData';

export default function ProjectsSection() {
  const { projects } = companyData;

  return (
    <section id="werken" className="py-28 md:py-40 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-medium uppercase text-ink-600 mb-6 flex items-center"
            style={{ letterSpacing: '0.22em' }}
          >
            <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
            Referentieprojecten
          </p>
          <h2
            className="font-display font-light text-ink-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Bewezen resultaten bij<br />
            <span className="italic text-accent font-light">grote Belgische spelers.</span>
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed max-w-xl">
            Van industriële raffinaderijen tot iconische stadsprojecten — de
            ervaring staat op naam van gerenommeerde opdrachtgevers.
          </p>
        </div>

        {/* Editorial list */}
        <ol className="divide-y divide-ink-100 border-y border-ink-100">
          {projects.map((p, i) => (
            <li
              key={`${p.name}-${p.location}-${p.period}`}
              className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 px-2 md:px-4 hover:bg-white transition-colors duration-500"
            >
              <div className="col-span-2 md:col-span-1 font-sans text-xs text-ink-300 tabular-nums pt-2">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="col-span-10 md:col-span-5">
                <h3
                  className="font-display font-light text-ink-900 text-2xl md:text-3xl lg:text-4xl leading-tight group-hover:text-accent transition-colors duration-500"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-ink-600 mt-2">
                  {p.location} · opdrachtgever {p.company}
                </p>
                <p
                  className="text-[10px] font-medium uppercase text-ink-600 mt-2 inline-block px-2 py-1 border border-ink-200"
                  style={{ letterSpacing: '0.22em' }}
                >
                  {p.type}
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-start-7">
                <p className="text-ink-600 leading-relaxed">{p.description}</p>
              </div>

              <div className="hidden md:block md:col-span-1 text-right text-xs text-ink-300 tabular-nums pt-2">
                {p.period}
              </div>
              <div className="md:hidden col-span-12 text-xs text-ink-300 tabular-nums">
                {p.period}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
