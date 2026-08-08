import { setRequestLocale } from 'next-intl/server';
import MyNameClient from './MyNameClient';

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
    </main>
  );
}
