export interface TravelPackage {
  id: string;
  image: string;
  destination: { ar: string; fr: string; en: string };
  days: number;
  nights: number;
  price: string; // Placeholder price
  hotelStars: number;
  includes: string[];
  featured?: boolean;
}

export const packages: TravelPackage[] = [
  {
    id: 'istanbul',
    image: 'https://images.pexels.com/photos/20524206/pexels-photo-20524206.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'إسطنبول', fr: 'Istanbul', en: 'Istanbul' },
    days: 7,
    nights: 6,
    price: 'XXXX DA',
    hotelStars: 4,
    includes: ['flight', 'hotel', 'transport', 'guide'],
    featured: true,
  },
  {
    id: 'dubai',
    image: 'https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'دبي', fr: 'Dubaï', en: 'Dubai' },
    days: 5,
    nights: 4,
    price: 'XXXX DA',
    hotelStars: 5,
    includes: ['flight', 'hotel', 'transport'],
    featured: true,
  },
  {
    id: 'mecca-medina',
    image: 'https://images.pexels.com/photos/35332382/pexels-photo-35332382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'مكة والمدينة', fr: 'La Mecque & Médine', en: 'Mecca & Medina' },
    days: 10,
    nights: 9,
    price: 'XXXX DA',
    hotelStars: 5,
    includes: ['flight', 'hotel', 'transport', 'guide'],
    featured: true,
  },
  {
    id: 'tunis',
    image: 'https://images.pexels.com/photos/32465896/pexels-photo-32465896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'تونس', fr: 'Tunisie', en: 'Tunisia' },
    days: 5,
    nights: 4,
    price: 'XXXX DA',
    hotelStars: 4,
    includes: ['flight', 'hotel', 'transport'],
  },
  {
    id: 'marrakech',
    image: 'https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'المغرب', fr: 'Maroc', en: 'Morocco' },
    days: 6,
    nights: 5,
    price: 'XXXX DA',
    hotelStars: 4,
    includes: ['flight', 'hotel', 'transport', 'guide'],
  },
  {
    id: 'spain',
    image: 'https://images.pexels.com/photos/24531647/pexels-photo-24531647.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'إسبانيا', fr: 'Espagne', en: 'Spain' },
    days: 7,
    nights: 6,
    price: 'XXXX DA',
    hotelStars: 4,
    includes: ['flight', 'hotel', 'transport'],
  },
  {
    id: 'malaysia',
    image: 'https://images.pexels.com/photos/37998353/pexels-photo-37998353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'ماليزيا', fr: 'Malaisie', en: 'Malaysia' },
    days: 8,
    nights: 7,
    price: 'XXXX DA',
    hotelStars: 4,
    includes: ['flight', 'hotel', 'transport', 'guide'],
  },
  {
    id: 'egypt',
    image: 'https://images.pexels.com/photos/29390088/pexels-photo-29390088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    destination: { ar: 'مصر', fr: 'Égypte', en: 'Egypt' },
    days: 6,
    nights: 5,
    price: 'XXXX DA',
    hotelStars: 5,
    includes: ['flight', 'hotel', 'transport', 'guide'],
  },
];
