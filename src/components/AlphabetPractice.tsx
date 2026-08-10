'use client';

import { usePracticeStore } from '@/store';
import { useTranslations } from 'next-intl';
import { Check, Download, AlertCircle } from 'lucide-react';

const CONSONANTS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const BASIC_VOWELS = ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
const COMPLEX_VOWELS = ['ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅚ', 'ㅟ', 'ㅢ', 'ㅘ', 'ㅝ', 'ㅙ', 'ㅞ'];

export default function AlphabetPractice() {
  // We can add namespace 'Alphabet' later, for now we can use existing keys or fallback
  const t = useTranslations();
  
  const { 
    alphabetSelection, 
    toggleAlphabetSelection, 
    setTemplateStyle, 
    setPdfGenerating 
  } = usePracticeStore();

  const handleGeneratePdf = () => {
    if (alphabetSelection.length === 0) {
      alert("글자를 하나 이상 선택해 주세요."); // TODO: i18n
      return;
    }
    setTemplateStyle('alphabet-practice');
    setPdfGenerating(true);
  };

  const renderGrid = (letters: string[]) => (
    <div className="flex flex-wrap gap-3">
      {letters.map((char) => {
        const isSelected = alphabetSelection.includes(char);
        const isMaxedOut = !isSelected && alphabetSelection.length >= 5;
        
        return (
          <button
            key={char}
            onClick={() => toggleAlphabetSelection(char)}
            disabled={isMaxedOut}
            className={`
              w-12 h-12 md:w-14 md:h-14 rounded-xl text-2xl font-serif font-bold transition-all relative
              ${isSelected 
                ? 'bg-seal text-white shadow-md scale-105 border-2 border-seal' 
                : 'bg-white text-muk border-2 border-muk/10 hover:border-seal/50'
              }
              ${isMaxedOut ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-1'}
            `}
          >
            {char}
            {isSelected && (
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-0.5 shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-muk/10">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold font-serif text-muk mb-2">자음/모음 쓰기 (Alphabet Practice)</h2>
          <p className="text-muk/70">인쇄용 PDF에 추가할 글자를 선택하세요. (최대 5개)</p>
        </div>
        
        <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg font-bold">
          <span>선택됨:</span>
          <span className="text-xl">{alphabetSelection.length} / 5</span>
        </div>
      </div>

      {alphabetSelection.length === 5 && (
        <div className="flex items-center gap-2 text-seal bg-seal/10 p-3 rounded-lg text-sm font-bold">
          <AlertCircle size={18} />
          <span>최대 5개까지만 선택할 수 있습니다. 1장의 PDF에 5줄이 인쇄됩니다.</span>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg text-muk border-b border-muk/10 pb-2">기본 자음 (Consonants)</h3>
        {renderGrid(CONSONANTS)}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg text-muk border-b border-muk/10 pb-2">기본 모음 (Basic Vowels)</h3>
        {renderGrid(BASIC_VOWELS)}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg text-muk border-b border-muk/10 pb-2">복합 모음 (Complex Vowels)</h3>
        {renderGrid(COMPLEX_VOWELS)}
      </div>
      
      <div className="mt-4 pt-6 border-t border-muk/10 flex justify-center">
        <button
          onClick={handleGeneratePdf}
          disabled={alphabetSelection.length === 0}
          className="flex items-center justify-center gap-2 w-full md:w-auto px-12 py-4 bg-muk hover:bg-black text-white font-bold rounded-xl text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          <Download size={24} />
          <span>선택한 글자로 PDF 만들기</span>
        </button>
      </div>

    </div>
  );
}
