'use client';

import { usePracticeStore } from '@/store';
import { useTranslations, useLocale } from 'next-intl';
import { dailyContentMap } from '@/data/dailyContent';

import { hangulSvgs } from '@/data/hangulSvgs';

export default function PdfTemplate() {
  const { characters, layout, templateStyle, selectedDailyDate, alphabetSelection = [] } = usePracticeStore();
  const locale = useLocale();
  
  const dateToUse = selectedDailyDate || `${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
  const translation = dailyContentMap[dateToUse]?.[locale as keyof typeof dailyContentMap[string]] || '';

  // Use try-catch or optional translation since this component mounts globally 
  // but we might not have 'MyName' namespace loaded everywhere.
  // Actually, 'MyName' is loaded on the home page.
  // We can just use the hook.
  const t = useTranslations('MyName');
  const tAlphabet = useTranslations('AlphabetPractice');

  // If there are no characters, render an empty safe zone to prevent errors
  if (characters.length === 0 && templateStyle !== 'alphabet-practice') {
    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div id="pdf-content" style={{ width: '210mm', minHeight: '275mm', backgroundColor: '#ffffff', position: 'relative' }}>
        </div>
      </div>
    );
  }

  const isSpecial = templateStyle === 'my-name' || templateStyle === 'daily-learning' || templateStyle === 'learning-levels';
  const containerHex = '#ffffff';

  if (isSpecial) {
    const rawString = characters.join('');
    const words = rawString.includes('\n') ? rawString.split('\n').filter(w => w.trim() !== '') : [rawString];

    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div id="pdf-content" style={{ backgroundColor: containerHex, position: 'relative' }}>
          {words.map((wordStr, pageIdx) => {
            const wordChars = wordStr.split('');
            const nameLength = wordChars.length;
            const rowsPerName = Math.ceil(nameLength / 6);
            const totalRepetitions = rowsPerName > 0 ? Math.floor(8 / rowsPerName) : 0;
            
            const cells = [];
            for (let rep = 0; rep < totalRepetitions; rep++) {
              for (let i = 0; i < rowsPerName * 6; i++) {
                cells.push(wordChars[i] || '');
              }
            }
            while (cells.length < 48) {
              cells.push('');
            }

            return (
              <div 
                key={pageIdx}
                style={{ width: '210mm', height: '275mm', overflow: 'hidden', position: 'relative' }}
                className={`flex flex-col box-border pt-[12mm] pb-[12mm] px-[20mm] ${pageIdx > 0 ? 'html2pdf__page-break' : ''}`}
              >
                <div className="w-full relative z-10 flex flex-col items-center">
                  {/* HEADER */}
                  <div className="text-center mb-[4mm] w-full flex flex-col items-center">
                    <h1 className="text-2xl font-bold font-sans tracking-widest text-muk mb-1">
                      {templateStyle === 'daily-learning' ? "오늘의 한국어 쓰기" : templateStyle === 'learning-levels' ? "한국어 쓰기 연습" : "나의 한글이름 쓰기"}
                    </h1>
                    <h2 className="text-[10px] font-sans tracking-widest text-muk/60 uppercase">
                      {templateStyle === 'daily-learning' ? "TODAY'S HANGUL PRACTICE" : templateStyle === 'learning-levels' ? "HANGUL PRACTICE" : t('pdfHeader')}
                    </h2>
                  </div>
                  
                  {/* TOP THICK DIVIDER */}
                  <div className="w-full h-[3px] bg-muk mb-[1.5mm]"></div>
                  
                  {/* MAIN GRID */}
                  <div className="grid grid-cols-6 grid-rows-8 w-full border-t-[1.5px] border-l-[1.5px]" style={{ height: '220mm', borderColor: 'rgba(231, 76, 60, 0.5)' }}>
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
                          <span className="font-sans font-medium text-[40pt] relative z-10 -translate-y-5" style={{ color: 'rgba(44, 62, 80, 0.25)' }}>
                            {char}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* BOTTOM THICK DIVIDER */}
                  <div className="w-full h-[3px] bg-muk mt-[1.5mm] mb-[1mm]"></div>
                  
                  {/* FOOTER */}
                  <div className="flex justify-between items-end w-full">
                    <div className="text-lg font-bold font-sans text-muk tracking-widest flex items-baseline gap-2 truncate max-w-[120mm]">
                      <span className="truncate">{wordStr}</span>
                      {templateStyle === 'daily-learning' && (
                        <span className="text-[11px] font-medium text-muk/60 font-sans tracking-normal whitespace-nowrap">
                          {translation}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-sans font-medium text-muk/60 whitespace-nowrap">
                      {t('pdfSource')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (templateStyle === 'alphabet-practice') {
    // We need up to 8 rows
    const rows = [];
    for (let r = 0; r < 8; r++) {
      rows.push(alphabetSelection[r] || '');
    }

    // SVG style block
    const svgStyle = `
      .order-arrow { stroke-linecap: round; fill: #e74c3c; }
      .stroke-number { fill: #2c3e50; font-family: sans-serif; font-weight: bold; }
      .jamo { fill: none; stroke: #2c3e50; stroke-width: 15; stroke-linecap: round; stroke-linejoin: round; }
    `;

    return (
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div id="pdf-content" style={{ backgroundColor: containerHex, position: 'relative' }}>
          <div 
            style={{ width: '210mm', height: '275mm', overflow: 'hidden', position: 'relative' }}
            className="flex flex-col box-border pt-[12mm] pb-[12mm] px-[20mm]"
          >
            <style dangerouslySetInnerHTML={{ __html: svgStyle }} />
            
            <div className="w-full relative z-10 flex flex-col items-center">
              {/* HEADER */}
              <div className="text-center mb-[4mm] w-full flex flex-col items-center">
                <h1 className="text-2xl font-bold font-sans tracking-widest text-muk mb-1">
                  {tAlphabet('pdfHeaderTitle')}
                </h1>
                <h2 className="text-[10px] font-sans tracking-widest text-muk/60 uppercase">
                  {tAlphabet('pdfHeaderSubtitle')}
                </h2>
              </div>
              
              {/* TOP THICK DIVIDER */}
              <div className="w-full h-[3px] bg-muk mb-[1.5mm]"></div>
              
              {/* MAIN GRID */}
              <div className="grid grid-cols-6 grid-rows-8 w-full border-t-[1.5px] border-l-[1.5px]" style={{ height: '220mm', borderColor: 'rgba(231, 76, 60, 0.5)' }}>
                {rows.map((char, r) => {
                  return Array.from({ length: 6 }).map((_, c) => {
                    const isGuide = c === 0;
                    const isTracing = c === 1 || c === 2;
                    
                    return (
                      <div key={`${r}-${c}`} className="border-b-[1.5px] border-r-[1.5px] flex items-center justify-center relative bg-white/50 overflow-hidden" style={{ borderColor: 'rgba(231, 76, 60, 0.5)' }}>
                        {/* Guidelines */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-[0.5px] pointer-events-none z-0" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}>
                          <div className="border-r-[0.5px] border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                          <div className="border-b-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                          <div className="border-r-[0.5px] border-dashed" style={{ borderColor: 'rgba(44, 62, 80, 0.2)' }}></div>
                          <div></div>
                        </div>
                        
                        {/* Character Content */}
                        {char && isGuide && hangulSvgs[char] && (
                          <div 
                            className="relative z-10 w-full h-full p-1 opacity-80"
                            dangerouslySetInnerHTML={{ __html: hangulSvgs[char] }}
                          />
                        )}
                        {char && isTracing && (
                          <span className="font-pen text-[60pt] relative z-10 -translate-y-4" style={{ color: 'rgba(44, 62, 80, 0.25)' }}>
                            {char}
                          </span>
                        )}
                      </div>
                    );
                  });
                })}
              </div>
              
              {/* BOTTOM THICK DIVIDER */}
              <div className="w-full h-[3px] bg-muk mt-[1.5mm] mb-[1mm]"></div>
              
              {/* FOOTER */}
              <div className="flex justify-between items-end w-full">
                <div className="text-lg font-bold font-sans text-muk tracking-widest flex items-baseline gap-2">
                  <span>{tAlphabet('pdfHeaderTitle')}</span>
                </div>
                <div className="text-[11px] font-sans font-medium text-muk/60 whitespace-nowrap">
                  {t('pdfSource')}
                </div>
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
          minHeight: '275mm',
          backgroundColor: containerHex,
          position: 'relative'
        }}
      >
        <div className={`pdf-safe-zone grid ${cols} ${rows} gap-0 w-[210mm] min-h-[275mm] relative z-10`}>
          {characters.map((char, idx) => (
            <div 
              key={idx} 
              className={`
                border-2 flex flex-col items-center justify-center relative
                ${layout === 4 ? 'h-[125mm]' : 'h-[250mm]'}
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
