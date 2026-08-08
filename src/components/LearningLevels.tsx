'use client';

import { usePracticeStore } from '@/store';
import vocabularyData from '@/data/vocabulary.json';
import { useState } from 'react';
import LearningLevelModal from './LearningLevelModal';

import { useTranslations } from 'next-intl';

export default function LearningLevels() {
  const { clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();
  const t = useTranslations('LearningLevels');

  const levels = [
    {
      id: 'alphabet',
      icon: '🎯',
      title: t('starter'),
      subtitle: t('starterSub'),
      features: [t('featureGrid'), t('featurePdf'), t('featurePrint')],
      bgColor: 'bg-slate-100',
      iconBg: 'bg-slate-700'
    },
    {
      id: 'basic-words',
      icon: '🧪',
      title: t('basic'),
      subtitle: t('basicSub'),
      features: [t('featureGrid'), t('featurePdf'), t('featurePrint')],
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-600'
    },
    {
      id: 'sentences',
      icon: '📝',
      title: t('advanced'),
      subtitle: t('advancedSub'),
      features: [t('featureGrid'), t('featurePdf'), t('featurePrint')],
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-600'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleDownloadClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleModalDownload = (selectedWords: string) => {
    clearCharacters();
    addCharacters(selectedWords);
    setLayout(4);
    setTemplateStyle('learning-levels');
    setPdfGenerating(true);
    setSelectedCategory(null);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-muk/10 p-4 mt-4 print:hidden">
      <h2 className="text-base font-bold text-muk mb-4 flex items-center gap-1 uppercase tracking-wide">
        {t('title')} <span className="text-sm font-normal text-muk/60">{t('titleSub')}</span>
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
              onClick={() => handleDownloadClick(level.id)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 rounded text-[9px] tracking-wider transition-colors"
            >
              {t('downloadBtn')}
            </button>
          </div>
        ))}
      </div>
      
      <LearningLevelModal 
        categoryId={selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
        onDownload={handleModalDownload} 
      />
    </div>
  );
}
