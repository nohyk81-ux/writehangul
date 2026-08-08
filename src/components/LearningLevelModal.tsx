'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { X, CheckSquare, Square } from 'lucide-react';
import vocabularyData from '@/data/vocabulary.json';

type WordItem = {
  korean: string;
  romanization: string;
  translations?: Record<string, string>;
};

type Props = {
  categoryId: string | null;
  onClose: () => void;
  onDownload: (selectedWords: string) => void;
};

export default function LearningLevelModal({ categoryId, onClose, onDownload }: Props) {
  const t = useTranslations('LearningLevelModal');
  const locale = useLocale();
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(new Set());
  const [items, setItems] = useState<WordItem[]>([]);

  useEffect(() => {
    if (categoryId) {
      const cat = vocabularyData.categories.find(c => c.id === categoryId);
      if (cat) {
        setItems(cat.items);
        setSelectedIndices(new Set(cat.items.map((_, i) => i))); // Default select all
      }
    }
  }, [categoryId]);

  if (!categoryId) return null;

  const handleToggle = (index: number) => {
    const newSet = new Set(selectedIndices);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setSelectedIndices(newSet);
  };

  const handleSelectAll = () => {
    setSelectedIndices(new Set(items.map((_, i) => i)));
  };

  const handleDeselectAll = () => {
    setSelectedIndices(new Set());
  };

  const handleDownload = () => {
    if (selectedIndices.size === 0) return;
    const selectedWords = items
      .filter((_, i) => selectedIndices.has(i))
      .map(item => item.korean)
      .join(' ');
    onDownload(selectedWords);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full flex flex-col max-h-[85vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-muk">{t('title')}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex justify-between items-center mb-4 text-sm">
          <button onClick={handleSelectAll} className="text-blue-600 hover:text-blue-800 font-medium">
            {t('selectAll')}
          </button>
          <button onClick={handleDeselectAll} className="text-gray-500 hover:text-gray-700 font-medium">
            {t('deselectAll')}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mb-6 border border-gray-100 rounded-lg p-2 space-y-2 custom-scrollbar">
          {items.map((item, idx) => {
            const isSelected = selectedIndices.has(idx);
            const translation = item.translations?.[locale] || item.romanization;
            return (
              <label 
                key={idx} 
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${isSelected ? 'bg-blue-50 border border-blue-100' : 'hover:bg-gray-50 border border-transparent'}`}
                onChange={() => handleToggle(idx)}
              >
                <div className={`mr-3 ${isSelected ? 'text-blue-600' : 'text-gray-300'}`}>
                  {isSelected ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-muk">{item.korean}</span>
                  <span className="text-xs text-muk/60">{translation}</span>
                </div>
              </label>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-muk font-bold rounded-lg transition-colors"
          >
            {t('cancel')}
          </button>
          <button 
            onClick={handleDownload}
            disabled={selectedIndices.size === 0}
            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-lg transition-colors"
          >
            {t('downloadBtn')}
          </button>
        </div>
      </div>
    </div>
  );
}
