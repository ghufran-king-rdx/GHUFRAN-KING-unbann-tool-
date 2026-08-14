import React from 'react';
import { Rocket, CheckCircle, Sparkles } from 'lucide-react';

const ROADMAP_ITEMS = [
  '📱 WhatsApp Latest Unban Methods & Anti-Ban Scripts',
  '🤖 Free AI Tools & Workflow Automation Tutorials',
  '🌐 Website & Digital Solutions Deployment Guides',
  '🎓 Step-by-Step Learning Content & Security Best Practices',
  '🔥 Exclusive Fast-Track Review Techniques',
  '📢 Real-Time Telegram and WhatsApp Alerts',
];

export const UpdatesSection: React.FC = () => {
  return (
    <section
      className="card rounded-3xl p-6 sm:p-8 transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Rocket className="w-6 h-6 text-[var(--accent)]" />
        <h2 className="text-xl sm:text-2xl font-black text-[var(--text)]">
          🚀 New Updates & Upcoming Content
        </h2>
      </div>

      <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
        <strong className="text-[var(--text)]">GHUFRAN KING DIGITAL</strong> par regular new content, AI tools,
        website solutions, WhatsApp guides, social media tips aur technology tutorials share kiye ja rahe hain.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ROADMAP_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 p-3.5 rounded-2xl border border-[var(--border)] bg-[var(--card2)] text-xs sm:text-sm font-semibold text-[var(--text)]"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
