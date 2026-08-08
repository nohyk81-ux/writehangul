import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import vocabulary from '@/data/vocabulary.json';
import CategoryClient from './CategoryClient';
import PracticeSheet from '@/components/PracticeSheet';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }) {
  const { locale, id } = await params;
  const category = vocabulary.categories.find(c => c.id === id);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  const title = (category.translations as any)[locale] || (category.translations as any)['en'];
  
  return {
    title: `${title} - Write Hangul`,
    description: `Learn how to write and pronounce ${title} in Korean. Download free PDF practice sheets.`,
  };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ locale: string, id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  
  const category = vocabulary.categories.find(c => c.id === id);
  if (!category) {
    notFound();
  }

  const title = (category.translations as any)[locale] || (category.translations as any)['en'];

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-5xl mx-auto w-full">
      <header className="mb-8 print:hidden">
        <h1 className="text-4xl font-bold font-serif text-muk mb-2">{title}</h1>
        {/* SEO-friendly multilingual description area */}
        <p className="text-muk/80 max-w-2xl">
          Enhance your Korean writing skills with our curated list of {title.toLowerCase()}. 
          Listen to the pronunciation and print out custom PDF practice sheets to write them beautifully.
        </p>
      </header>

      {/* Client Component for state and interactivity */}
      <CategoryClient categoryId={id} initialData={category.items} />

      {/* We need PracticeSheet rendered so window.print() prints the characters */}
      <div className="hidden print:block w-full">
        <PracticeSheet />
      </div>
    </main>
  );
}
