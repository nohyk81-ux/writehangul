import {setRequestLocale} from 'next-intl/server';
import AttendanceAndAd from '@/components/AttendanceAndAd';
import CategoryGrid from '@/components/CategoryGrid';
import AttendanceCalendar from '@/components/AttendanceCalendar';
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

  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full print:p-0 print:m-0 print:max-w-none relative">
      <AttendanceAndAd />
      
      {/* Hero Section */}
      <section className="mb-6 print:hidden mt-2">
        <div className="bg-blue-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="text-8xl">👦🏻</div>
            <div className="text-8xl font-serif font-bold text-muk">ㅎ</div>
          </div>
          
          <div className="flex-1 text-center md:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-muk mb-2 leading-tight">
              Trace Korean daily.<br/>Free writing practice sheets.
            </h2>
            <p className="text-muk/80 text-lg mb-2 font-medium">Learn practical Korean.<br/>Download, print, and practice at home.</p>
            <p className="font-bold text-2xl text-muk mt-4">Write your story.</p>
          </div>
        </div>
      </section>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Daily Learning */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-muk/10 p-4 h-full flex flex-col">
            <h2 className="text-base font-bold text-muk mb-4 flex items-center gap-2 uppercase tracking-wide">
              DAILY LEARNING <span className="text-sm font-normal text-muk/60">(오늘의 학습)</span>
            </h2>
            
            <div className="flex-1">
              <AttendanceCalendar />
            </div>
            
            <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 mt-4 rounded-md text-xs tracking-wider transition-colors shadow-sm">
              DOWNLOAD TODAY'S SHEET
            </button>
            <p className="text-[10px] text-muk/50 mt-4 leading-relaxed">
              Progress explanation is lingo, mnemonic characters: haze effect, and Text-to-speech (TTS) noise more in AdSense space.
            </p>
          </div>
          
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
