import { useLang } from '../hooks/useLang';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { lang, t } = useLang();

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200/50 text-gold-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>{lang === 'ar' ? 'آراء العملاء' : lang === 'fr' ? 'Témoignages' : 'Testimonials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`reveal reveal-delay-${i + 1} group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 end-6 w-10 h-10 text-teal-100 group-hover:text-teal-200 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.review[lang]}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[lang].charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.name[lang]}</h4>
                  <p className="text-sm text-teal-600">{testimonial.destination[lang]}</p>
                </div>
              </div>

              {/* Placeholder notice */}
              {testimonial.isPlaceholder && (
                <div className="mt-4 px-3 py-1.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-600 text-xs">
                  {t.testimonials.placeholder}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
