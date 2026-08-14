import React, { useState } from 'react';
import { Youtube, CheckCircle2, Loader2, Sparkles, Lock, Unlock } from 'lucide-react';

interface UnlockSectionProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export const UnlockSection: React.FC<UnlockSectionProps> = ({ isUnlocked, onUnlock }) => {
  const [unlockStatus, setUnlockStatus] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleSubscribeClick = () => {
    // Open YouTube channel in new tab
    window.open(
      'https://youtube.com/@ghufran_king_digital?si=5srU3KDPpM3Z5-46',
      '_blank',
      'noopener,noreferrer'
    );

    setIsProcessing(true);
    setUnlockStatus('⏳ YouTube opened — preparing your tool...');

    setTimeout(() => {
      setIsProcessing(false);
      setUnlockStatus('✅ Tool access unlocked successfully!');
      onUnlock();
    }, 1000);
  };

  return (
    <section
      className="card relative overflow-hidden rounded-3xl p-6 sm:p-8 text-center transition-all border-2 border-[var(--accent)] bg-[var(--card)] shadow-2xl mt-5"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--accent)]" />

      <div className="flex items-center justify-center gap-2 mb-3">
        <span
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: 'var(--card2)', color: 'var(--accent)' }}
        >
          {isUnlocked ? (
            <>
              <Unlock className="w-3.5 h-3.5" /> STEP 1 • COMPLETED
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5" /> STEP 1 • REQUIRED
            </>
          )}
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mb-3">
        {isUnlocked ? '🎉 Tool Unlocked & Ready!' : '🔓 Subscribe First & Unlock Tool'}
      </h2>

      <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
        More updates, new methods, AI tools, tutorials aur digital content ke liye pehle{' '}
        <strong className="text-[var(--text)]">GHUFRAN KING DIGITAL</strong> YouTube channel open karein.
        <br className="hidden sm:inline" />
        <span className="block mt-2 text-xs sm:text-sm">
          Channel open karne ke baad neeche button press karein. Tool access uske baad unlock ho jayega.
        </span>
      </p>

      {!isUnlocked ? (
        <button
          type="button"
          onClick={handleSubscribeClick}
          disabled={isProcessing}
          className="w-full sm:w-auto min-w-[300px] mx-auto py-4 px-8 rounded-2xl font-black text-white text-base tracking-wide flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          style={{
            background: '#ff0000',
            boxShadow: '0 10px 25px rgba(255, 0, 0, 0.35)',
          }}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              VERIFYING ACCESS...
            </>
          ) : (
            <>
              <Youtube className="w-6 h-6 fill-current" />
              ▶ SUBSCRIBE GHUFRAN KING DIGITAL
            </>
          )}
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm"
            style={{ background: 'var(--card2)', color: 'var(--accent)', border: '1px solid var(--border)' }}
          >
            <CheckCircle2 className="w-5 h-5" />
            Tool Access Granted
          </div>
          <button
            type="button"
            onClick={handleSubscribeClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Visit Channel Again
          </button>
        </div>
      )}

      {unlockStatus && (
        <div
          className="mt-4 font-bold text-sm animate-fade-in inline-flex items-center gap-2"
          style={{ color: 'var(--accent)' }}
        >
          {unlockStatus}
        </div>
      )}
    </section>
  );
};
