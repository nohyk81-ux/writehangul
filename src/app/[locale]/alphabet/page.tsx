import { setRequestLocale } from 'next-intl/server';
import AlphabetPractice from '@/components/AlphabetPractice';

export default async function AlphabetPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full pt-10 md:pt-16">
      <AlphabetPractice />
    </main>
  );
}
