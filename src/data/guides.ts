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
            'As sounds become stronger or aspirated, additional strokes are logically added. Adding a horizontal stroke to "ㄱ" produces "ㅋ" (aspirated k), while adding strokes to "ㄴ" yields "ㄷ" and then "ㅌ" (t). This stroke addition principle ensures learners intuitively grasp acoustic relationships simply by looking at the glyphs.'
          ],
          jp: [
            '数千年にわたり自然発生的に変化してきた漢字やラテン文字とは異なり、ハングルは1443年に世宗大王と集賢殿の学者たちによって精密に設計されました。基本的な子音は、音を出す際の人間の調音器官（舌、歯、唇、喉）の形状を直接模っています。',
            '例えば「ㄱ」は舌の根元が喉を塞ぐ形、「ㄴ」は舌先が上の歯茎に当たる形、「ㅁ」は閉じた唇の輪郭、「ㅅ」は歯の尖った形状、「ㅇ」は丸い喉の輪郭を表しています。',
            'さらに音が強くなるにつれて規則的に画が追加される「加画の原理」が適用されています。「ㄱ」に一本線を加えれば激音の「ㅋ」になり、「ㄴ」に線を加えれば「ㄷ」、さらに加えれば「ㅌ」になります。文字の形を見ただけで発音の強弱関係が直感的に理解できます。'
          ],
          cn: [
            '与数千年来自然演变的汉字或拉丁字母不同，韩文是1443年由世宗大王及集贤殿学者精心科学规划创制的。其基础辅音直接模拟了发音时发音器官的物理形态。',
            '例如，“ㄱ”表现舌根闭塞咽喉之状；“ㄴ”表现舌尖抵上齿龈之形；“ㅁ”模拟闭合双唇之轮廓；“ㅅ”呈现尖锐牙齿之切面；“ㅇ”则代表圆形的喉咙通道。',
            '随着发音力度的加强，字形遵循严谨的“加划原理”。在“ㄱ”上添一横便成为送气音“ㅋ”；在“ㄴ”上加横即为“ㄷ”，再加横为“ㅌ”。学习者仅凭字形便能直观洞悉发音之间的声学联系。'
          ],
          es: [
            'A diferencia de los caracteres latinos o chinos, el Hangul fue inventado deliberadamente por el rey Sejong el Grande en 1443. Las consonantes básicas se modelaron directamente a partir de la forma física de los órganos vocales.',
            'Por ejemplo, "ㄱ" representa la raíz de la lengua bloqueando la garganta; "ㄴ" la punta de la lengua tocando las encías superiores; "ㅁ" el contorno de los labios; "ㅅ" la forma de los dientes; y "ㅇ" la garganta abierta.',
            'A medida que los sonidos se vuelven más fuertes o aspirados, se añaden trazos de forma lógica: agregando un trazo a "ㄱ" se obtiene "ㅋ", y agregando trazos a "ㄴ" se obtienen "ㄷ" y "ㅌ".'
          ],
          id: [
            'Tidak seperti huruf Latin yang berkembang secara alami selama ribuan tahun, Hangul secara sadar diciptakan oleh Raja Sejong pada tahun 1443. Konsonan dasar dirancang langsung berdasarkan bentuk fisik organ wicara manusia.',
            'Misalnya, huruf "ㄱ" menggambarkan pangkal lidah yang menghalangi tenggorokan; "ㄴ" ujung lidah menyentuh gusi atas; "ㅁ" garis bibir yang tertutup; "ㅅ" bentuk gigi; dan "ㅇ" lubang tenggorokan bulat.',
            'Ketika bunyi menjadi lebih kuat, guratan ditambahkan secara logis: menambahkan guratan pada "ㄱ" menghasilkan "ㅋ", dan menambahkan guratan pada "ㄴ" menghasilkan "ㄷ" lalu "ㅌ".'
          ],
          vn: [
            'Không giống như chữ Latin phát triển tự nhiên qua hàng thiên niên kỷ, Hangul được Vua Sejong sáng tạo vào năm 1443. Các phụ âm cơ bản được mô phỏng trực tiếp theo hình dạng của các cơ quan phát âm.',
            'Ví dụ: chữ "ㄱ" mô phỏng gốc lưỡi chặn cuống họng; "ㄴ" mô phỏng đầu lưỡi chạm vào nướu trên; "ㅁ" mô phỏng hình dáng đôi môi khép lại; "ㅅ" hình dạng của răng; và "ㅇ" biểu thị cổ họng mở.',
            'Khi âm thanh trở nên mạnh hơn hoặc bật hơi, các nét được thêm vào một cách logic: thêm nét vào "ㄱ" tạo thành "ㅋ", thêm nét vào "ㄴ" tạo thành "ㄷ" và sau đó là "ㅌ".'
          ]
        },
        keyTakeaway: {
          en: 'Hangul is the only widely used alphabet in history where the graphic shape of letters visually reflects the acoustic phonetics of human articulation.',
          jp: 'ハングルは、文字の視覚的形状が人間の音声学的調音器官の構造を直接反映している人類史上唯一の資質文字です。',
          cn: '韩文是人类历史上唯一一套字形视觉结构直接反映人体声学调音机制的成熟字母系统。',
          es: 'El Hangul es el único alfabeto en la historia donde la forma visual refleja la fonética articulatoria humana.',
          id: 'Hangul adalah satu-satunya alfabet dalam sejarah di mana bentuk huruf mencerminkan fonetik artikulasi manusia.',
          vn: 'Hangul là bảng chữ cái duy nhất trong lịch sử có hình dạng chữ cái phản ánh trực quan cơ chế phát âm của con người.'
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
            'While consonants represent anatomical articulation, Hangul vowels embody Eastern cosmology based on the three universal elements (Sancai):',
            '• The round dot "•" represents the round sky above (Heaven / Cheon).',
            '• The flat horizontal line "ㅡ" represents the level earth (Earth / Ji).',
            '• The upright vertical line "ㅣ" represents the standing human being (Human / In).',
            'By combining these three primordial symbols, King Sejong generated foundational bright (Yang) and dark (Yin) vowels: adding a stroke outside gives "ㅏ" and "ㅗ", while strokes inside yield "ㅓ" and "ㅜ". This elegant system allows anyone to understand vowel formation effortlessly.'
          ],
          jp: [
            '子音が解剖学的な科学に基づいているのに対し、母音は東洋哲学の根幹である天地人（天・地・人）の三才を象徴しています。',
            '• 丸い点（•）は広大な「天」を表します。',
            '• 平らな横線（ㅡ）は広がる「地」を表します。',
            '• まっすぐな縦線（ㅣ）はその間に立つ「人」を表します。',
            'これら3つの基本記号を組み合わせることで、外向きの明るい陽母音（ㅏ, ㅗ）と内向きの落ち着いた陰母音（ㅓ, ㅜ）が体系的に生み出されました。'
          ],
          cn: [
            '如果说辅音遵循了解剖声学原理，那么元音则蕴含了东方哲学核心的天地人三才宇宙观：',
            '• 圆点（•）象征圆融无限之天；',
            '• 平直横线（ㅡ）象征平坦宽厚之地；',
            '• 挺拔立线（ㅣ）象征立于天地之间的人。',
            '通过这三大初始符号的有机组合，世宗大王构建了明晰的阴阳互补元音体系：朝外发散为阳性元音（ㅏ, ㅗ），朝内收敛为阴性元音（ㅓ, ㅜ）。'
          ],
          es: [
            'Mientras que las consonantes representan la articulación anatómica, las vocales encarnan la cosmología oriental de los tres elementos:',
            '• El punto "•" representa el Cielo redondo.',
            '• La línea horizontal "ㅡ" representa la Tierra plana.',
            '• La línea vertical "ㅣ" representa al Ser Humano en pie.',
            'Al combinar estos tres símbolos, se crearon las vocales brillantes (Yang) como "ㅏ", "ㅗ" y oscuras (Yin) como "ㅓ", "ㅜ".'
          ],
          id: [
            'Sementara konsonan mewakili artikulasi anatomis, vokal Hangul mewujudkan kosmologi Timur dari tiga elemen universal:',
            '• Titik bulat "•" mewakili Langit yang bulat.',
            '• Garis horizontal "ㅡ" mewakili Bumi yang datar.',
            '• Garis vertikal "ㅣ" mewakili Manusia yang berdiri tegak.',
            'Dengan menggabungkan ketiga simbol ini, terbentuklah vokal Yang terang (ㅏ, ㅗ) dan vokal Yin gelap (ㅓ, ㅜ).'
          ],
          vn: [
            'Trong khi các phụ âm đại diện cho sự phát âm giải phẫu, các nguyên âm Hangul lại thể hiện vũ trụ quan phương Đông dựa trên thuyết Tam Tài:',
            '• Dấu chấm tròn "•" đại diện cho Trời tròn.',
            '• Đường ngang bằng phẳng "ㅡ" đại diện cho Đất bằng.',
            '• Đường thẳng đứng "ㅣ" đại diện cho Người đứng thẳng giữa trời đất.',
            'Bằng cách kết hợp ba biểu tượng này, hệ thống nguyên âm Dương tươi sáng (ㅏ, ㅗ) và nguyên âm Âm trầm lắng (ㅓ, ㅜ) đã ra đời.'
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
            'Most alphabets arrange letters strictly in a one-dimensional line (e.g. K-O-R-E-A). Hangul groups consonants and vowels into 2-dimensional modular syllable blocks called "Geulja".',
            'Each syllable block contains an initial consonant (Choseong), a middle vowel (Jungseong), and optionally a final consonant (Jongseong/Batchim). For instance, H + A + N combine into "한" (HAN).',
            'This structural design enables high reading speed because the brain processes full syllables as compact visual units rather than decoding individual letters sequentially.'
          ],
          jp: [
            '一般的なアルファベットは文字を一列に横に並べますが、ハングルは初声（子音）、中声（母音）、終声（パッチム）を正方形のブロックの中に立体的に組み合わせて1つの文字（音節）を作ります。',
            '例えば ㅎ + ㅏ + ㄴ が組み合わさって1つのまとまり「한（HAN）」になります。',
            'この2次元ブロック構造により、読者は音節単位で意味と音を瞬時に把握でき、圧倒的な読書スピードと視覚的情報密度を実現しています。'
          ],
          cn: [
            '绝大多数拼音文字采用一维线性平铺书写，而韩文则将初声（起音辅音）、中声（中间元音）与终声（收音辅音）组合在标准的二维方块字格中。',
            '例如，辅音 ㅎ + 元音 ㅏ + 收音 ㄴ 紧凑组合，构成一个完整的音节字块“한”（HAN）。',
            '这种拼字法将拼音文字的表音灵活性与方块文字的视觉信息识别速度完美结合，读者能以音节为单位一目十行迅速理解文意。'
          ],
          es: [
            'A diferencia de los alfabetos lineales, el Hangul agrupa consonantes y vocales en bloques silábicos bidimensionales llamados "Geulja".',
            'Cada bloque contiene una consonante inicial, una vocal media y, opcionalmente, una consonante final (Batchim). Por ejemplo, H + A + N forman "한" (HAN).',
            'Este diseño permite una lectura veloz, ya que el cerebro procesa sílabas completas como unidades visuales compactas.'
          ],
          id: [
            'Sebagian besar alfabet menyusun huruf dalam satu garis lurus. Hangul mengelompokkan huruf ke dalam blok suku kata 2 dimensi yang disebut "Geulja".',
            'Setiap blok suku kata berisi konsonan awal, vokal tengah, dan konsonan akhir (Batchim). Misalnya, H + A + N bergabung menjadi "한" (HAN).',
            'Desain ini memungkinkan kecepatan membaca yang tinggi karena otak memproses suku kata utuh sebagai satu unit visual.'
          ],
          vn: [
            'Hầu hết các bảng chữ cái đều xếp chữ theo một đường thẳng. Hangul ghép các phụ âm và nguyên âm thành các khối âm tiết hai chiều gọi là "Geulja".',
            'Mỗi khối âm tiết luôn bao gồm phụ âm đầu, nguyên âm giữa và phụ âm cuối (Batchim). Ví dụ: H + A + N kết hợp thành "한" (HAN).',
            'Thiết kế này giúp tăng tốc độ đọc đáng kể vì não bộ tiếp nhận toàn bộ âm tiết như một đơn vị hình ảnh trọn vẹn.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Practice the 24 Basic Hangul Letters',
        jp: 'ハングル基本24文字を実際に書いてみる',
        cn: '亲手练习韩文24个基础字母',
        es: 'Practica las 24 letras básicas del Hangul',
        id: 'Latih 24 Huruf Dasar Hangul',
        vn: 'Luyện viết 24 chữ cái Hangul cơ bản',
      },
      desc: {
        en: 'Apply your understanding of Sejong’s stroke logic by downloading our custom practice sheet.',
        jp: '世宗大王の創製原理に基づいた高画質PDF練習帳を無料で作成し、正しい筆順で書いてみましょう。',
        cn: '立即免费生成经过科学校准的练字帖高清PDF，在正方形字格中亲手实践世宗大王的造字逻辑。',
        es: 'Descarga nuestras hojas de práctica personalizadas y aplica la lógica de los trazos de Sejong.',
        id: 'Unduh lembar latihan khusus kami untuk mempraktikkan logika guratan Raja Sejong.',
        vn: 'Tải xuống trang bài tập miễn phí để áp dụng ngay nguyên lý nét viết của Vua Sejong.',
      },
      btn: {
        en: 'Open Alphabet Practice',
        jp: '字母練習帳を開く',
        cn: '前往字母练习帖',
        es: 'Abrir práctica del alfabeto',
        id: 'Buka Latihan Alfabet',
        vn: 'Mở bài luyện chữ cái',
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
            'All Korean characters, regardless of complexity, adhere to two intuitive directional rules: Top to Bottom, and Left to Right.',
            'Rule 1 (Top to Bottom): Upper components and vertical stems are penned first. When writing "ㄱ", start along the top before bending downward. In "ㅅ", draw the left descending stroke before balancing with the right.',
            'Rule 2 (Left to Right): Horizontal strokes and leftmost elements take precedence. In "ㅂ", draw the left vertical pillar first, then the right pillar, then connect the horizontals.'
          ],
          jp: [
            'どんなに複雑に見えるハングルの文字でも、たった2つの不変の原則を守れば自然と正しい順序で書くことができます。',
            '第1原則：上から下へ（Top to Bottom）。縦線や上部にある要素は必ず先に書かれます。「ㄱ」は上の横線を引いてから下へ折れ、「ㅅ」も頂点から左下へ払い、右側を添えます。',
            '第2原則：左から右へ（Left to Right）。横線や左側にある要素が優先されます。「ㅂ」を書く際も左の柱を立ててから右の柱を立て、中と下の横線を埋めます。'
          ],
          cn: [
            '韩文看似复杂，但只要遵循两大永恒法则，运笔便能如行云流水：',
            '第一法则：从上到下（Top to Bottom）。所有字块的上方组件和竖直笔画必须先于下方完成。书写“ㄱ”时先拉横再折下；书写“ㅅ”时从顶部顶点先撇左下，再捺右下。',
            '第二法则：从左到右（Left to Right）。位于左侧的部件与横向笔画优先。书写“ㅂ”时，先立左侧竖柱，再立右侧竖柱，最后自上而下封闭内部横画。'
          ],
          es: [
            'Todos los caracteres coreanos siguen dos reglas intuitivas: de arriba a abajo y de izquierda a derecha.',
            'Regla 1 (Arriba a Abajo): Los trazos superiores se escriben primero. Al escribir "ㄱ", comienza arriba antes de doblar hacia abajo.',
            'Regla 2 (Izquierda a Derecha): Los elementos de la izquierda se escriben primero. En "ㅂ", dibuja la columna izquierda, luego la derecha, y finalmente las líneas horizontales.'
          ],
          id: [
            'Semua karakter Korea mengikuti dua aturan terarah yang intuitif: Dari Atas ke Bawah, dan Dari Kiri ke Kanan.',
            'Aturan 1 (Atas ke Bawah): Guratan atas ditulis terlebih dahulu. Saat menulis "ㄱ", tarik garis atas sebelum menekuk ke bawah.',
            'Aturan 2 (Kiri ke Kanan): Guratan kiri ditulis lebih dulu. Pada "ㅂ", buat tiang kiri dulu, lalu tiang kanan, kemudian hubungkan garis horizontal.'
          ],
          vn: [
            'Tất cả các chữ cái tiếng Hàn đều tuân theo hai quy tắc định hướng: Từ trên xuống dưới và Từ trái sang phải.',
            'Quy tắc 1 (Trên xuống Dưới): Các nét trên được viết trước. Khi viết "ㄱ", hãy kéo nét ngang trên cùng trước khi bẻ gập xuống.',
            'Quy tắc 2 (Trái sang Phải): Các nét bên trái được ưu tiên viết trước. Với chữ "ㅂ", hãy vẽ nét dọc bên trái trước, rồi đến nét dọc bên phải, sau đó nối các đường ngang.'
          ]
        },
        keyTakeaway: {
          en: 'Always flow from Top-to-Bottom, Left-to-Right. If a character has enclosing walls like "ㅁ", complete the internal area before closing the bottom gate.',
          jp: 'すべての筆画は「上から下、左から右」へ流れます。「ㅁ」のような囲み文字は、内側を書き終えてから最後に底を閉じます。',
          cn: '笔画永远遵照“从上至下、从左到右”。遇到如“ㅁ”字包裹结构时，先进内再关门。',
          es: 'Fluye siempre de arriba a abajo y de izquierda a derecha. Cierra la base al final.',
          id: 'Selalu mengalir dari Atas ke Bawah, Kiri ke Kanan. Tutup garis bawah paling akhir.',
          vn: 'Luôn viết từ trên xuống dưới, từ trái sang phải. Viết nét đóng đáy sau cùng.'
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
            'The consonant "ㄹ" (r/l) is notoriously miswritten in a single cursive zig-zag. In standard Korean handwriting, "ㄹ" is strictly constructed in 3 discrete strokes:',
            '1. Stroke 1: Draw a top "ㄱ" shape (horizontal then vertical bend).',
            '2. Stroke 2: Draw a middle horizontal line connecting from the vertical turn.',
            '3. Stroke 3: Draw a bottom "ㄴ" shape starting down and turning right along the floor baseline.',
            'Separating these strokes ensures the character sits squarely and proudly without toppling over.'
          ],
          jp: [
            '学習者が最も崩しやすいのが「ㄹ」です。数字の「2」や英語の「Z」のように一筆でジグザグに書いてしまいがちですが、正しくはきっちり3画で書きます。',
            '1. 第1画：上部の「ㄱ」を書きます（横に引いて下に折る）。',
            '2. 第2画：中央の横線を左から右へ引きます。',
            '3. 第3画：中央から下へ下ろし、床を支える「ㄴ」の形で引き締めます。',
            'このように段階的に書くことで、四角い枠の中で字が歪まず均整の取れたプロポーションが完成します。'
          ],
          cn: [
            '初学者最容易将“ㄹ”像阿拉伯数字“2”或字母“Z”那样一笔连写画完，这是严重的笔顺错误。规范韩文书写中，“ㄹ”严格分为3笔：',
            '1. 第一笔：书写顶部“ㄱ”形（横折下）；',
            '2. 第二笔：从折点左端向右书写中间横线；',
            '3. 第三笔：自中段向下延伸，并向右拉平托底的“ㄴ”形。',
            '通过三笔分写，字形在方格中重心稳如泰山，端庄利落。'
          ],
          es: [
            'La consonante "ㄹ" a menudo se escribe mal de un solo trazo. En la caligrafía estándar, se escribe en 3 trazos distintos: un "ㄱ" superior, una línea media horizontal y un "ㄴ" inferior.',
            'Dividir estos trazos garantiza que el carácter mantenga su proporción cuadrada.'
          ],
          id: [
            'Konsonan "ㄹ" sering kali keliru ditulis dalam satu tarikan zig-zag. Dalam standar Korea, "ㄹ" ditulis tepat dalam 3 guratan: bentuk "ㄱ" atas, garis horizontal tengah, dan bentuk "ㄴ" bawah.',
            'Memisahkan guratan ini memastikan huruf tetap seimbang di dalam kotak.'
          ],
          vn: [
            'Phụ âm "ㄹ" thường bị viết sai thành một nét zíc-zắc duy nhất. Trong chữ viết chuẩn, "ㄹ" được viết chính xác trong 3 nét: hình "ㄱ" ở trên, nét ngang ở giữa và hình "ㄴ" ở đáy.',
            'Viết tách 3 nét này giúp chữ đứng vững và vuông vắn trong ô kẻ.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Try Step-by-Step Stroke Tracing Sheets',
        jp: '矢印と番号付きの筆順練習帳を試す',
        cn: '体验带箭头与序号的笔顺字帖',
        es: 'Prueba las hojas de trazado paso a paso',
        id: 'Coba Lembar Jiplak Guratan Langkah demi Langkah',
        vn: 'Trải nghiệm trang luyện nét có mũi tên và số thứ tự',
      },
      desc: {
        en: 'Our Alphabet Practice sheets feature precise directional arrows and stroke numbers for every Korean letter.',
        jp: 'すべての字母に方向を示す矢印と順番番号が明記されたPDF練習帳を無料で作成できます。',
        cn: '每张字母字帖均配备精细的笔画方向箭头与笔顺编号，助您零基础轻松掌握。',
        es: 'Nuestras hojas de práctica incluyen flechas de dirección y números de trazo precisos.',
        id: 'Lembar latihan kami menampilkan panah arah dan nomor guratan untuk setiap huruf.',
        vn: 'Trang bài tập của chúng tôi có mũi tên chỉ hướng và số thứ tự rõ ràng cho từng nét chữ.',
      },
      btn: {
        en: 'Generate Stroke Practice PDF',
        jp: '筆順PDFを生成する',
        cn: '即刻生成笔顺练习PDF',
        es: 'Generar PDF de trazos',
        id: 'Buat PDF Latihan Guratan',
        vn: 'Tạo PDF luyện nét viết',
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
      jp: '英語や外国語の名前がハングルの音節構造に自然に適応するルール。',
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
            'In English and European languages, consonants often cluster without vowels (e.g. "Str-" in "Street" or "-s" in "Chris"). In Korean, every consonant must attach to a vowel to form a syllable block.',
            'When translating a name with consonant clusters, Korean inserts the neutral vowel "ㅡ" (eu). For example, "Chris" becomes "크리스" (Keu-ri-seu) across 3 syllable blocks, and "Smith" becomes "스미스" (Seu-mi-seu).'
          ],
          jp: [
            'ヨーロッパ諸言語では母音を挟まず子音が連続することが日常茶飯事ですが、韓国語では必ず母音と子音が結びついて音を構成します。',
            'そのため、単独で残る子音の後ろには最も中立的な母音である「ㅡ（eu）」を補い、独立した音節を作ります。「Chris」が「크리스（ク・リ・ス）」となり、「Smith」が「스미스（ス・ミ・ス）」になるのはこのためです。'
          ],
          cn: [
            '印欧语系中常见无元音辅音连缀现象，但韩文中辅音不能脱离元音独立发声。',
            '因此，遇到连续辅音时会补入最中性的元音“ㅡ”，使其形成独立音节字块。例如“Chris”转写为三音节的“크리스”，“Smith”转写为“스미스”。'
          ],
          es: [
            'En coreano, cada consonante debe unirse a una vocal para formar un bloque silábico.',
            'Al traducir nombres con grupos consonánticos, el coreano inserta la vocal neutra "ㅡ" (eu). Por ejemplo, "Chris" se convierte en "크리스" (Keu-ri-seu) y "Smith" en "스미스" (Seu-mi-seu).'
          ],
          id: [
            'Dalam bahasa Korea, setiap konsonan harus melekat pada vokal untuk membentuk blok suku kata.',
            'Ketika menerjemahkan nama dengan gugus konsonan, diselipkan vokal netral "ㅡ" (eu). Misalnya, "Chris" menjadi "크리스" dan "Smith" menjadi "스미스".'
          ],
          vn: [
            'Trong tiếng Hàn, mọi phụ âm đều phải gắn với một nguyên âm để tạo thành một khối âm tiết.',
            'Khi dịch tên có cụm phụ âm đứng liền nhau, tiếng Hàn sẽ chèn thêm nguyên âm trung tính "ㅡ" (eu). Ví dụ: "Chris" trở thành "크리스" và "Smith" trở thành "스미스".'
          ]
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
            'Korean phonology maps absent sounds to their closest equivalents according to official standards:',
            '• F converts to ㅍ (P): "Flora" → "플로라", "Frank" → "프랭크".',
            '• V converts to ㅂ (B): "Victoria" → "빅토리아", "David" → "데이비드".',
            '• TH converts to ㅅ (S) or ㄷ (D): "Smith" → "스미스", "Ethan" → "이든".'
          ],
          jp: [
            '韓国語にはF、V、THの発音が存在しないため、韓国国立国語院の標準により最も音響的に類似した字母が当てられます。',
            '• [F] は激音の「ㅍ」に置換：「Flora」→「플로라」、「Frank」→「프랭크」',
            '• [V] は破裂音の「ㅂ」に置換：「Victoria」→「빅토리아」、「David」→「데이비드」',
            '• [TH] は摩擦音「ㅅ」または破裂音「ㄷ」に置換：「Smith」→「스미스」、「Ethan」→「이든」'
          ],
          cn: [
            '韩语标准外来语表记法对缺失音素进行了极为严谨的音系对齐：',
            '• [F] 音对应送气音“ㅍ”：“Flora” → “플로라”，“Frank” → “프랭크”；',
            '• [V] 音对应双唇破裂音“ㅂ”：“Victoria” → “빅토리아”，“David” → “데이비드”；',
            '• [TH] 音对应摩擦音“ㅅ”或破裂音“ㄷ”：“Smith” → “스미스”，“Ethan” → “이든”。'
          ],
          es: [
            'La fonología coreana asigna los sonidos inexistentes a sus equivalentes más cercanos:',
            '• F se convierte en ㅍ (P): "Flora" → "플로라".',
            '• V se convierte en ㅂ (B): "Victoria" → "빅토리아".',
            '• TH se convierte en ㅅ (S) o ㄷ (D): "Smith" → "스미스".'
          ],
          id: [
            'Fonologi Korea memetakan bunyi yang tidak ada ke padanan terdekatnya:',
            '• F menjadi ㅍ (P): "Flora" → "플로라".',
            '• V menjadi ㅂ (B): "Victoria" → "빅토리아".',
            '• TH menjadi ㅅ (S) atau ㄷ (D): "Smith" → "스미스".'
          ],
          vn: [
            'Ngữ âm tiếng Hàn chuyển đổi các âm còn thiếu sang các âm tương đương gần nhất:',
            '• F chuyển thành ㅍ (P): "Flora" → "플로라".',
            '• V chuyển thành ㅂ (B): "Victoria" → "빅토리아".',
            '• TH chuyển thành ㅅ (S) hoặc ㄷ (D): "Smith" → "스미스".'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Translate & Practice Your Korean Name',
        jp: '自分の名前を韓国語に変換して手書き練習する',
        cn: '将您的名字转换为韩文并亲笔练习',
        es: 'Traduce y practica tu nombre en coreano',
        id: 'Terjemahkan & Latih Nama Korea Anda',
        vn: 'Dịch và luyện viết tên tiếng Hàn của bạn',
      },
      desc: {
        en: 'Type your English or foreign name to see its natural Korean rendering and print a custom name sheet.',
        jp: '外国語の名前を入力するだけで、最も自然なハングル表記を見つけてカスタマイズされたPDF練習帳を作成します。',
        cn: '输入您的外语姓名，系统将自动匹配最规范地道的韩文发音并生成专属练字帖。',
        es: 'Escribe tu nombre para ver su forma en coreano e imprimir una hoja personalizada.',
        id: 'Ketik nama Anda untuk melihat bentuk Koreanya dan cetak lembar latihan khusus.',
        vn: 'Nhập tên của bạn để xem cách viết tiếng Hàn tự nhiên và in bài luyện tập riêng.',
      },
      btn: {
        en: 'Try Write My Name Tool',
        jp: 'お名前練習帳を開く',
        cn: '体验姓名生成器',
        es: 'Probar conversor de nombres',
        id: 'Coba Alat Tulis Nama',
        vn: 'Thử công cụ viết tên',
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
            'When you type on a keyboard, your finger performs the exact same uniform motion whether you press "A", "G", or "한". The brain receives no tactile differentiation about the physical geometry of the symbol.',
            'Physically writing Hangul, however, requires continuous tactile feedback, stroke direction shifts, and pressure control. This fine-motor engagement carves physical motor memory traces in the brain, dramatically strengthening active recall.'
          ],
          jp: [
            'キーボードで文字を打つとき、指はどのキーを押しても単なる均一な垂直運動を繰り返すだけで、文字の幾何学的形態に関する触覚フィードバックは得られません。',
            'しかしペンで紙にハングルを書くときは、指先の微細な筋肉運動、筆圧の調整、方向転換が脳の運動皮質と頭頂葉を同時に刺激し、強固な「運動記憶（Motor Memory）」を形成します。'
          ],
          cn: [
            '在键盘或屏幕上打字时，无论输入哪个字符，手指的按压动作毫无差异，大脑无法接收到任何与字符几何形态相关的触觉神经刺激。',
            '而握笔在纸上书写韩文时，笔尖的阻尼感、微细肌肉控制、笔锋转向与压力调节，共同在大脑顶叶与运动皮层烙下独特的运动记忆印记，使记忆留存率成倍提升。'
          ],
          es: [
            'Al teclear, el dedo realiza el mismo movimiento uniforme para cualquier letra. El cerebro no recibe retroalimentación táctil de la forma geométrica.',
            'Escribir Hangul a mano activa la motricidad fina, creando recuerdos motores duraderos en la corteza cerebral.'
          ],
          id: [
            'Saat mengetik di keyboard, jari melakukan gerakan yang sama untuk huruf apa pun. Otak tidak menerima perbedaan bentuk fisik simbol.',
            'Menulis Hangul secara fisik melatih motorik halus, menanamkan jejak memori kuat di otak untuk mengingat huruf lebih lama.'
          ],
          vn: [
            'Khi gõ bàn phím, ngón tay chỉ lặp lại một chuyển động nhấn đồng đều cho mọi ký tự mà không nhận được cảm giác xúc giác về hình dạng chữ.',
            'Ngược lại, viết tay chữ Hangul đòi hỏi điều khiển cơ bắp tinh tế, tạo nên dấu ấn trí nhớ vận động sâu đậm trong não bộ.'
          ]
        },
        keyTakeaway: {
          en: 'Handwriting bridges passive recognition with active recall. Tracing Korean strokes burns their geometric forms into deep long-term memory.',
          jp: '手書きは受動的な認識を能動的な再生記憶へと変える最も確実な学習法です。',
          cn: '亲手书写打破了被动记忆的局限，是建立主动长久回忆的最强工具。',
          es: 'Escribir a mano convierte el reconocimiento pasivo en recuerdo activo.',
          id: 'Tulisan tangan mengubah pengenalan pasif menjadi ingatan aktif jangka panjang.',
          vn: 'Viết tay biến sự nhận biết thụ động thành trí nhớ chủ động lâu dài.'
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
            'Traditional Korean handwriting education relies on "Wongoji" (squared manuscript paper with crosshair guidelines). This is pedagogical ergonomics.',
            'Because Hangul characters are modular 2D blocks containing up to 4 components, practicing within 4-quadrant guideline boxes trains learners to instinctively balance negative space, center of gravity, and stroke thickness. Write Hangul’s printable PDF templates are precisely calibrated with universal grid ratios to reproduce this exact learning advantage.'
          ],
          jp: [
            '韓国の伝統的な筆記教育では、十字線が入った四角い原稿用紙（Wongoji）が使われます。これは空間認知科学に基づいた理想的な学習環境です。',
            '1つのマスの中に複数の子音・母音が組み合わさるハングルは、4象限のガイドラインの中で練習することで、余白の美学と重心の安定を最も速く体得できます。'
          ],
          cn: [
            '传统的韩国书写教育高度依赖带有十字参考线的方格原稿纸（Wongoji），这完全符合视空间认知工态学。',
            '韩文在一个方块中容纳多个子母部件，在4象限交叉线中练字，能让初学者以最快速度本能地掌握留白对称性与重心平衡感。'
          ],
          es: [
            'La educación coreana tradicional se basa en el papel cuadriculado "Wongoji" con líneas guía cruzadas.',
            'Practicar dentro de cuadrículas de cuatro cuadrantes entrena a los estudiantes para equilibrar instintivamente el espacio negativo y el centro de gravedad.'
          ],
          id: [
            'Pendidikan menulis Korea bertumpu pada kertas naskah berpetak "Wongoji" dengan garis panduan silang.',
            'Berlatih dalam kotak 4 kuadran melatih keseimbangan ruang dan pusat gravitasi huruf secara alami.'
          ],
          vn: [
            'Phương pháp luyện chữ truyền thống của Hàn Quốc dựa trên giấy ô vuông "Wongoji" có đường căn chữ thập.',
            'Luyện tập trong ô vuông 4 phần giúp học viên nhanh chóng cảm nhận được sự cân đối và trọng tâm của từng con chữ.'
          ]
        }
      }
    ],
    relatedTool: {
      title: {
        en: 'Print Free Universal Grid Practice Sheets',
        jp: '科学的な四角原稿用紙PDFを無料で印刷する',
        cn: '免费打印经过科学校准的方格练字帖PDF',
        es: 'Imprime hojas de práctica de cuadrícula universales gratis',
        id: 'Cetak Lembar Latihan Berpetak Universal Gratis',
        vn: 'In miễn phí trang luyện chữ ô vuông chuẩn quốc tế',
      },
      desc: {
        en: 'Download our standard A4/US Letter worksheets to train your motor memory today.',
        jp: 'A4およびUS Letterサイズに100%適合した練習帳をダウンロードして、今すぐ手書きを始めましょう。',
        cn: '下载完全匹配 A4 与 US Letter 纸张的标准字帖，即刻开始训练您的肌肉记忆。',
        es: 'Descarga nuestras hojas de trabajo A4/Letter para entrenar tu memoria motora hoy mismo.',
        id: 'Unduh lembar kerja A4/Letter kami untuk melatih memori motorik Anda hari ini.',
        vn: 'Tải xuống trang bài tập chuẩn A4/Letter để rèn luyện trí nhớ cơ bắp ngay hôm nay.',
      },
      btn: {
        en: 'Go to Daily Practice',
        jp: '今日の練習帳へ進む',
        cn: '前往今日练字帖',
        es: 'Ir a la práctica diaria',
        id: 'Ke Latihan Harian',
        vn: 'Đi tới bài luyện hàng ngày',
      },
      href: '/#category'
    }
  }
];
