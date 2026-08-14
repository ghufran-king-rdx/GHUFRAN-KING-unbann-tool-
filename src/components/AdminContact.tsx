import React from 'react';
import { MessageCircle, Mail, Phone, ExternalLink } from 'lucide-react';

export const AdminContact: React.FC = () => {
  return (
    <section
      className="card rounded-3xl p-6 sm:p-8 text-center transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <div className="inline-flex p-3 rounded-2xl bg-[var(--card2)] text-2xl mb-3 shadow-inner">
        👑
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-[var(--text)] mb-2">
        Admin Contact & Support
      </h2>

      <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'var(--muted)' }}>
        Website, digital services, unban guidance, tools, aur general technical support ke liye admin se direct rabta karein.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto mb-6">
        <a
          href="https://wa.me/923113106280?text=Hello%20Ghufran%20King,%20I%20need%20help%20with%20WhatsApp%20Unban%20Tool."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-1 hover:brightness-110 shadow-lg"
          style={{ background: '#25D366' }}
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>CONTACT ADMIN ON WHATSAPP</span>
          <ExternalLink className="w-4 h-4 opacity-75" />
        </a>

        <a
          href="mailto:ghufranking914@gmail.com?subject=Ghufran%20King%20Unban%20Tool%20Inquiry"
          className="flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-1 hover:brightness-110 shadow-lg"
          style={{ background: 'var(--accent)' }}
        >
          <Mail className="w-5 h-5" />
          <span>ADMIN EMAIL</span>
        </a>
      </div>

      <div
        className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--card2)] max-w-md mx-auto text-xs sm:text-sm font-semibold space-y-1"
        style={{ color: 'var(--text)' }}
      >
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-[var(--accent)]" />
          <span>WhatsApp: +92 311 3106280</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-[var(--accent)]" />
          <span>Email: ghufranking914@gmail.com</span>
        </div>
      </div>
    </section>
  );
};
