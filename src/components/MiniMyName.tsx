'use client';

import { useState } from 'react';
import { usePracticeStore } from '@/store';
import { Loader2, RefreshCw, Volume2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MiniMyName() {
  const t = useTranslations('MyName');
  const [name, setName] = useState('');
  const [hangul, setHangul] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { clearCharacters, addCharacters, setLayout, setPdfGenerating, setTemplateStyle } = usePracticeStore();

  const handleTranslate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    setHangul('');
    try {
      const res = await fetch('/api/transliterate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to translate');
      }

      const data = await res.json();
      setHangul(data.hangul);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes('429') || err.message?.includes('quota') || err.message?.includes('Too Many')) {
        alert(t('errorRateLimit'));
      } else {
        alert(t('errorGeneric'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = () => {
    if (!hangul || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(hangul);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  const handleGeneratePdf = () => {
    if (!hangul) {
      alert(t('alertEmpty'));
      return;
    }
    
    // Set up the store for custom 'My Name' template
    clearCharacters();
    addCharacters(hangul);
    // Usually names look best with 2 characters per row
    setLayout(2);
    setTemplateStyle('my-name');
    
    // Trigger PDF generation
    setPdfGenerating(true);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-muk/10 p-4 print:hidden">
      <h2 className="text-base font-bold text-muk mb-3 flex items-center gap-1 uppercase tracking-wide">
        {t('title')} <span className="text-sm font-normal text-muk/60">{t('titleSub')}</span>
      </h2>
      
      <form onSubmit={handleTranslate} className="flex items-center gap-2 mb-3">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('placeholder')} 
          className="flex-1 px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-seal text-sm transition-colors"
          maxLength={30}
        />
        <button 
          type="submit"
          disabled={isLoading || !name.trim()}
          className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md text-muk/70 disabled:opacity-50"
        >
          {isLoading ? <Loader2 className="animate-spin" size={16} /> : <RefreshCw size={16} />}
        </button>
      </form>

      <div className="flex items-center gap-3 border border-muk/10 rounded-md p-3 mb-0.5 bg-gray-50 min-h-[60px]">
        {hangul ? (
          <>
            <div className="text-3xl font-serif text-muk/40 select-none w-12 text-center">{hangul.charAt(0)}</div>
            <div className="flex-1">
              <p className="text-[10px] text-muk/60 mb-0.5">{t('creationResult')}</p>
              <p className="text-lg font-bold text-muk leading-none">{hangul}</p>
            </div>
            <button 
              onClick={handleSpeak}
              className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 shrink-0"
            >
              <Volume2 size={16} />
            </button>
          </>
        ) : (
          <p className="text-xs text-muk/40 text-center w-full">{t('translationWait')}</p>
        )}
      </div>
      
      {hangul && (
        <p className="text-[9px] text-muk/40 text-right mb-1">{t('aiGeneratedNotice')}</p>
      )}

      <button 
        onClick={handleGeneratePdf}
        className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-md text-xs tracking-wider transition-colors"
      >
        {t('getSheetBtn')}
      </button>
    </div>
  );
}
