import { useLang } from '../hooks/useLang';
import { packages } from '../data/packages';
import { getWhatsAppUrl, getWhatsAppDestinationMessage } from '../config';
import { Star, Plane, Hotel, Car, Users, Clock } from 'lucide-react';

const includeIcons: Record<string, { icon: React.ReactNode; label: Record<string, string> }> = {
  flight: {
    icon: <Plane className="w-3.5 h-3.5" />,
    label: { ar: 'طيران', fr: 'Vol', en: 'Flight' },
  },
  hotel: {
    icon: <Hotel className="w-3.5 h-3.5" />,
    label: { ar: 'فندق', fr: 'Hôtel', en: 'Hotel' },
  },
  transport: {
    icon: <Car className="w-3.5 h-3.5" />,
    label: { ar: 'نقل', fr: 'Transport', en: 'Transport' },
  },
  guide: {
    icon: <Users className="w-3.5 h-3.5" />,
    label: { ar: 'مرشد', fr: 'Guide', en: 'Guide' },
  },
};

export default function Packages() {
  const { lang, t } = useLang();

  return (
    <section id="packages" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200/50 text-gold-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>{lang === 'ar' ? 'عروض مميزة' : lang === 'fr' ? 'Offres spéciales' : 'Special Offers'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.packages.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`reveal reveal-delay-${(i % 5) + 1} group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.destination[lang]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge */}
                {pkg.featured && (
                  <div className="absolute top-3 start-3 px-3 py-1 bg-gold-500 text-white text-xs font-bold rounded-lg shadow-lg">
                    ⭐ {lang === 'ar' ? 'مميز' : lang === 'fr' ? 'Vedette' : 'Featured'}
                  </div>
                )}

                {/* Duration */}
                <div className="absolute bottom-3 start-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-lg text-white text-sm">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{pkg.days} {t.packages.days} / {pkg.nights} {t.packages.nights}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Destination */}
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {pkg.destination[lang]}
                </h3>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: pkg.hotelStars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                  {Array.from({ length: 5 - pkg.hotelStars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-gray-200" />
                  ))}
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.includes.map((inc) => (
                    <span
                      key={inc}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg"
                    >
                      {includeIcons[inc]?.icon}
                      {includeIcons[inc]?.label[lang]}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400">{t.packages.startingFrom}</span>
                    <div className="text-lg font-bold text-teal-700">{pkg.price}</div>
                  </div>
                  <a
                    href={getWhatsAppUrl(getWhatsAppDestinationMessage(pkg.destination[lang], lang))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {t.packages.viewDetails}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
