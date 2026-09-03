import { Link } from '@/i18n/routing';
import { 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  PenTool, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  Grid
} from 'lucide-react';
import { homeEducationalData } from '@/data/multilingualEducational';

export default function HomeEducationalContent({ locale }: { locale: string }) {
  const getLoc = (obj: any) => obj[locale] || obj['en'] || Object.values(obj)[0] || '';

  const stepIcons = [
    <PenTool key="1" size={28} className="text-blue-600" />,
    <Grid key="2" size={28} className="text-emerald-600" />,
    <Printer key="3" size={28} className="text-purple-600" />
  ];

  return (
    <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 print:hidden">
      {/* 3-Step Process Section */}
      <div className="mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            {getLoc(homeEducationalData.badge)}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-muk mb-4 leading-tight">
            {getLoc(homeEducationalData.mainTitle)}
          </h2>
          <p className="text-muk/70 text-sm md:text-base leading-relaxed">
            {getLoc(homeEducationalData.mainDesc)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {homeEducationalData.steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-muk/10 shadow-sm hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-hanji border border-muk/10 flex items-center justify-center shadow-inner">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-serif font-bold text-muk/20">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-muk mb-3 leading-snug">
                  {getLoc(s.title)}
                </h3>
                <p className="text-muk/70 text-sm leading-relaxed">
                  {getLoc(s.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Deep Dive Banner */}
      <div className="bg-hanji rounded-3xl border border-muk/10 p-6 md:p-10 mb-16 md:mb-24 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-seal uppercase tracking-wider mb-2">
              <BookOpen size={16} />
              {getLoc(homeEducationalData.deepDiveBadge)}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-muk mb-4 leading-tight">
              {getLoc(homeEducationalData.deepDiveTitle)}
            </h3>
            <p className="text-muk/80 text-sm md:text-base leading-relaxed mb-4">
              {getLoc(homeEducationalData.deepDiveDesc)}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-muk/60">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {getLoc(homeEducationalData.deepDivePoints.p1)}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {getLoc(homeEducationalData.deepDivePoints.p2)}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {getLoc(homeEducationalData.deepDivePoints.p3)}</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
            <Link
              href="/guide"
              className="inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-md w-full sm:w-auto"
            >
              <span>{getLoc(homeEducationalData.deepDiveBtn)}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-muk/60 bg-white border border-muk/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <HelpCircle size={14} className="text-blue-600" />
            {getLoc(homeEducationalData.faqBadge)}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-muk leading-tight">
            {getLoc(homeEducationalData.faqTitle)}
          </h2>
        </div>

        <div className="space-y-4">
          {homeEducationalData.faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-muk/10 p-6 md:p-7 shadow-sm hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-bold text-muk font-serif mb-3 flex items-start gap-3">
                <span className="text-blue-600 font-sans font-extrabold text-base md:text-lg">Q.</span>
                <span>{getLoc(faq.q)}</span>
              </h3>
              <div className="text-muk/70 text-sm md:text-base leading-relaxed pl-7">
                <p>{getLoc(faq.a)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
