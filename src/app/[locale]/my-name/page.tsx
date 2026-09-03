import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { BookOpen, ArrowRight } from 'lucide-react';
import MyNameClient from './MyNameClient';
import { myNameEducationalData } from '@/data/multilingualEducational';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'My Name in Hangul - Write Hangul',
    description: 'Find out how to write your name in Korean and generate a custom PDF practice sheet.',
  };
}

export default async function MyNamePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const getLoc = (obj: any) => obj[locale] || obj['en'] || Object.values(obj)[0] || '';
  
  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full items-center justify-center min-h-[calc(100vh-200px)]">
      <header className="mb-10 text-center">
        <div className="w-20 h-20 bg-hanji rounded-full flex items-center justify-center text-4xl mb-6 mx-auto border border-muk/5">
          👤
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-muk mb-4">What's your name?</h1>
        <p className="text-muk/70 max-w-lg mx-auto text-lg">
          Enter your name in your native language, and we'll translate it into a natural Korean pronunciation for your custom practice sheet.
        </p>
      </header>

      <MyNameClient />

      {/* Educational Guide Section Below Tool */}
      <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 max-w-3xl mx-auto w-full print:hidden">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <BookOpen size={14} />
            {getLoc(myNameEducationalData.badge)}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-muk mb-3">
            {getLoc(myNameEducationalData.title)}
          </h2>
          <p className="text-muk/70 text-sm md:text-base leading-relaxed">
            {getLoc(myNameEducationalData.desc)}
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-muk/10 shadow-sm">
            <h3 className="font-bold text-base md:text-lg text-muk font-serif mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center">1</span>
              {getLoc(myNameEducationalData.rule1Title)}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed">
              {getLoc(myNameEducationalData.rule1Desc)}
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-muk/10 shadow-sm">
            <h3 className="font-bold text-base md:text-lg text-muk font-serif mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">2</span>
              {getLoc(myNameEducationalData.rule2Title)}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed">
              {getLoc(myNameEducationalData.rule2Desc)}
            </p>
          </div>
        </div>

        {/* Read More Callout */}
        <div className="bg-hanji rounded-2xl border border-muk/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-muk text-sm md:text-base font-serif mb-1">
              {getLoc(myNameEducationalData.calloutTitle)}
            </h4>
            <p className="text-xs md:text-sm text-muk/60">
              {getLoc(myNameEducationalData.calloutDesc)}
            </p>
          </div>
          <Link
            href="/guide/korean-name-transliteration-rules"
            className="shrink-0 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded-xl text-xs md:text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <span>{getLoc(myNameEducationalData.calloutBtn)}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
