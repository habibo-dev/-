import { useState } from 'react';
import { useLang } from '../hooks/useLang';
import { AGENCY_CONFIG } from '../config';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const { lang, t } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    destination: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // In production, this would send to a backend API
    // For now, we'll show a success message and log the data
    console.log('Contact form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceType: '', destination: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">
                  {lang === 'ar' ? 'العنوان' : lang === 'fr' ? 'Adresse' : 'Address'}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {AGENCY_CONFIG.address[lang]}
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">
                  {lang === 'ar' ? 'الهاتف' : lang === 'fr' ? 'Téléphone' : 'Phone'}
                </h3>
                <div className="space-y-1">
                  {AGENCY_CONFIG.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-gray-500 text-sm hover:text-teal-600 transition-colors"
                      dir="ltr"
                    >
                      📞 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">
                  {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="text-gray-500 text-sm hover:text-teal-600 transition-colors"
                >
                  {AGENCY_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 sm:h-64 bg-gray-100">
              <iframe
                title="Agency Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25800!2d${AGENCY_CONFIG.mapCoords.lng}!3d${AGENCY_CONFIG.mapCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE1JzQyLjEiTiAywrAxMycyOS42IkU!5e0!3m2!1sen!2sdz!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    {t.contact.success}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.name} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all`}
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.phone} *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all`}
                        dir="ltr"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.email}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all`}
                        dir="ltr"
                      />
                    </div>
                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.serviceType}</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all appearance-none"
                      >
                        <option value="">{t.contact.selectService}</option>
                        {t.contact.serviceOptions.map((opt: string) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.destination}</label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    {t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
