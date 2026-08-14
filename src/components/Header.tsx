import React from 'react';
import { ThemeMode } from '../types';
import { Moon, Sun, Heart } from 'lucide-react';

interface HeaderProps {
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, onSelectTheme }) => {
  return (
    <header className="flex justify-between items-center gap-4 py-4 flex-wrap border-b border-[var(--border)] pb-4 mb-2">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg transition-transform hover:scale-105"
          style={{ background: 'var(--accent)', boxShadow: '0 8px 25px var(--shadow)' }}
        >
          👑
        </div>
        <div>
          <div className="text-2xl font-black tracking-tight" style={{ color: 'var(--accent)' }}>
            GHUFRAN KING
          </div>
          <div className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
            Digital Tools • WhatsApp Support • AI & Technology
          </div>
        </div>
      </div>

      {/* Theme Toggles */}
      <div className="flex items-center gap-2 bg-[var(--card2)] p-1.5 rounded-full border border-[var(--border)]">
        <button
          type="button"
          onClick={() => onSelectTheme('dark')}
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
            currentTheme === 'dark'
              ? 'bg-[var(--accent)] text-white shadow-md scale-105'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
          title="Dark Mode"
          aria-label="Dark Mode"
        >
          <Moon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => onSelectTheme('white')}
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
            currentTheme === 'white'
              ? 'bg-[var(--accent)] text-white shadow-md scale-105'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
          title="White Mode"
          aria-label="White Mode"
        >
          <Sun className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => onSelectTheme('pink')}
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all cursor-pointer ${
            currentTheme === 'pink'
              ? 'bg-[var(--accent)] text-white shadow-md scale-105'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
          }`}
          title="Pink Mode"
          aria-label="Pink Mode"
        >
          <Heart className="w-4 h-4 fill-current" />
        </button>
      </div>
    </header>
  );
};
