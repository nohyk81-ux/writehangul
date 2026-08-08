'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactForms() {
  const [supportStatus, setSupportStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [businessStatus, setBusinessStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [supportConsent, setSupportConsent] = useState(false);
  const [businessConsent, setBusinessConsent] = useState(false);

  const handleSupportSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supportConsent) return;
    
    setSupportStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdenalll', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSupportStatus('success');
        form.reset();
        setSupportConsent(false);
      } else {
        setSupportStatus('error');
      }
    } catch (err) {
      setSupportStatus('error');
    }
  };

  const handleBusinessSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!businessConsent) return;

    setBusinessStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myegkddo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setBusinessStatus('success');
        form.reset();
        setBusinessConsent(false);
      } else {
        setBusinessStatus('error');
      }
    } catch (err) {
      setBusinessStatus('error');
    }
  };

  const privacyText = "개인정보 수집 동의 (수집항목: 이름, 이메일 주소 / 목적: 문의사항 응대 / 보유기간: 6개월)";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      
      {/* 1. Email Support Form */}
      <div className="bg-white p-6 rounded-xl border-2 border-muk/10 shadow-sm flex flex-col w-full relative overflow-hidden">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Mail size={32} />
          </div>
          <h2 className="text-xl font-bold text-muk mb-2">Email Support</h2>
          <p className="text-muk/70 text-sm">For general inquiries and technical support.</p>
        </div>

        {supportStatus === 'success' ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <CheckCircle2 size={48} className="text-green-500 mb-4" />
            <h3 className="text-lg font-bold text-muk mb-2">Message Sent!</h3>
            <p className="text-muk/70 text-sm">We will get back to you shortly.</p>
            <button 
              onClick={() => setSupportStatus('idle')}
              className="mt-6 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSupportSubmit} className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="supportName" className="text-xs font-bold text-muk/70 uppercase tracking-wider">이름 (Name)</label>
              <input type="text" id="supportName" name="name" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="supportEmail" className="text-xs font-bold text-muk/70 uppercase tracking-wider">이메일 주소 (Email)</label>
              <input type="email" id="supportEmail" name="email" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="supportMessage" className="text-xs font-bold text-muk/70 uppercase tracking-wider">문의내용 (Message)</label>
              <textarea id="supportMessage" name="message" required rows={4} className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors resize-none flex-1"></textarea>
            </div>

            <label className="flex items-start gap-2 mt-2 cursor-pointer group">
              <input 
                type="checkbox" 
                required 
                checked={supportConsent}
                onChange={(e) => setSupportConsent(e.target.checked)}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-[11px] text-muk/60 leading-tight group-hover:text-muk/80 transition-colors">
                {privacyText}
              </span>
            </label>

            <button 
              type="submit" 
              disabled={supportStatus === 'loading' || !supportConsent}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-2 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-11"
            >
              {supportStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> : 'Send Message'}
            </button>
            {supportStatus === 'error' && <p className="text-red-500 text-xs text-center font-bold">Failed to send message. Please try again.</p>}
          </form>
        )}
      </div>


      {/* 2. Business & Partnerships Form */}
      <div className="bg-white p-6 rounded-xl border-2 border-muk/10 shadow-sm flex flex-col w-full relative overflow-hidden">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-xl font-bold text-muk mb-2">Business & Partnerships</h2>
          <p className="text-muk/70 text-sm">For advertising, partnerships, and press.</p>
        </div>

        {businessStatus === 'success' ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <CheckCircle2 size={48} className="text-green-500 mb-4" />
            <h3 className="text-lg font-bold text-muk mb-2">Message Sent!</h3>
            <p className="text-muk/70 text-sm">We will get back to you shortly.</p>
            <button 
              onClick={() => setBusinessStatus('idle')}
              className="mt-6 px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleBusinessSubmit} className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="bizName" className="text-xs font-bold text-muk/70 uppercase tracking-wider">이름 (Name)</label>
              <input type="text" id="bizName" name="name" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="bizEmail" className="text-xs font-bold text-muk/70 uppercase tracking-wider">이메일 주소 (Email)</label>
              <input type="email" id="bizEmail" name="email" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="bizCompany" className="text-xs font-bold text-muk/70 uppercase tracking-wider">회사명 (Company)</label>
              <input type="text" id="bizCompany" name="company" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
            </div>
            
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="bizMessage" className="text-xs font-bold text-muk/70 uppercase tracking-wider">문의내용 (Message)</label>
              <textarea id="bizMessage" name="message" required rows={3} className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors resize-none flex-1"></textarea>
            </div>

            <label className="flex items-start gap-2 mt-2 cursor-pointer group">
              <input 
                type="checkbox" 
                required 
                checked={businessConsent}
                onChange={(e) => setBusinessConsent(e.target.checked)}
                className="mt-0.5 rounded text-green-600 focus:ring-green-500 cursor-pointer"
              />
              <span className="text-[11px] text-muk/60 leading-tight group-hover:text-muk/80 transition-colors">
                {privacyText}
              </span>
            </label>

            <button 
              type="submit" 
              disabled={businessStatus === 'loading' || !businessConsent}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-2 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-11"
            >
              {businessStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> : 'Send Message'}
            </button>
            {businessStatus === 'error' && <p className="text-red-500 text-xs text-center font-bold">Failed to send message. Please try again.</p>}
          </form>
        )}
      </div>

    </div>
  );
}
