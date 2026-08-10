'use client';

import React from 'react';
import { usePracticeStore } from '@/store';
import { useTranslations } from 'next-intl';
import { Check, Download, AlertCircle } from 'lucide-react';

const basicConsonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const basicVowels = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
const complexVowels = ['ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ'];

export default function AlphabetPractice() {
  const t = useTranslations('AlphabetPractice');
  
  const alphabetSelection = usePracticeStore(state => state.alphabetSelection || []);
  const toggleAlphabetSelection = usePracticeStore(state => state.toggleAlphabetSelection);
  const setTemplateStyle = usePracticeStore(state => state.setTemplateStyle);
  const setPdfGenerating = usePracticeStore(state => state.setPdfGenerating);
  const clearAlphabetSelection = usePracticeStore(state => state.clearAlphabetSelection);

  const handleGeneratePdf = () => {
    if (alphabetSelection.length === 0) {
      alert("Please select at least one character.");
      return;
    }
    setTemplateStyle('alphabet-practice');
    setPdfGenerating(true);
  };

  const renderSection = (title: string, characters: string[]) => (
    <div className="mb-10">
      <h2 className="text-xl font-bold font-serif text-muk mb-4 flex items-center gap-2">
        <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
        {title}
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-7 gap-3">
        {characters.map((char) => {
          const isSelected = alphabetSelection.includes(char);
          return (
            <button
              key={char}
              onClick={() => toggleAlphabetSelection(char)}
              className={`
                aspect-square rounded-2xl text-2xl md:text-3xl font-medium font-sans flex items-center justify-center transition-all relative
                ${isSelected 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105 border-none' 
                  : 'bg-white text-muk/80 border-2 border-muk/10 hover:border-blue-600/40 hover:text-blue-600'}
              `}
            >
              <span className={isSelected ? '' : 'translate-y-[-2px]'}>{char}</span>
              {isSelected && (
                <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full p-0.5 shadow-sm">
                  <Check size={14} strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10"></div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-muk mb-4">{t('title')}</h1>
        <p className="text-muk/70 font-medium max-w-lg mx-auto">{t('subtitle')}</p>
      </div>

      {/* Main Content */}
      <div className="bg-white/60 backdrop-blur-md border border-muk/5 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden mb-32">
        {renderSection(`${t('basicConsonants')} (14)`, basicConsonants)}
        {renderSection(`${t('basicVowels')} (10)`, basicVowels)}
        {renderSection(`${t('complexVowels')} (11)`, complexVowels)}
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-40 pointer-events-none flex justify-center">
        <div className="bg-white/95 backdrop-blur-xl border border-muk/10 shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full max-w-3xl pointer-events-auto transform transition-transform translate-y-0">
          
          <div className="flex-1 w-full flex items-center justify-between md:justify-start gap-4">
            <div>
              <div className="text-sm font-bold text-muk/60 mb-1 flex items-center gap-1.5">
                <AlertCircle size={14} />
                {t('selectionLimit', { max: 5 })}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg border-2 transition-colors
                      ${alphabetSelection[i] 
                        ? 'bg-blue-50 border-blue-600 text-blue-600' 
                        : 'bg-gray-50 border-gray-100 text-gray-300'}`}
                  >
                    {alphabetSelection[i] || ''}
                  </div>
                ))}
              </div>
            </div>
            {alphabetSelection.length > 0 && (
              <button 
                onClick={clearAlphabetSelection}
                className="text-xs font-medium text-muk/40 hover:text-blue-600 underline underline-offset-2 px-2"
              >
                {t('clearAll')}
              </button>
            )}
          </div>

          <button
            onClick={handleGeneratePdf}
            disabled={alphabetSelection.length === 0}
            className="w-full md:w-auto bg-blue-800 hover:bg-blue-900 text-white disabled:bg-gray-300 disabled:text-gray-500 rounded-xl py-3.5 px-6 font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Download size={20} />
            {t('generatePdf')}
          </button>
        </div>
      </div>
    </div>
  );
}
