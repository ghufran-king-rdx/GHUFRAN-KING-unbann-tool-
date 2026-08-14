import React, { useState } from 'react';
import { FAQ_LIST } from '../templates';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="card rounded-3xl p-6 sm:p-8 transition-all border border-[var(--border)] bg-[var(--card)] shadow-2xl mt-6"
      style={{ boxShadow: '0 14px 40px var(--shadow)' }}
    >
      <h2 className="text-xl sm:text-2xl font-black text-[var(--text)] mb-4 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-[var(--accent)]" />
        <span>Frequently Asked Questions</span>
      </h2>

      <div className="divide-y divide-[var(--border)]">
        {FAQ_LIST.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="py-4 first:pt-1 last:pb-1">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left font-bold text-sm sm:text-base text-[var(--text)] hover:text-[var(--accent)] transition-colors py-1 cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[var(--accent)]' : 'text-[var(--muted)]'
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  className="mt-2.5 text-xs sm:text-sm leading-relaxed pr-4 animate-fade-in"
                  style={{ color: 'var(--muted)' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
