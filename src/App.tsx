import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Header } from './components/Header';
import { UnlockSection } from './components/UnlockSection';
import { AppealGenerator } from './components/AppealGenerator';
import { SocialSection } from './components/SocialSection';
import { AboutSection } from './components/AboutSection';
import { AdminContact } from './components/AdminContact';
import { FAQSection } from './components/FAQSection';
import { UpdatesSection } from './components/UpdatesSection';
import { Footer } from './components/Footer';
import { Zap } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('gkTheme');
    return saved === 'white' || saved === 'pink' ? saved : 'dark';
  });

  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('gkToolUnlocked') === 'true';
  });

  useEffect(() => {
    document.body.classList.remove('white', 'pink');
    if (theme === 'white') {
      document.body.classList.add('white');
    } else if (theme === 'pink') {
      document.body.classList.add('pink');
    }
    localStorage.setItem('gkTheme', theme);
  }, [theme]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    localStorage.setItem('gkToolUnlocked', 'true');
    setTimeout(() => {
      const toolElement = document.getElementById('mainTool');
      if (toolElement) {
        toolElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Header with Brand & Theme Switchers */}
        <Header currentTheme={theme} onSelectTheme={setTheme} />

        {/* Hero Section */}
        <section className="text-center py-8 sm:py-10">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase border border-[var(--border)] mb-4"
            style={{ background: 'var(--card2)', color: 'var(--accent)' }}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            PROFESSIONAL DIGITAL TOOL
          </span>

          <h1
            className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3"
            style={{ color: 'var(--accent)' }}
          >
            WHATSAPP UNBAN TOOL PRO
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            Prepare a clear WhatsApp account review request in English, Urdu or Arabic and use the official WhatsApp
            support route.
          </p>
        </section>

        {/* Step 1: Subscribe First & Unlock Tool */}
        <UnlockSection isUnlocked={isUnlocked} onUnlock={handleUnlock} />

        {/* Step 2: Main Tool (Appears smoothly when unlocked) */}
        {isUnlocked && <AppealGenerator />}

        {/* Social Links Section */}
        <SocialSection />

        {/* About Section */}
        <AboutSection />

        {/* Admin Contact Section */}
        <AdminContact />

        {/* FAQ Section */}
        <FAQSection />

        {/* New Updates Section */}
        <UpdatesSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
