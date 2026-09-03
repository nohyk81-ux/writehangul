import { Link } from '@/i18n/routing';
import { 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  PenTool, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  Compass, 
  Grid,
  FileDown
} from 'lucide-react';

export default function HomeEducationalContent({ locale }: { locale: string }) {
  const isKo = locale === 'ko';

  const steps = [
    {
      num: '01',
      icon: <PenTool size={28} className="text-blue-600" />,
      title: isKo ? '원하는 학습 모드 선택' : 'Select Your Practice Mode',
      desc: isKo
        ? '기초 24자 자음·모음부터 매일 업데이트되는 일일 회화 문장, K-컬처 단어장, 내 이름 변환까지 맞춤형 콘텐츠를 선택하세요.'
        : 'Choose from 24 basic Hangul letters, daily Korean conversational sentences, K-Culture vocabulary, or your personalized Korean name.'
    },
    {
      num: '02',
      icon: <Grid size={28} className="text-emerald-600" />,
      title: isKo ? '정밀 십자 격자(원고지) 구성' : 'Universal Precision Grid (Wongoji)',
      desc: isKo
        ? '훈민정음 모아쓰기 원리에 맞춘 4분할 십자 가이드라인이 글자의 초성·중성·종성 무게중심과 시각적 균형을 잡아줍니다.'
        : 'Our 4-quadrant crosshair guidelines balance initial, medial, and final consonants for perfect proportion and spacing.'
    },
    {
      num: '03',
      icon: <Printer size={28} className="text-purple-600" />,
      title: isKo ? '무료 고화질 PDF 다운로드 & 인쇄' : 'Instant PDF Generation & Printing',
      desc: isKo
        ? 'A4와 US Letter 전 세계 표준 용지에 여백 잘림 없이 100% 최적화된 고화질 벡터 PDF를 클릭 한 번으로 즉시 인쇄하세요.'
        : 'Download calibrated vector PDFs that print flawlessly on both standard A4 and US Letter formats without page clipping.'
    }
  ];

  const faqs = [
    {
      q: isKo 
        ? 'Write Hangul의 모든 PDF 연습장은 정말 무료인가요?' 
        : 'Is Write Hangul completely free for students and educators?',
      a: isKo
        ? '네, 100% 완전 무료입니다. 별도의 회원가입이나 유료 결제 없이 자음·모음 획순 연습장, 일일 문장, 맞춤형 이름 쓰기 PDF를 제한 없이 생성하고 다운로드하실 수 있습니다. 학교, 학원, 한국어 어학당 등 교육 기관에서도 자유롭게 출력하여 수업 보조 자료로 활용하실 수 있습니다.'
        : 'Yes, 100% free with no account registration or paywalls. Every tool—including Alphabet Stroke Worksheets, Daily Sentences, and Korean Name Generator—exports unrestricted, high-resolution PDFs suitable for self-study and classroom instruction.'
    },
    {
      q: isKo
        ? '왜 한글 손글씨 연습에는 십자 점선 격자가 필요한가요?'
        : 'Why is squared grid paper (Wongoji) essential for Hangul?',
      a: isKo
        ? '한글은 영문 알파벳처럼 가로로 단순 나열하는 풀어쓰기가 아니라, 초성(자음), 중성(모음), 종성(받침)이 하나의 사각형 블록 안에 집약되는 ‘모아쓰기’ 구조를 지닙니다. 십자 가이드라인이 있는 사각 격자에서 연습해야 글자의 중심이 기울어지지 않고 상하좌우 여백의 균형을 완벽히 잡을 수 있습니다.'
        : 'Unlike horizontal Latin scripts, Korean is an alphabetic syllabary assembled into 2D modular blocks (Choseong, Jungseong, and Jongseong). Crosshair guidelines train the eye and hand to master structural equilibrium, center of gravity, and clean proportions.'
    },
    {
      q: isKo
        ? '획순(Stroke Order)을 지키는 것이 왜 글씨체와 가독성에 중요한가요?'
        : 'Why does stroke order matter if the final character looks the same?',
      a: isKo
        ? '바른 획순은 손끝의 운동역학을 최적화하여 펜촉이 이동하는 거리를 최소화합니다. 이를 통해 장시간 필기 시 손의 피로도를 40% 이상 줄여주며, 글씨를 빠르게 쓰더라도 한국인이 한눈에 알아볼 수 있는 자연스러운 필체 연결성을 유지해 줍니다.'
        : 'Adhering to correct stroke order minimizes hand fatigue through ergonomic pen momentum. It creates physical motor memory traces in the brain and preserves visual legibility when transitioning to fluid, faster handwriting styles.'
    },
    {
      q: isKo
        ? '프린터 출력 시 용지 크기나 여백 잘림 문제는 없나요?'
        : 'Will the printable PDF sheets fit my printer without edge clipping?',
      a: isKo
        ? 'Write Hangul의 모든 인쇄 템플릿은 전 세계 공통 인쇄 안전 구역(Safe Margin) 규격을 준수합니다. 한국과 유럽, 아시아에서 널리 쓰이는 ISO A4 용지와 북미 지역에서 표준인 US Letter 용지 양쪽 모두에서 단 1mm의 잘림도 없이 완벽하게 출력되도록 설계되었습니다.'
        : 'Every template is engineered with universal margin allowances (20mm side padding, 12mm vertical margins) to ensure 100% compatibility across both standard ISO A4 (210×297mm) and North American US Letter (8.5×11in) printer trays.'
    },
    {
      q: isKo
        ? '외국어 이름은 어떤 기준으로 한글로 변환되나요?'
        : 'How does the Korean name transliteration tool adapt foreign names?',
      a: isKo
        ? '대한민국 국립국어원의 외래어 표기법 원칙에 기반하여, 원어의 음성학적 발음을 가장 자연스러운 한글 음절 블록으로 전환합니다. 한국어에 없는 F, V, TH 등의 발음은 가장 유사한 ㅍ, ㅂ, ㅅ/ㄷ 등으로 대응되며, 연속된 자음 사이에는 중립 모음 ‘ㅡ’를 적절히 배치하여 자연스러운 한국어 이름을 만듭니다.'
        : 'Our generator follows the standard phonetic transliteration guidelines established by the National Institute of Korean Language, mapping unsupported consonants (such as F, V, and dental TH) to the closest acoustic Korean equivalents while maintaining natural syllabic cadence.'
    }
  ];

  return (
    <section className="mt-16 md:mt-24 pt-12 border-t-2 border-muk/10 print:hidden">
      {/* 3-Step Process Section */}
      <div className="mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            {isKo ? '손쉬운 3단계 학습법' : 'Streamlined 3-Step Methodology'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-muk mb-4 leading-tight">
            {isKo 
              ? '원하는 글자를 선택하고, 인쇄하여, 손끝으로 완성하세요' 
              : 'Master Korean Handwriting with Intuitive Worksheets'}
          </h2>
          <p className="text-muk/70 text-sm md:text-base leading-relaxed">
            {isKo
              ? '디지털 화면 터치로는 얻을 수 없는 펜과 종이의 근육 기억. Write Hangul의 과학적인 원고지 워크시트로 바른 글씨체를 완성해보세요.'
              : 'Build lasting motor memory that screen keyboards cannot match. Our free printable worksheets combine calligraphy ergonomics with accessible language practice.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 border border-muk/10 shadow-sm hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-hanji border border-muk/10 flex items-center justify-center shadow-inner">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-serif font-bold text-muk/20">{s.num}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-muk mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-muk/70 text-sm leading-relaxed">
                  {s.desc}
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
              {isKo ? '언어학과 인지 뇌과학의 결합' : 'Linguistics & Cognitive Neuroscience'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-muk mb-4 leading-tight">
              {isKo
                ? '왜 직접 쓰는 연습이 한국어 학습 속도를 2배 빠르게 만들까요?'
                : 'Why Physical Handwriting Accelerates Korean Language Acquisition'}
            </h3>
            <p className="text-muk/80 text-sm md:text-base leading-relaxed mb-4">
              {isKo
                ? '프린스턴 대학교와 UCLA의 뇌 인지 연구에 따르면, 펜으로 글자를 쓰는 행위는 시각적 형태 인식뿐 아니라 뇌의 두정엽 운동 감각 신경망을 동시 자극합니다. 특히 한글처럼 2차원 공간 배치(초성·중성·종성)가 중요한 문자는 손으로 직접 그려볼 때 시각-공간 기억이 장기 기억으로 가장 확고히 전환됩니다.'
                : 'Cognitive research confirms that physically writing characters triggers neural motor pathways that screen typing cannot replicate. For an orthographically modular script like Hangul, physical tracing locks consonant-vowel block balance into long-term procedural memory.'}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-muk/60">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {isKo ? '운동 기억(Motor Memory) 극대화' : 'Motor Memory Anchoring'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {isKo ? '오독 없는 정석 획순 체득' : 'Stroke Continuity'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-emerald-600" /> {isKo ? 'A4 & Letter 100% 호환' : 'Universal Paper Calibration'}</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
            <Link
              href="/guide"
              className="inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-md w-full sm:w-auto"
            >
              <span>{isKo ? '한글 학습 가이드 전문 읽기' : 'Explore All Learning Guides'}</span>
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
            {isKo ? '자주 묻는 질문' : 'Frequently Asked Questions'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-muk leading-tight">
            {isKo ? 'Write Hangul에 대해 궁금한 점을 확인하세요' : 'Everything You Need to Know About Write Hangul'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-muk/10 p-6 md:p-7 shadow-sm hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-bold text-muk font-serif mb-3 flex items-start gap-3">
                <span className="text-blue-600 font-sans font-extrabold text-base md:text-lg">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <div className="text-muk/70 text-sm md:text-base leading-relaxed pl-7">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
