// Central configuration file for the agency
// Update these values to change contact info across the entire website

export const AGENCY_CONFIG = {
  name: {
    ar: 'وكالة الفسيفساء للسياحة والأسفار',
    fr: 'Fousyfisa Travel & Tourism',
    en: 'Fousyfisa Travel & Tourism',
  },
  shortName: {
    ar: 'الفسيفساء',
    fr: 'Fousyfisa',
    en: 'Fousyfisa',
  },
  phones: [
    '0770 82 57 85',
    '0770 05 80 04',
    '027 56 94 18',
  ],
  whatsapp: '213770825785', // International format without +
  email: 'agencefousyfisa@gmail.com',
  address: {
    ar: 'سلام 80 مسكن، الطريق الوطني رقم 4، خميس مليانة، عين الدفلى، الجزائر',
    fr: 'Salam 80 logement R.N.4, Khemis-Miliana, Ain Defla, Algérie',
    en: 'Salam 80 logement R.N.4, Khemis-Miliana, Ain Defla, Algeria',
  },
  city: {
    ar: 'خميس مليانة، عين الدفلى',
    fr: 'Khemis-Miliana, Ain Defla',
    en: 'Khemis-Miliana, Ain Defla',
  },
  country: {
    ar: 'الجزائر',
    fr: 'Algérie',
    en: 'Algeria',
  },
  social: {
    facebook: '#', // Replace with actual URL
    instagram: '#', // Replace with actual URL
    tiktok: '#', // Replace with actual URL
  },
  mapCoords: {
    lat: 36.2617,
    lng: 2.2260,
  },
};

export const getWhatsAppUrl = (message: string = '') => {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encodedMsg}`;
};

export const getWhatsAppDefaultMessage = (lang: string) => {
  const messages: Record<string, string> = {
    ar: 'السلام عليكم، أريد الاستفسار عن عرض سفر.',
    fr: 'Bonjour, je souhaite me renseigner sur une offre de voyage.',
    en: 'Hello, I would like to inquire about a travel offer.',
  };
  return messages[lang] || messages.ar;
};

export const getWhatsAppDestinationMessage = (destination: string, lang: string) => {
  const messages: Record<string, string> = {
    ar: `السلام عليكم، أريد الاستفسار عن عرض ${destination}.`,
    fr: `Bonjour, je souhaite me renseigner sur l'offre ${destination}.`,
    en: `Hello, I would like to inquire about the ${destination} offer.`,
  };
  return messages[lang] || messages.ar;
};
