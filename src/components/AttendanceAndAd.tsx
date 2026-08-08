'use client';

import { useEffect } from 'react';
import { usePracticeStore } from '@/store';

export default function AttendanceAndAd() {
  const { checkIn } = usePracticeStore();

  useEffect(() => {
    // 1. Check in for attendance (Streak tracking)
    checkIn();
  }, [checkIn]);

  return null; // Ad modal removed based on feedback
}
