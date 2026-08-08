import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactForms from '@/components/ContactForms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'Contact Us - Write Hangul',
    description: 'Get in touch with the Write Hangul team.',
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-12 text-center md:text-left">{t('title')}</h1>

      <ContactForms />
    </main>
  );
}
