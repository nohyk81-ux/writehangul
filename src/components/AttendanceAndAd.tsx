'use client';

import { useEffect, useState } from 'react';
import { usePracticeStore } from '@/store';
import { useTranslations } from 'next-intl';

export default function AttendanceAndAd() {
  const { checkIn } = usePracticeStore();
  const [showAd, setShowAd] = useState(false);
  const [adDismissed, setAdDismissed] = useState(false);

  useEffect(() => {
    // 1. Check in for attendance
    checkIn();

    // 2. Monetization 3-second delay modal
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('ad_shown')) {
        setShowAd(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [checkIn]);

  const closeAd = () => {
    setShowAd(false);
    setAdDismissed(true);
    sessionStorage.setItem('ad_shown', 'true');
  };

  return (
    <>
      {showAd && !adDismissed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 print:hidden p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative text-center">
            <button 
              onClick={closeAd}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Support Write Hangul</h3>
            <div className="bg-gray-100 border border-dashed border-gray-300 w-full h-48 flex items-center justify-center text-gray-400 mb-4">
              [ AdSense Placeholder ]
            </div>
            <p className="text-sm text-gray-500">Thank you for practicing with us!</p>
          </div>
        </div>
      )}
    </>
  );
}
