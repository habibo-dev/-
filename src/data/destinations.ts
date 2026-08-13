export interface Destination {
  id: string;
  flag: string;
  image: string;
  name: { ar: string; fr: string; en: string };
  description: { ar: string; fr: string; en: string };
}

export const destinations: Destination[] = [
  {
    id: 'turkey',
    flag: '🇹🇷',
    image: 'https://images.pexels.com/photos/14819994/pexels-photo-14819994.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'تركيا', fr: 'Turquie', en: 'Turkey' },
    description: {
      ar: 'اكتشف سحر إسطنبول والمعالم التاريخية التركية.',
      fr: 'Découvrez le charme d\'Istanbul et les sites historiques turcs.',
      en: 'Discover the charm of Istanbul and Turkey\'s historic landmarks.',
    },
  },
  {
    id: 'saudi',
    flag: '🇸🇦',
    image: 'https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'السعودية', fr: 'Arabie Saoudite', en: 'Saudi Arabia' },
    description: {
      ar: 'رحلات عمرة وزيارة الأماكن المقدسة.',
      fr: 'Voyages Omra et visite des lieux saints.',
      en: 'Umrah trips and visits to the holy sites.',
    },
  },
  {
    id: 'uae',
    flag: '🇦🇪',
    image: 'https://images.pexels.com/photos/28350363/pexels-photo-28350363.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'الإمارات', fr: 'Émirats Arabes Unis', en: 'UAE' },
    description: {
      ar: 'دبي وأبوظبي: رفاهية وتسوق ومغامرة.',
      fr: 'Dubaï et Abu Dhabi : luxe, shopping et aventure.',
      en: 'Dubai and Abu Dhabi: luxury, shopping and adventure.',
    },
  },
  {
    id: 'tunisia',
    flag: '🇹🇳',
    image: 'https://images.pexels.com/photos/32465896/pexels-photo-32465896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'تونس', fr: 'Tunisie', en: 'Tunisia' },
    description: {
      ar: 'شواطئ جميلة وثقافة عريقة وأطباق شهية.',
      fr: 'Belles plages, riche culture et cuisine délicieuse.',
      en: 'Beautiful beaches, rich culture and delicious cuisine.',
    },
  },
  {
    id: 'morocco',
    flag: '🇲🇦',
    image: 'https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'المغرب', fr: 'Maroc', en: 'Morocco' },
    description: {
      ar: 'مراكش وفاس والصحراء الكبرى.',
      fr: 'Marrakech, Fès et le Grand Sahara.',
      en: 'Marrakech, Fes and the Great Sahara.',
    },
  },
  {
    id: 'spain',
    flag: '🇪🇸',
    image: 'https://images.pexels.com/photos/24531647/pexels-photo-24531647.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'إسبانيا', fr: 'Espagne', en: 'Spain' },
    description: {
      ar: 'برشلونة ومدريد وقصر الحمراء.',
      fr: 'Barcelone, Madrid et l\'Alhambra.',
      en: 'Barcelona, Madrid and the Alhambra.',
    },
  },
  {
    id: 'other',
    flag: '🌍',
    image: 'https://images.pexels.com/photos/14923418/pexels-photo-14923418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    name: { ar: 'وجهات أخرى', fr: 'Autres Destinations', en: 'Other Destinations' },
    description: {
      ar: 'مصر، ماليزيا والعديد من الوجهات العالمية.',
      fr: 'Égypte, Malaisie et de nombreuses destinations mondiales.',
      en: 'Egypt, Malaysia and many more worldwide destinations.',
    },
  },
];
