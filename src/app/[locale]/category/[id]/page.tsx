import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import vocabulary from '@/data/vocabulary.json';
import CategoryClient from './CategoryClient';
import PracticeSheet from '@/components/PracticeSheet';
import { categoryGuides } from '@/data/categoryGuides';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { BookOpen, Sparkles, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  const params: Array<{ locale: string; id: string }> = [];
  for (const locale of routing.locales) {
    for (const cat of vocabulary.categories) {
      params.push({ locale, id: cat.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }) {
  const { locale, id } = await params;
  const category = vocabulary.categories.find(c => c.id === id);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  const title = (category.translations as any)[locale] || (category.translations as any)['en'];
  const guide = categoryGuides[id];
  const desc = guide ? (guide.intro[locale] || guide.intro['en']) : `Learn how to write and pronounce ${title} in Korean.`;
  
  return {
    title: `${title} - Korean Handwriting Practice & Guide - Write Hangul`,
    description: desc,
    alternates: {
      canonical: `/${locale}/category/${id}`,
    }
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
  const guide = categoryGuides[id];

  const getLoc = (obj?: Record<string, string>) => {
    if (!obj) return '';
    return obj[locale] || obj['en'] || Object.values(obj)[0] || '';
  };

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-5xl mx-auto w-full">
      <header className="mb-8 print:hidden">
        {guide && (
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            {getLoc(guide.badge)}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-muk mb-3">{title}</h1>
        <p className="text-muk/80 max-w-3xl text-base md:text-lg leading-relaxed">
          {guide ? getLoc(guide.intro) : `Enhance your Korean writing skills with our curated list of ${title.toLowerCase()}.`}
        </p>
      </header>

      {/* Client Component for state and interactivity */}
      <CategoryClient categoryId={id} initialData={category.items} />

      {/* Rich Educational Section Below Practice Grid */}
      {guide && (
        <section className="mt-16 md:mt-20 pt-12 border-t-2 border-muk/10 print:hidden space-y-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-muk/10 shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-muk mb-3 flex items-center gap-2">
              <BookOpen size={24} className="text-blue-600" />
              <span>{getLoc(guide.title)}</span>
            </h2>
            <p className="text-muk/80 text-base md:text-lg leading-relaxed mb-6">
              {getLoc(guide.culturalContext)}
            </p>

            {guide.tips && guide.tips.length > 0 && (
              <div className="bg-hanji rounded-2xl p-5 border border-muk/10 space-y-3">
                <span className="font-bold text-xs uppercase tracking-wider text-seal block">
                  ✍️ Practical Handwriting & Usage Tips
                </span>
                {guide.tips.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-muk/80 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{getLoc(t)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {guide.funFact && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-6 md:p-8 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 text-xl">
                💡
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Cultural Insight & Fun Fact
                </span>
                <p className="text-muk/90 text-sm md:text-base leading-relaxed font-medium">
                  {getLoc(guide.funFact)}
                </p>
              </div>
            </div>
          )}

          <div className="text-center pt-4">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <span>Explore more Korean handwriting and culture guides</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* We need PracticeSheet rendered so window.print() prints the characters */}
      <div className="hidden print:block w-full">
        <PracticeSheet />
      </div>
    </main>
  );
}
