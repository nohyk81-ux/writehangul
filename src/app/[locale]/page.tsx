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
        <div className="bg-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <Image src="/hero-character.png" alt="Korean Girl Avatar" width={140} height={140} className="object-contain drop-shadow-xl" />
          </div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-muk mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: t('title') }}></h2>
            <p className="text-muk/80 text-lg mb-2 font-medium" dangerouslySetInnerHTML={{ __html: t('subtitle') }}></p>
            <p className="font-bold text-2xl text-muk mt-4">{t('highlight')}</p>
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
