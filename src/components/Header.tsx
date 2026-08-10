import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="relative w-full border-b-2 border-muk/10 bg-white print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <MobileMenu />
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          {/* Authentic Korean Red Seal Stamp (Nakgwan) */}
          <div className="w-12 h-12 bg-white border-2 border-seal text-seal font-serif font-bold flex items-center justify-center rounded-sm transform -rotate-3 select-none text-2xl shadow-sm">
            한
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif text-muk tracking-tight leading-none">
              Write Hangul
            </h1>
          </div>
          <span className="text-2xl ml-2 opacity-80">✍️</span>
        </Link>
        
        {/* Right Section: Language & Navigation */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right mt-2 md:mt-0 w-full md:w-auto">
          <div className="flex items-center justify-center md:justify-end gap-4 md:gap-6 w-full">
            <nav className="hidden lg:flex items-center gap-3 xl:gap-6 text-muk font-bold text-sm xl:text-base">
              <Link href="/alphabet" className="hover:text-seal transition-colors whitespace-nowrap">{t('menuAlphabet')}</Link>
              <Link href="/history" className="hover:text-seal transition-colors whitespace-nowrap">{t('menuHistory')}</Link>
              <Link href="/#category" className="hover:text-seal transition-colors whitespace-nowrap">{t('menuCategory')}</Link>
              <Link href="/#my-name" className="hover:text-seal transition-colors whitespace-nowrap">{t('menuMyName')}</Link>
              <Link href="/#learning-levels" className="hover:text-seal transition-colors whitespace-nowrap">{t('menuLearn')}</Link>
            </nav>
            <div className="absolute top-5 right-4 md:static md:top-auto md:right-auto z-50">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
