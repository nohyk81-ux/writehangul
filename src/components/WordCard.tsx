'use client';

import { useState } from 'react';
import { Volume2, Download } from 'lucide-react';
import { usePracticeStore } from '@/store';

interface WordCardProps {
  korean: string;
  romanization: string;
  emoji?: string;
  isAlphabet?: boolean;
}

export default function WordCard({ korean, romanization, emoji, isAlphabet }: WordCardProps) {
  const { clearCharacters, addCharacters, setLayout, setPdfGenerating, setTemplateStyle } = usePracticeStore();
  const [layoutCount, setLayoutCount] = useState<1 | 2 | 4>(2);

  const handleTTS = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(korean);
      utterance.lang = 'ko-KR';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  const handleDownload = () => {
    // Update the store with this specific word and layout
    // If not alphabet, default to 2
    setLayout(isAlphabet ? layoutCount : 2);
    clearCharacters();
    addCharacters(korean);
    setTemplateStyle('default');
    
    // Trigger the PDF generator modal instead of window.print
    setPdfGenerating(true);
  };

  return (
    <div className="bg-white border-2 border-muk/10 rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow relative print:hidden">
      <div className="w-16 h-16 bg-hanji rounded-full flex items-center justify-center text-3xl mb-4 border border-muk/5">
        {emoji || '🇰🇷'}
      </div>
      
      <h3 className="text-4xl font-serif font-bold text-muk mb-1">{korean}</h3>
      <p className="text-muk/60 font-medium mb-6">{romanization}</p>
      
      {isAlphabet && (
        <div className="w-full mb-3 text-sm flex items-center justify-between bg-hanji/30 px-3 py-2 rounded-md border border-muk/10">
          <label className="text-muk/80 font-medium">Layout:</label>
          <select 
            value={layoutCount} 
            onChange={(e) => setLayoutCount(Number(e.target.value) as 1 | 2 | 4)}
            className="bg-transparent font-bold text-seal outline-none cursor-pointer"
          >
            <option value={1}>1 (Large)</option>
            <option value={2}>2 (Default)</option>
            <option value={4}>4 (Compact)</option>
          </select>
        </div>
      )}

      <div className="flex items-center gap-3 w-full mt-auto">
        <button 
          onClick={handleTTS}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-muk py-2 rounded-md flex items-center justify-center gap-2 transition-colors font-medium"
        >
          <Volume2 size={18} />
          Listen
        </button>
        <button 
          onClick={handleDownload}
          className="flex-1 bg-seal hover:bg-seal/90 text-white py-2 rounded-md flex items-center justify-center gap-2 transition-colors font-medium shadow-sm"
        >
          <Download size={18} />
          Print
        </button>
      </div>
    </div>
  );
}
