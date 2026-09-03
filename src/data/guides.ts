export interface GuideArticle {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  icon: string;
  tags: string[];
  title: Record<string, string>;
  subtitle: Record<string, string>;
  summary: Record<string, string>;
  sections: Array<{
    heading: Record<string, string>;
    paragraphs: Record<string, string[]>;
    keyTakeaway?: Record<string, string>;
  }>;
  relatedTool: {
    title: Record<string, string>;
    desc: Record<string, string>;
    btn: Record<string, string>;
    href: string;
  };
}

export const guideArticles: GuideArticle[] = [
  {
    slug: 'scientific-principles-of-hangul',
    category: 'Linguistics & History',
    readTime: '6 min read',
    date: 'August 2026',
    icon: '📜',
    tags: ['Hangul Creation', 'King Sejong', 'Phonetics', 'Linguistics'],
    title: {
      en: 'The Scientific Principles of Hangul: How King Sejong Created the Korean Alphabet',
      ko: '한글의 과학적 창제 원리: 세종대왕은 어떻게 글자를 만들었는가',
      jp: 'ハングルの科学的創製原理：世宗大王はいかにして文字を創ったのか',
      cn: '韩文的科学创制原理：世宗大王如何创造这一字母系统',
      es: 'Los principios científicos del Hangul: cómo el rey Sejong creó el alfabeto coreano',
      id: 'Prinsip Ilmiah Hangul: Bagaimana Raja Sejong Menciptakan Alfabet Korea',
      vn: 'Nguyên lý khoa học của Hangul: Vua Sejong đã sáng tạo bảng chữ cái tiếng Hàn như thế nào',
    },
    subtitle: {
      en: 'Why linguists worldwide praise Hangul as the most logical, phonetic writing system ever designed.',
      ko: '전 세계 언어학자들이 한글을 인류 역사상 가장 과학적이고 체계적인 문자라 극찬하는 이유.',
      jp: '世界中の言語学者がハングルを人類史上最も科学的で体系的な文字と絶賛する理由。',
      cn: '为什么全世界的语言学家称赞韩文是人类历史上最科学、最系统的文字。',
      es: 'Por qué los lingüistas de todo el mundo elogian el Hangul como el sistema de escritura más lógico jamás diseñado.',
      id: 'Mengapa para ahli bahasa di seluruh dunia memuji Hangul sebagai sistem penulisan paling logis.',
      vn: 'Tại sao các nhà ngôn ngữ học trên toàn thế giới ca ngợi Hangul là hệ thống chữ viết logic nhất từng được thiết kế.',
    },
    summary: {
      en: 'Promulgated in 1446 through Hunminjeongeum, Hangul was deliberately engineered to represent human speech organs and cosmological philosophy, creating an unmatched harmony of science, philosophy, and accessibility.',
      ko: '1446년 훈민정음으로 반포된 한글은 인간의 발음 기관과 동양 철학(천지인)을 완벽하게 형상화하여 과학과 철학, 실용성이 결합된 인류 최고의 문자 유산입니다.',
      jp: '1446年の訓民正音によって公布されたハングルは、人体の調音器官と東洋哲学（天地人）を模り、科学と哲学が見事に調和した文字です。',
      cn: '1446年通过《训民正音》颁布的韩文，巧妙模拟了人类发音器官的形态，并融入了天地人哲学，是科学与哲学的杰作。',
      es: 'Promulgado en 1446 a través de Hunminjeongeum, el Hangul fue diseñado para representar los órganos vocales humanos y la filosofía cosmológica.',
      id: 'Diumumkan pada tahun 1446 melalui Hunminjeongeum, Hangul secara sengaja dirancang untuk mewakili organ wicara manusia.',
      vn: 'Được ban hành vào năm 1446 qua Huấn dân chính âm, Hangul được thiết kế tinh xảo dựa trên cơ quan phát âm của con người.',
    },
    sections: [
      {
        heading: {
          en: '1. Human Speech Organs as Alphabet Shapes',
          ko: '1. 발음 기관의 모양을 본뜬 과학적 상형 원리',
          jp: '1. 発音器官の形を模した科学的な象形原理',
          cn: '1. 模仿发音器官形状的科学象形原理',
          es: '1. Órganos del habla humana como formas del alfabeto',
          id: '1. Bentuk Huruf Meniru Organ Wicara Manusia',
          vn: '1. Hình dạng chữ cái mô phỏng cơ quan phát âm',
        },
        paragraphs: {
          en: [
            'Unlike Latin or Hanzi characters which evolved naturally over millennia from ancient pictograms, Hangul was consciously invented by King Sejong the Great and Hall of Worthies scholars in 1443. The basic consonants were modeled directly after the physical shape of the speech organs when making the sound.',
            'For example, the letter "ㄱ" (g/k) depicts the root of the tongue blocking the throat; "ㄴ" (n) illustrates the tongue tip touching the upper gums; "ㅁ" (m) captures the outline of closed lips; "ㅅ" (s) portrays teeth shape; and "ㅇ" (ng) shows the circular throat opening.',
            'As sounds become stronger or aspirated, additional strokes are logically added. Adding a horizontal stroke to "ㄱ" produces "ㅋ" (aspirated k), while adding strokes to "ㄴ" yields "ㄷ" (d) and then "ㅌ" (t). This stroke addition principle (Gahi-eum) ensures learners intuitively grasp acoustic relationships simply by looking at the glyphs.'
          ],
          ko: [
            '수천 년에 걸쳐 자연 발생적으로 변형되어 온 한자나 로마자와 달리, 한글은 1443년 세종대왕과 집현전 학자들에 의해 치밀하게 기획되어 탄생했습니다. 한글의 기본 자음 다섯 자는 혀, 입술, 이, 목구멍 등 사람의 발음 기관 모양을 그대로 본떠 만들어졌습니다.',
            '예를 들어 "ㄱ"은 혀뿌리가 목구멍을 막는 모습을 형상화했고, "ㄴ"은 혀끝이 윗잇몸에 닿는 모습을, "ㅁ"은 입술의 닫힌 모양을, "ㅅ"은 이의 날카로운 단면을, "ㅇ"은 둥근 목구멍의 통로를 나타냅니다.',
            '여기에 소리가 거세질수록 획을 하나씩 덧붙이는 ‘가획(加劃)의 원리’가 적용되었습니다. "ㄱ"에 획을 더하면 "ㅋ"이 되고, "ㄴ"에 획을 더하면 "ㄷ"과 "ㅌ"이 되는 식입니다. 이로 인해 소리의 성질과 글자의 형태가 완벽히 일치하는 음소문자가 완성되었습니다.'
          ]
        },
        keyTakeaway: {
          en: 'Hangul is the only widely used alphabet in history where the graphic shape of letters visually reflects the acoustic phonetics of human articulation.',
          ko: '한글은 글자의 시각적 형상이 인간의 조음 음성학적 구조를 직접 반영하는 인류 역사상 유일한 자질문자(Featural Alphabet)입니다.'
        }
      },
      {
        heading: {
          en: '2. The Cosmological Trinity of Vowels: Cheon, Ji, In',
          ko: '2. 모음의 철학적 체계: 천·지·인(天地人) 삼재',
          jp: '2. 母音の哲学的体系：天地人（チョンジイン）の三才',
          cn: '2. 元音的哲学体系：天地人三才原理',
          es: '2. La trinidad cosmológica de las vocales: Cielo, Tierra y Ser Humano',
          id: '2. Trinitas Kosmologis Vokal: Langit, Bumi, dan Manusia',
          vn: '2. Triết lý tam tài của nguyên âm: Thiên, Địa, Nhân',
        },
        paragraphs: {
          en: [
            'While consonants represent scientific anatomical structures, Hangul vowels embody Eastern cosmology based on the three universal elements (Sancai):',
            '• The round dot "•" represents the round sky above (Heaven / Cheon).',
            '• The flat horizontal line "ㅡ" represents the level earth (Earth / Ji).',
            '• The upright vertical line "ㅣ" represents the standing human being (Human / In).',
            'By combining these three primordial symbols, King Sejong generated the foundational bright (Yang) and dark (Yin) vowels: adding a dot outside gives "ㅏ" (sun rising in the east) and "ㅗ" (sun emerging above earth), while dots inside yield "ㅓ" and "ㅜ". This philosophical system allows anyone to master vowel formation within minutes.'
          ],
          ko: [
            '자음이 과학적 해부학을 따랐다면, 모음은 동양 철학의 핵심인 천지인(天地人) 삼재(三才)를 모티브로 삼았습니다.',
            '• 둥근 점(•, 아래아)은 둥근 하늘을 상징합니다.',
            '• 평평한 가로선(ㅡ)은 평평한 땅을 상징합니다.',
            '• 우뚝 선 세로선(ㅣ)은 하늘과 땅 사이에 서 있는 사람을 상징합니다.',
            '이 기본 삼재를 조합하여 밝은 양(陽)의 기운인 "ㅏ, ㅗ"와 어두운 음(陰)의 기운인 "ㅓ, ㅜ"를 탄생시켰습니다. 단 세 가지 부호만으로 모든 모음의 체계를 조화롭게 조직해낸 세계적인 발명입니다.'
          ]
        }
      },
      {
        heading: {
          en: '3. Syllabic Block Assembly (Choseong, Jungseong, Jongseong)',
          ko: '3. 모아쓰기의 마법: 초성·중성·종성의 2차원 블록 결합',
          jp: '3. まとめ書きの魔法：初声・中声・終声の2次元ブロック結合',
          cn: '3. 组合书写的魔力：初声、中声、终声的二维字块',
          es: '3. Ensamblaje en bloques silábicos (Choseong, Jungseong, Jongseong)',
          id: '3. Penggabungan Blok Suku Kata (Awal, Tengah, Akhir)',
          vn: '3. Sự kỳ diệu của việc ghép khối âm tiết (Đầu, Giữa, Cuối)',
        },
        paragraphs: {
          en: [
            'Most alphabetic languages arrange letters strictly sequentially in a one-dimensional line (e.g., K-O-R-E-A). Hangul, however, groups consonants and vowels into 2-dimensional geometric syllable blocks called "Geulja".',
            'Each syllable block always contains an initial consonant (Choseong), a central vowel (Jungseong), and optionally an ending consonant (Jongseong/Batchim). For instance, H + A + N combine into the unified glyph "한" (HAN).',
            'This structural innovation provides enormous reading speed because readers perceive full phonological beats at a glance rather than decoding letter-by-letter, combining the phonetic flexibility of an alphabet with the visual information density of logograms.'
          ],
          ko: [
            '대부분의 알파벳은 문자를 1차원적으로 일렬로 늘어놓는 풀어쓰기(예: K-O-R-E-A)를 채택합니다. 반면 한글은 초성(첫소리 자음), 중성(가운뎃소리 모음), 종성(끝소리 받침)을 네모난 격자 틀 안에 2차원 블록 형태로 결합하는 ‘모아쓰기’를 취합니다.',
            '예를 들어 ㅎ + ㅏ + ㄴ이 합쳐져 하나의 덩어리 "한"이라는 글자가 완성됩니다. 이러한 모아쓰기 구조는 독서 속도를 비약적으로 높여주며, 음절 단위로 의미와 소리를 한눈에 파악할 수 있게 해줍니다.',
            '네모난 격자칸(원고지) 안에서 글자의 균형과 배치를 익히는 손글씨 연습이 한국어 학습에서 그토록 강조되는 이유가 바로 이 모아쓰기 구조 때문입니다.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Practice the 24 Basic Hangul Letters',
        ko: '한글 기본 자음·모음 24자 직접 써보기',
      },
      desc: {
        en: 'Apply your understanding of Sejong’s stroke logic by downloading our custom practice sheet.',
        ko: '세종대왕의 획순 원리가 담긴 고화질 무료 PDF 연습장을 생성하고 손글씨를 연습해보세요.',
      },
      btn: {
        en: 'Open Alphabet Practice',
        ko: '자모음 쓰기 연습장 바로가기',
      },
      href: '/alphabet'
    }
  },
  {
    slug: 'hangul-stroke-order-guide',
    category: 'Handwriting & Calligraphy',
    readTime: '5 min read',
    date: 'August 2026',
    icon: '✍️',
    tags: ['Stroke Order', 'Handwriting Tips', 'Calligraphy', 'Legibility'],
    title: {
      en: 'Mastering Hangul Stroke Order: Why Direction and Sequence Matter',
      ko: '한글 바른 획순 완벽 가이드: 획의 순서가 글씨체와 가독성을 결정하는 이유',
      jp: 'ハングルの正しい筆順完全ガイド：筆順が文字の美しさを決める理由',
      cn: '韩文正确笔顺完全指南：为什么笔画顺序决定字体的美观与易读性',
      es: 'Dominar el orden de los trazos en Hangul: por qué importan la dirección y la secuencia',
      id: 'Menguasai Urutan Guratan Hangul: Mengapa Arah dan Urutan Sangat Penting',
      vn: 'Nắm vững thứ tự nét viết Hangul: Tại sao hướng và thứ tự nét quyết định tính dễ đọc',
    },
    subtitle: {
      en: 'The two golden rules of Korean stroke order that transform messy handwriting into elegant, confident script.',
      ko: '악필을 깔끔하고 균형 잡힌 글씨체로 탈바꿈시켜 주는 한글 필기 획순의 2대 황금 법칙.',
      jp: '悪筆を美しくバランスの取れた文字に変えるハングル筆順の二大黄金ルール。',
      cn: '让潦草字迹变得工整优美的韩文笔画顺序两大黄金法则。',
      es: 'Las dos reglas de oro del orden de trazos que transforman tu caligrafía coreana.',
      id: 'Dua aturan emas urutan guratan Korea yang mengubah tulisan tangan menjadi rapi.',
      vn: 'Hai quy tắc vàng về thứ tự nét giúp chữ viết tiếng Hàn của bạn trở nên gọn gàng, thanh thoát.',
    },
    summary: {
      en: 'Korean stroke order is governed by fundamental flow principles: top-to-bottom and left-to-right. Mastering these sequence rules prevents hand fatigue, speeds up writing, and ensures proper character proportion within squared blocks.',
      ko: '한글 획순은 ‘위에서 아래로’, ‘왼쪽에서 오른쪽으로’라는 물 흐르듯 자연스러운 대원칙을 따릅니다. 바른 획순을 익히면 손의 피로가 줄어들고 글씨의 균형감이 완벽해집니다.',
      jp: 'ハングルの筆順は「上から下へ」「左から右へ」という大原則に従います。正しい筆順を身につけることで、文字の重心が安定し、美しい形を保つことができます。',
      cn: '韩文笔顺遵循“从上到下”、“从左到右”的自然法则。掌握正确的笔画顺序不仅能提高书写速度，还能让每个字块更加端正。',
      es: 'El orden de trazos coreano se rige por principios de fluidez: de arriba hacia abajo y de izquierda a derecha.',
      id: 'Urutan guratan Korea diatur oleh prinsip alami: dari atas ke bawah dan dari kiri ke kanan.',
      vn: 'Thứ tự nét chữ Hàn Quốc tuân theo các nguyên tắc cơ bản: từ trên xuống dưới và từ trái sang phải.',
    },
    sections: [
      {
        heading: {
          en: '1. The Two Universal Rules of Hangul Strokes',
          ko: '1. 한글 획순의 2대 불변 원칙',
          jp: '1. ハングル筆順の二大不変原則',
          cn: '1. 韩文笔顺的两大基本原则',
          es: '1. Las dos reglas universales de los trazos en Hangul',
          id: '1. Dua Aturan Universal Guratan Hangul',
          vn: '1. Hai quy tắc bất biến trong nét viết Hangul',
        },
        paragraphs: {
          en: [
            'All Korean characters, regardless of complexity, adhere to two intuitive directional rules inherited from East Asian brush calligraphy:',
            'Rule 1: Top to Bottom (위에서 아래로). Vertical stems and descending components are always penned before lower strokes. In the letter "ㄱ", you start across the top before heading down. In "ㅅ", you draw the left descending stroke before balancing it with the right stroke.',
            'Rule 2: Left to Right (왼쪽에서 오른쪽으로). Horizontal bars and leftmost elements are written first. When writing vowels like "ㅑ" or "ㅕ", you lay down the backbone stem before adding the short crossing ticks.'
          ],
          ko: [
            '복잡해 보이는 한글 글자라도 단 두 가지 기본 원칙만 기억하면 모든 획의 순서를 자연스럽게 찾아낼 수 있습니다.',
            '제1원칙: 위에서 아래로(Top to Bottom). 모든 세로 획이나 상단 요소는 항상 아래쪽보다 먼저 쓰여집니다. "ㄱ"을 쓸 때 윗변을 긋고 아래로 꺾어 내리며, "ㅅ"을 쓸 때도 위쪽 정점에서 왼쪽 대각선을 먼저 긋고 오른쪽을 받쳐줍니다.',
            '제2원칙: 왼쪽에서 오른쪽으로(Left to Right). 가로 획과 왼쪽에 위치한 자음/모음이 우선합니다. "ㅂ"을 쓸 때도 왼쪽 기둥을 먼저 세우고 오른쪽 기둥을 세운 뒤 가로선을 채웁니다.'
          ]
        },
        keyTakeaway: {
          en: 'Always flow from Top-to-Bottom, Left-to-Right. If a character has enclosing walls like "ㅁ" or "ㅂ", complete the internal strokes before closing the bottom gate.',
          ko: '모든 획은 ‘위에서 아래로, 왼쪽에서 오른쪽으로’ 흐르며, ‘ㅁ’이나 ‘ㅂ’처럼 닫힌 글자는 안쪽을 먼저 채운 후 맨 마지막에 바닥 획을 닫습니다.'
        }
      },
      {
        heading: {
          en: '2. The Anatomy of Tricky Consonants: ㄹ and ㅂ',
          ko: '2. 학습자들이 가장 많이 틀리는 자음: ‘ㄹ’과 ‘ㅂ’의 정석 획순',
          jp: '2. 学習者が最も間違えやすい子音：「ㄹ」と「ㅂ」の正しい筆順',
          cn: '2. 学习者最常出错的辅音：“ㄹ”与“ㅂ”的规范笔顺',
          es: '2. La anatomía de consonantes difíciles: ㄹ y ㅂ',
          id: '2. Anatomi Konsonan yang Sering Keliru: ㄹ dan ㅂ',
          vn: '2. Phân tích các phụ âm khó: Thứ tự nét chuẩn của ㄹ và ㅂ',
        },
        paragraphs: {
          en: [
            'The consonant "ㄹ" (r/l) is notorious among beginners who often attempt to draw it in a single zig-zag line like the number "2" or letter "Z". In formal Korean handwriting, "ㄹ" is strictly executed in 3 distinct strokes:',
            '1. Stroke 1: Draw a top "ㄱ" shape (horizontal then vertical bend).',
            '2. Stroke 2: Draw a middle horizontal line connecting from the vertical bend toward the right.',
            '3. Stroke 3: Draw a bottom "ㄴ" shape starting from the middle and turning right along the baseline.',
            'Similarly, "ㅂ" (b/p) is written in 4 distinct strokes: Left vertical pillar down, Right vertical pillar down, Middle horizontal connector, and finally the bottom seal line. Breaking these letters down into discrete strokes ensures proportional square balance.'
          ],
          ko: [
            '초보자들이 가장 흔하게 저지르는 실수는 "ㄹ"을 숫자 "2"나 영어 "Z"처럼 한 붓에 지그재그로 그려버리는 것입니다. 정석 한글 필기에서 "ㄹ"은 정확히 3획으로 나뉩니다:',
            '1. 1획: 맨 위 ‘ㄱ’ 모양을 그립니다 (가로로 가다 아래로 꺾기).',
            '2. 2획: 가운데 가로선을 왼쪽에서 오른쪽으로 긋습니다.',
            '3. 3획: 가운데 선에서 시작하여 아래로 내려온 뒤 바닥을 받치는 ‘ㄴ’ 모양으로 마무리합니다.',
            '‘ㅂ’ 역시 네 번에 걸쳐 씁니다: 왼쪽 기둥(1) → 오른쪽 기둥(2) → 가운데 가로선(3) → 맨 아래 바닥 닫기(4). 이렇게 분할해서 써야 사각형 틀 안에서 글자가 찌그러지지 않고 당당한 형태를 갖추게 됩니다.'
          ]
        }
      },
      {
        heading: {
          en: '3. Why Stroke Order Impacts Legibility and Speed',
          ko: '3. 획순이 가독성과 필기 속도에 미치는 결정적 차이',
          jp: '3. 筆順が可読性と筆記速度に及ぼす決定的な影響',
          cn: '3. 笔顺对易读性和书写速度的决定性影响',
          es: '3. Por qué el orden de los trazos afecta la legibilidad y la velocidad',
          id: '3. Mengapa Urutan Guratan Mempengaruhi Keterbacaan dan Kecepatan',
          vn: '3. Tại sao thứ tự nét ảnh hưởng đến tính dễ đọc và tốc độ viết',
        },
        paragraphs: {
          en: [
            'Why does stroke order matter if the final printed character looks similar? The answer lies in pen momentum and kinetic ergonomics.',
            'When you write with correct stroke order, the tip of your pen naturally glides across minimal distance from the end of one stroke to the start of the next. This fluid continuity reduces hand fatigue by over 40% during long handwriting sessions.',
            'Furthermore, as your handwriting speeds up into cursive or semi-cursive forms, correct stroke order ensures the ligatures and soft bends remain instantly recognizable to native Korean speakers.'
          ],
          ko: [
            '결과물만 비슷하게 나오면 되지 굳이 순서를 지켜야 할까요? 그 이유는 손의 운동역학과 필기 피로도에 있습니다.',
            '바른 획순을 따르면 한 획이 끝난 펜촉의 위치가 다음 획이 시작될 위치와 가장 가깝게 배치됩니다. 동선의 낭비가 없어지므로 장시간 글을 써도 손목과 손가락 관절의 피로도가 40% 이상 줄어듭니다.',
            '나아가 글씨를 빠르게 흘려 쓰는 필기체 단계로 넘어갈 때, 정석 획순을 지킨 글씨만이 한국인들이 한눈에 오독 없이 알아볼 수 있는 유려한 필체를 유지할 수 있습니다.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Try Step-by-Step Stroke Tracing Sheets',
        ko: '화살표와 번호가 표시된 획순 연습장 체험하기',
      },
      desc: {
        en: 'Our Alphabet Practice sheets feature precise directional arrows and stroke numbers for every Korean letter.',
        ko: '모든 자음과 모음에 번호와 방향 화살표가 표시된 획순 가이드 PDF를 지금 무료로 생성해보세요.',
      },
      btn: {
        en: 'Generate Stroke Practice PDF',
        ko: '획순 연습장 생성하러 가기',
      },
      href: '/alphabet'
    }
  },
  {
    slug: 'korean-name-transliteration-rules',
    category: 'Korean Culture & Language',
    readTime: '7 min read',
    date: 'August 2026',
    icon: '🏷️',
    tags: ['Korean Names', 'Hangul Transliteration', 'Pronunciation', 'Name Meaning'],
    title: {
      en: 'How to Write Your Name in Korean: Phonetic Transliteration Rules Explained',
      ko: '외국어 이름을 자연스러운 한국어로 표기하는 원칙과 발음 가이드',
      jp: '外国人の名前を自然な韓国語（ハングル）で表記する原則と発音ガイド',
      cn: '外国人名转换为地道韩文的音译原则与发音指南',
      es: 'Cómo escribir tu nombre en coreano: reglas de transliteración fonética',
      id: 'Cara Menulis Nama Anda dalam Bahasa Korea: Aturan Transliterasi Fonetis',
      vn: 'Cách viết tên của bạn bằng tiếng Hàn: Giải thích các quy tắc phiên âm',
    },
    subtitle: {
      en: 'Learn how foreign vowels, consonants, and consonant clusters are adapted into Hangul syllables.',
      ko: '영어, 일본어, 유럽권 이름의 발음이 한글의 음절 구조로 자연스럽게 변환되는 원리와 팁.',
      jp: '英語やその他の外国語の名前がハングルの音節構造に自然に適応するルール。',
      cn: '外语名字如何根据发音地道转换为具有韵律感的韩文字块。',
      es: 'Aprende cómo las vocales y consonantes extranjeras se adaptan a las sílabas del Hangul.',
      id: 'Pelajari bagaimana nama asing diadaptasikan ke dalam suku kata Hangul.',
      vn: 'Tìm hiểu cách các nguyên âm và phụ âm nước ngoài được điều chỉnh thành âm tiết Hangul.',
    },
    summary: {
      en: 'Because Korean is organized into rigid consonant-vowel syllable blocks, foreign names with consonant clusters or unsupported sounds (like F, V, TH) require systematic phonetic adaptation rules established by the National Institute of Korean Language.',
      ko: '한글은 모음 없이 자음만 발음될 수 없는 음절 구조를 가지고 있어, F, V, TH 같은 외래어 음소나 자음군을 한국어 맞춤법 규정에 따라 자연스러운 모음 덧붙임으로 전환합니다.',
      jp: 'ハングルは母音と子音が結合した音節文字であるため、FやV、子音の連続を含む外国人の名前には国立国語院の標準音訳規則が適用されます。',
      cn: '韩文具有严格的音节块结构，对于外语中的复辅音或缺失发音（如F、V、TH），需要依照韩国国立国语院的规范进行音译转换。',
      es: 'Debido a la estructura silábica del Hangul, los nombres extranjeros requieren adaptaciones fonéticas sistemáticas.',
      id: 'Karena Hangul memiliki struktur suku kata yang rapi, nama-nama asing memerlukan adaptasi fonetik sistematis.',
      vn: 'Vì Hangul có cấu trúc khối âm tiết chặt chẽ, tên nước ngoài cần tuân thủ các quy tắc thích ứng ngữ âm có hệ thống.',
    },
    sections: [
      {
        heading: {
          en: '1. The Syllable Integrity Principle (No Lone Consonants)',
          ko: '1. 모음 삽입의 원리: 홀로 서는 자음은 없다',
          jp: '1. 母音挿入の原理：子音単独では発音できない',
          cn: '1. 元音插入原理：辅音不能单独成音',
          es: '1. El principio de integridad silábica (sin consonantes solitarias)',
          id: '1. Prinsip Integritas Suku Kata (Tidak Ada Konsonan Sendiri)',
          vn: '1. Nguyên tắc hoàn chỉnh âm tiết (Không có phụ âm đứng một mình)',
        },
        paragraphs: {
          en: [
            'In English and many European languages, multiple consonants can clump together without vowels (e.g., "Str-" in "Street" or "-mps" in "Glimpse"). In Korean, however, every consonant MUST attach to a vowel to form a syllable block.',
            'When translating a foreign name with a consonant cluster, Korean inserts the neutral vowel "ㅡ" (eu) under lone consonants. For example, "Chris" becomes "크리스" (Keu-ri-seu) across three syllable blocks, and "Smith" becomes "스미스" (Seu-mi-seu).'
          ],
          ko: [
            '영어권이나 유럽권 언어에서는 모음 없이 자음 여러 개가 연달아 발음되는 ‘자음군(Consonant Cluster)’이 흔합니다 (예: "Strike"의 Str). 하지만 한국어는 반드시 자음과 모음이 만나야 하나의 소리를 이룹니다.',
            '따라서 모음 없이 홀로 남는 자음 뒤에는 가장 중립적인 모음인 "ㅡ(eu)"를 받쳐주어 독립된 음절 블록을 형성합니다. 예를 들어 "Chris"는 크-리-스(3음절)가 되고, "Smith"는 스-미-스(3음절)가 됩니다.'
          ]
        },
        keyTakeaway: {
          en: 'If your name has adjacent consonants like "St", "Br", or "Cl", expect them to expand with the neutral vowel "ㅡ" (eu).',
          ko: '이름에 연속된 자음이 있다면 중립 모음 ‘ㅡ’가 결합되어 글자 수가 늘어나는 것이 가장 자연스러운 한국어 표기법입니다.'
        }
      },
      {
        heading: {
          en: '2. Mapping Missing Sounds: F, V, and TH',
          ko: '2. 한국어에 없는 발음의 대체 규칙: F, V, TH',
          jp: '2. 韓国語に存在しない発音の代替ルール：F、V、TH',
          cn: '2. 对应缺失发音的替代规则：F、V、TH',
          es: '2. Mapeo de sonidos inexistentes: F, V y TH',
          id: '2. Memetakan Bunyi yang Tidak Ada: F, V, dan TH',
          vn: '2. Quy tắc thay thế các âm không có trong tiếng Hàn: F, V, TH',
        },
        paragraphs: {
          en: [
            'Korean phonology does not possess fricatives like /f/, /v/, or dental /θ/ (th). Decades of official linguistic standards map these sounds to the closest Korean equivalents:',
            '• F is converted to ㅍ (P): "Flora" → "플로라" (Peul-lo-ra), "Frank" → "프랭크" (Peu-raeng-keu).',
            '• V is converted to ㅂ (B): "Victoria" → "빅토리아" (Bik-to-ri-a), "David" → "데이비드" (De-i-bi-deu).',
            '• TH is converted to ㅅ (S) or ㄷ (D): "Thomas" → "토마스", "Ethan" → "이선" or "이든".'
          ],
          ko: [
            '한국어에는 입술과 치아를 마찰시키는 F, V 발음이나 혀를 무는 TH 발음이 없습니다. 국립국어원 외래어 표기법 표준에 따라 가장 음향적으로 유사한 한글 자음으로 매핑됩니다:',
            '• [F] 발음은 거센소리 ‘ㅍ’으로 치환됩니다: "Flora" → "플로라", "Frank" → "프랭크".',
            '• [V] 발음은 양순 파열음 ‘ㅂ’으로 치환됩니다: "Victoria" → "빅토리아", "David" → "데이비드".',
            '• [TH] 발음은 마찰음 ‘ㅅ’ 또는 파열음 ‘ㄷ’으로 적습니다: "Smith" → "스미스", "Ethan" → "이든".'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Translate & Practice Your Korean Name',
        ko: '내 이름을 한국어로 변환하고 손글씨로 써보기',
      },
      desc: {
        en: 'Type your English or foreign name to see its natural Korean rendering and print a custom name sheet.',
        ko: '영어 또는 외국어 이름을 입력하면 가장 자연스러운 한글 표기를 찾아서 맞춤형 PDF 연습장을 만들어드립니다.',
      },
      btn: {
        en: 'Try Write My Name Tool',
        ko: '내 이름 쓰기 생성기 바로가기',
      },
      href: '/my-name'
    }
  },
  {
    slug: 'benefits-of-handwriting-korean',
    category: 'Cognitive Science & Learning',
    readTime: '6 min read',
    date: 'August 2026',
    icon: '🧠',
    tags: ['Handwriting Science', 'Memory Retention', 'Language Acquisition', 'Motor Skills'],
    title: {
      en: 'The Science of Handwriting: Why Pen and Paper Accelerate Language Acquisition',
      ko: '손글씨의 뇌과학: 손으로 직접 쓰는 필기가 외국어 기억을 2배 빠르게 만드는 이유',
      jp: '手書きの脳科学：手で直接書く筆記が外国語の記憶を2倍速くする理由',
      cn: '手写的脑科学：亲笔书写让外语记忆效率倍增的科学依据',
      es: 'La ciencia de la escritura a mano: por qué el lápiz y el papel aceleran el aprendizaje',
      id: 'Ilmu Menulis Tangan: Mengapa Kertas dan Pena Mempercepat Penguasaan Bahasa',
      vn: 'Khoa học về viết tay: Tại sao giấy bút giúp tăng tốc độ tiếp thu ngôn ngữ',
    },
    subtitle: {
      en: 'Neuroscience reveals why typing on screens cannot replace the motor-memory benefits of traditional handwriting.',
      ko: '키보드 타이핑과 스마트폰 화면 터치가 결코 따라올 수 없는 손글씨 필기의 인지 신경학적 비밀.',
      jp: '画面のタイピングでは決して得られない、伝統的な手書き学習の驚くべき認知効果。',
      cn: '屏幕打字无法替代的物理触感与肌肉记忆：神经科学揭示的手写魅力。',
      es: 'La neurociencia revela por qué escribir en pantallas no puede reemplazar los beneficios de la escritura tradicional.',
      id: 'Neurosains mengungkap mengapa mengetik di layar tidak dapat menggantikan manfaat menulis tangan.',
      vn: 'Khoa học thần kinh tiết lộ lý do tại sao gõ phím không thể thay thế lợi ích của việc viết tay.',
    },
    summary: {
      en: 'Modern brain-imaging studies from Princeton and UCLA demonstrate that physically writing characters triggers complex sensorimotor brain pathways, radically boosting orthographic retention and conceptual comprehension compared to digital typing.',
      ko: '프린스턴 대학교와 UCLA의 인지과학 연구에 따르면, 손으로 글씨를 쓰는 행위는 뇌의 감각-운동 신경망을 동시 활성화하여 단순 화면 타이핑 대비 기억 지속력을 200% 이상 증진시킵니다.',
      jp: 'プリンストン大学やUCLAの最新研究によると、手書きは脳の感覚運動ネットワークを刺激し、デジタル入力に比べて記憶定着率を劇的に高めます。',
      cn: '普林斯顿大学与UCLA的认知科学研究表明，亲手书写能够同时激活大脑的感觉-运动神经网络，使记忆保持率提升两倍以上。',
      es: 'Estudios de neuroimagen demuestran que escribir a mano activa vías sensoriomotoras que mejoran la retención.',
      id: 'Studi pencitraan otak menunjukkan bahwa menulis karakter secara fisik memicu jalur sensorimotor yang kompleks.',
      vn: 'Các nghiên cứu về não bộ chứng minh rằng việc viết chữ bằng tay kích hoạt các đường dẫn thần kinh cảm giác-vận động phức tạp.',
    },
    sections: [
      {
        heading: {
          en: '1. Motor Memory and the Brain’s Reading Circuit',
          ko: '1. 손끝의 근육 기억과 뇌의 읽기 회로 형성',
          jp: '1. 指先の筋肉記憶と脳の読解回路の形成',
          cn: '1. 指尖的肌肉记忆与大脑阅读回路的建立',
          es: '1. Memoria motora y el circuito cerebral de la lectura',
          id: '1. Memori Motorik dan Sirkuit Membaca Otak',
          vn: '1. Trí nhớ vận động và mạch đọc của não bộ',
        },
        paragraphs: {
          en: [
            'When you type a letter on a keyboard, your finger performs the exact same uniform motion whether you press "A", "G", or "한". The brain receives no tactile differentiation about the physical geometry of the symbol.',
            'In contrast, physically writing Hangul requires continuous tactile feedback, visual trajectory tracking, and fine-motor adjustments. Each unique stroke path carves a physical motor memory trace in the brain’s parietal and frontal lobes, creating a dual-layered cognitive anchor: visual shape plus motor memory.'
          ],
          ko: [
            '스마트폰 화면이나 컴퓨터 키보드로 글자를 칠 때, 손가락은 "ㄱ"을 누르든 "ㅎ"을 누르든 동일하게 단순한 수직 누르기 동작만을 반복합니다. 뇌는 글자의 물리적 형태에 대한 어떠한 감각적 차이도 학습하지 못합니다.',
            '반면 펜을 쥐고 종이 위에 한글을 쓸 때는 손끝의 미세 근육 조절, 획의 방향 전환, 필압, 시각적 궤적 추적이 동시에 작동합니다. 이 복합적인 감각 피드백은 뇌의 두정엽과 전두엽에 강력한 ‘운동 기억(Motor Memory)’의 흔적을 남겨 글자를 잊어버리지 않게 만듭니다.'
          ]
        },
        keyTakeaway: {
          en: 'Handwriting bridges the gap between passive recognition and active recall. Tracing Korean strokes burns their geometric forms into deep long-term memory.',
          ko: '손글씨는 단순 눈으로 보는 수동적 인식을 넘어 능동적 인출 기억을 형성하는 가장 확실한 외국어 학습 도구입니다.'
        }
      },
      {
        heading: {
          en: '2. The Geometric Magic of Wongoji (Square Grid Paper)',
          ko: '2. 사각 원고지 격자 학습이 균형 감각을 키워주는 이유',
          jp: '2. 四角い原稿用紙のマス目学習がバランス感覚を養う理由',
          cn: '2. 方格原稿纸对培养结构平衡感的奇妙作用',
          es: '2. La magia geométrica del Wongoji (papel cuadriculado)',
          id: '2. Keajaiban Geometris Wongoji (Kertas Kisi Persegi)',
          vn: '2. Sự kỳ diệu của giấy ô vuông Wongoji trong việc cân bằng chữ viết',
        },
        paragraphs: {
          en: [
            'Traditional Korean handwriting education relies on "Wongoji" (squared manuscript paper with crosshair guidelines). This is not just tradition—it is pedagogical ergonomics.',
            'Because Hangul characters are modular 2D blocks containing up to four components, practicing within 4-quadrant guideline boxes trains learners to instinctively balance negative space, center of gravity, and stroke thickness. Write Hangul’s printable PDF templates are precisely calibrated with universal grid ratios to reproduce this exact learning advantage.'
          ],
          ko: [
            '한국의 전통 필기 교육은 십자 점선 가이드가 들어간 사각 원고지(Wongoji)를 기반으로 합니다. 이는 단순한 옛 관습이 아닌 치밀한 시각-공간 인지 훈련법입니다.',
            '한글은 최대 4개의 자모음이 한 네모 칸에 집약되는 모아쓰기 구조를 가지므로, 4분할 십자 가이드라인 안에서 연습할 때 글자의 무게중심과 여백의 비율을 가장 완벽하게 체득할 수 있습니다. Write Hangul의 PDF 템플릿이 정밀한 십자 격자를 채택한 이유가 바로 여기에 있습니다.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Print Free Universal Grid Practice Sheets',
        ko: '과학적인 사각 격자 PDF 연습장 무료 인쇄하기',
      },
      desc: {
        en: 'Download our standard A4/US Letter worksheets to train your motor memory today.',
        ko: '전 세계 A4 및 US Letter 용지 규격에 완벽히 호환되는 정밀 격자 한글 연습장을 무료로 생성해보세요.',
      },
      btn: {
        en: 'Go to Daily Practice',
        ko: '오늘의 한글 쓰기 연습장 바로가기',
      },
      href: '/#category'
    }
  }
];
