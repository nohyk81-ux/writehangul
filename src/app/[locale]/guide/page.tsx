import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { guideArticles } from '@/data/guides';
import { BookOpen, Clock, Tag, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';

  return {
    title: isKo 
      ? '한글 학습 가이드 & 필기 비법 컬렉션 - Write Hangul' 
      : 'Hangul Learning Guides & Handwriting Mastery - Write Hangul',
    description: isKo
      ? '한글의 과학적 창제 원리부터 바른 획순, 외국어 이름 한글 표기법, 손글씨의 뇌과학적 효과까지 깊이 있는 한국어 학습 아티클을 확인해보세요.'
      : 'Comprehensive educational guides on the scientific principles of Hangul, stroke order rules, Korean name transliteration, and handwriting neuroscience.',
  };
}

export default async function GuidePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const getLocalized = (obj: Record<string, any>, fallbackLang = 'en') => {
    return obj[locale] || obj[fallbackLang] || Object.values(obj)[0] || '';
  };

  return (
    <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8 pt-8 md:pt-14">
      {/* Header Banner */}
      <section className="text-center mb-12 md:mb-16 relative">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase mb-4 shadow-sm">
          <Sparkles size={16} className="text-blue-600" />
          Write Hangul Educational Library
        </div>
        <h1 className="text-3xl md:text-5xl font-bold font-serif text-muk mb-4 tracking-tight leading-tight">
          {locale === 'ko' ? '한글 배움터 & 필기 과학 가이드' : 'Hangul Learning & Handwriting Guides'}
        </h1>
        <p className="text-muk/70 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          {locale === 'ko'
            ? '세종대왕의 창제 원리부터 손끝으로 익히는 바른 획순, 외국어 이름 표기법까지 언어학과 인지과학이 담긴 전문 가이드를 만나보세요.'
            : 'Explore in-depth articles on King Sejong’s phonetic genius, stroke order ergonomics, name transliteration, and the cognitive power of physical handwriting.'}
        </p>
        <div className="w-24 h-1 bg-seal mx-auto mt-6 rounded-full opacity-80"></div>
      </section>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {guideArticles.map((article) => {
          const title = getLocalized(article.title);
          const subtitle = getLocalized(article.subtitle);
          const summary = getLocalized(article.summary);

          return (
            <article 
              key={article.slug}
              className="bg-white rounded-3xl border border-muk/10 shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-60 pointer-events-none group-hover:scale-150 transition-transform"></div>

              <div>
                {/* Meta badges */}
                <div className="flex items-center justify-between gap-3 text-xs text-muk/60 mb-4 font-medium">
                  <span className="bg-hanji px-3 py-1 rounded-lg border border-muk/10 font-bold text-muk tracking-wider uppercase">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-muk/40" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title & Icon */}
                <Link href={`/guide/${article.slug}`} className="block group-hover:text-blue-700 transition-colors">
                  <div className="text-4xl mb-3 select-none">{article.icon}</div>
                  <h2 className="text-2xl font-bold font-serif text-muk mb-2 group-hover:text-blue-800 transition-colors leading-snug">
                    {title}
                  </h2>
                </Link>

                <p className="text-sm font-medium text-seal mb-3 line-clamp-1">
                  {subtitle}
                </p>

                <p className="text-muk/70 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                  {summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-gray-100/80 text-muk/70 px-2.5 py-1 rounded-md"
                    >
                      <Tag size={10} className="text-muk/40" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read button */}
              <div className="pt-4 border-t border-muk/5 flex items-center justify-between mt-auto">
                <span className="text-xs text-muk/40 font-medium">{article.date}</span>
                <Link 
                  href={`/guide/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-900 group-hover:translate-x-1 transition-all"
                >
                  <span>{locale === 'ko' ? '전문 읽기' : 'Read Article'}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Mission / Value Box */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold font-serif mb-3">
            {locale === 'ko' ? '이론을 배웠다면, 이제 손끝으로 체득해보세요.' : 'Mastered the theory? Put pen to paper.'}
          </h3>
          <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
            {locale === 'ko'
              ? 'Write Hangul은 누구나 무료로 고화질 한국어 손글씨 연습장을 만들 수 있는 열린 교육 도구입니다. 지금 바로 나만의 맞춤형 PDF를 생성해보세요.'
              : 'Write Hangul provides free, calibrated manuscript PDFs designed to accelerate muscle memory and clean stroke aesthetics. Completely free for learners and educators worldwide.'}
          </p>
        </div>
        <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link
            href="/alphabet"
            className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md text-center"
          >
            {locale === 'ko' ? '자모음 획순 연습장' : 'Alphabet Practice'}
          </Link>
          <Link
            href="/#my-name"
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md text-center border border-blue-500/30"
          >
            {locale === 'ko' ? '내 이름 쓰기' : 'Write My Name'}
          </Link>
        </div>
      </section>
    </main>
  );
}
