'use client';

import { usePracticeStore } from '@/store';
import { dailyContentMap } from '@/data/dailyContent';

interface Props {
  text: string;
}

export default function DailyDownloadBtn({ text }: Props) {
  const { selectedDailyDate, clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();

  const handleDownload = () => {
    // If no date is selected, fallback to today's date
    let dateToUse = selectedDailyDate;
    if (!dateToUse) {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      dateToUse = `${month}-${day}`;
    }

    const content = dailyContentMap[dateToUse];
    if (!content) {
      alert("No content available for this date yet. Please check back later!");
      return;
    }

    clearCharacters();
    addCharacters(content.hangul);
    // Daily learning usually has single words or short phrases
    // Layout 4 means 4 characters per row, layout 2 means 2.
    // For phrases like "안녕하세요", layout 4 might be better so it spans wider.
    setLayout(4);
    setTemplateStyle('daily-learning');
    setPdfGenerating(true);
  };

  return (
    <button 
      onClick={handleDownload}
      className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 mt-4 rounded-md text-xs tracking-wider transition-colors shadow-sm"
    >
      {text}
    </button>
  );
}
