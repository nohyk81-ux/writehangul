import { setRequestLocale } from 'next-intl/server';
import AlphabetPractice from '@/components/AlphabetPractice';
import { Link } from '@/i18n/routing';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
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
      ? '한글 자음·모음 24자 획순 쓰기 연습장 & 완벽 가이드 - Write Hangul' 
      : 'Hangul Alphabet Stroke Order Practice Sheets & Guide - Write Hangul',
    description: isKo
      ? '한글 기본 14자음과 10모음의 정확한 획순, 발음 기호, 훈민정음 원고지 쓰는 법을 무료 PDF로 인쇄하고 학습하세요.'
      : 'Learn the proper stroke order and pronunciation of the 24 basic Korean consonants and vowels. Download free calibrated handwriting worksheets.',
  };
}

export default async function AlphabetPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isKo = locale === 'ko';

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full pt-6 md:pt-12">
      <AlphabetPractice />

      {/* Educational Article Section Below Tool */}
      <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 max-w-4xl mx-auto w-full print:hidden">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <BookOpen size={14} />
            {isKo ? '한글 자모음 완벽 해설' : 'Hangul Alphabet Fundamentals'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-muk mb-4">
            {isKo 
              ? '한글 기초 24자의 구조와 바른 필기법' 
              : 'Understanding the 24 Basic Hangul Letters & Syllable Architecture'}
          </h2>
          <p className="text-muk/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {isKo
              ? '한글은 무작위로 그려진 기호가 아닙니다. 사람의 소리 나는 원리를 형상화한 자음 14자와 하늘·땅·사람의 철학을 담은 모음 10자의 결합 원리를 익혀보세요.'
              : 'Hangul is an engineered phonetic system. Explore the anatomical logic of 14 consonants and the cosmological harmony of 10 primary vowels.'}
          </p>
        </div>

        {/* 3 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-muk/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
              ㄱ~ㅎ
            </div>
            <h3 className="text-xl font-bold font-serif text-muk mb-3">
              {isKo ? '기본 14자음의 발음 기관 상형 원리' : '14 Consonants: Anatomical Articulation'}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed mb-4">
              {isKo
                ? '기본 자음(ㄱ, ㄴ, ㅁ, ㅅ, ㅇ)은 혀, 입술, 이, 목구멍의 모양을 본떠 만들었습니다. 거센소리로 갈수록 획이 하나씩 더해져(가획) 소리의 세기와 글자 형태가 완벽하게 일치합니다.'
                : 'The foundational consonants (ㄱ, ㄴ, ㅁ, ㅅ, ㅇ) physically mirror the shape of the mouth, tongue, and throat. Stronger sounds add logical strokes (e.g. ㄱ → ㅋ, ㄴ → ㄷ → ㅌ).'}
            </p>
            <div className="bg-hanji p-3 rounded-xl text-xs text-muk/80 font-medium">
              💡 {isKo ? '가획의 원리: ㄱ(기본) → ㅋ(거센소리) / ㄴ → ㄷ → ㅌ' : 'Stroke addition: ㄱ (plain) → ㅋ (aspirated) / ㄴ → ㄷ → ㅌ'}
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-muk/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
              ㅏ~ㅣ
            </div>
            <h3 className="text-xl font-bold font-serif text-muk mb-3">
              {isKo ? '기본 10모음의 천지인(天地人) 철학' : '10 Vowels: The Triad of Heaven, Earth & Human'}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed mb-4">
              {isKo
                ? '둥근 하늘(•), 평평한 땅(ㅡ), 서 있는 사람(ㅣ)의 세 가지 기본 부호를 조합하여 모든 모음을 구성했습니다. 오른쪽과 위쪽으로 뻗은 획은 밝은 양(陽)의 소리, 왼쪽과 아래는 음(陰)의 소리를 나타냅니다.'
                : 'Hangul vowels are derived from three cosmic symbols: Heaven (•), Earth (ㅡ), and Human (ㅣ). Outward-pointing strokes denote bright Yang vowels (ㅏ, ㅗ), while inward strokes denote dark Yin vowels (ㅓ, ㅜ).'}
            </p>
            <div className="bg-hanji p-3 rounded-xl text-xs text-muk/80 font-medium">
              💡 {isKo ? '동양 철학의 음양 조화가 글자 모양에 그대로 반영되어 있습니다.' : 'Vowel pairs embody harmony: ㅏ / ㅓ, ㅗ / ㅜ, ㅡ / ㅣ.'}
            </div>
          </div>
        </div>

        {/* Callout Link to In-Depth Stroke Order Guide */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
              {isKo ? '심화 학습 가이드' : 'Deep-Dive Guide'}
            </span>
            <h4 className="text-xl font-bold font-serif text-muk mb-1">
              {isKo ? '한글 바른 획순 완벽 가이드: 획순이 가독성을 결정하는 이유' : 'Mastering Hangul Stroke Order: Flow, Ergonomics & Proportions'}
            </h4>
            <p className="text-sm text-muk/70">
              {isKo 
                ? '‘ㄹ’과 ‘ㅂ’의 정석 획순부터 악필을 방지하는 2대 불변 원칙을 자세히 알아보세요.' 
                : 'Learn the two universal rules (top-to-bottom, left-to-right) that prevent hand fatigue and messy script.'}
            </p>
          </div>
          <Link
            href="/guide/hangul-stroke-order-guide"
            className="shrink-0 bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <span>{isKo ? '획순 가이드 읽기' : 'Read Stroke Guide'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
