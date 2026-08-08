import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PracticeStore {
  characters: string[];
  layout: 1 | 2 | 4;
  visitedDates: string[];
  isPdfGenerating: boolean;
  templateStyle: 'default' | 'my-name';
  addCharacters: (chars: string) => void;
  removeCharacter: (index: number) => void;
  setLayout: (layout: 1 | 2 | 4) => void;
  clearCharacters: () => void;
  checkIn: () => void;
  setPdfGenerating: (isGenerating: boolean) => void;
  setTemplateStyle: (style: 'default' | 'my-name') => void;
}

export const usePracticeStore = create<PracticeStore>()(
  persist(
    (set, get) => ({
      characters: ['한', '글', '연', '습'],
      layout: 2, // default 2
      visitedDates: [],
      isPdfGenerating: false,
      templateStyle: 'default',
      setPdfGenerating: (isPdfGenerating) => set({ isPdfGenerating }),
      setTemplateStyle: (templateStyle) => set({ templateStyle }),
      addCharacters: (chars) => set((state) => {
        const newChars = chars.replace(/\s+/g, '').split('');
        return { characters: [...state.characters, ...newChars] };
      }),
      removeCharacter: (index) => set((state) => ({
        characters: state.characters.filter((_, i) => i !== index)
      })),
      setLayout: (layout) => set({ layout }),
      clearCharacters: () => set({ characters: [] }),
      checkIn: () => {
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const { visitedDates } = get();
        if (!visitedDates.includes(today)) {
          set({
            visitedDates: [...visitedDates, today]
          });
        }
      }
    }),
    {
      name: 'writehangul-storage', // unique name for localStorage
    }
  )
);
