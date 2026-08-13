import { useLang } from '../hooks/useLang';
import { Award, Users, Globe, FileCheck, HeadphonesIcon, Briefcase } from 'lucide-react';

const icons = [
  <Award className="w-7 h-7" />,
  <Users className="w-7 h-7" />,
  <Globe className="w-7 h-7" />,
  <FileCheck className="w-7 h-7" />,
  <HeadphonesIcon className="w-7 h-7" />,
  <Briefcase className="w-7 h-7" />,
];

export default function WhyChooseUs() {
  const { t } = useLang();

  return (
    <section id="whyus" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Fousyfisa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.features.map((feature: { title: string; desc: string }, i: number) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative p-6 sm:p-8 rounded-2xl border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-white hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Number */}
              <div className="absolute top-4 end-4 text-6xl font-bold text-gray-50 group-hover:text-teal-50 transition-colors duration-500 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-500 group-hover:scale-110">
                  {icons[i]}
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
