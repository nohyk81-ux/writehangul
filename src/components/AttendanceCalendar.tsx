'use client';

import { useEffect, useState } from 'react';
import { usePracticeStore } from '@/store';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export default function AttendanceCalendar() {
  const { visitedDates, checkIn, selectedDailyDate, setSelectedDailyDate } = usePracticeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    checkIn();
  }, [checkIn]);

  if (!mounted) return null;

  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Create a 5x7 grid of mock days for visuals (starts at 1)
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const num = i - 2; // Offset to start at 1 on Wednesday
    return num > 0 && num <= 31 ? num : null;
  });

  return (
    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 shadow-sm print:hidden">
      <div className="flex items-center justify-between mb-4">
        <button className="text-muk/50 hover:text-muk"><ChevronLeft size={16}/></button>
        <span className="text-sm font-bold text-muk flex items-center gap-1">
          <CalendarIcon size={14}/> Today {today.getFullYear()}
        </span>
        <button className="text-muk/50 hover:text-muk"><ChevronRight size={16}/></button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-[10px] font-bold text-muk/70">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, idx) => {
          if (day === null) {
            return <div key={idx} className="aspect-square bg-transparent"></div>;
          }
          
          const isToday = day === today.getDate();
          const isFuture = day > today.getDate();
          const dateStr = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          
          // Determine if selected. If nothing selected, today is implicitly selected.
          const isSelected = selectedDailyDate === dateStr || (!selectedDailyDate && isToday);

          return (
            <button 
              key={idx} 
              onClick={() => !isFuture && setSelectedDailyDate(dateStr)}
              disabled={isFuture}
              className={`
                aspect-square flex items-center justify-center rounded text-[11px] font-medium relative transition-colors
                ${isFuture ? 'opacity-30 cursor-not-allowed bg-white border border-muk/5' : 'cursor-pointer hover:bg-orange-100'}
                ${isSelected && !isFuture ? 'bg-orange-200 border border-orange-400 font-bold text-orange-900 shadow-sm' : ''}
                ${!isSelected && !isFuture ? 'bg-white border border-muk/5 text-muk/80' : ''}
              `}
            >
              {isToday && !isSelected && (
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
              )}
              {isToday ? (
                <div className="flex flex-col items-center">
                  <span className="text-[12px]">👦🏻</span>
                </div>
              ) : (
                day
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
