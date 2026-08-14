import { AppealTemplate, FAQItem, SocialLink } from './types';

export const APPEAL_TEMPLATES: Record<string, AppealTemplate> = {
  en: {
    lang: 'en',
    label: 'English Mail',
    flag: '🇬🇧',
    dir: 'ltr',
    defaultSubject: 'WhatsApp Account Review Request - {{NUMBER}}',
    body: `Hello WhatsApp Support Team,

I hope you are doing well.

I am writing to respectfully request a review of my WhatsApp account associated with the phone number {{NUMBER}}.

Recently, my WhatsApp account was restricted or banned, and I believe that this may have happened by mistake or because of a misunderstanding.

I understand that WhatsApp has policies designed to protect users and maintain a safe platform. I respect these policies and always try to use WhatsApp responsibly.

I kindly request your support team to review my account and the reason for the restriction.

If the restriction was applied incorrectly, I would sincerely appreciate it if access to my account could be restored.

If any action from my side unintentionally violated a policy, I sincerely apologize. I will make sure to follow WhatsApp's Terms of Service and applicable policies carefully in the future.

This account is important to me because I use WhatsApp to communicate with family, friends, customers and other important contacts.

Please review my account and let me know if any additional information is required from my side.

I would be grateful if you could review the situation and restore my account if it is eligible for restoration.

Thank you for your time, understanding and support.

Best regards,

WhatsApp User

Phone Number: {{NUMBER}}`,
  },
  ur: {
    lang: 'ur',
    label: 'Urdu Mail',
    flag: '🇵🇰',
    dir: 'rtl',
    defaultSubject: 'واٹس ایپ اکاؤنٹ پر نظر ثانی کی درخواست - {{NUMBER}}',
    body: `محترم واٹس ایپ سپورٹ ٹیم،

السلام علیکم،

میں اپنے واٹس ایپ اکاؤنٹ، جو کہ نمبر {{NUMBER}} کے ساتھ منسلک ہے، کے بارے میں مؤدبانہ طور پر دوبارہ جائزے کی درخواست کرنا چاہتا ہوں۔

میرا واٹس ایپ اکاؤنٹ حال ہی میں محدود یا بین کر دیا گیا ہے اور مجھے لگتا ہے کہ یہ غلطی یا کسی غلط فہمی کی وجہ سے ہوا ہو سکتا ہے۔

میں سمجھتا ہوں کہ واٹس ایپ اپنے صارفین کی حفاظت اور پلیٹ فارم کو محفوظ رکھنے کے لیے مختلف پالیسیاں نافذ کرتا ہے۔

میں ان پالیسیوں کا احترام کرتا ہوں اور واٹس ایپ کو ذمہ داری کے ساتھ استعمال کرنے کی کوشش کرتا ہوں۔

براہ کرم میرے اکاؤنٹ اور اس پر لگائی گئی پابندی کی دوبارہ جانچ کریں۔

اگر یہ پابندی غلطی سے لگائی گئی ہے تو براہ کرم میرے اکاؤنٹ کی رسائی بحال کرنے پر غور کریں۔

اگر میری طرف سے غیر ارادی طور پر کسی پالیسی کی خلاف ورزی ہوئی ہو تو میں اس کے لیے معذرت خواہ ہوں۔

میں یقین دلاتا ہوں کہ آئندہ واٹس ایپ کی تمام متعلقہ پالیسیوں اور شرائط پر احتیاط سے عمل کروں گا۔

یہ اکاؤنٹ میرے لیے بہت اہم ہے کیونکہ میں اسے خاندان، دوستوں، صارفین اور ضروری رابطوں کے ساتھ رابطے کے لیے استعمال کرتا ہوں۔

براہ کرم میرے اکاؤنٹ کا مکمل جائزہ لے کر مجھے آگاہ کریں اگر مزید معلومات درکار ہوں۔

اگر میرا اکاؤنٹ بحالی کے لیے اہل ہے تو براہ کرم اس کی رسائی بحال کرنے پر غور کریں۔

آپ کے وقت، تعاون اور سمجھ بوجھ کا بہت شکریہ۔

خیراندیش،

واٹس ایپ صارف

فون نمبر: {{NUMBER}}`,
  },
  ar: {
    lang: 'ar',
    label: 'Arabic Mail',
    flag: '🇸🇦',
    dir: 'rtl',
    defaultSubject: 'طلب مراجعة حساب واتساب - {{NUMBER}}',
    body: `مرحباً فريق دعم واتساب،

أتمنى أن تكونوا بخير.

أكتب إليكم لطلب مراجعة حساب واتساب المرتبط بالرقم {{NUMBER}}.

تم تقييد حسابي أو حظره مؤخراً، وأعتقد أن ذلك قد يكون حدث عن طريق الخطأ أو بسبب سوء فهم.

أدرك أن واتساب يطبق سياسات وإجراءات مختلفة لحماية المستخدمين والحفاظ على أمان المنصة.

أنا أحترم هذه السياسات وأحرص دائماً على استخدام واتساب بطريقة مسؤولة.

أرجو من فريق الدعم مراجعة حسابي والسبب وراء تقييده مرة أخرى.

إذا كان الحظر قد تم عن طريق الخطأ، فسأكون ممتناً جداً إذا أمكن إعادة الوصول إلى حسابي.

إذا حدثت أي مخالفة غير مقصودة من جانبي، فأنا أعتذر عنها وأؤكد لكم أنني سألتزم بشروط استخدام واتساب وسياساته في المستقبل.

هذا الحساب مهم بالنسبة لي لأنني أستخدم واتساب للتواصل مع العائلة والأصدقاء والعملاء وجهات الاتصال المهمة.

يرجى مراجعة حسابي وإبلاغي إذا كنتم بحاجة إلى أي معلومات إضافية.

إذا كان الحساب مؤهلاً لإعادة التفعيل، أرجو منكم النظر في إمكانية استعادة الوصول إليه.

شكراً جزيلاً لكم على وقتكم وتفهمكم ودعمكم.

مع خالص التحية،

مستخدم واتساب

رقم الهاتف: {{NUMBER}}`,
  },
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'group',
    name: 'WhatsApp Group',
    url: 'https://chat.whatsapp.com/I5MaWoqxpHwKlOlm6gtLkr?s=cl&p=a&ilr=4',
    type: 'group',
    icon: 'MessageSquare',
    badge: 'Official Community',
  },
  {
    id: 'channel',
    name: 'WhatsApp Channel',
    url: 'https://whatsapp.com/channel/0029VbBd88qCXC3Qgt0Lzz0e',
    type: 'whatsapp',
    icon: 'Radio',
    badge: 'Daily Updates',
  },
  {
    id: 'telegram',
    name: 'Telegram Channel',
    url: 'https://t.me/RDXCYBER_TECHX',
    type: 'telegram',
    icon: 'Send',
    badge: 'RDX Cyber Tech',
  },
  {
    id: 'youtube-main',
    name: 'GHUFRAN KING DIGITAL',
    url: 'https://youtube.com/@ghufran_king_digital?si=5srU3KDPpM3Z5-46',
    type: 'youtube',
    icon: 'PlaySquare',
    badge: 'Primary Channel',
  },
  {
    id: 'youtube-sub',
    name: 'BOT KI BAKBAK',
    url: 'https://youtube.com/@botkibakbak?si=gpEI4KIyRyYOi2jt',
    type: 'youtube',
    icon: 'PlaySquare',
    badge: 'Second Channel',
  },
  {
    id: 'facebook',
    name: 'Facebook Page',
    url: 'https://www.facebook.com/share/1DG95Co6mT/',
    type: 'facebook',
    icon: 'Facebook',
    badge: 'Official Page',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/ghufran_king_digital?igsh=MXF2cmlheHNodnltdg==',
    type: 'instagram',
    icon: 'Instagram',
    badge: '@ghufran_king_digital',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'Is this an official WhatsApp website?',
    answer:
      'No. This is an independent third-party appeal helper developed by GHUFRAN KING DIGITAL. You must use WhatsApp’s official support, in-app appeal review, or email channels to submit your request.',
  },
  {
    question: 'Can this tool guarantee an unban?',
    answer:
      'No. No third-party tool or website can guarantee an account restoration. The final review decision is made entirely by WhatsApp support systems based on their Terms of Service.',
  },
  {
    question: 'Which languages are available?',
    answer:
      'English (🇬🇧), Urdu (🇵🇰), and Arabic (🇸🇦). All formats include official formal review wording optimized for automated & human support evaluation.',
  },
  {
    question: 'Can the website automatically send my Gmail?',
    answer:
      'A standard browser website cannot silently send emails from your personal account without user permission. The tool generates a formatted draft that opens in your email app (Gmail, Apple Mail, Outlook) or Gmail Web. You review and click Send.',
  },
  {
    question: 'Where should I request a review?',
    answer:
      'Use the "Request a Review" button directly inside the WhatsApp app when prompted on the ban screen, or use the email support address (support@support.whatsapp.com / smb_web@support.whatsapp.com) or official web form.',
  },
  {
    question: 'What is the correct phone number format?',
    answer:
      'Always enter your phone number with the country code (international format), for example +923113106280 (Pakistan), +919876543210 (India), +9665XXXXXXXX (Saudi Arabia), or +1XXXXXXXXXX (USA).',
  },
];

export const OFFICIAL_SUPPORT_EMAILS = [
  { name: 'WhatsApp General Support', email: 'support@support.whatsapp.com' },
  { name: 'WhatsApp Business Support', email: 'smb_web@support.whatsapp.com' },
  { name: 'WhatsApp Android Support', email: 'android_web@support.whatsapp.com' },
  { name: 'WhatsApp iOS Support', email: 'iphone_web@support.whatsapp.com' },
];
