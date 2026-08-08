'use client';

import { useEffect, useState } from 'react';
import { usePracticeStore } from '@/store';
import { useTranslations } from 'next-intl';

export default function PdfGeneratorModal() {
  const { isPdfGenerating, setPdfGenerating } = usePracticeStore();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPdfGenerating) {
      setCountdown(3);
      
      // Tick down every second
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            generatePdf();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPdfGenerating]);

  const generatePdf = async () => {
    const element = document.getElementById('pdf-content');
    if (!element) {
      setPdfGenerating(false);
      return;
    }

    try {
      // Dynamic import to avoid SSR issues with html2pdf
      // @ts-ignore
      const html2pdf = (await import('html2pdf.js')).default;

      const opt = {
        margin:       0, // We handle margins via CSS safe zone
        filename:     'write-hangul-practice.pdf',
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('Failed to generate PDF.');
    } finally {
      setPdfGenerating(false);
    }
  };

  const t = useTranslations('PdfModal');

  if (!isPdfGenerating) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-serif font-bold text-muk mb-2">
          {t('title')}
        </h2>
        <p className="text-seal font-bold text-lg mb-6">
          {t('countdown', { sec: countdown })}
        </p>
        
        {/* AdSense Dummy Box */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 w-full h-64 flex flex-col items-center justify-center text-gray-400 mb-4 rounded-lg">
          <span className="mb-2">{t('adPlaceholder')}</span>
          <span className="text-sm px-4">{t('adDesc')}</span>
        </div>
        
        <p className="text-sm text-gray-500">
          {t('waitDesc')}
        </p>
      </div>
    </div>
  );
}
