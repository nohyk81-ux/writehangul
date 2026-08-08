import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: 'About Us - Write Hangul',
    description: 'Learn more about Write Hangul and our mission to spread the beauty of Korean handwriting.',
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1 max-w-3xl mx-auto w-full p-6 md:p-12">
      <h1 className="text-4xl font-serif font-bold text-muk mb-8">About Us</h1>
      
      <div className="prose prose-lg prose-slate">
        <p>
          Welcome to <strong>Write Hangul</strong> (formerly Daily Hangul). Our mission is to make learning the Korean alphabet intuitive, beautiful, and accessible to everyone around the world.
        </p>
        
        <h2>Our Vision</h2>
        <p>
          We believe that writing is more than just communication; it's an art form. By combining traditional Korean aesthetics with modern web technologies, we aim to provide the best free platform for generating custom Hangul practice sheets.
        </p>
        
        <h2>How It Works</h2>
        <p>
          Whether you want to learn the basic alphabet, write your name in Korean, or scan Korean text from a photo, our platform instantly generates a high-quality PDF designed specifically for handwriting practice. All our templates feature a universal margin design ensuring they print perfectly on both A4 and US Letter paper.
        </p>

        <p className="mt-8 text-sm text-muk/60">
          Last updated: August 2026
        </p>
      </div>
    </main>
  );
}
