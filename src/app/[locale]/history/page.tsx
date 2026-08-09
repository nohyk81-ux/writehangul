import { setRequestLocale, getTranslations } from 'next-intl/server';
import { BookOpen, Sparkles, Users, Music, Info } from 'lucide-react';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'History' });
  return {
    title: `${t('title')} - Write Hangul`,
    description: t('subtitle'),
  };
}

export default async function HistoryPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'History' });

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-muk mb-6">{t('title')}</h1>
        <p className="text-xl text-muk/70 font-medium mb-8 max-w-2xl mx-auto">{t('subtitle')}</p>
        <div className="w-24 h-1.5 bg-seal mx-auto rounded-full"></div>
      </div>
      
      <div className="flex flex-col gap-10">
        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-muk/5 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <BookOpen size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-4 flex items-center gap-3">
              <span className="text-amber-500 font-serif">01.</span> {t('section1Title')}
            </h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section1Text')}
            </p>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-muk/5 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <Sparkles size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-4 flex items-center gap-3">
              <span className="text-blue-500 font-serif">02.</span> {t('section2Title')}
            </h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section2Text')}
            </p>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-muk/5 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <Users size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-4 flex items-center gap-3">
              <span className="text-emerald-500 font-serif">03.</span> {t('section3Title')}
            </h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section3Text')}
            </p>
          </div>
        </section>

        <section className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-muk/5 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow group">
          <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
            <Music size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-4 flex items-center gap-3">
              <span className="text-purple-500 font-serif">04.</span> {t('section4Title')}
            </h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section4Text')}
            </p>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="mt-12 bg-gray-50/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
            <Info size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-700 mb-1">{t('copyrightTitle')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('copyrightText')}
            </p>
          </div>
        </section>
      </div>

    </main>
  );
}
