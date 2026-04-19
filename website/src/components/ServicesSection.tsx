import { companyData } from '@/data/companyData';
import React from 'react';

type ServiceIconProps = { className?: string };

const icons: Record<number, (p: ServiceIconProps) => React.ReactElement> = {
  1: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  2: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  3: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  4: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  5: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  6: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
};

export default function ServicesSection() {
  const { services } = companyData;

  return (
    <section id="diensten" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-medium uppercase text-ink-600 mb-6 flex items-center"
            style={{ letterSpacing: '0.22em' }}
          >
            <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
            Onze Diensten
          </p>
          <h2
            className="font-display font-light text-ink-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Volledige ontzorging,<br />
            <span className="italic text-accent font-light">van A tot Z.</span>
          </h2>
          <p className="text-lg text-ink-600 leading-relaxed">
            Wij nemen de regie over uw bouwproject in handen — zodat u zich kunt
            richten op wat voor u belangrijk is.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <div
                key={service.id}
                className="group bg-white p-8 md:p-10 hover:bg-ink-50 transition-colors duration-500"
              >
                <Icon className="w-8 h-8 text-accent mb-6" />
                <h3
                  className="font-display font-light text-ink-900 text-xl md:text-2xl mb-3 leading-snug"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-ink-900 font-medium text-sm relative pb-1"
          >
            <span>Vrijblijvende offerte aanvragen</span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            <span className="absolute left-0 bottom-0 h-px w-full bg-ink-900" />
            <span className="absolute left-0 bottom-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
