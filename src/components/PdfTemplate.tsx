'use client';

import { usePracticeStore } from '@/store';
import { useTranslations } from 'next-intl';

export default function PdfTemplate() {
  const { characters, layout, templateStyle } = usePracticeStore();
  
  // Use try-catch or optional translation since this component mounts globally 
  // but we might not have 'MyName' namespace loaded everywhere.
  // Actually, 'MyName' is loaded on the home page.
  // We can just use the hook.
  const t = useTranslations('MyName');

  // If there are no characters, render an empty safe zone to prevent errors
  if (characters.length === 0) {
    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div id="pdf-content" style={{ width: '210mm', minHeight: '297mm', backgroundColor: '#ffffff', position: 'relative' }}>
        </div>
      </div>
    );
  }

  const isSpecial = templateStyle === 'my-name';
  const containerHex = isSpecial ? '#faf8f5' : '#ffffff';

  if (isSpecial) {
    const nameLength = characters.length;
    const rowsPerName = Math.ceil(nameLength / 6);
    const totalRepetitions = rowsPerName > 0 ? Math.floor(8 / rowsPerName) : 0;
    
    const cells = [];
    for (let rep = 0; rep < totalRepetitions; rep++) {
      for (let i = 0; i < rowsPerName * 6; i++) {
        cells.push(characters[i] || '');
      }
    }
    while (cells.length < 48) {
      cells.push('');
    }

    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div 
          id="pdf-content" 
          style={{ width: '210mm', minHeight: '297mm', backgroundColor: containerHex, position: 'relative' }}
          className="flex flex-col box-border pt-[15mm] pb-[15mm] px-[20mm]"
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
               style={{ backgroundImage: 'radial-gradient(#d5c5b3 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="w-full relative z-10 flex flex-col items-center">
            {/* HEADER */}
            <div className="text-center mb-[4mm] w-full flex flex-col items-center">
              <h1 className="text-2xl font-bold font-sans tracking-widest text-muk mb-1">
                나의 한글이름 쓰기
              </h1>
              <h2 className="text-[10px] font-sans tracking-widest text-muk/60 uppercase">
                {t('pdfHeader')}
              </h2>
            </div>
            
            {/* MAIN GRID */}
            <div className="grid grid-cols-6 grid-rows-8 w-full border-t-[1.5px] border-l-[1.5px]" style={{ height: '235mm', borderColor: 'rgba(231, 76, 60, 0.5)' }}>
              {cells.map((char, idx) => (
                <div key={idx} className="border-b-[1.5px] border-r-[1.5px] flex items-center justify-center relative bg-white/50 overflow-hidden" style={{ borderColor: 'rgba(231, 76, 60, 0.5)' }}>
                  {/* Guidelines */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-[0.5px] pointer-events-none z-0" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}>
                    <div className="border-r-[0.5px] border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                    <div className="border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                    <div className="border-r-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                    <div></div>
                  </div>
                  {/* Character */}
                  {char && (
                    <span className="font-sans font-medium text-[38pt] relative z-10 flex items-center justify-center w-full h-full pb-1" style={{ color: 'rgba(44, 62, 80, 0.25)' }}>
                      {char}
                    </span>
                  )}
                </div>
              ))}
            </div>
            
            {/* FOOTER */}
            <div className="flex justify-between items-end w-full mt-[4mm]">
              <div className="text-lg font-bold font-sans text-muk tracking-widest">
                {characters.join('')}
              </div>
              <div className="text-[11px] font-sans font-medium text-muk/60">
                {t('pdfSource')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DEFAULT LAYOUT
  const cols = layout === 1 ? 'grid-cols-1' : 'grid-cols-2';
  const rows = layout === 4 ? 'grid-rows-2' : 'grid-rows-1';

  return (
    <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <div 
        id="pdf-content" 
        style={{
          width: '210mm',
          minHeight: '297mm',
          backgroundColor: containerHex,
          position: 'relative'
        }}
      >
        <div className={`pdf-safe-zone grid ${cols} ${rows} gap-0 w-[210mm] min-h-[297mm] relative z-10`}>
          {characters.map((char, idx) => (
            <div 
              key={idx} 
              className={`
                border-2 flex flex-col items-center justify-center relative
                ${layout === 4 ? 'h-[133.5mm]' : 'h-[267mm]'}
              `}
              style={{
                pageBreakInside: 'avoid',
                borderColor: 'rgba(231, 76, 60, 0.5)' /* seal/50 */
              }}
            >
              {/* Guide lines (Traditional Korean manuscript paper style) */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-[0.5px] pointer-events-none z-0" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}>
                <div className="border-r-[0.5px] border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                <div className="border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                <div className="border-r-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                <div></div>
              </div>
              
              <span 
                className={`font-pen relative z-10 
                  ${layout === 4 ? 'text-[150pt]' : 'text-[250pt]'}
                `}
                style={{ color: 'rgba(44, 62, 80, 0.2)' }}
              >
                {char}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
