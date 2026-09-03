import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { BookOpen, ArrowRight } from 'lucide-react';
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

      {/* Educational Guide Section Below Tool */}
      <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 max-w-3xl mx-auto w-full print:hidden">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            <BookOpen size={14} />
            {locale === 'ko' ? '외국어 이름 한글 표기 원칙' : 'Korean Name Transliteration Rules'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-muk mb-3">
            {locale === 'ko' ? '외국어 이름을 한글로 옮겨 적을 때 꼭 알아야 할 3가지' : 'How Foreign Names Are Adapted into Natural Korean'}
          </h2>
          <p className="text-muk/70 text-sm md:text-base leading-relaxed">
            {locale === 'ko'
              ? '한글은 음절 단위로 글자를 결합하기 때문에, 영어권이나 유럽권 이름을 표기할 때 고유한 음성학적 규칙이 적용됩니다.'
              : 'Korean organizes characters into syllabic blocks, meaning foreign names follow official phonetic guidelines for natural pronunciation.'}
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-muk/10 shadow-sm">
            <h3 className="font-bold text-base md:text-lg text-muk font-serif mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center">1</span>
              {locale === 'ko' ? '자음이 연속될 때 중립 모음 ‘ㅡ’ 삽입' : 'Consonant Clusters: Inserting the Neutral Vowel "ㅡ" (eu)'}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed">
              {locale === 'ko'
                ? '한국어는 자음 혼자 소리를 낼 수 없으므로, "Chris"나 "Smith"처럼 연속된 자음이 나올 경우 중립 모음인 ‘ㅡ’를 덧붙여 ‘크리스’, ‘스미스’처럼 글자 수를 자연스럽게 늘려 적습니다.'
                : 'Since consonants cannot exist alone without vowels in Hangul, lone consonants receive the neutral vowel "ㅡ" (e.g. Chris → 크리스 / Keu-ri-seu).'}
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border border-muk/10 shadow-sm">
            <h3 className="font-bold text-base md:text-lg text-muk font-serif mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">2</span>
              {locale === 'ko' ? '한국어에 없는 발음(F, V, TH)의 대응' : 'Substituting Unsupported Sounds: F, V, and TH'}
            </h3>
            <p className="text-muk/70 text-sm leading-relaxed">
              {locale === 'ko'
                ? 'F는 ‘ㅍ’(Flora → 플로라), V는 ‘ㅂ’(Victoria → 빅토리아), TH는 ‘ㅅ’ 또는 ‘ㄷ’(Smith → 스미스, Ethan → 이든)으로 국립국어원 표준 규정에 따라 가장 유사한 소리로 전환됩니다.'
                : 'Sounds absent in Korean are paired with the closest acoustic phonemes: F becomes ㅍ (P), V becomes ㅂ (B), and TH maps to ㅅ (S) or ㄷ (D).'}
            </p>
          </div>
        </div>

        {/* Read More Callout */}
        <div className="bg-hanji rounded-2xl border border-muk/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-muk text-sm md:text-base font-serif mb-1">
              {locale === 'ko' ? '더 자세한 한글 이름 표기 규칙이 궁금하신가요?' : 'Want a complete breakdown of Korean naming rules?'}
            </h4>
            <p className="text-xs md:text-sm text-muk/60">
              {locale === 'ko' ? '한국인 이름의 성씨와 이름 순서, 문화적 의미까지 완벽 가이드에서 확인하세요.' : 'Learn how Korean syllables, family surnames, and cultural meanings interact.'}
            </p>
          </div>
          <Link
            href="/guide/korean-name-transliteration-rules"
            className="shrink-0 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded-xl text-xs md:text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <span>{locale === 'ko' ? '이름 가이드 읽기' : 'Read Name Guide'}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
