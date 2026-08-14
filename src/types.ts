export type ThemeMode = 'dark' | 'white' | 'pink';

export type LanguageCode = 'en' | 'ur' | 'ar';

export interface AppealTemplate {
  lang: LanguageCode;
  label: string;
  flag: string;
  defaultSubject: string;
  body: string;
  dir: 'ltr' | 'rtl';
  fontFamily?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  type: 'whatsapp' | 'group' | 'telegram' | 'youtube' | 'facebook' | 'instagram' | 'primary';
  icon: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
