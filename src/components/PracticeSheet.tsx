'use client';

import { usePracticeStore } from '@/store';

export default function PracticeSheet() {
  const { characters, layout } = usePracticeStore();

  if (characters.length === 0) {
    return (
      <div className="text-center p-12 text-muk/50 border-2 border-dashed border-muk/20 rounded-xl print:hidden">
        Add characters to practice, or scan an image using the AI Scanner.
      </div>
    );
  }

  // Determine grid columns based on layout (1, 2, or 4 per page)
  const cols = layout === 1 ? 'grid-cols-1' : layout === 2 ? 'grid-cols-2' : 'grid-cols-2';
  const rows = layout === 4 ? 'grid-rows-2' : 'grid-rows-1';

  return (
    <div className={`grid ${cols} ${rows} gap-8 print:gap-0 print:block w-full`}>
      {characters.map((char, idx) => (
        <div 
          key={idx} 
          className={`
            border-2 border-muk/30 rounded-md p-8 flex flex-col
            aspect-[1/1.414] /* A4 proportion approx */
            print:border-0 print:p-0 print:block print:w-full print:h-[100vh] print:page-break-after-always
            ${layout === 4 ? 'print:h-[50vh] print:page-break-after-auto' : ''}
            ${layout === 2 ? 'print:h-[100vh] print:page-break-after-always' : ''}
          `}
        >
          {/* Practice Content Box */}
          <div className="flex-1 border-2 border-seal/30 relative flex items-center justify-center print:border-seal/50 print:h-full">
            {/* Guide lines (Traditional Korean manuscript paper style) */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-[0.5px] border-muk/10 pointer-events-none">
              <div className="border-r-[0.5px] border-b-[0.5px] border-muk/10 border-dashed"></div>
              <div className="border-b-[0.5px] border-muk/10 border-dashed"></div>
              <div className="border-r-[0.5px] border-muk/10 border-dashed"></div>
              <div></div>
            </div>
            
            <span className="text-9xl print:text-[150pt] font-serif text-muk/20 relative z-10">
              {char}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
