import React, { useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { APPEAL_TEMPLATES, OFFICIAL_SUPPORT_EMAILS } from '../templates';
import {
  Copy,
  Check,
  Mail,
  ExternalLink,
  Sparkles,
  Phone,
  Globe2,
  ShieldCheck,
  AlertCircle,
  FileText,
  Send,
} from 'lucide-react';

const QUICK_COUNTRIES = [
  { flag: '🇵🇰', code: '+92', name: 'Pakistan' },
  { flag: '🇮🇳', code: '+91', name: 'India' },
  { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' },
  { flag: '🇦🇪', code: '+971', name: 'UAE' },
  { flag: '🇺🇸', code: '+1', name: 'USA / Canada' },
  { flag: '🇬🇧', code: '+44', name: 'UK' },
  { flag: '🇧🇩', code: '+880', name: 'Bangladesh' },
  { flag: '🇴🇲', code: '+968', name: 'Oman' },
];

export const AppealGenerator: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('en');
  const [targetEmail, setTargetEmail] = useState<string>(OFFICIAL_SUPPORT_EMAILS[0].email);
  const [emailSubject, setEmailSubject] = useState<string>('WhatsApp Account Review Request');
  const [generatedBody, setGeneratedBody] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [copyFeedbackText, setCopyFeedbackText] = useState<string>('📋 COPY MAIL');

  // Regenerate appeal when language or phone number changes
  useEffect(() => {
    const template = APPEAL_TEMPLATES[selectedLang];
    const num = phoneNumber.trim() || 'YOUR_WHATSAPP_NUMBER';
    const replaced = template.body.replaceAll('{{NUMBER}}', num);
    setGeneratedBody(replaced);

    // Update subject placeholder
    if (selectedLang === 'ur') {
      setEmailSubject(`واٹس ایپ اکاؤنٹ پر نظر ثانی کی درخواست - ${num}`);
    } else if (selectedLang === 'ar') {
      setEmailSubject(`طلب مراجعة حساب واتساب - ${num}`);
    } else {
      setEmailSubject(`WhatsApp Account Review Request - ${num}`);
    }
  }, [selectedLang, phoneNumber]);

  const handleCountryChipClick = (code: string) => {
    if (!phoneNumber || phoneNumber.startsWith('+')) {
      setPhoneNumber(code);
    } else {
      setPhoneNumber(`${code}${phoneNumber}`);
    }
  };

  const handleManualGenerate = () => {
    const template = APPEAL_TEMPLATES[selectedLang];
    const num = phoneNumber.trim() || 'YOUR_WHATSAPP_NUMBER';
    const replaced = template.body.replaceAll('{{NUMBER}}', num);
    setGeneratedBody(replaced);
    setCopyFeedbackText('⚡ APPEAL REFRESHED!');
    setTimeout(() => setCopyFeedbackText('📋 COPY MAIL'), 2000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedBody);
      setCopied(true);
      setCopyFeedbackText('✅ COPIED TO CLIPBOARD!');
      setTimeout(() => {
        setCopied(false);
        setCopyFeedbackText('📋 COPY MAIL');
      }, 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = generatedBody;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setCopyFeedbackText('✅ COPIED!');
      setTimeout(() => {
        setCopied(false);
        setCopyFeedbackText('📋 COPY MAIL');
      }, 2500);
    }
  };

  const handleOpenEmailDraft = () => {
    const subjectEncoded = encodeURIComponent(emailSubject);
    const bodyEncoded = encodeURIComponent(generatedBody);
    const mailtoUrl = `mailto:${targetEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.open(mailtoUrl, '_self');
  };

  const handleOpenGmailWeb = () => {
    const subjectEncoded = encodeURIComponent(emailSubject);
    const bodyEncoded = encodeURIComponent(generatedBody);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subjectEncoded}&body=${bodyEncoded}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const isRtl = selectedLang === 'ur' || selectedLang === 'ar';

  return (
    <section
      id="mainTool"
      className="card rounded-3xl p-6 sm:p-8 transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6 scroll-mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center gap-3 flex-wrap border-b border-[var(--border)] pb-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text)] flex items-center gap-2">
            <span>📩</span> WhatsApp Request Review
          </h2>
          <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--muted)' }}>
            Enter your WhatsApp number in international format, choose your preferred language and generate your
            professional support appeal.
          </p>
        </div>

        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide border border-[var(--border)]"
          style={{ background: 'var(--card2)', color: 'var(--accent)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          TOOL READY
        </div>
      </div>

      {/* Input Group: Phone Number */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5">
          <label htmlFor="number" className="text-sm font-bold text-[var(--text)] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[var(--accent)]" /> WhatsApp Number (International Format)
          </label>
          <span className="text-xs text-[var(--muted)]">e.g. +923113106280</span>
        </div>

        <div className="relative">
          <input
            id="number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+923XXXXXXXXX or +91XXXXXXXXXX"
            className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)] text-base font-semibold outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)]"
            autoComplete="tel"
          />
        </div>

        {/* Quick Country Chips */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          <span className="text-xs font-semibold self-center mr-1 text-[var(--muted)]">Quick Codes:</span>
          {QUICK_COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => handleCountryChipClick(c.code)}
              className="text-xs font-medium px-2.5 py-1 rounded-lg border border-[var(--border)] bg-[var(--card2)] hover:border-[var(--accent)] text-[var(--text)] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{c.flag}</span>
              <span>{c.code}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Row: Language Selector & Support Department Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="lang" className="text-sm font-bold text-[var(--text)] flex items-center gap-2 mb-1.5">
            <Globe2 className="w-4 h-4 text-[var(--accent)]" /> Appeal Language
          </label>
          <select
            id="lang"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value as LanguageCode)}
            className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)] text-base font-bold outline-none transition-all focus:border-[var(--accent)] cursor-pointer"
          >
            <option value="en">🇬🇧 English Mail (Recommended)</option>
            <option value="ur">🇵🇰 Urdu Mail (اردو)</option>
            <option value="ar">🇸🇦 Arabic Mail (العربية)</option>
          </select>
        </div>

        <div>
          <label htmlFor="supportEmail" className="text-sm font-bold text-[var(--text)] flex items-center gap-2 mb-1.5">
            <Mail className="w-4 h-4 text-[var(--accent)]" /> Official Support Recipient
          </label>
          <select
            id="supportEmail"
            value={targetEmail}
            onChange={(e) => setTargetEmail(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)] text-base font-semibold outline-none transition-all focus:border-[var(--accent)] cursor-pointer"
          >
            {OFFICIAL_SUPPORT_EMAILS.map((item) => (
              <option key={item.email} value={item.email}>
                {item.name} ({item.email})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Email Subject */}
      <div className="mb-5">
        <label htmlFor="subject" className="text-sm font-bold text-[var(--text)] flex items-center gap-2 mb-1.5">
          <FileText className="w-4 h-4 text-[var(--accent)]" /> Email Subject Line
        </label>
        <input
          id="subject"
          type="text"
          value={emailSubject}
          onChange={(e) => setEmailSubject(e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)] text-sm font-semibold outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)]"
        />
      </div>

      {/* Generated Appeal Textarea */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1.5">
          <label htmlFor="mail" className="text-sm font-bold text-[var(--text)] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--accent)]" /> Generated Appeal Draft
          </label>
          <span className="text-xs text-[var(--muted)]">
            {generatedBody.length} characters • {generatedBody.split(/\s+/).filter(Boolean).length} words
          </span>
        </div>

        <textarea
          id="mail"
          value={generatedBody}
          onChange={(e) => setGeneratedBody(e.target.value)}
          dir={isRtl ? 'rtl' : 'ltr'}
          className={`w-full min-h-[380px] sm:min-h-[420px] p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--card2)] text-[var(--text)] text-sm sm:text-base outline-none transition-all focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--ring)] resize-y ${
            selectedLang === 'ur'
              ? 'font-urdu text-base sm:text-lg leading-loose'
              : selectedLang === 'ar'
              ? 'font-arabic text-base sm:text-lg leading-relaxed'
              : 'leading-relaxed font-sans'
          }`}
        />
      </div>

      {/* Primary Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
        <button
          type="button"
          onClick={handleManualGenerate}
          className="w-full py-3.5 px-5 rounded-xl font-extrabold text-white text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          style={{ background: 'var(--accent)', boxShadow: '0 8px 20px var(--shadow)' }}
        >
          <Sparkles className="w-4 h-4" />
          ⚡ GENERATE APPEAL
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="w-full py-3.5 px-5 rounded-xl font-extrabold text-white text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          style={{
            background: copied ? '#10b981' : '#6366f1',
            boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
          }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copyFeedbackText}
        </button>
      </div>

      {/* Email Client & Web Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
        <button
          type="button"
          onClick={handleOpenEmailDraft}
          className="w-full py-3.5 px-5 rounded-xl font-extrabold text-white text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          style={{ background: '#2563eb', boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)' }}
        >
          <Mail className="w-4 h-4" />
          📧 OPEN EMAIL DRAFT (MAILTO)
        </button>

        <button
          type="button"
          onClick={handleOpenGmailWeb}
          className="w-full py-3.5 px-5 rounded-xl font-extrabold text-white text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          style={{ background: '#ea4335', boxShadow: '0 8px 20px rgba(234, 67, 53, 0.25)' }}
        >
          <Send className="w-4 h-4" />
          🌐 COMPOSE IN GMAIL WEB
        </button>
      </div>

      {/* Official WhatsApp Support Review Route */}
      <a
        href="https://www.whatsapp.com/contact/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-5 rounded-xl font-black text-white text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg text-center mb-5"
        style={{ background: '#075e54', boxShadow: '0 8px 20px rgba(7, 94, 84, 0.3)' }}
      >
        <ShieldCheck className="w-5 h-5" />
        ✅ OFFICIAL WHATSAPP CONTACT / REVIEW PORTAL
        <ExternalLink className="w-4 h-4 opacity-75" />
      </a>

      {/* Informative Note */}
      <div
        className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--card2)] text-xs sm:text-sm leading-relaxed flex items-start gap-3"
        style={{ color: 'var(--muted)' }}
      >
        <AlertCircle className="w-5 h-5 flex-shrink-0 text-[var(--accent)] mt-0.5" />
        <div>
          <strong className="text-[var(--text)]">Important Note:</strong> A normal browser website cannot silently send
          an email from your personal Gmail or email account. The email buttons prepare a complete, pre-formatted draft
          in your email app or Gmail web composer. You simply review it and press <strong>Send</strong>.
        </div>
      </div>
    </section>
  );
};
