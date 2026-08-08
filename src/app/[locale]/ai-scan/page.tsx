import { setRequestLocale } from 'next-intl/server';
import AiScanClient from './AiScanClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'AI Image Scanner - Write Hangul',
    description: 'Take a picture of any Korean text and instantly get the pronunciation, meaning, and a custom practice sheet.',
  };
}

export default async function AiScanPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-4xl mx-auto w-full items-center min-h-[calc(100vh-200px)]">
      <header className="mb-10 text-center w-full">
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto border border-purple-200 text-purple-600">
          ✨
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-muk mb-4">AI Photo Scanner</h1>
        <p className="text-muk/70 max-w-lg mx-auto text-lg">
          Snap a photo of Korean text (signs, menus, books) or upload an image. Our AI will analyze it, give you the meaning, and create a practice sheet instantly.
        </p>
      </header>

      <AiScanClient />
    </main>
  );
}
