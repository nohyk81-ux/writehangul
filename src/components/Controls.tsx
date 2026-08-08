'use client';

import { useTranslations } from 'next-intl';
import { usePracticeStore } from '@/store';
import { LayoutGrid, Printer, ScanLine, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Controls() {
  const t = useTranslations('Controls');
  const { layout, setLayout, characters, clearCharacters, addCharacters, setPdfGenerating, setTemplateStyle } = usePracticeStore();

  const handlePrint = () => {
    if (characters.length === 0) {
      alert('Please add some characters to practice first!');
      return;
    }
    setTemplateStyle('default');
    setPdfGenerating(true);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-8 print:hidden border border-muk/10">
      <div className="flex items-center gap-4">
        <label className="font-medium text-muk">{t('layout')}:</label>
        <select 
          value={layout} 
          onChange={(e) => setLayout(Number(e.target.value) as 1 | 2 | 4)}
          className="p-2 border rounded-md text-muk bg-hanji/50 outline-none focus:ring-2 focus:ring-seal"
        >
          <option value={1}>1 / Page</option>
          <option value={2}>2 / Page</option>
          <option value={4}>4 / Page</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={clearCharacters}
          className="flex items-center gap-2 border border-muk/20 text-muk px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <Trash2 size={18} />
        </button>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-seal text-white px-6 py-2 rounded-md font-medium shadow hover:bg-seal/90 transition-colors"
        >
          <Printer size={18} />
          {t('print')}
        </button>
      </div>
    </div>
  );
}
