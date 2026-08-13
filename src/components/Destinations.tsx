import { useLang } from '../hooks/useLang';
import { destinations } from '../data/destinations';
import { getWhatsAppUrl, getWhatsAppDestinationMessage } from '../config';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Destinations() {
  const { lang, t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-4">
            🌍 <span>Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.destinations.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.destinations.subtitle}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {destinations.map((dest, i) => (
            <a
              key={dest.id}
              href={getWhatsAppUrl(getWhatsAppDestinationMessage(dest.name[lang], lang))}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${(i % 5) + 1} group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] cursor-pointer ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2 sm:aspect-auto' : ''
              }`}
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.name[lang]}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <div className="text-3xl mb-2">{dest.flag}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors duration-300">
                  {dest.name[lang]}
                </h3>
                <p className="text-white/60 text-sm mb-3 line-clamp-2">
                  {dest.description[lang]}
                </p>
                <div className="inline-flex items-center gap-1.5 text-teal-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>{t.destinations.explore}</span>
                  <Arrow className="w-4 h-4" />
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-500/30 transition-all duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
