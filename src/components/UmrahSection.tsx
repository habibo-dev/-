import { useLang } from '../hooks/useLang';
import { getWhatsAppUrl } from '../config';
import { Hotel, Car, Plane, BookOpen, HeadphonesIcon, ListChecks } from 'lucide-react';

export default function UmrahSection() {
  const { lang, t } = useLang();

  const umrahMessage: Record<string, string> = {
    ar: 'السلام عليكم، أريد الاستفسار عن برامج العمرة.',
    fr: 'Bonjour, je souhaite me renseigner sur les programmes Omra.',
    en: 'Hello, I would like to inquire about Umrah programs.',
  };

  const featureIcons = [
    <Hotel className="w-6 h-6" />,
    <Car className="w-6 h-6" />,
    <Plane className="w-6 h-6" />,
    <BookOpen className="w-6 h-6" />,
    <HeadphonesIcon className="w-6 h-6" />,
    <ListChecks className="w-6 h-6" />,
  ];

  return (
    <section id="umrah" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33169789/pexels-photo-33169789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Al-Masjid an-Nabawi in Medina"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/80 to-navy-950/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-sm font-medium mb-4">
            🕋 <span>{lang === 'ar' ? 'العمرة' : 'Umrah'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.umrah.title}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t.umrah.subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {t.umrah.features.map((feature: string, i: number) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-400/30 hover:bg-white/8 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300">
                {featureIcons[i]}
              </div>
              <span className="text-white/80 font-semibold text-sm text-center">{feature}</span>
            </div>
          ))}
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 reveal">
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
            <img
              src="https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Pilgrims at Kaaba during Hajj"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
            <img
              src="https://images.pexels.com/photos/35332382/pexels-photo-35332382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Aerial view of Masjid al-Haram"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href={getWhatsAppUrl(umrahMessage[lang] || umrahMessage.ar)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            🕋
            {t.umrah.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
