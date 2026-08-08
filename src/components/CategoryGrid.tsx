'use client';

import { usePracticeStore } from '@/store';
import vocabularyData from '@/data/vocabulary.json';

const categories = [
  { 
    id: 'k-food', 
    num: '1',
    label: 'K-Food Menu Writing', 
    desc: 'Trace restaurant words.',
    emoji: '🍲', 
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
    btnColor: 'bg-blue-600 hover:bg-blue-700'
  },
  { 
    id: 'travel', 
    num: '2',
    label: 'Travel Survival Phrases', 
    desc: 'Essential sentences for your trip.',
    emoji: '🧳', 
    bgColor: 'bg-sky-100',
    borderColor: 'border-sky-200',
    btnColor: 'bg-blue-600 hover:bg-blue-700'
  },
  { 
    id: 'beautiful-words', 
    num: '3',
    label: 'Beautiful Korean Words', 
    desc: 'Meaningful words.',
    emoji: '🌙', 
    bgColor: 'bg-blue-900',
    textColor: 'text-white',
    borderColor: 'border-blue-800',
    btnColor: 'bg-sky-400 hover:bg-sky-500 text-blue-900'
  },
  { 
    id: 'slang', 
    num: '4',
    label: 'Trendy Slang & Daily Phrases', 
    desc: 'Cool words.',
    emoji: '📱', 
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    btnColor: 'bg-blue-600 hover:bg-blue-700'
  }
];

export default function CategoryGrid() {
  const { setCharacters, setLayout, setTemplateStyle, setPdfGenerating } = usePracticeStore();

  const handleDownload = (categoryId: string) => {
    // Find category in JSON
    let catData = vocabularyData.categories.find(c => c.id === categoryId);
    if (!catData && categoryId === 'beautiful-words') {
       // fallback for old ID
       catData = vocabularyData.categories.find(c => c.id === 'beautiful-words');
    }
    
    if (catData) {
      const chars = catData.items.map(i => i.korean).join('').split('');
      setCharacters(chars);
      setLayout(4); // 4 chars per page
      setTemplateStyle('default');
      setPdfGenerating(true);
    }
  };

  return (
    <section className="print:hidden h-full flex flex-col">
      <h2 className="text-sm font-bold text-muk mb-3 flex items-center gap-2 uppercase tracking-wide">
        K-Culture & Life <span className="text-xs text-muk/60">(한류 & 일상 체험)</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex flex-col p-3 rounded-xl border-2 shadow-sm ${cat.bgColor} ${cat.borderColor} ${cat.textColor || 'text-muk'}`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="w-5 h-5 rounded-full bg-muk text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                {cat.num}
              </span>
              <span className="text-4xl mx-auto">{cat.emoji}</span>
              <div className="w-5 shrink-0"></div> {/* Spacer for centering */}
            </div>
            
            <h3 className="font-bold text-[13px] leading-tight mb-1 text-center">{cat.label}</h3>
            <p className="text-[11px] leading-tight text-center opacity-80 mb-3 flex-1">{cat.desc}</p>
            
            <button
              onClick={() => handleDownload(cat.id)}
              className={`w-full py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white transition-colors ${cat.btnColor}`}
            >
              Print / Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
