import { useLang } from '../hooks/useLang';
import { MapPin, MessageCircle, FileCheck, Plane } from 'lucide-react';

const stepIcons = [
  <MapPin className="w-7 h-7" />,
  <MessageCircle className="w-7 h-7" />,
  <FileCheck className="w-7 h-7" />,
  <Plane className="w-7 h-7" />,
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.howItWorks.steps.map((step: { num: string; title: string; desc: string }, i: number) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative text-center`}
            >
              {/* Connector Line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 start-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal-500/30 to-teal-500/10" />
              )}

              {/* Step Number */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:from-teal-500 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-teal-500/20 transition-all duration-500 group-hover:scale-110">
                  {stepIcons[i]}
                </div>
                <div className="absolute -top-2 -end-2 w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-gold-500/30">
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
