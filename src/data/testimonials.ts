export interface Testimonial {
  id: string;
  name: { ar: string; fr: string; en: string };
  destination: { ar: string; fr: string; en: string };
  review: { ar: string; fr: string; en: string };
  rating: number;
  isPlaceholder: true; // All current testimonials are placeholders
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: { ar: 'عميل 1', fr: 'Client 1', en: 'Client 1' },
    destination: { ar: 'إسطنبول', fr: 'Istanbul', en: 'Istanbul' },
    review: {
      ar: 'تجربة رائعة مع وكالة الفسيفساء. تنظيم ممتاز وخدمة احترافية من البداية للنهاية.',
      fr: 'Excellente expérience avec Fousyfisa. Organisation parfaite et service professionnel.',
      en: 'Excellent experience with Fousyfisa. Perfect organization and professional service.',
    },
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: '2',
    name: { ar: 'عميل 2', fr: 'Client 2', en: 'Client 2' },
    destination: { ar: 'دبي', fr: 'Dubaï', en: 'Dubai' },
    review: {
      ar: 'خدمة ممتازة وفريق محترف. أنصح بشدة بالتعامل مع هذه الوكالة.',
      fr: 'Service excellent et équipe professionnelle. Je recommande vivement.',
      en: 'Excellent service and professional team. Highly recommended.',
    },
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: '3',
    name: { ar: 'عميل 3', fr: 'Client 3', en: 'Client 3' },
    destination: { ar: 'مكة المكرمة', fr: 'La Mecque', en: 'Mecca' },
    review: {
      ar: 'رحلة عمرة منظمة بشكل ممتاز. فنادق قريبة من الحرم وخدمة نقل مريحة.',
      fr: 'Voyage Omra parfaitement organisé. Hôtels proches du Haram et transfert confortable.',
      en: 'Perfectly organized Umrah trip. Hotels close to the Haram and comfortable transport.',
    },
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: '4',
    name: { ar: 'عميل 4', fr: 'Client 4', en: 'Client 4' },
    destination: { ar: 'تونس', fr: 'Tunisie', en: 'Tunisia' },
    review: {
      ar: 'قضينا عطلة رائعة في تونس. شكراً لفريق الفسيفساء على التنظيم المحكم.',
      fr: 'Nous avons passé de merveilleuses vacances en Tunisie. Merci Fousyfisa.',
      en: 'We had a wonderful vacation in Tunisia. Thank you Fousyfisa team.',
    },
    rating: 5,
    isPlaceholder: true,
  },
];
