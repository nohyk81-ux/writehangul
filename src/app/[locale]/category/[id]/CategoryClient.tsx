'use client';

import WordCard from '@/components/WordCard';

interface CategoryClientProps {
  categoryId: string;
  initialData: Array<{ korean: string; romanization: string }>;
}

export default function CategoryClient({ categoryId, initialData }: CategoryClientProps) {
  const isAlphabet = categoryId === 'alphabet';

  return (
    <div className="print:hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialData.map((item, idx) => (
          <WordCard 
            key={idx}
            korean={item.korean}
            romanization={item.romanization}
            isAlphabet={isAlphabet}
          />
        ))}
      </div>
    </div>
  );
}
