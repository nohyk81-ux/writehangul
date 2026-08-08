'use client';

import { useState } from 'react';
import { usePracticeStore } from '@/store';
import { Download, Loader2, ArrowRight } from 'lucide-react';

export default function MyNameClient() {
  const [name, setName] = useState('');
  const [hangul, setHangul] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { clearCharacters, addCharacters, setLayout, setPdfGenerating, setTemplateStyle } = usePracticeStore();

  const handleTranslate = async (e: React.FormEvent) => {
    e.preventDefault();
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
        throw new Error('Failed to translate');
      }

      const data = await res.json();
      setHangul(data.hangul);
    } catch (err) {
      console.error(err);
      alert('Error translating your name. Please try again or type directly in Korean.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePdf = () => {
    if (!hangul) return;
    
    // Set up the store for custom 'My Name' template
    clearCharacters();
    addCharacters(hangul);
    // Usually names look best with 2 characters per row (which gives nice large boxes)
    setLayout(2);
    setTemplateStyle('my-name');
    
    // Trigger PDF generation
    setPdfGenerating(true);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-muk/10 p-6 md:p-8">
      <form onSubmit={handleTranslate} className="flex flex-col gap-4">
        <div>
          <label htmlFor="nameInput" className="block text-sm font-bold text-muk/70 mb-2 uppercase tracking-wider">
            Your Name
          </label>
          <input 
            id="nameInput"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Michael, 田中, José" 
            className="w-full p-4 border-2 border-muk/10 rounded-xl outline-none focus:border-seal focus:ring-1 focus:ring-seal text-lg transition-all"
            required
            maxLength={30}
          />
        </div>
        
        <button 
          type="submit"
          disabled={isLoading || !name.trim()}
          className="w-full bg-muk hover:bg-muk/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              Translate to Hangul <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>

      {hangul && (
        <div className="mt-8 pt-8 border-t border-muk/10 flex flex-col items-center">
          <p className="text-sm font-bold text-muk/50 uppercase tracking-wider mb-3">Result</p>
          <div className="text-5xl md:text-6xl font-serif font-bold text-muk mb-8 tracking-widest">
            {hangul}
          </div>
          
          <button 
            onClick={handleGeneratePdf}
            className="w-full bg-seal hover:bg-seal/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
          >
            <Download size={22} />
            Generate Custom PDF
          </button>
        </div>
      )}
    </div>
  );
}
