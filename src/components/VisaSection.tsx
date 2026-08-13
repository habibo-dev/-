import { useLang } from '../hooks/useLang';
import { getWhatsAppUrl } from '../config';
import { Check, FileText, ShieldCheck } from 'lucide-react';

export default function VisaSection() {
  const { lang, t } = useLang();

  const visaMessage: Record<string, string> = {
    ar: 'السلام عليكم، أريد الاستفسار حول خدمات التأشيرة.',
    fr: 'Bonjour, je souhaite me renseigner sur les services de visa.',
    en: 'Hello, I would like to inquire about visa services.',
  };

  return (
    <section id="visa" className="py-20 sm:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute top-20 start-10 w-20 h-20 border border-teal-500/10 rounded-2xl rotate-12" />
      <div className="absolute bottom-20 end-10 w-32 h-32 border border-gold-400/10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              <span>Visa Services</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.visa.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.visa.subtitle}
            </p>

            {/* Services List */}
            <div className="space-y-4 mb-10">
              {t.visa.services.map((service: string, i: number) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-teal-500/20 hover:bg-white/8 transition-all duration-300`}
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-white/80 font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppUrl(visaMessage[lang] || visaMessage.ar)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.visa.cta}
            </a>
          </div>

          {/* Visual */}
          <div className="reveal reveal-delay-3 relative">
            <div className="relative">
              {/* Card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-xl shadow-teal-500/20">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'خدمة التأشيرات' : lang === 'fr' ? 'Service Visas' : 'Visa Service'}</h3>
                    <p className="text-teal-400 text-sm">Fousyfisa Travel</p>
                  </div>
                </div>

                {/* Visa types */}
                <div className="space-y-3">
                  {[
                    { flag: '🇹🇷', name: lang === 'ar' ? 'تركيا' : lang === 'fr' ? 'Turquie' : 'Turkey' },
                    { flag: '🇪🇸', name: lang === 'ar' ? 'إسبانيا' : lang === 'fr' ? 'Espagne' : 'Spain' },
                    { flag: '🇸🇦', name: lang === 'ar' ? 'السعودية' : lang === 'fr' ? 'Arabie Saoudite' : 'Saudi Arabia' },
                    { flag: '🇦🇪', name: lang === 'ar' ? 'الإمارات' : lang === 'fr' ? 'Émirats' : 'UAE' },
                    { flag: '🇲🇾', name: lang === 'ar' ? 'ماليزيا' : lang === 'fr' ? 'Malaisie' : 'Malaysia' },
                  ].map((country, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{country.flag}</span>
                        <span className="text-white/80 font-medium">{country.name}</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -end-4 px-4 py-2.5 bg-gold-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-gold-500/30 animate-float">
                {lang === 'ar' ? '✨ نساعدك في التأشيرة' : lang === 'fr' ? '✨ Nous vous aidons' : '✨ We help you'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
