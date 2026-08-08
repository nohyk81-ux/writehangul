'use client';

import { usePracticeStore } from '@/store';
import { dailyContentMap } from '@/data/dailyContent';

import { useLocale } from 'next-intl';

interface Props {
  text: string;
}

export default function DailyDownloadBtn({ text }: Props) {
  const { selectedDailyDate, clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();
  const locale = useLocale();

  // If no date is selected, fallback to today's date
  let dateToUse = selectedDailyDate;
  if (!dateToUse) {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateToUse = `${month}-${day}`;
  }

  const content = dailyContentMap[dateToUse];
  const translation = content ? content[locale as keyof typeof content] : '';

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
    <div className="w-full mt-4 flex flex-col gap-3">
      {content ? (
        <div className="bg-blue-50/50 border border-blue-100/50 rounded-lg py-3 px-4 flex flex-col items-center justify-center text-center">
          <span className="text-xl font-bold text-muk">{content.hangul}</span>
          <span className="text-xs text-muk/60 mt-1 font-medium">{translation}</span>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-100 rounded-lg py-3 px-4 flex items-center justify-center text-muk/40 text-xs">
          No content for this date
        </div>
      )}
      <button 
        onClick={handleDownload}
        disabled={!content}
        className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-md text-xs tracking-wider transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {text}
      </button>
    </div>
  );
}
