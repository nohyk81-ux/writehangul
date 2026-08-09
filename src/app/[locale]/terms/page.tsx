import { setRequestLocale, getTranslations } from 'next-intl/server';
import { CheckCircle, FileText, AlertTriangle, Ban, RefreshCw } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms' });
  return {
    title: `${t('title')} - Write Hangul`,
    description: `Terms of Use and Conditions for Write Hangul.`,
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Terms' });

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-muk mb-4">{t('title')}</h1>
        <div className="w-20 h-1.5 bg-seal mx-auto rounded-full"></div>
      </div>
      
      <div className="flex flex-col gap-6 sm:gap-8">
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-muk/10 flex gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
            <CheckCircle size={24} className="sm:hidden" />
            <CheckCircle size={32} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-muk mb-2 sm:mb-3">{t('section1Title')}</h2>
            <p className="text-base sm:text-lg text-muk/80 leading-relaxed">
              {t('section1Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-muk/10 flex gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-50 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
            <FileText size={24} className="sm:hidden" />
            <FileText size={32} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-muk mb-2 sm:mb-3">{t('section2Title')}</h2>
            <p className="text-base sm:text-lg text-muk/80 leading-relaxed">
              {t('section2Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-muk/10 flex gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 text-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
            <AlertTriangle size={24} className="sm:hidden" />
            <AlertTriangle size={32} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-muk mb-2 sm:mb-3">{t('section3Title')}</h2>
            <p className="text-base sm:text-lg text-muk/80 leading-relaxed">
              {t('section3Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-muk/10 flex gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 text-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
            <Ban size={24} className="sm:hidden" />
            <Ban size={32} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-muk mb-2 sm:mb-3">{t('section4Title')}</h2>
            <p className="text-base sm:text-lg text-muk/80 leading-relaxed">
              {t('section4Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-muk/10 flex gap-4 sm:gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 text-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-inner mt-1 sm:mt-0">
            <RefreshCw size={24} className="sm:hidden" />
            <RefreshCw size={32} className="hidden sm:block" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-muk mb-2 sm:mb-3">{t('section5Title')}</h2>
            <p className="text-base sm:text-lg text-muk/80 leading-relaxed">
              {t('section5Text')}
            </p>
          </div>
        </section>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm font-medium text-muk/50 bg-muk/5 inline-block px-5 py-2.5 rounded-full border border-muk/10">
          {t('lastUpdated')}
        </p>
      </div>
    </main>
  );
}
