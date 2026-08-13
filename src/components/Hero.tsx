import { useLang } from '../hooks/useLang';
import { getWhatsAppUrl, getWhatsAppDefaultMessage } from '../config';
import { ChevronDown, Check } from 'lucide-react';

export default function Hero() {
  const { lang, t } = useLang();

  const handleExplore = () => {
    document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/13599309/pexels-photo-13599309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Travel destination - airplane flying above clouds"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/30 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-300 text-sm font-medium">Fousyfisa Travel & Tourism</span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button
            onClick={handleExplore}
            className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            {t.hero.cta}
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href={getWhatsAppUrl(getWhatsAppDefaultMessage(lang))}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/20 hover:border-teal-400/50 text-white hover:text-teal-300 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.ctaWhatsapp}
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          {[t.hero.trust1, t.hero.trust2, t.hero.trust3, t.hero.trust4].map((trust, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="text-white/80 text-xs sm:text-sm">{trust}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/40" />
      </div>
    </section>
  );
}
