import React from 'react';
import { SOCIAL_LINKS } from '../templates';
import {
  MessageSquare,
  Radio,
  Send,
  Youtube,
  Facebook,
  Instagram,
  ExternalLink,
} from 'lucide-react';

export const SocialSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'group':
        return <MessageSquare className="w-5 h-5" />;
      case 'whatsapp':
        return <Radio className="w-5 h-5" />;
      case 'telegram':
        return <Send className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getButtonBg = (type: string) => {
    switch (type) {
      case 'group':
        return '#128C7E';
      case 'whatsapp':
        return '#25D366';
      case 'telegram':
        return '#0088cc';
      case 'youtube':
        return '#ff0000';
      case 'facebook':
        return '#1877F2';
      case 'instagram':
        return '#E1306C';
      default:
        return 'var(--accent)';
    }
  };

  return (
    <section
      className="card rounded-3xl p-6 sm:p-8 transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text)] mb-2 flex items-center justify-center gap-2">
          <span>🌐</span> GHUFRAN KING DIGITAL
        </h2>
        <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
          Join our official social channels for new updates, tutorials, tools, AI methods, and digital content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl font-bold text-white text-sm transition-all hover:-translate-y-1 hover:brightness-110 shadow-md group"
            style={{
              background: getButtonBg(link.type),
              boxShadow: `0 6px 16px var(--shadow)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="p-1 rounded-lg bg-black/15 group-hover:scale-110 transition-transform">
                {getIcon(link.type)}
              </span>
              <span>{link.name}</span>
            </div>

            <div className="flex items-center gap-1.5 opacity-90 text-xs font-semibold">
              {link.badge && (
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px]">
                  {link.badge}
                </span>
              )}
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
