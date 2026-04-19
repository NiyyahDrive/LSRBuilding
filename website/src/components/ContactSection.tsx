'use client';

import { companyData } from '@/data/companyData';
import { useState } from 'react';

type FormType = 'offerte' | 'contact';

// Form endpoint — werkt op elke statische host (GitHub Pages, Apache, nginx).
// Default = FormSubmit.co (geen account nodig, gratis).
// Override via .env.local met: NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxx
const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
  'https://formsubmit.co/ajax/info@lsr-building.be';

export default function ContactSection() {
  const { company } = companyData;
  const [formType, setFormType] = useState<FormType>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
    _honey: '', // honeypot — moet leeg blijven
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot-check: als bot het veld invult, stoppen we hier.
    if (formData._honey) return;

    setLoading(true);
    setError(null);

    const subjectPrefix = formType === 'offerte' ? 'Offerteverzoek' : 'Contactbericht';
    const payload = {
      _subject: `${subjectPrefix} · ${formData.name} — LSR Building website`,
      _template: 'table',
      _captcha: 'false',
      formType: subjectPrefix,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '—',
      project: formData.project || '—',
      message: formData.message,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', project: '', message: '', _honey: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(
        'Er ging iets mis bij het versturen. Probeer opnieuw of bel ons direct op ' +
          company.phone +
          '.'
      );
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-ink-900 text-ink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <p
              className="text-xs font-medium uppercase text-accent mb-6 flex items-center"
              style={{ letterSpacing: '0.22em' }}
            >
              <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
              Contact
            </p>
            <h2
              className="font-display font-light text-ink-50 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8"
              style={{ letterSpacing: '-0.04em' }}
            >
              Klaar om uw<br />
              <span className="italic font-light" style={{ color: '#1E6091' }}>project te bespreken?</span>
            </h2>
            <p className="text-ink-300 leading-relaxed mb-12 text-lg">
              Offerte, vraag of gewoon een eerste gesprek — wij reageren binnen
              24 uur. Vaak sneller.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-5 border-b border-ink-600/40 pb-5"
              >
                <div className="w-10 h-10 border border-ink-600/60 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-colors duration-500">
                  <svg className="w-4 h-4 text-ink-300 group-hover:text-ink-50 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-600 mb-0.5 uppercase" style={{ letterSpacing: '0.22em' }}>Telefoon</p>
                  <p className="text-ink-50 font-medium">{company.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="group flex items-center gap-5 border-b border-ink-600/40 pb-5"
              >
                <div className="w-10 h-10 border border-ink-600/60 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-colors duration-500">
                  <svg className="w-4 h-4 text-ink-300 group-hover:text-ink-50 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ink-600 mb-0.5 uppercase" style={{ letterSpacing: '0.22em' }}>E-mail</p>
                  <p className="text-ink-50 font-medium">{company.email}</p>
                </div>
              </a>

              <div className="pt-2">
                <p className="text-xs text-ink-600 uppercase mb-2" style={{ letterSpacing: '0.22em' }}>
                  Gebaseerd in
                </p>
                <p className="text-ink-300 text-sm">
                  Brecht · actief in Antwerpen &amp; Vlaanderen
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 lg:pl-12 lg:border-l lg:border-ink-600/40">
            {/* Toggle */}
            <div className="flex gap-1 mb-8 border border-ink-600/60">
              <button
                onClick={() => setFormType('contact')}
                className={`flex-1 text-sm font-medium py-3 transition-colors duration-500 ${
                  formType === 'contact'
                    ? 'bg-accent text-ink-50'
                    : 'text-ink-300 hover:text-ink-50'
                }`}
              >
                Snel contact
              </button>
              <button
                onClick={() => setFormType('offerte')}
                className={`flex-1 text-sm font-medium py-3 transition-colors duration-500 ${
                  formType === 'offerte'
                    ? 'bg-accent text-ink-50'
                    : 'text-ink-300 hover:text-ink-50'
                }`}
              >
                Offerte aanvragen
              </button>
            </div>

            {submitted && !error ? (
              <div className="flex flex-col items-start justify-center py-16">
                <div className="w-12 h-12 border border-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p
                  className="font-display font-light text-ink-50 text-2xl mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Bericht ontvangen.
                </p>
                <p className="text-ink-300 text-sm">
                  We reageren binnen 24 uur.
                </p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-start justify-center py-8">
                <p className="font-display font-light text-red-400 text-2xl mb-2">
                  Er ging iets mis.
                </p>
                <p className="text-ink-300 text-sm mb-4">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="text-ink-50 font-medium text-sm border-b border-ink-50 pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Probeer opnieuw
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — onzichtbaar veld tegen spam-bots. Niet aanraken. */}
                <input
                  type="text"
                  name="_honey"
                  value={formData._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
                />

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-medium uppercase text-ink-600 mb-2" style={{ letterSpacing: '0.22em' }}>
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Uw naam"
                      className="w-full bg-transparent border-b border-ink-600/60 py-3 text-sm text-ink-50 placeholder-ink-600 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium uppercase text-ink-600 mb-2" style={{ letterSpacing: '0.22em' }}>
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+32 ..."
                      className="w-full bg-transparent border-b border-ink-600/60 py-3 text-sm text-ink-50 placeholder-ink-600 focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-medium uppercase text-ink-600 mb-2" style={{ letterSpacing: '0.22em' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="uw@email.be"
                    className="w-full bg-transparent border-b border-ink-600/60 py-3 text-sm text-ink-50 placeholder-ink-600 focus:border-accent outline-none transition-colors"
                  />
                </div>

                {formType === 'offerte' && (
                  <div>
                    <label className="block text-[10px] font-medium uppercase text-ink-600 mb-2" style={{ letterSpacing: '0.22em' }}>
                      Type project
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink-600/60 py-3 text-sm text-ink-50 focus:border-accent outline-none transition-colors"
                    >
                      <option value="" className="bg-ink-900">Selecteer een type</option>
                      <option className="bg-ink-900">Projectcoördinatie</option>
                      <option className="bg-ink-900">Renovatiewerken</option>
                      <option className="bg-ink-900">Klein bouwproject</option>
                      <option className="bg-ink-900">Veiligheidssupervisie</option>
                      <option className="bg-ink-900">Andere</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] font-medium uppercase text-ink-600 mb-2" style={{ letterSpacing: '0.22em' }}>
                    {formType === 'offerte' ? 'Omschrijving project *' : 'Bericht *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={
                      formType === 'offerte'
                        ? 'Beschrijf kort uw project, locatie en timing…'
                        : 'Uw vraag of bericht…'
                    }
                    className="w-full bg-transparent border-b border-ink-600/60 py-3 text-sm text-ink-50 placeholder-ink-600 focus:border-accent outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 bg-ink-50 text-ink-900 px-7 py-4 text-sm font-medium tracking-wide hover:bg-accent hover:text-ink-50 transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>
                      {loading
                        ? 'Versturen…'
                        : formType === 'offerte'
                          ? 'Offerte aanvragen'
                          : 'Bericht verzenden'}
                    </span>
                    {!loading && (
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
