import { useLang } from '../hooks/useLang';
import { getWhatsAppUrl, getWhatsAppDefaultMessage } from '../config';
import {
  MapPin, FileText, Plane, Hotel, Moon,
  Compass, FolderOpen, Car, Shield
} from 'lucide-react';

const icons = [
  <MapPin className="w-7 h-7" />,
  <FileText className="w-7 h-7" />,
  <Plane className="w-7 h-7" />,
  <Hotel className="w-7 h-7" />,
  <Moon className="w-7 h-7" />,
  <Compass className="w-7 h-7" />,
  <FolderOpen className="w-7 h-7" />,
  <Car className="w-7 h-7" />,
  <Shield className="w-7 h-7" />,
];

export default function Services() {
  const { lang, t } = useLang();

  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
            <Compass className="w-4 h-4" />
            <span>Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 6) + 1} group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 to-teal-50/0 group-hover:from-teal-50/50 group-hover:to-gold-50/30 transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-500 group-hover:scale-110">
                  {icons[i]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(getWhatsAppDefaultMessage(lang))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 font-semibold text-sm group/link"
                >
                  <span>{t.services.learnMore}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
