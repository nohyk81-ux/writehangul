import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="relative w-full border-b-2 border-muk/10 bg-white print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
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
        </div>
        
        {/* Right Section: Language & Guest Progress */}
        <div className="flex flex-col items-end text-right">
          <div className="mb-2 flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
            <div className="flex gap-2 items-center">
              <Link href="/" locale="en" className="hover:scale-110 transition-transform" title="English">
                <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" width="20" alt="English" className="rounded-sm shadow-sm" />
              </Link>
              <Link href="/" locale="jp" className="hover:scale-110 transition-transform" title="日本語">
                <img src="https://flagcdn.com/w20/jp.png" srcSet="https://flagcdn.com/w40/jp.png 2x" width="20" alt="日本語" className="rounded-sm shadow-sm" />
              </Link>
              <Link href="/" locale="cn" className="hover:scale-110 transition-transform" title="简体中文">
                <img src="https://flagcdn.com/w20/cn.png" srcSet="https://flagcdn.com/w40/cn.png 2x" width="20" alt="简体中文" className="rounded-sm shadow-sm" />
              </Link>
              <Link href="/" locale="es" className="hover:scale-110 transition-transform" title="Español">
                <img src="https://flagcdn.com/w20/es.png" srcSet="https://flagcdn.com/w40/es.png 2x" width="20" alt="Español" className="rounded-sm shadow-sm" />
              </Link>
              <Link href="/" locale="id" className="hover:scale-110 transition-transform" title="Bahasa Indonesia">
                <img src="https://flagcdn.com/w20/id.png" srcSet="https://flagcdn.com/w40/id.png 2x" width="20" alt="Bahasa Indonesia" className="rounded-sm shadow-sm" />
              </Link>
              <Link href="/" locale="vn" className="hover:scale-110 transition-transform" title="Tiếng Việt">
                <img src="https://flagcdn.com/w20/vn.png" srcSet="https://flagcdn.com/w40/vn.png 2x" width="20" alt="Tiếng Việt" className="rounded-sm shadow-sm" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
