'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChevronDown } from 'lucide-react';

const LOCALES = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'jp', name: '日本語', flag: 'jp' },
  { code: 'cn', name: '简体中文', flag: 'cn' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'id', name: 'Bahasa Indonesia', flag: 'id' },
  { code: 'vn', name: 'Tiếng Việt', flag: 'vn' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find(l => l.code === locale) || LOCALES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    setIsOpen(false);
    if (code !== locale) {
      router.push(pathname, { locale: code });
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        title="Change Language"
      >
        <img 
          src={`https://flagcdn.com/w20/${currentLocale.flag}.png`} 
          srcSet={`https://flagcdn.com/w40/${currentLocale.flag}.png 2x`} 
          width="20" 
          alt={currentLocale.name} 
          className="rounded-sm shadow-sm" 
        />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">{currentLocale.name}</span>
        <ChevronDown size={14} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden z-50 min-w-[150px]">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleLanguageChange(l.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors text-left ${l.code === locale ? 'bg-blue-50/50' : ''}`}
            >
              <img 
                src={`https://flagcdn.com/w20/${l.flag}.png`} 
                srcSet={`https://flagcdn.com/w40/${l.flag}.png 2x`} 
                width="20" 
                alt={l.name} 
                className="rounded-sm shadow-sm" 
              />
              <span className={`text-sm ${l.code === locale ? 'font-bold text-blue-700' : 'font-medium text-gray-700'}`}>
                {l.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
