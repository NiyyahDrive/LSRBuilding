import Link from 'next/link';
import Image from 'next/image';
import { companyData } from '@/data/companyData';

export default function Footer() {
  const { company } = companyData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.svg"
                alt="LSR Building"
                width={40}
                height={40}
                className="w-9 h-9"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-ink-50 text-base">LSR</span>
                <span
                  className="text-[10px] font-semibold text-accent uppercase"
                  style={{ letterSpacing: '0.22em' }}
                >
                  Building
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Projectcoördinatie, veiligheidssupervisie en renovatie voor
              industriële en residentiële bouwprojecten.
            </p>
            <p className="text-xs text-ink-600 mt-4">VOL VCA gecertificeerd · Brecht / Antwerpen</p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-ink-50 text-xs font-medium uppercase mb-5"
              style={{ letterSpacing: '0.22em' }}
            >
              Navigatie
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '#over-ons', label: 'Over Ons' },
                { href: '#diensten', label: 'Diensten' },
                { href: '#werken',   label: 'Werken' },
                { href: '#contact',  label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-300 hover:text-accent transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-ink-50 text-xs font-medium uppercase mb-5"
              style={{ letterSpacing: '0.22em' }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors duration-500">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors duration-500">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-600/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-600">
          <p>© {year} {company.name}. Alle rechten voorbehouden.</p>
          <p className="uppercase" style={{ letterSpacing: '0.22em' }}>
            BE · Vlaanderen
          </p>
        </div>
      </div>
    </footer>
  );
}
