import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-10 px-4 text-xs sm:text-sm border-t border-[var(--border)] mt-12 space-y-1.5" style={{ color: 'var(--muted)' }}>
      <div>
        © 2026{' '}
        <span className="font-black" style={{ color: 'var(--accent)' }}>
          GHUFRAN KING DIGITAL
        </span>
      </div>

      <div>
        Powered by{' '}
        <span className="font-black" style={{ color: 'var(--accent)' }}>
          GHUFRAN KING RDX
        </span>
      </div>

      <div className="text-xs">
        Professional Digital Tools, WhatsApp Support & Technology
      </div>
    </footer>
  );
};
