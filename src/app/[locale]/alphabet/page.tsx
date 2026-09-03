import { setRequestLocale } from 'next-intl/server';
import AlphabetPractice from '@/components/AlphabetPractice';
import { Link } from '@/i18n/routing';
import { BookOpen, ArrowRight } from 'lucide-react';
import { alphabetEducationalData } from '@/data/multilingualEducational';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const getLoc = (obj: any) => obj[locale] || obj['en'] || Object.values(obj)[0] || '';

  return {
    title: `${getLoc(alphabetEducationalData.title)} - Write Hangul`,
    description: getLoc(alphabetEducationalData.desc),
  };
}

export default async function AlphabetPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLoc = (obj: any) => obj[locale] || obj['en'] || Object.values(obj)[0] || '';

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full pt-6 md:pt-12">
      <AlphabetPractice />

      {/* Educational Article Section Below Tool */}
      <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 max-w-4xl mx-auto w-full print:hidden">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <BookOpen size={14} />
            {getLoc(alphabetEducationalData.badge)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-muk mb-4">
            {getLoc(alphabetEducationalData.title)}
          </h2>
          <p className="text-muk/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {getLoc(alphabetEducationalData.desc)}
          </p>
        </div>

        {/* 2 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-muk/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
              ㄱ~ㅎ
            </div>
            <h3 className="text-xl font-bold font-serif text-muk mb-3">
              {getLoc(alphabetEducationalData.card1Title)}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed mb-4">
              {getLoc(alphabetEducationalData.card1Desc)}
            </p>
            <div className="bg-hanji p-3 rounded-xl text-xs text-muk/80 font-medium">
              💡 {getLoc(alphabetEducationalData.card1Tip)}
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-muk/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
              ㅏ~ㅣ
            </div>
            <h3 className="text-xl font-bold font-serif text-muk mb-3">
              {getLoc(alphabetEducationalData.card2Title)}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed mb-4">
              {getLoc(alphabetEducationalData.card2Desc)}
            </p>
            <div className="bg-hanji p-3 rounded-xl text-xs text-muk/80 font-medium">
              💡 {getLoc(alphabetEducationalData.card2Tip)}
            </div>
          </div>
        </div>

        {/* Callout Link to In-Depth Stroke Order Guide */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
              {getLoc(alphabetEducationalData.bannerBadge)}
            </span>
            <h4 className="text-xl font-bold font-serif text-muk mb-1">
              {getLoc(alphabetEducationalData.bannerTitle)}
            </h4>
            <p className="text-sm text-muk/70">
              {getLoc(alphabetEducationalData.bannerDesc)}
            </p>
          </div>
          <Link
            href="/guide/hangul-stroke-order-guide"
            className="shrink-0 bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <span>{getLoc(alphabetEducationalData.bannerBtn)}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
