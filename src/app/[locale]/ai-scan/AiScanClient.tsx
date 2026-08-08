'use client';

import { useState, useRef } from 'react';
import { Camera, UploadCloud, Loader2, Sparkles, X } from 'lucide-react';
import WordCard from '@/components/WordCard';

export default function AiScanClient() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ korean: string; romanization: string; meaning: string } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File is too large. Please select an image under 5MB.');
      return;
    }

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null); // clear previous results
  };

  const handleClear = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) return;

    setIsLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const res = await fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to analyze image');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-6">
      
      {/* Hidden file input supporting camera capture on mobile */}
      <input 
        type="file" 
        accept="image/jpeg, image/png, image/webp" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleFileSelect}
      />

      {!previewUrl ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-64 border-2 border-dashed border-purple-300 bg-purple-50/50 hover:bg-purple-50 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors"
        >
          <div className="flex gap-4 mb-4 text-purple-500">
            <Camera size={40} />
            <UploadCloud size={40} />
          </div>
          <p className="font-bold text-muk text-lg">Tap to open Camera / Gallery</p>
          <p className="text-muk/50 text-sm mt-2">Max file size: 5MB (JPG, PNG, WebP)</p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4">
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-purple-200 shadow-sm bg-black/5 flex justify-center items-center h-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-h-full max-w-full object-contain"
            />
            <button 
              onClick={handleClear}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X size={18} />
            </button>
          </div>
          
          <button 
            onClick={handleAnalyze}
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Sparkles size={20} />
                ✨ AI 분석 및 연습장 생성
              </>
            )}
          </button>
        </div>
      )}

      {/* Result Section */}
      {result && (
        <div className="w-full mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-4">
            <p className="text-sm font-bold text-purple-500 uppercase tracking-wider">Analysis Complete</p>
            <p className="text-xl font-serif text-muk mt-1">Meaning: <strong>{result.meaning}</strong></p>
          </div>
          
          <WordCard 
            korean={result.korean}
            romanization={result.romanization}
            emoji="🤖"
          />
        </div>
      )}
    </div>
  );
}
