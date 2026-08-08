'use client';

import { useState } from 'react';

import { usePracticeStore } from '@/store';
import vocabularyData from '@/data/vocabulary.json';
import { BookA, Music, Plane, Coffee, HandHeart, Briefcase, MessageCircleWarning, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CategoryGrid() {
  const { clearCharacters, addCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();
  const t = useTranslations('CategoryGrid');

  const [activeCategory, setActiveCategory] = useState<typeof categories[0] | null>(null);

  const categories = [
    { id: 'kpop', title: t('kpop'), count: 50, icon: <Music size={16} /> },
    { id: 'travel', title: t('travel'), count: 32, icon: <Plane size={16} /> },
    { id: 'food', title: t('food'), count: 24, icon: <Coffee size={16} /> },
    { id: 'greetings', title: t('greetings'), count: 18, icon: <HandHeart size={16} /> },
    { id: 'business', title: t('business'), count: 15, icon: <Briefcase size={16} /> },
    { id: 'slang', title: t('slang'), count: 20, icon: <MessageCircleWarning size={16} /> },
    { id: 'proverbs', title: t('proverbs'), count: 12, icon: <Quote size={16} /> }
  ];

  const handleDownload = (categoryId: string) => {
    // Find category in JSON
    let catData = vocabularyData.categories.find(c => c.id === categoryId);
    if (!catData && categoryId === 'beautiful-words') {
       // fallback for old ID
       catData = vocabularyData.categories.find(c => c.id === 'beautiful-words');
    }
    
    if (catData) {
      const chars = catData.items.map(i => i.korean).join('');
      clearCharacters();
      addCharacters(chars);
      setLayout(4); // 4 chars per page
      setTemplateStyle('default');
      setPdfGenerating(true);
      setActiveCategory(null); // Close modal after initiating download
    }
  };

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-sm border border-muk/10 p-4 print:hidden h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-muk flex items-center gap-1 uppercase tracking-wide">
            {t('title')} <span className="text-sm font-normal text-muk/60">{t('titleSub')}</span>
          </h2>
          <a href="#" className="text-[10px] text-blue-600 font-bold hover:underline">
            {t('all')}
          </a>
        </div>
        
        <div className="grid grid-cols-2 gap-2 flex-1">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className="flex flex-col items-start p-3 rounded-lg border border-muk/10 hover:border-seal/50 hover:bg-orange-50 transition-colors group text-left h-full"
            >
              <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-2 group-hover:bg-seal group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="font-bold text-muk text-xs leading-tight mb-1">{cat.title}</h3>
              <p className="text-[10px] text-muk/50 mt-auto">{cat.count} sheets</p>
            </button>
          ))}
        </div>
      </div>

      {/* Category Details Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <div className="scale-150">{activeCategory.icon}</div>
              </div>
              <h2 className="text-2xl font-bold text-muk mb-2">{activeCategory.title}</h2>
              <p className="text-muk/70 text-sm mb-6">
                {t('modalDesc', { count: activeCategory.count })}
              </p>
              
              <div className="flex flex-col w-full gap-2">
                <button 
                  onClick={() => handleDownload(activeCategory.id)}
                  className="w-full bg-seal hover:bg-seal/90 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  {t('downloadPdf')}
                </button>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="w-full bg-muk/5 hover:bg-muk/10 text-muk font-bold py-3 rounded-xl transition-colors"
                >
                  {t('cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
