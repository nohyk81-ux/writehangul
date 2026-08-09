import Image from 'next/image';
import {setRequestLocale, getTranslations} from 'next-intl/server';
import AttendanceAndAd from '@/components/AttendanceAndAd';
import CategoryGrid from '@/components/CategoryGrid';
import DailyLearningCard from '@/components/DailyLearningCard';
import MiniMyName from '@/components/MiniMyName';
import LearningLevels from '@/components/LearningLevels';
import { Download } from 'lucide-react';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'Hero'});
  const td = await getTranslations({locale, namespace: 'DailyLearning'});

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full print:p-0 print:m-0 print:max-w-none relative">
      <AttendanceAndAd />
      
      {/* Hero Section */}
      <section className="mb-6 print:hidden mt-2">
        <div className="bg-blue-100 rounded-xl p-[5vw] md:p-8 flex items-center justify-center gap-[4vw] md:gap-16 shadow-sm border border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 shrink-0">
            <div className="relative w-[20vw] h-[20vw] md:w-[140px] md:h-[140px]">
              <Image src="/hero-character.png" alt="Korean Girl Avatar" fill className="object-contain drop-shadow-xl" sizes="(max-width: 768px) 25vw, 140px" />
            </div>
          </div>
          
          <div className="text-left relative z-10 whitespace-nowrap">
            <h2 className="text-[5.5vw] sm:text-[4vw] md:text-4xl font-bold text-muk mb-1 md:mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: t('title') }}></h2>
            <p className="text-muk/80 text-[3.5vw] sm:text-[2.5vw] md:text-lg mb-1 md:mb-2 font-medium" dangerouslySetInnerHTML={{ __html: t('subtitle') }}></p>
            <p className="font-bold text-[4.5vw] sm:text-[3.5vw] md:text-2xl text-muk mt-2 md:mt-4">{t('highlight')}</p>
          </div>
        </div>
      </section>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Daily Learning */}
        <div className="flex flex-col gap-4">
          <DailyLearningCard />
          
          {/* AdSense Placeholder */}
          <div className="bg-gray-100 border border-dashed border-gray-300 w-full h-32 flex items-center justify-center text-gray-400 text-sm rounded-xl">
            ADVERTISEMENT
          </div>
        </div>

        {/* Column 2: K-Culture & Life */}
        <div className="flex flex-col gap-4">
          <CategoryGrid />
          
          {/* AdSense Placeholder */}
          <div className="bg-gray-100 border border-dashed border-gray-300 w-full h-24 flex items-center justify-center text-gray-400 text-sm rounded-xl">
            ADVERTISEMENT
          </div>
        </div>

        {/* Column 3: My Name & Learning Levels */}
        <div className="flex flex-col gap-0">
          <MiniMyName />
          <LearningLevels />
        </div>

      </div>
    </main>
  );
}
