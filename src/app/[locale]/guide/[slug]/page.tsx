import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { guideArticles } from '@/data/guides';
import { guideUiData } from '@/data/multilingualEducational';
import { routing } from '@/i18n/routing';
import { ArrowLeft, Clock, Calendar, Tag, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of routing.locales) {
    for (const article of guideArticles) {
      params.push({ locale, slug: article.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = guideArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found - Write Hangul' };
  }

  const title = article.title[locale] || article.title['en'] || Object.values(article.title)[0];
  const summary = article.summary[locale] || article.summary['en'] || Object.values(article.summary)[0];

  return {
    title: `${title} - Write Hangul Guide`,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: 'article',
      url: `https://writehangul.com/${locale}/guide/${slug}`,
    }
  };
}

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = guideArticles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const getLocalized = (obj: Record<string, any>, fallbackLang = 'en') => {
    return obj[locale] || obj[fallbackLang] || Object.values(obj)[0] || '';
  };

  const title = getLocalized(article.title);
  const subtitle = getLocalized(article.subtitle);
  const summary = getLocalized(article.summary);
  const relatedTitle = getLocalized(article.relatedTool.title);
  const relatedDesc = getLocalized(article.relatedTool.desc);
  const relatedBtn = getLocalized(article.relatedTool.btn);

  const otherArticles = guideArticles.filter((a) => a.slug !== slug);

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 pt-8 md:pt-12">
      {/* Back button */}
      <div className="mb-8">
        <Link 
          href="/guide"
          className="inline-flex items-center gap-2 text-sm font-bold text-muk/60 hover:text-muk transition-colors bg-white px-4 py-2 rounded-full border border-muk/10 shadow-sm"
        >
          <ArrowLeft size={16} />
          <span>{getLocalized(guideUiData.backToGuides)}</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10 pb-8 border-b border-muk/10">
        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muk/60 mb-4 font-medium">
          <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full border border-blue-200">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-muk/40" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={14} className="text-muk/40" />
            {article.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-muk mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-seal font-medium leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Author / Editorial line */}
        <div className="flex items-center justify-between text-xs text-muk/50 pt-4 border-t border-muk/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-hanji border border-muk/10 flex items-center justify-center font-serif font-bold text-seal text-sm">
              한
            </div>
            <div>
              <span className="font-bold text-muk">Write Hangul Editorial Board</span>
              <span className="block text-[11px]">{getLocalized(guideUiData.editorialBadge)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">{getLocalized(guideUiData.certified)}</span>
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>
        </div>
      </header>

      {/* Executive Summary Box */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border-l-4 border-blue-600 rounded-r-2xl p-6 md:p-8 mb-12 shadow-sm">
        <h2 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center gap-2">
          <Sparkles size={14} />
          {getLocalized(guideUiData.execSummary)}
        </h2>
        <p className="text-muk/90 text-base md:text-lg leading-relaxed font-medium">
          {summary}
        </p>
      </section>

      {/* Main Article Content */}
      <article className="prose prose-slate max-w-none mb-16">
        {article.sections.map((sec, idx) => {
          const heading = getLocalized(sec.heading);
          const paragraphs = (sec.paragraphs[locale] || sec.paragraphs['en'] || Object.values(sec.paragraphs)[0]) as string[];
          const takeaway = sec.keyTakeaway ? getLocalized(sec.keyTakeaway) : null;

          return (
            <section key={idx} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-muk mb-4 flex items-baseline gap-3">
                {heading}
              </h2>

              <div className="space-y-4 text-base md:text-lg text-muk/80 leading-relaxed">
                {paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {takeaway && (
                <div className="mt-6 bg-hanji border border-muk/10 rounded-xl p-4 md:p-5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-seal/10 text-seal flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    💡
                  </div>
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider text-seal block mb-0.5">
                      {getLocalized(guideUiData.keyTakeaway)}
                    </span>
                    <p className="text-sm md:text-base text-muk/80 font-medium">
                      {takeaway}
                    </p>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </article>

      {/* Related Tool Call To Action */}
      <section className="bg-white border-2 border-blue-600/20 rounded-3xl p-6 md:p-10 shadow-lg mb-16 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              {getLocalized(guideUiData.integratedTool)}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-muk mb-2">
              {relatedTitle}
            </h3>
            <p className="text-muk/70 text-sm md:text-base max-w-xl">
              {relatedDesc}
            </p>
          </div>
          <Link
            href={article.relatedTool.href as any}
            className="shrink-0 bg-blue-800 hover:bg-blue-900 text-white font-bold py-3.5 px-7 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
          >
            <span>{relatedBtn}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Explore More Articles */}
      <section className="border-t border-muk/10 pt-12">
        <h3 className="text-xl md:text-2xl font-bold font-serif text-muk mb-6">
          {getLocalized(guideUiData.continueReading)}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherArticles.map((other) => {
            const oTitle = getLocalized(other.title);
            return (
              <Link 
                key={other.slug}
                href={`/guide/${other.slug}`}
                className="bg-white p-5 rounded-2xl border border-muk/10 hover:border-blue-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl mb-2 block">{other.icon}</span>
                  <h4 className="font-bold text-muk text-sm group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                    {oTitle}
                  </h4>
                </div>
                <div className="text-xs text-muk/40 mt-4 flex items-center justify-between">
                  <span>{other.readTime}</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
