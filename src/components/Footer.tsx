import { useLang } from '../hooks/useLang';
import { AGENCY_CONFIG } from '../config';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { lang, t, isRTL } = useLang();

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.trips, href: '#packages' },
    { label: t.nav.destinations, href: '#destinations' },
    { label: t.nav.about, href: '#whyus' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const serviceLinks = [
    { label: t.footer.serviceLinks[0], href: '#visa' },
    { label: t.footer.serviceLinks[1], href: '#packages' },
    { label: t.footer.serviceLinks[2], href: '#packages' },
    { label: t.footer.serviceLinks[3], href: '#packages' },
    { label: t.footer.serviceLinks[4], href: '#umrah' },
  ];

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Cairo, sans-serif' }}>ف</span>
              </div>
              <div>
                <div className="text-white font-bold" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}>
                  {AGENCY_CONFIG.shortName[lang]}
                </div>
                <div className="text-teal-400 text-xs">Travel & Tourism</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t.footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {['facebook', 'instagram', 'tiktok'].map((social) => (
                <a
                  key={social}
                  href={AGENCY_CONFIG.social[social as keyof typeof AGENCY_CONFIG.social] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/30 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all duration-300"
                >
                  <span className="text-sm capitalize">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">{t.footer.ourServices}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">{t.footer.contactUs}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{AGENCY_CONFIG.address[lang]}</span>
              </div>
              {AGENCY_CONFIG.phones.map((phone, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-400 text-sm hover:text-teal-400 transition-colors" dir="ltr">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-gray-400 text-sm hover:text-teal-400 transition-colors">
                  {AGENCY_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-start">
              {t.footer.rights}
            </p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Fousyfisa</span>
              <span className="text-teal-400">✈</span>
              <span>{AGENCY_CONFIG.city[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
