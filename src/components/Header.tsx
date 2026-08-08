export default function Header() {
  return (
    <header className="relative w-full border-b-2 border-muk/10 bg-white print:hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          {/* Authentic Korean Red Seal Stamp (Nakgwan) */}
          <div className="w-12 h-12 bg-white border-2 border-seal text-seal font-serif font-bold flex items-center justify-center rounded-sm transform -rotate-3 select-none text-2xl shadow-sm">
            한
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif text-muk tracking-tight leading-none">
              Write Hangul
            </h1>
          </div>
          <span className="text-2xl ml-2 opacity-80">✍️</span>
        </div>
        
        {/* Right Section: Language & Guest Progress */}
        <div className="flex flex-col items-end text-right">
          <div className="text-xs text-muk/60 mb-2 flex items-center gap-2 font-medium bg-gray-100 px-3 py-1 rounded-full">
            <span>Global Language Setting 🌍</span>
            <span>🇬🇧 🇯🇵 🇨🇳 🇪🇸 🇮🇩 🇻🇳</span>
          </div>
          
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl shadow-sm">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl border-2 border-white shadow-sm">
              👤
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-muk leading-tight flex items-center gap-1">
                Guest Progress <span className="text-xs text-muk/60 font-normal">(내 진행상황)</span>
              </p>
              <p className="text-xs text-muk/80 leading-tight flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span> Today - checked
              </p>
            </div>
            <button className="w-6 h-6 rounded-full border border-muk/30 flex items-center justify-center text-xs text-muk/50 hover:bg-muk/5 ml-2">
              ?
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
