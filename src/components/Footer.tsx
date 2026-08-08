import { Link } from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-muk/10 py-8 mt-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muk/60 text-sm">
          &copy; {new Date().getFullYear()} Write Hangul. All rights reserved.
        </div>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-muk/70">
          <Link href="/about" className="hover:text-seal transition-colors">About</Link>
          <Link href="/privacy" className="hover:text-seal transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-seal transition-colors">Terms of Use</Link>
          <Link href="/contact" className="hover:text-seal transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
