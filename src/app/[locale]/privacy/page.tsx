import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Database, Settings, Globe, Mail } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Privacy' });
  return {
    title: `${t('title')} - Write Hangul`,
    description: `Privacy Policy for Write Hangul.`,
  };
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-muk mb-4">{t('title')}</h1>
        <div className="w-20 h-1.5 bg-seal mx-auto rounded-full"></div>
      </div>
      
      <div className="flex flex-col gap-8">
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-muk/10 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <Database size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-3">{t('section1Title')}</h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section1Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-muk/10 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <Settings size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-3">{t('section2Title')}</h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section2Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-muk/10 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <Globe size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-3">{t('section3Title')}</h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section3Text')}
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-sm border border-muk/10 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <Mail size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-muk mb-3">{t('section4Title')}</h2>
            <p className="text-lg text-muk/80 leading-relaxed">
              {t('section4Text')}
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
