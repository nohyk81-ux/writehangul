'use client';

import { usePracticeStore } from '@/store';
import { useTranslations, useLocale } from 'next-intl';
import { dailyContentMap } from '@/data/dailyContent';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DailyLearningCard() {
  const t = useTranslations('DailyLearning');
  const locale = useLocale();
  const { visitedDates, checkIn, selectedDailyDate, setSelectedDailyDate, clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();
  const [mounted, setMounted] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setMounted(true);
    checkIn();
  }, [checkIn]);

  useEffect(() => {
    if (!mounted) return;
    // Calculate streak
    const todayStrFull = new Date().toISOString().split('T')[0];
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStrFull = yesterdayDate.toISOString().split('T')[0];

    let currentStreak = 0;
    
    let checkDate = new Date();
    if (!visitedDates.includes(todayStrFull) && visitedDates.includes(yesterdayStrFull)) {
       checkDate = yesterdayDate;
    }
    
    let counting = true;
    while(counting) {
      const dStr = checkDate.toISOString().split('T')[0];
      if (visitedDates.includes(dStr)) {
        currentStreak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        counting = false;
      }
    }
    setStreak(currentStreak);

  }, [mounted, visitedDates]);

  if (!mounted) return null;

  const todayDateObj = new Date();
  const month = String(todayDateObj.getMonth() + 1).padStart(2, '0');
  const day = String(todayDateObj.getDate()).padStart(2, '0');
  const todayStr = `${month}-${day}`;

  const viewingDate = selectedDailyDate || todayStr;
  const content = dailyContentMap[viewingDate];
  const translation = content ? content[locale as keyof typeof content] : '';

  const navigateDate = (direction: -1 | 1) => {
    const parts = viewingDate.split('-');
    const d = new Date(todayDateObj.getFullYear(), parseInt(parts[0]) - 1, parseInt(parts[1]));
    d.setDate(d.getDate() + direction);
    
    const newMonth = String(d.getMonth() + 1).padStart(2, '0');
    const newDay = String(d.getDate()).padStart(2, '0');
    const newStr = `${newMonth}-${newDay}`;
    setSelectedDailyDate(newStr);
  };

  const isToday = viewingDate === todayStr;

  const handleDownload = () => {
    if (!content) {
      alert("No content available for this date yet. Please check back later!");
      return;
    }
    clearCharacters();
    addCharacters(content.hangul);
    setLayout(4);
    setTemplateStyle('daily-learning');
    setPdfGenerating(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-muk/10 p-3 h-full flex flex-col">
      <h2 className="text-base font-bold text-muk mb-2 flex items-center gap-2 uppercase tracking-wide">
        {t('title')} <span className="text-sm font-normal text-muk/60">{t('titleSub')}</span>
      </h2>
      
      <div className="bg-orange-50 rounded-xl border border-orange-100 px-2 py-4 flex flex-col flex-1 items-center justify-center relative min-h-[100px]">
        <div className="absolute top-2 left-0 w-full flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-orange-600 flex items-center gap-1 shadow-sm border border-orange-100">
            <Flame size={12} className={streak > 0 ? "fill-orange-500 text-orange-500" : "text-gray-400"} />
            {streak > 0 ? t('streak').replace('{days}', streak.toString()) : t('streak0')}
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <button 
            onClick={() => navigateDate(-1)}
            className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-sm text-muk/50 hover:text-muk hover:bg-orange-100 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          
          <div className="flex flex-col items-center flex-1 mx-2 text-center">
            {content ? (
              <>
                <span className="text-2xl font-bold text-muk mb-0.5 leading-tight">{content.hangul}</span>
                <span className="text-xs text-muk/60 font-medium">{translation}</span>
              </>
            ) : (
              <span className="text-xs text-muk/40">No content</span>
            )}
            {!isToday && (
              <span className="text-[9px] text-orange-400 mt-1 font-bold uppercase tracking-widest">{viewingDate}</span>
            )}
            {isToday && (
              <span className="text-[9px] text-orange-500 mt-1 font-bold uppercase tracking-widest">TODAY</span>
            )}
          </div>
          
          <button 
            onClick={() => navigateDate(1)}
            disabled={isToday}
            className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${isToday ? 'opacity-30 cursor-not-allowed text-muk/30 bg-transparent' : 'bg-white shadow-sm text-muk/50 hover:text-muk hover:bg-orange-100'}`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <button 
        onClick={handleDownload}
        disabled={!content}
        className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2.5 mt-2 rounded-md text-[11px] tracking-wider transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t('downloadBtn')}
      </button>
      <p className="text-[10px] text-muk/50 mt-2 leading-relaxed">
        {t('explanation')}
      </p>
    </div>
  );
}
