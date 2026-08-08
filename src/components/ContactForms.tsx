'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Loader2, CheckCircle2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactForms() {
  const t = useTranslations('Contact');
  const [activeModal, setActiveModal] = useState<'none' | 'support' | 'business'>('none');
  
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

  const closeModal = () => {
    setActiveModal('none');
    // Reset states when closing
    setSupportStatus('idle');
    setBusinessStatus('idle');
    setSupportConsent(false);
    setBusinessConsent(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Support Card Button */}
        <button 
          onClick={() => setActiveModal('support')}
          className="bg-white p-8 rounded-2xl border-2 border-muk/10 shadow-sm flex flex-col items-center text-center hover:border-blue-300 hover:shadow-md transition-all group"
        >
          <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <Mail size={40} />
          </div>
          <h2 className="text-2xl font-bold text-muk mb-3">{t('supportTitle')}</h2>
          <p className="text-muk/70">{t('supportDesc')}</p>
        </button>

        {/* Business Card Button */}
        <button 
          onClick={() => setActiveModal('business')}
          className="bg-white p-8 rounded-2xl border-2 border-muk/10 shadow-sm flex flex-col items-center text-center hover:border-green-300 hover:shadow-md transition-all group"
        >
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
            <MessageSquare size={40} />
          </div>
          <h2 className="text-2xl font-bold text-muk mb-3">{t('bizTitle')}</h2>
          <p className="text-muk/70">{t('bizDesc')}</p>
        </button>
      </div>

      {/* Modal Overlay */}
      {activeModal !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 relative max-h-[90vh] flex flex-col">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-muk/5 hover:bg-muk/10 text-muk/60 hover:text-muk transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Support Modal Content */}
            {activeModal === 'support' && (
              <div className="p-6 overflow-y-auto">
                <div className="flex flex-col items-center text-center mb-6 pt-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-3">
                    <Mail size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-muk mb-1">{t('supportTitle')}</h2>
                  <p className="text-muk/70 text-sm">{t('supportModalDesc')}</p>
                </div>

                {supportStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mb-4" />
                    <h3 className="text-lg font-bold text-muk mb-2">{t('successTitle')}</h3>
                    <p className="text-muk/70 text-sm">{t('successDesc')}</p>
                    <button 
                      onClick={closeModal}
                      className="mt-6 w-full py-3 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
                    >
                      {t('closeBtn')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSupportSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="supportName" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('nameLabel')}</label>
                      <input type="text" id="supportName" name="name" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label htmlFor="supportEmail" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('emailLabel')}</label>
                      <input type="email" id="supportEmail" name="email" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label htmlFor="supportMessage" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('messageLabel')}</label>
                      <textarea id="supportMessage" name="message" required rows={4} className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-blue-500 text-sm transition-colors resize-none"></textarea>
                    </div>

                    <label className="flex items-start gap-2 mt-2 cursor-pointer group bg-muk/5 p-3 rounded-lg border border-muk/10">
                      <input 
                        type="checkbox" 
                        required 
                        checked={supportConsent}
                        onChange={(e) => setSupportConsent(e.target.checked)}
                        className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-[11px] text-muk/60 leading-tight group-hover:text-muk/80 transition-colors">
                        {t('privacyConsent')}
                      </span>
                    </label>

                    <button 
                      type="submit" 
                      disabled={supportStatus === 'loading' || !supportConsent}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-2 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-12"
                    >
                      {supportStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> : t('sendBtn')}
                    </button>
                    {supportStatus === 'error' && <p className="text-red-500 text-xs text-center font-bold mt-2">{t('errorMsg')}</p>}
                  </form>
                )}
              </div>
            )}

            {/* Business Modal Content */}
            {activeModal === 'business' && (
              <div className="p-6 overflow-y-auto">
                <div className="flex flex-col items-center text-center mb-6 pt-4">
                  <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-3">
                    <MessageSquare size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-muk mb-1">{t('bizTitle')}</h2>
                  <p className="text-muk/70 text-sm">{t('bizModalDesc')}</p>
                </div>

                {businessStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <CheckCircle2 size={48} className="text-green-500 mb-4" />
                    <h3 className="text-lg font-bold text-muk mb-2">{t('successTitle')}</h3>
                    <p className="text-muk/70 text-sm">{t('successDesc')}</p>
                    <button 
                      onClick={closeModal}
                      className="mt-6 w-full py-3 bg-green-50 text-green-600 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors"
                    >
                      {t('closeBtn')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBusinessSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="bizName" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('nameLabel')}</label>
                      <input type="text" id="bizName" name="name" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label htmlFor="bizEmail" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('emailLabel')}</label>
                      <input type="email" id="bizEmail" name="email" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="bizCompany" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('companyLabel')}</label>
                      <input type="text" id="bizCompany" name="company" required className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors" />
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <label htmlFor="bizMessage" className="text-xs font-bold text-muk/70 uppercase tracking-wider">{t('messageLabel')}</label>
                      <textarea id="bizMessage" name="message" required rows={3} className="w-full px-3 py-2 border border-muk/20 rounded-md outline-none focus:border-green-500 text-sm transition-colors resize-none"></textarea>
                    </div>

                    <label className="flex items-start gap-2 mt-2 cursor-pointer group bg-muk/5 p-3 rounded-lg border border-muk/10">
                      <input 
                        type="checkbox" 
                        required 
                        checked={businessConsent}
                        onChange={(e) => setBusinessConsent(e.target.checked)}
                        className="mt-0.5 rounded text-green-600 focus:ring-green-500 cursor-pointer"
                      />
                      <span className="text-[11px] text-muk/60 leading-tight group-hover:text-muk/80 transition-colors">
                        {t('privacyConsent')}
                      </span>
                    </label>

                    <button 
                      type="submit" 
                      disabled={businessStatus === 'loading' || !businessConsent}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-2 rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-12"
                    >
                      {businessStatus === 'loading' ? <Loader2 size={18} className="animate-spin" /> : t('sendBtn')}
                    </button>
                    {businessStatus === 'error' && <p className="text-red-500 text-xs text-center font-bold mt-2">{t('errorMsg')}</p>}
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
