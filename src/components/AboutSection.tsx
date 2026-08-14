import React from 'react';

const BADGES = [
  'English 🇬🇧',
  'Urdu 🇵🇰',
  'Arabic 🇸🇦',
  'Mobile Friendly 📱',
  'Dark Mode 🌙',
  'White Mode 🤍',
  'Pink Mode 🌸',
  'Direct Mailto 📧',
  'Instant Copy 📋',
  'RTL Support ✍️',
];

export const AboutSection: React.FC = () => {
  return (
    <section
      className="card rounded-3xl p-6 sm:p-8 transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <h2 className="text-xl sm:text-2xl font-black text-[var(--text)] mb-4 flex items-center gap-2">
        <span>ℹ️</span> About This Tool
      </h2>

      <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
        <p>
          <strong className="text-[var(--text)]">GHUFRAN KING UNBAN TOOL PRO</strong> is a third-party
          support-appeal helper designed to help users prepare a clear, professional WhatsApp account review request.
        </p>

        <p>
          The tool provides professional templates in <strong>English</strong>, <strong>Urdu</strong>, and{' '}
          <strong>Arabic</strong> and automatically formats the request with the user's international WhatsApp phone
          number.
        </p>

        <p className="text-xs sm:text-sm bg-[var(--card2)] p-3.5 rounded-xl border border-[var(--border)]">
          ⚠️ <strong>Disclaimer:</strong> This website is not affiliated with, owned by, or operated by WhatsApp LLC or
          Meta Platforms, Inc. The final decision regarding any account restriction or unban is made solely by WhatsApp
          Support.
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <div className="text-xs font-bold uppercase tracking-wider mb-2.5 text-[var(--text)]">
          Tool Capabilities & Modes:
        </div>
        <div className="flex flex-wrap gap-2">
          {BADGES.map((b) => (
            <span
              key={b}
              className="text-xs font-bold px-3 py-1 rounded-full border border-[var(--border)] transition-colors hover:border-[var(--accent)]"
              style={{ background: 'var(--card2)', color: 'var(--accent)' }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
