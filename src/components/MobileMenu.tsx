'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Header');

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden text-muk p-1 hover:bg-muk/5 rounded-lg transition-colors absolute top-5 left-4 z-50"
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex justify-between items-center mb-8 border-b-2 border-muk/10 pb-4">
            <h2 className="text-2xl font-bold font-serif text-muk tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-white border-2 border-seal text-seal font-serif font-bold flex items-center justify-center rounded-sm transform -rotate-3 select-none text-sm shadow-sm">
                한
              </div>
              Write Hangul
            </h2>
            <button 
              onClick={closeMenu}
              className="text-muk p-2 hover:bg-muk/5 rounded-lg transition-colors"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-xl font-bold text-muk">
            <Link href="/alphabet" onClick={closeMenu} className="hover:text-seal transition-colors border-b border-muk/5 pb-4">
              {t('menuAlphabet')}
            </Link>
            <Link href="/history" onClick={closeMenu} className="hover:text-seal transition-colors border-b border-muk/5 pb-4">
              {t('menuHistory')}
            </Link>
            <Link href="/#category" onClick={closeMenu} className="hover:text-seal transition-colors border-b border-muk/5 pb-4">
              {t('menuCategory')}
            </Link>
            <Link href="/#my-name" onClick={closeMenu} className="hover:text-seal transition-colors border-b border-muk/5 pb-4">
              {t('menuMyName')}
            </Link>
            <Link href="/#learning-levels" onClick={closeMenu} className="hover:text-seal transition-colors border-b border-muk/5 pb-4">
              {t('menuLearn')}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
