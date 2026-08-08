'use client';

import { usePracticeStore } from '@/store';
import vocabularyData from '@/data/vocabulary.json';

const levels = [
  {
    id: 'alphabet', // maps to basic alphabet
    icon: '🎯',
    title: 'BEGINNER (초급)',
    subtitle: 'Consonants & Vowels',
    features: ['Handwrite font', 'Vocabulary list', 'Sentence practice'],
    bgColor: 'bg-slate-100',
    iconBg: 'bg-slate-700'
  },
  {
    id: 'travel', // maps to travel phrases
    icon: '🧪',
    title: 'ELEMENTARY (중급)',
    subtitle: 'Simple Words & Phrases',
    features: ['Handwrite font', 'Vocabulary list', 'Sentence practice'],
    bgColor: 'bg-blue-50',
    iconBg: 'bg-blue-600'
  },
  {
    id: 'slang', // maps to slang/expressions
    icon: '📝',
    title: 'INTERMEDIATE (고급)',
    subtitle: 'Expressions & Writing',
    features: ['Handwrite font', 'Vocabulary list', 'Sentence practice'],
    bgColor: 'bg-green-50',
    iconBg: 'bg-green-600'
  }
];

export default function LearningLevels() {
  const { clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();

  const handleDownload = (categoryId: string) => {
    const catData = vocabularyData.categories.find(c => c.id === categoryId);
    if (catData) {
      const chars = catData.items.map(i => i.korean).join('');
      clearCharacters();
      addCharacters(chars);
      setLayout(4);
      setTemplateStyle('default');
      setPdfGenerating(true);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-muk/10 p-4 mt-4 print:hidden">
      <h2 className="text-sm font-bold text-muk mb-4 flex items-center gap-1 uppercase tracking-wide">
        LEARNING LEVELS <span className="text-xs text-muk/60">(학습 단계)</span>
      </h2>
      
      <div className="flex justify-between gap-2">
        {levels.map((level) => (
          <div key={level.id} className="flex-1 flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg mb-2 ${level.iconBg}`}>
              {level.icon}
            </div>
            <h3 className="text-[10px] font-bold text-muk text-center uppercase leading-tight mb-0.5">
              {level.title}
            </h3>
            <p className="text-[9px] text-muk/60 text-center mb-2 leading-tight">
              {level.subtitle}
            </p>
            
            <div className={`w-full rounded-md p-2 mb-2 flex-1 ${level.bgColor}`}>
              <ul className="text-[8px] text-muk/70 space-y-1">
                {level.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-1">
                    <span className="text-muk/40">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={() => handleDownload(level.id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 rounded text-[9px] tracking-wider transition-colors"
            >
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
