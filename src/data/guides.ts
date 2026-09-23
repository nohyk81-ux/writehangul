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
,
{
  "slug": "korean-honorifics-guide",
  "category": "Grammar & Social Etiquette",
  "readTime": "6 min read",
  "date": "September 2026",
  "icon": "🙇",
  "tags": [
    "Honorifics",
    "Korean Politeness",
    "Jondaetmal",
    "Banmal"
  ],
  "title": {
    "en": "The Complete Guide to Korean Honorifics: Jondaetmal vs Banmal Explained",
    "ko": "한국어 존댓말과 반말 완벽 가이드: 상황별 예의와 언어 예절",
    "jp": "韓国語の敬語（チョンデッマル）とタメ口（パンマル）完全ガイド",
    "cn": "韩语敬语与非敬语完全指南：社交礼仪与语境辨析",
    "es": "Guía completa de honoríficos coreanos: Jondaetmal vs Banmal",
    "id": "Panduan Lengkap Tingkat Kesopanan Korea: Jondaetmal vs Banmal",
    "vn": "Hướng dẫn đầy đủ về kính ngữ tiếng Hàn: Jondaetmal và Banmal"
  },
  "subtitle": {
    "en": "How to navigate Korean politeness levels confidently without offending elders or friends.",
    "ko": "어른이나 처음 만난 사람에게 실례를 범하지 않고 자연스럽게 대화하는 한국어 높임법의 핵심.",
    "jp": "目上の人や初対面の相手に失礼にならないための韓国語の敬語マナー。",
    "cn": "如何准确得体地使用韩语敬语，在职场与人际交往中展现良好的礼仪素养。",
    "es": "Cómo dominar los niveles de cortesía en coreano sin ofender a nadie.",
    "id": "Cara menguasai tingkat kesopanan Korea dengan percaya diri dalam berbagai situasi.",
    "vn": "Cách sử dụng các mức độ lịch sự trong tiếng Hàn một cách tự nhiên và chuẩn mực."
  },
  "summary": {
    "en": "Korean society embeds hierarchical relationships directly into grammar through honorific endings like -yo and -sumnida. Understanding age dynamics and social proximity is essential for authentic fluency.",
    "ko": "한국어는 문법 체계 자체에 상대방에 대한 존중과 친밀도를 담아냅니다. 존댓말(-요, -습니다)과 반말의 기준을 이해하면 한국 문화의 본질을 파악할 수 있습니다.",
    "jp": "韓国語は文法そのものに相手への敬意と距離感が組み込まれています。「〜ヨ」「〜スムニダ」の使い分けを学ぶことで、韓国の人間関係を深く理解できます。",
    "cn": "韩语在词尾语法中直接蕴含了对交谈对象的敬重与距离感。掌握“-요”与“-습니다”的使用情境，是通往流利韩语的必经之路。",
    "es": "El coreano refleja las relaciones de respeto directamente en su gramática mediante terminaciones formales.",
    "id": "Bahasa Korea menanamkan hubungan hierarkis langsung ke dalam tata bahasa melalui akhiran formal.",
    "vn": "Tiếng Hàn phản ánh mối quan hệ tôn trọng trực tiếp vào ngữ pháp thông qua các đuôi câu kính ngữ."
  },
  "sections": [
    {
      "heading": {
        "en": "1. The Two Main Speech Levels: Polite (-yo) vs Formal (-sumnida)",
        "ko": "1. 존댓말의 양대 축: 해요체(-요)와 하십시오체(-습니다)",
        "jp": "1. 敬語の二大基本形：ヘヨ体（-요）とハムニダ体（-습니다）",
        "cn": "1. 敬语的两大支柱：非格式体（-요）与格式体（-습니다）",
        "es": "1. Los dos niveles corteses principales: Haeyo (-yo) y Hasipsio (-sumnida)",
        "id": "1. Dua Tingkat Kesopanan Utama: Haeyo (-yo) dan Hasipsio (-sumnida)",
        "vn": "1. Hai hình thức kính ngữ chính: Đuôi câu -yo và Đuôi câu -sumnida"
      },
      "paragraphs": {
        "en": [
          "Informal Polite (Haeyo-che / 해요체): Ends in -a/eo-yo. This is the most versatile speech style in modern Korea. It is warm, polite, and universally suitable for colleagues, service staff, and casual acquaintances.",
          "Formal Polite (Hapsio-che / 하십시오체): Ends in -sumnida/-sumnikka. This register is reserved for television broadcasts, company presentations, military communication, and customer announcements."
        ],
        "jp": [
          "「ヘヨ体（해요체）」は文末が「〜ア／オ・ヨ」で終わる親しみやすい敬語です。カフェやレストラン、職場の同僚など、日常のあらゆる場面で最も頻繁に使われます。",
          "「ハムニダ体（하십시오체）」は「〜スムニダ」で終わる格式高い最高敬語です。ニュース報道、公式スピーチ、面接、ビジネスの重要会議などで使われます。"
        ],
        "cn": [
          "非格式体敬语（해요체）：以“-아요/어요”结尾，语气亲切温和，广泛适用于日常生活、咖啡厅点餐以及普通同事社交。",
          "格式体敬语（하십시오체）：以“-습니다/십니까”结尾，具有高度严谨的正式感，用于新闻联播、公开演讲、商务洽谈及军队纪律语境。"
        ],
        "es": [
          "El estilo Haeyo (-yo) es cortés y cálido, ideal para el día a día.",
          "El estilo Hasipsio (-sumnida) es formal y riguroso, reservado para presentaciones y ámbitos corporativos."
        ],
        "id": [
          "Haeyo-che (-yo) adalah gaya sopan yang hangat dan paling sering digunakan sehari-hari.",
          "Hasipsio-che (-sumnida) adalah gaya formal yang digunakan dalam situasi resmi dan kantor."
        ],
        "vn": [
          "Haeyo-che (-yo) là đuôi câu lịch sự thân mật, dùng phổ biến nhất trong đời sống thường ngày.",
          "Hasipsio-che (-sumnida) là đuôi câu trang trọng, dùng trong các bài phát biểu, phỏng vấn và công sở."
        ]
      },
      "keyTakeaway": {
        "en": "When in doubt, always use Haeyo-che (-yo). It is never rude and avoids feeling excessively distant.",
        "jp": "迷ったら常に「〜ヨ（해요）」を使いましょう。失礼にならず、相手に親しみやすい好印象を与えます。",
        "cn": "若对语境把握不准，优先使用“-요”句尾。既不失礼貌，又倍感亲切自然。",
        "es": "Ante la duda, usa siempre la terminación -yo.",
        "id": "Jika ragu, selalu gunakan akhiran -yo karena sopan dan ramah.",
        "vn": "Khi phân vân, hãy luôn sử dụng đuôi câu -yo để vừa lịch sự vừa gần gũi."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Practice Polite Greetings in Hangul",
      "jp": "丁寧な挨拶表現を手書きで練習する",
      "cn": "亲手练习常用礼貌敬语字帖",
      "es": "Practica saludos de cortesía en Hangul",
      "id": "Latih Salam Sopan dalam Hangul",
      "vn": "Luyện viết các câu chào lịch sự bằng tiếng Hàn"
    },
    "desc": {
      "en": "Print out handwriting sheets for essential polite expressions like Gamsahamnida and Annyeonghaseyo.",
      "jp": "「감사합니다」「안녕하세요」など、心温まる敬語の練習帳を無料で印刷できます。",
      "cn": "免费生成“감사합니다”、“안녕하세요”等高频敬语的高清方格练字帖。",
      "es": "Imprime hojas de práctica con expresiones de cortesía fundamentales.",
      "id": "Cetak lembar latihan untuk ungkapan sopan seperti Gamsahamnida.",
      "vn": "In trang luyện viết các mẫu câu kính ngữ thiết yếu như Gamsahamnida."
    },
    "btn": {
      "en": "Open Greetings Category",
      "jp": "挨拶カテゴリーへ",
      "cn": "前往问候语字帖",
      "es": "Ver saludos",
      "id": "Buka Kategori Salam",
      "vn": "Mở mục chào hỏi"
    },
    "href": "/category/greetings"
  }
},
{
  "slug": "kpop-kdrama-essential-phrases",
  "category": "Pop Culture & Media",
  "readTime": "5 min read",
  "date": "September 2026",
  "icon": "🎬",
  "tags": [
    "K-Pop",
    "K-Drama",
    "Korean Dramas",
    "Subtitles"
  ],
  "title": {
    "en": "50 Essential Korean Phrases Heard in Every K-Drama and K-Pop Song",
    "ko": "K-드라마와 K-POP에 매일 나오는 필수 관용 표현 50선",
    "jp": "韓国ドラマとK-POPに毎日登場する必須フレーズ50選",
    "cn": "韩剧与K-Pop中每集必现的50个高频核心表达",
    "es": "50 frases esenciales de K-Drama y K-Pop que debes conocer",
    "id": "50 Ungkapan Penting K-Drama & K-Pop yang Sering Muncul",
    "vn": "50 cụm từ tiếng Hàn phổ biến nhất trong phim K-Drama và nhạc K-Pop"
  },
  "subtitle": {
    "en": "Decode dramatic plot twists and romantic lyrics without looking down at subtitles.",
    "ko": "자막을 보지 않고도 주인공의 감정선과 노래 가사를 마음 깊이 공감하는 비법.",
    "jp": "字幕を追わずにドラマの感動的なセリフや歌詞をそのまま味わうための近道。",
    "cn": "摆脱下视字幕的束缚，直接沉浸于韩剧角色的真情流露与动人旋律。",
    "es": "Disfruta de tus series y canciones coreanas favoritas comprendiendo su idioma original.",
    "id": "Nikmati drama dan lagu Korea favorit Anda tanpa harus selalu membaca subtitle.",
    "vn": "Cảm nhận trọn vẹn cảm xúc của phim và bài hát mà không cần nhìn phụ đề."
  },
  "summary": {
    "en": "From dramatic exclamations like \"Jinjja?\" (Really?) and \"Eotteoke?\" (What do I do?) to poetic words like \"Gieok\" (Memory) and \"Unmyeong\" (Destiny), these core terms form the emotional backbone of Korean storytelling.",
    "ko": "“진짜?”, “어떻게?”, “보고 싶어” 같은 감정 표현부터 “기억”, “운명” 같은 노랫말 단어까지, 한국 대중문화의 감성을 관통하는 핵심 어휘들을 완벽 정리합니다.",
    "jp": "「チンチャ？（本当に？）」「オットケ？（どうしよう？）」などの感情表現から、「記憶」「運命」といった歌詞の定番単語までを徹底解説します。",
    "cn": "从感叹词“진짜?（真的吗？）”、“어떻게?（怎么办？）”到抒情词汇“기억（回忆）”、“운명（命运）”，全面解锁韩流叙事背后的情感密码。",
    "es": "Aprende los términos emocionales y dramáticos más frecuentes en las series de televisión coreanas.",
    "id": "Pelajari kata-kata dramatis dan emosional yang menjadi ciri khas penceritaan media Korea.",
    "vn": "Tìm hiểu các cụm từ giàu cảm xúc xuất hiện liên tục trong các bộ phim truyền hình Hàn Quốc."
  },
  "sections": [
    {
      "heading": {
        "en": "1. Dramatic Exclamations & Question Tags",
        "ko": "1. 극적인 감정을 터뜨리는 감탄사와 질문형 어휘",
        "jp": "1. 感情を揺さぶる感嘆詞と問いかけ表現",
        "cn": "1. 烘托剧情张力的感叹词与语气追问",
        "es": "1. Exclamaciones dramáticas y preguntas frecuentes",
        "id": "1. Seruan Dramatis & Kata Tanya Spontan",
        "vn": "1. Các câu cảm thán kịch tính và câu hỏi tu từ"
      },
      "paragraphs": {
        "en": [
          "\"Jinjja?\" (진짜?) or \"Jeongmal?\" (정말?): Translates to \"Really?!\" or \"For real?!\". Used constantly when characters discover shocking secrets.",
          "\"Hul\" (헐): An internet-era exclamation expressing disbelief, shock, or exasperation. Similar to \"OMG!\" or \"No way!\".",
          "\"Daebak\" (대박): Originally meaning a jackpot, now used universally to mean \"Epic!\", \"Incredible!\", or \"Mind-blowing!\"."
        ],
        "jp": [
          "「チンチャ？（진짜?）」／「チョンマル？（정말?）」：劇中で衝撃的な事実が明かされた際、「本当に？！」と驚く決まり文句です。",
          "「ホル（헐）」：予想外の展開に言葉を失ったときの「えっ…」「マジで…」というリアルなリアクションです。",
          "「テバク（대박）」：元々は大当たりを意味し、現在では「ヤバい！」「最高！」という意味で広く使われます。"
        ],
        "cn": [
          "“진짜?（真假的？）”与“정말?（确实吗？）”：当角色遭遇反转真相时的第一本能反应。",
          "“헐（天哪/无语）”：当代年轻人在极度震惊、哭笑不得时发出的拟声感叹词。",
          "“대박（太赞了/绝了）”：原指中头彩，如今是表达极致赞叹与佩服的国民级流行语。"
        ],
        "es": [
          "\"Jinjja?\" significa \"¿De verdad?\". Es la reacción clásica ante cualquier revelación dramática.",
          "\"Daebak\" se utiliza para describir algo asombroso o increíble."
        ],
        "id": [
          "\"Jinjja?\" berarti \"Benarkah?\". Sering diucapkan saat mendengar kabar mengejutkan.",
          "\"Daebak\" berarti luar biasa atau mengagumkan."
        ],
        "vn": [
          "\"Jinjja?\" có nghĩa là \"Thật sao?!\". Đây là câu cửa miệng trong mọi tình huống kịch tính.",
          "\"Daebak\" mang ý nghĩa là tuyệt vời, đỉnh cao."
        ]
      },
      "keyTakeaway": {
        "en": "Intonation matters enormously. Raising the pitch turns statements into emotional queries.",
        "jp": "韓国語は抑揚（イントネーション）が命です。語尾を上げ下げすることでニュアンスが劇的に変化します。",
        "cn": "语调至关重要。尾音的上扬或平坠直接决定了情绪是关切、质疑还是感叹。",
        "es": "La entonación cambia por completo el significado y la intención de la palabra.",
        "id": "Intonasi suara sangat menentukan emosi dan makna dalam percakapan Korea.",
        "vn": "Ngữ điệu rất quan trọng; lên giọng ở cuối câu sẽ biến câu nói thành câu hỏi đầy cảm xúc."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Print K-Pop Vocabulary Practice Sheets",
      "jp": "K-POP単語の練習帳を印刷する",
      "cn": "打印K-Pop热门歌词词汇练习帖",
      "es": "Imprime hojas de práctica de K-Pop",
      "id": "Cetak Lembar Latihan Kosakata K-Pop",
      "vn": "In bài luyện viết từ vựng K-Pop"
    },
    "desc": {
      "en": "Write out memorable lyrical words like Sarang, Chueok, and Kkum in beautiful squared grids.",
      "jp": "「사랑（愛）」「추억（思い出）」「꿈（夢）」などの名詞をマス目練習帳で手書きしてみましょう。",
      "cn": "在标准方格字帖中亲手书写歌词中反复吟唱的经典词汇。",
      "es": "Escribe términos líricos emblemáticos en cuadrículas calibradas.",
      "id": "Tulis kata-kata lirik lagu favorit dalam kertas berpetak.",
      "vn": "Luyện viết các từ vựng âm nhạc ý nghĩa trong ô kẻ chuẩn."
    },
    "btn": {
      "en": "Go to K-Pop Category",
      "jp": "K-POPカテゴリーへ",
      "cn": "前往K-Pop专区",
      "es": "Ver K-Pop",
      "id": "Ke Kategori K-Pop",
      "vn": "Xem mục K-Pop"
    },
    "href": "/category/kpop"
  }
},
{
  "slug": "korean-numbers-sino-native",
  "category": "Linguistics & Counting",
  "readTime": "7 min read",
  "date": "September 2026",
  "icon": "🔢",
  "tags": [
    "Korean Numbers",
    "Sino-Korean",
    "Native Korean",
    "Counters"
  ],
  "title": {
    "en": "The Dual Number System of Korea: Native vs Sino-Korean Explained",
    "ko": "한국어의 두 가지 숫자 체계: 고유어(하나, 둘)와 한자어(일, 이) 완벽 정리",
    "jp": "韓国語の2つの数字体系：固有数詞（ハナ、トゥル）と漢数詞（イル、イ）",
    "cn": "韩语两大数字系统完全解析：固有词与汉字词的用法分工",
    "es": "El sistema numérico dual de Corea: números nativos vs sino-coreanos",
    "id": "Sistem Angka Ganda Korea: Angka Asli vs Sino-Korea",
    "vn": "Hệ thống số đếm kép của tiếng Hàn: Số thuần Hàn và Số Hán Hàn"
  },
  "subtitle": {
    "en": "Why telling time in Korean requires using both number systems in the exact same sentence.",
    "ko": "몇 시 몇 분을 말할 때 왜 두 가지 숫자를 동시에 섞어 써야 할까?",
    "jp": "「3時20分」と言うときに、なぜ2種類の数字を混ぜて使うのか？",
    "cn": "为什么报时表达“几点几分”时，必须在一句话里同时混合两种数字系统？",
    "es": "Descubre por qué decir la hora en coreano requiere combinar ambos sistemas.",
    "id": "Pelajari mengapa menyebutkan waktu dalam bahasa Korea menggabungkan kedua sistem angka.",
    "vn": "Tìm hiểu lý do tại sao nói giờ trong tiếng Hàn lại kết hợp cả hai hệ thống số."
  },
  "summary": {
    "en": "Korean uniquely maintains two parallel numbering systems: Native Korean (Hana, Dul, Set) for counting items, people, and clock hours; and Sino-Korean (Il, I, Sam) for money, phone numbers, minutes, and measurements.",
    "ko": "한국어는 물건, 나이, 시간을 셀 때 쓰는 ‘고유어 수사’와 가격, 전화번호, 분(minute)을 셀 때 쓰는 ‘한자어 수사’가 엄격히 구분되어 있어 외국인 학습자가 꼭 마스터해야 하는 필수 관문입니다.",
    "jp": "韓国語には、年齢や個数を数える「固有数詞」と、お金や電話番号、分（分単位）を数える「漢数詞」の2系統が存在します。",
    "cn": "韩语拥有独特的双轨数字系统：数个数、年龄与点钟使用“固有数词”；计算金钱、电话号码、日期与分钟使用“汉字数词”。",
    "es": "El coreano cuenta con números nativos (para personas y horas) y sino-coreanos (para dinero y minutos).",
    "id": "Bahasa Korea memiliki angka asli untuk menghitung barang dan jam, serta angka Sino-Korea untuk uang dan menit.",
    "vn": "Tiếng Hàn có số thuần Hàn để đếm đồ vật, giờ và số Hán Hàn để đếm tiền, phút và số điện thoại."
  },
  "sections": [
    {
      "heading": {
        "en": "1. The Golden Rule of Telling Time",
        "ko": "1. 시간 말하기의 황금 법칙: 시(고유어) + 분(한자어)",
        "jp": "1. 時間を言うときの鉄則：時（固有数詞）＋分（漢数詞）",
        "cn": "1. 报时表达黄金法则：点钟（固有词） + 分钟（汉字词）",
        "es": "1. La regla de oro para decir la hora: Horas (Nativo) + Minutos (Sino)",
        "id": "1. Aturan Emas Menyebutkan Jam: Jam (Asli) + Menit (Sino)",
        "vn": "1. Quy tắc vàng khi nói giờ: Giờ (Thuần Hàn) + Phút (Hán Hàn)"
      },
      "paragraphs": {
        "en": [
          "The single best way to memorize both systems is telling the time:",
          "• The Hour is always Native Korean: 1 o’clock is \"Han-si\" (한 시), 2 o’clock is \"Du-si\" (두 시), 3 o’clock is \"Se-si\" (세 시).",
          "• The Minutes are always Sino-Korean: 15 minutes is \"Sibo-bun\" (십오 분), 30 minutes is \"Samsip-bun\" (삼십 분).",
          "Therefore, 3:30 is \"Se-si Samsip-bun\" (세 시 삼십 분). Practicing this sentence daily cements both systems seamlessly."
        ],
        "jp": [
          "2つの数字体系をマスターする最も確実な練習法は「時計の時刻」を口に出すことです。",
          "• 「〜時」は固有数詞：1時は「ハン・シ（한 시）」、2時は「トゥ・シ（두 시）」、3時は「セ・シ（세 시）」。",
          "• 「〜分」は漢数詞：15分は「シボ・ブン（십오 분）」、30分は「サムシプ・ブン（삼십 분）」。",
          "「3時30分」は「セシ・サムシプブン（세 시 삼십 분）」となります。"
        ],
        "cn": [
          "掌握两大数字系统的最高效捷径便是练习“日常报时”：",
          "• “点钟”必须使用固有词：1点为“한 시”、2点为“두 시”、3点为“세 시”；",
          "• “分钟”必须使用汉字词：15分为“십오 분”、30分为“삼십 분”；",
          "例如“3点30分”即为“세 시 삼십 분”。每日练习看表报时，两大系统自然融会贯通。"
        ],
        "es": [
          "Para decir las 3:30 se dice \"Se-si Samsip-bun\", mezclando horas nativas y minutos sino-coreanos.",
          "Practicar la hora a diario es la mejor manera de dominar ambos sistemas."
        ],
        "id": [
          "Pukul 3:30 disebut \"Se-si Samsip-bun\", menggabungkan jam asli dan menit Sino-Korea.",
          "Mempraktikkan cara membaca jam adalah cara tercepat menguasai kedua sistem."
        ],
        "vn": [
          "Ví dụ 3 giờ 30 phút sẽ nói là \"Se-si Samsip-bun\", kết hợp số thuần Hàn cho giờ và số Hán Hàn cho phút.",
          "Luyện tập xem đồng hồ mỗi ngày là cách tốt nhất để ghi nhớ cả hai hệ thống số."
        ]
      },
      "keyTakeaway": {
        "en": "Hours take Native numbers; Minutes and Money take Sino numbers.",
        "jp": "「時間（時）」は固有数詞、「分とお金」は漢数詞。これだけ覚えておけば日常生活で困りません。",
        "cn": "记住口诀：“点钟用固有，分钟与金钱用汉字”。",
        "es": "Horas con números nativos; Minutos y dinero con números sino-coreanos.",
        "id": "Jam menggunakan angka asli; Menit dan uang menggunakan angka Sino-Korea.",
        "vn": "Giờ dùng số thuần Hàn; Phút và tiền bạc dùng số Hán Hàn."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Practice Korean Number Syllables",
      "jp": "ハングルの数字を手書き練習する",
      "cn": "练习韩文数字方格字帖",
      "es": "Practica los caracteres numéricos en Hangul",
      "id": "Latih Karakter Angka Hangul",
      "vn": "Luyện viết chữ số bằng Hangul"
    },
    "desc": {
      "en": "Write out Il, I, Sam, Sa and Hana, Dul, Set in standard crosshair grids.",
      "jp": "「일, 이, 삼, 사」と「하나, 둘, 셋」をマス目練習帳で丁寧に手書きしてみましょう。",
      "cn": "在标准十字原稿纸字帖中手写韩文基础数字。",
      "es": "Escribe los números en nuestras plantillas en cuadrícula.",
      "id": "Tulis angka dalam kertas berpetak untuk mengasah ketepatan bentuk huruf.",
      "vn": "Luyện viết số đếm trên trang bài tập ô vuông chuẩn."
    },
    "btn": {
      "en": "Go to Alphabet & Numbers",
      "jp": "字母練習帳へ",
      "cn": "前往字母与数字练习",
      "es": "Ir a práctica",
      "id": "Ke Lembar Latihan",
      "vn": "Đi tới bài luyện"
    },
    "href": "/alphabet"
  }
},
{
  "slug": "korean-weather-four-seasons",
  "category": "Nature & Seasonal Culture",
  "readTime": "6 min read",
  "date": "September 2026",
  "icon": "🌸",
  "tags": [
    "Four Seasons",
    "Weather Expressions",
    "Korean Nature",
    "Spring Autumn"
  ],
  "title": {
    "en": "The Poetics of Korean Weather: Four Distinct Seasons & Emotional Vocabulary",
    "ko": "한국의 뚜렷한 사계절과 날씨를 노래하는 서정적 어휘 사전",
    "jp": "韓国の四季と天気を彩る叙情的な言葉たち",
    "cn": "韩国分明的四季之美与天气抒情词汇图鉴",
    "es": "Las cuatro estaciones en Corea y el vocabulario del clima",
    "id": "Keindahan Empat Musim di Korea & Kosakata Cuaca yang Puitis",
    "vn": "Vẻ đẹp bốn mùa rõ rệt của Hàn Quốc và từ vựng thời tiết giàu cảm xúc"
  },
  "subtitle": {
    "en": "How Korea’s dramatic climate shifts from cherry blossoms to snow-capped mountains inspire language.",
    "ko": "봄의 벚꽃부터 겨울의 설경까지, 날씨를 표현하는 아름다운 한국어 단어들.",
    "jp": "春の桜から冬の白雪まで、季節の移ろいを繊細に表現する韓国語の美学。",
    "cn": "从春樱烂漫到冬雪纷飞，用最富意境的韩语词汇描绘大自然的四季交响。",
    "es": "Cómo el clima coreano y sus estaciones inspiran expresiones llenas de poesía.",
    "id": "Bagaimana perubahan iklim Korea yang dinamis menginspirasi bahasa yang kaya.",
    "vn": "Cách khí hậu bốn mùa rõ rệt của Hàn Quốc tạo nên những từ vựng miêu tả thiên nhiên thi vị."
  },
  "summary": {
    "en": "Korea experiences four distinct seasons (Bom, Yeoreum, Gaeul, Gyeoul). The language possesses rich sensory adjectives to capture warm spring breezes (Ttatteut-hada), crisp autumn skies (Cheongmyeong-hada), and freezing winter chills (Ssalssal-hada).",
    "ko": "한국은 봄, 여름, 가을, 겨울의 사계절이 뚜렷하여 계절마다 느끼는 온도를 형용하는 감각어가 매우 풍부하게 발달했습니다. 날씨 어휘를 통해 한국어 특유의 섬세한 표현력을 배워보세요.",
    "jp": "韓国は春（ポム）、夏（ヨルム）、秋（カウル）、冬（キョウル）の四季が非常に際立っており、肌で感じる気温や空気を描写する形容詞が豊かに発達しています。",
    "cn": "韩国拥有极为分明的春夏秋冬。春之明媚、夏之葱郁、秋之高爽、冬之静谧，孕育出丰富细腻的感官形容词。",
    "es": "Corea disfruta de cuatro estaciones marcadas, lo que enriquece su vocabulario sensorial.",
    "id": "Korea memiliki empat musim yang jelas, menghasilkan banyak kata sifat deskriptif.",
    "vn": "Hàn Quốc có bốn mùa Xuân, Hạ, Thu, Đông rõ rệt với kho từ vựng miêu tả cảm giác phong phú."
  },
  "sections": [
    {
      "heading": {
        "en": "1. The Four Seasons in Hangul",
        "ko": "1. 한국의 사계절 명칭과 계절별 대표 풍경",
        "jp": "1. ハングルで書く四季の名称と風物詩",
        "cn": "1. 四季名称与代表性风物景致",
        "es": "1. Las cuatro estaciones en Hangul",
        "id": "1. Nama Empat Musim dalam Bahasa Korea",
        "vn": "1. Tên gọi bốn mùa bằng tiếng Hàn"
      },
      "paragraphs": {
        "en": [
          "• Spring (Bom / 봄): Associated with rebirth, cherry blossoms (Beot-kkot), and pleasant warmth (Ttatteut-hada).",
          "• Summer (Yeoreum / 여름): Lush green mountains, monsoons (Jangma), and beach retreats to Busan or Gangneung.",
          "• Autumn (Gaeul / 가을): Fiery crimson maple leaves (Danpung), crisp blue skies (Cheongmyeong-han haneul), and the Chuseok harvest thanksgiving.",
          "• Winter (Gyeoul / 겨울): Crisp white snow (Noon), hot street food like Bungeoppang, and skiing in Gangwon province."
        ],
        "jp": [
          "• 春（ポム / 봄）：桜の花（ポッコッ）が咲き誇る、暖かく心地よい季節。",
          "• 夏（ヨルム / 여름）：新緑と海、そして恵みの雨をもたらす梅雨（チャンマ）の季節。",
          "• 秋（カウル / 가을）：山々を赤く染める紅葉（タンプン）と、秋夕（チュソク）の収穫の喜び。",
          "• 冬（キョウル / 겨울）：白銀の雪景色と、屋台の温かいタイ焼き（プンオッパン）が恋しくなる季節。"
        ],
        "cn": [
          "• 春（봄 / Bom）：樱花（벚꽃）烂漫，微风和煦，万物复苏；",
          "• 夏（여름 / Yeoreum）：郁郁葱葱，海滨度假与梅雨（장마）的时节；",
          "• 秋（가을 / Gaeul）：红枫（단풍）漫山遍野，秋高气爽，喜迎中秋（추석）丰收；",
          "• 冬（겨울 / Gyeoul）：银装素裹，街头热气腾腾的鲷鱼烧（붕어빵）温暖人心。"
        ],
        "es": [
          "Las cuatro estaciones (Bom, Yeoreum, Gaeul, Gyeoul) representan el ciclo de la naturaleza.",
          "El otoño es famoso por el follaje rojizo (Danpung) y el cielo azul despejado."
        ],
        "id": [
          "Empat musim (Bom, Yeoreum, Gaeul, Gyeoul) memiliki keunikan pemandangan masing-masing.",
          "Musim gugur terkenal dengan daun merah (Danpung) dan langit yang cerah."
        ],
        "vn": [
          "Bốn mùa (Bom, Yeoreum, Gaeul, Gyeoul) mang vẻ đẹp thiên nhiên kỳ ảo.",
          "Mùa thu nổi tiếng với lá phong đỏ (Danpung) và bầu trời trong xanh."
        ]
      },
      "keyTakeaway": {
        "en": "Single-syllable nouns like \"봄\" (Spring) and \"눈\" (Snow) are foundational vocabulary for poetic calligraphy.",
        "jp": "「봄（春）」や「눈（雪）」のような一文字の名詞は、筆文字（カリグラフィー）の練習に最も適しています。",
        "cn": "如“봄（春）”、“눈（雪）”这类单音节纯正韩语词汇，是书法题字与明信片书写的经典选词。",
        "es": "Las palabras cortas como \"봄\" son ideales para iniciarse en la caligrafía artística.",
        "id": "Kata bersuku kata tunggal seperti \"봄\" sangat bagus untuk melatih estetika tulisan tangan.",
        "vn": "Các từ đơn như \"봄\" (Xuân) và \"눈\" (Tuyết) rất thích hợp để luyện viết thư pháp nghệ thuật."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Print Weather Vocabulary Worksheets",
      "jp": "天気と季節の単語練習帳を印刷する",
      "cn": "打印天气与自然词汇练字帖",
      "es": "Hojas de práctica sobre el clima",
      "id": "Lembar Latihan Kosakata Cuaca",
      "vn": "Bài tập luyện viết từ vựng thời tiết"
    },
    "desc": {
      "en": "Practice seasonal characters in calibrated square practice sheets.",
      "jp": "季節を彩る美しい単語を手書きして、ハングルの表現力を磨きましょう。",
      "cn": "在四角方格练习帖中书写描写季节温度的优美词汇。",
      "es": "Practica palabras sobre las estaciones en nuestras hojas de trabajo.",
      "id": "Latih kata-kata musim dalam lembar latihan berpetak.",
      "vn": "Luyện viết các từ vựng bốn mùa trên trang kẻ ô chuẩn."
    },
    "btn": {
      "en": "Explore Vocabulary",
      "jp": "単語一覧へ",
      "cn": "查看全部分类",
      "es": "Ver vocabulario",
      "id": "Lihat Kosakata",
      "vn": "Xem từ vựng"
    },
    "href": "/#category"
  }
},
{
  "slug": "korean-restaurant-ordering-guide",
  "category": "Travel & Culinary Realities",
  "readTime": "6 min read",
  "date": "September 2026",
  "icon": "🍲",
  "tags": [
    "Restaurant Korean",
    "Food Ordering",
    "Travel Tips",
    "Dining Etiquette"
  ],
  "title": {
    "en": "How to Order Food in Korea Like a Local: Survival Phrases for Dining Out",
    "ko": "한국 식당에서 현지인처럼 당당하게 주문하는 실전 회화 가이드",
    "jp": "韓国の食堂でローカルのように注文する実践サバイバル会話",
    "cn": "在韩国餐厅像本地人一样地道点餐的实用指南",
    "es": "Cómo pedir comida en Corea como un local: frases útiles para restaurantes",
    "id": "Cara Memesan Makanan di Restoran Korea Seperti Penduduk Lokal",
    "vn": "Cách gọi món tại nhà hàng Hàn Quốc như người bản xứ: Cẩm nang thực tế"
  },
  "subtitle": {
    "en": "From pressing table call buttons to requesting extra side dishes without embarrassment.",
    "ko": "테이블 호출 벨부터 \"이모님 여기 반찬 더 주세요!\"까지 막힘없는 식당 회화.",
    "jp": "呼び出しベルの使い方から「おかずのお代わり」まで、迷わず使える食堂の韓国語。",
    "cn": "从按桌角呼叫铃到爽朗呼唤“阿姨，请再加点小菜”，餐厅实操全流程解析。",
    "es": "Domina las frases esenciales para ordenar y disfrutar de la comida en Corea.",
    "id": "Kuasai percakapan penting saat makan di luar di restoran Korea.",
    "vn": "Nắm vững các câu nói thông dụng khi đi ăn tại các quán ăn Hàn Quốc."
  },
  "summary": {
    "en": "Dining in Korea is interactive and lively. Learning essential phrases like \"Jeogiyo\" (Excuse me), \"~Inbun juseyo\" (Please give me X servings), and \"Gyesan-hae juseyo\" (The bill, please) guarantees smooth, delicious meals.",
    "ko": "한국의 식당은 정겹고 역동적입니다. 점원을 부르는 “저기요!”, 인분 수량을 말하는 “~인분 주세요”, 계산할 때 쓰는 “계산해 주세요” 세 가지만 알면 전국 어디서나 당당하게 맛집을 탐방할 수 있습니다.",
    "jp": "店員さんを呼ぶ「チョギヨ！（あの〜）」、人数分を注文する「〜インブン・ジュセヨ」、お会計の「ケサネ・ジュセヨ」。この3つを覚えれば韓国旅行の食事は完璧です。",
    "cn": "韩国餐饮氛围热烈亲切。牢记呼叫店员的“저기요!（打扰一下）”、份量单位“~인분 주세요（请给来X人份）”以及结账表达“계산해 주세요（请买单）”，走遍全韩美食店无阻。",
    "es": "Aprende cómo llamar a los camareros y pedir raciones con naturalidad en cualquier restaurante coreano.",
    "id": "Ketahui cara memanggil pelayan dan memesan porsi makanan dengan percaya diri.",
    "vn": "Học cách gọi phục vụ và gọi suất ăn một cách tự nhiên tại bất kỳ nhà hàng nào ở Hàn Quốc."
  },
  "sections": [
    {
      "heading": {
        "en": "1. The 3 Essential Magic Phrases",
        "ko": "1. 식당에서 통하는 3대 마법의 표현",
        "jp": "1. 食堂で絶対に役立つ3大マジックフレーズ",
        "cn": "1. 餐厅畅行无阻的三大魔法句型",
        "es": "1. Las 3 frases mágicas en el restaurante",
        "id": "1. Tiga Kalimat Ajaib di Restoran",
        "vn": "1. Ba câu thần chú trong quán ăn"
      },
      "paragraphs": {
        "en": [
          "1. \"Jeo-gi-yo!\" (저기요!): Meaning \"Over here!\" or \"Excuse me!\". Never be shy; in Korea, raising your hand and calling out politely is standard etiquette if there is no call button.",
          "2. \"~In-bun ju-se-yo\" (~인분 주세요): Specifying portions. In barbecue spots, meat is ordered by portions: \"Samgyeopsal i-inbun juseyo\" (2 servings of pork belly, please).",
          "3. \"Mul jom ju-se-yo\" (물 좀 주세요): \"Water, please!\". In most Korean casual spots, cold water and cups are self-service (Self / 셀프)."
        ],
        "jp": [
          "1. 「チョギヨ！（저기요!）」：呼び出しボタンがない店では、手を挙げて明るく「チョギヨ〜」と声をかけるのがマナーです。",
          "2. 「〜インブン・ジュセヨ（~인분 주세요）」：焼肉店などでは人数分（人前）で注文します。「サムギョプサル 2人前ください（이인분 주세요）」のように使います。",
          "3. 「ムル チョム ジュセヨ（물 좀 주세요）」：お水を頼む言葉ですが、韓国の食堂ではお水はセルフサービス（셀프）の店も多いので確認しましょう。"
        ],
        "cn": [
          "1. “저기요!（打扰一下/服务员！）”：若桌上无电子呼叫铃，微笑着轻举手并清晰呼唤是标准的就餐礼仪。",
          "2. “~인분 주세요（请给X人份）”：在烤肉店必须按人份点单，例如“삼겹살 2인분 주세요（请来两份五花肉）”。",
          "3. “물 좀 주세요（请给点水）”：许多亲民小馆提供凉水自取（셀프 / Self），可根据店内标牌自行取用。"
        ],
        "es": [
          "\"Jeogiyo\" es la forma educada de llamar la atención del personal.",
          "Las porciones de carne en barbacoa se piden con la palabra \"inbun\" (raciones)."
        ],
        "id": [
          "\"Jeogiyo\" adalah cara sopan memanggil pelayan.",
          "Porsi daging biasanya dipesan dengan satuan \"inbun\"."
        ],
        "vn": [
          "\"Jeogiyo\" là cách lịch sự để gọi nhân viên.",
          "Các món thịt nướng thường được gọi theo đơn vị suất \"inbun\"."
        ]
      },
      "keyTakeaway": {
        "en": "Side dishes (Banchan) are almost always free and refillable. Simply say \"Banchan deo juseyo!\" (More side dishes, please!).",
        "jp": "韓国の食堂ではおかず（パンチャン）のお代わりは無料です。「パンチャン ト ジュセヨ（반찬 더 주세요）」と笑顔で伝えましょう。",
        "cn": "绝大多数传统餐馆的小菜（Banchan）均可免费无限续添，只需礼貌地说一声“반찬 더 주세요!”即可。",
        "es": "Las guarniciones (Banchan) suelen ser gratuitas y recargables.",
        "id": "Lauk pauk pendamping (Banchan) hampir selalu gratis dan boleh nambah.",
        "vn": "Các món ăn kèm (Banchan) hầu hết đều miễn phí và có thể xin thêm thoải mái."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Print Korean Food Handwriting Sheets",
      "jp": "韓国料理の単語練習帳を印刷する",
      "cn": "打印韩国美食单字与菜单练字帖",
      "es": "Hojas de práctica sobre comida coreana",
      "id": "Lembar Latihan Menu Makanan Korea",
      "vn": "Bài tập luyện viết từ vựng món ăn Hàn"
    },
    "desc": {
      "en": "Practice writing dishes like Bibimbap, Kimchi, and Tteokbokki before your next culinary trip.",
      "jp": "ビビンバ、キムチ、トッポッキなどの料理名を手書きして、メニューをスラスラ読めるようにしましょう。",
      "cn": "亲手书写石锅拌饭、泡菜、辣炒年糕等招牌料理的韩文写法。",
      "es": "Practica la caligrafía de platos populares coreanos.",
      "id": "Latih tulisan nama-nama hidangan terkenal seperti Bibimbap dan Kimchi.",
      "vn": "Luyện viết tên các món ăn nổi tiếng như Bibimbap và Tteokbokki."
    },
    "btn": {
      "en": "Go to Food Category",
      "jp": "料理カテゴリーへ",
      "cn": "前往美食字帖",
      "es": "Ver comida",
      "id": "Ke Kategori Makanan",
      "vn": "Xem mục ẩm thực"
    },
    "href": "/category/food"
  }
},
{
  "slug": "topik-writing-high-score-tips",
  "category": "Exam Preparation & Academics",
  "readTime": "7 min read",
  "date": "September 2026",
  "icon": "📝",
  "tags": [
    "TOPIK",
    "Korean Test",
    "Writing Section",
    "Exam Tips"
  ],
  "title": {
    "en": "How to Score High on the TOPIK Writing Section: Manuscript Rules & Essay Strategy",
    "ko": "TOPIK(한국어능력시험) 쓰기 영역 고득점 전략과 원고지 작성법 완벽 가이드",
    "jp": "TOPIK（韓国語能力試験）作文・筆記セクションで高得点を取る原稿用紙テクニック",
    "cn": "TOPIK（韩国语能力考试）写作部分高分全攻略与方格原稿纸书写规范",
    "es": "Cómo obtener una alta puntuación en la sección de escritura del TOPIK",
    "id": "Cara Meraih Skor Tinggi pada Bagian Menulis Ujian TOPIK",
    "vn": "Bí quyết đạt điểm cao phần thi Viết TOPIK và quy tắc dùng giấy kẻ ô Wongoji"
  },
  "subtitle": {
    "en": "Master the strict spacing, punctuation, and structural rules of the official Wongoji exam sheets.",
    "ko": "띄어쓰기, 문장 부호, 문단 첫 칸 띄우기 등 감점을 피하는 원고지 작성의 모든 것.",
    "jp": "分かち書き、句読点、段落の字下げなど、減点を防ぐ原稿用紙ルールの要点。",
    "cn": "掌握空格分写、标点符号规范及段首缩进准则，彻底告别原稿纸失分盲区。",
    "es": "Domina las estrictas reglas de puntuación y espaciado en las hojas oficiales de examen.",
    "id": "Kuasai aturan spasi dan tanda baca dalam lembar ujian resmi agar tidak kehilangan nilai.",
    "vn": "Nắm vững các quy tắc ngắt từ và dấu câu trên giấy thi kẻ ô chính thức để tránh bị trừ điểm."
  },
  "summary": {
    "en": "The Test of Proficiency in Korean (TOPIK II) writing test requires candidates to write directly on squared Wongoji paper. Candidates frequently lose valuable points not from poor vocabulary, but from violating basic manuscript formatting rules.",
    "ko": "TOPIK II 쓰기 영역은 실제 십자 사각 원고지에 직접 손으로 답안을 작성해야 합니다. 많은 수험생들이 어휘력이 부족해서가 아니라, 원고지 띄어쓰기와 문장 부호 사용 규칙을 몰라 억울하게 감점을 당합니다.",
    "jp": "TOPIK IIの作文試験は、指定の原稿用紙に直接手書きで記述します。文法や語彙だけでなく、原稿用紙の書き方ルール（マス目の使い方）を熟知しているかが合否を大きく左右します。",
    "cn": "TOPIK II写作科目要求考生直接在方格原稿纸上亲手书写作答。许多考生并非因语法词汇不足，而是因忽视了分段缩进与标点规则而造成惨重失分。",
    "es": "En el examen TOPIK II, saber utilizar correctamente el papel cuadriculado Wongoji es tan importante como la gramática.",
    "id": "Dalam ujian TOPIK II, pemahaman tentang tata cara penulisan di kertas Wongoji sangat krusial.",
    "vn": "Trong kỳ thi TOPIK II, việc nắm rõ quy cách viết trên giấy ô vuông Wongoji quan trọng không kém gì ngữ pháp."
  },
  "sections": [
    {
      "heading": {
        "en": "1. Golden Manuscript Rules for TOPIK",
        "ko": "1. TOPIK 수험생이 반드시 지켜야 할 원고지 3대 규칙",
        "jp": "1. TOPIK受験者が厳守すべき原稿用紙の3大原則",
        "cn": "1. TOPIK考生必须恪守的原稿纸三大黄金法则",
        "es": "1. Reglas fundamentales de la hoja de examen",
        "id": "1. Tiga Aturan Penting Kertas Ujian Wongoji",
        "vn": "1. Ba quy tắc cốt lõi trên giấy thi Wongoji"
      },
      "paragraphs": {
        "en": [
          "1. Paragraph Indentation: Always leave the very first square of a new paragraph empty. Never indent intermediate lines within the same paragraph.",
          "2. One Punctuation per Box: Periods (.) and commas (,) take their own individual square, placed in the bottom-left corner of the box.",
          "3. Two Numbers per Box: In Arabic numbers (like 2026), place two digits into a single square (20 in one box, 26 in the next)."
        ],
        "jp": [
          "1. 段落の字下げ：新しい段落の最初のマスは必ず1マス空けます。同一段落の途中の行頭は空けてはいけません。",
          "2. 句読点の配置：句点（.）や読点（,）はマス目の左下に打ちます。ただし、行の最初のマスに句読点が来てはいけません。",
          "3. 数字の記入：アラビア数字は1マスに2桁ずつ（例：「20」「26」）記入するのがルールです。"
        ],
        "cn": [
          "1. 段首空格：每个新自然段的第一格必须严格空出。段落内部换行时顶格书写，切勿多余缩进。",
          "2. 标点位置：句号（.）和逗号（,）独占一格并居于左下角。行首第一格绝对不能出现句逗标点。",
          "3. 阿拉伯数字：凡遇到年份或多位数字，按“一格两字”原则填写（如“20”占一格，“26”占下一格）。"
        ],
        "es": [
          "Deja siempre la primera casilla del párrafo vacía.",
          "Los números arábigos se escriben de a dos por cada casilla."
        ],
        "id": [
          "Kosongkan selalu kotak pertama pada awal paragraf baru.",
          "Tulis dua digit angka Arab dalam satu kotak berpetak."
        ],
        "vn": [
          "Luôn để trống ô đầu tiên khi bắt đầu một đoạn văn mới.",
          "Các chữ số Ả Rập được viết hai chữ số trong cùng một ô vuông."
        ]
      },
      "keyTakeaway": {
        "en": "Practicing on authentic Wongoji sheets prior to exam day is the best insurance against format deductions.",
        "jp": "試験本番前に本物の原稿用紙で何度も練習しておくことが、減点を防ぐ最大の秘訣です。",
        "cn": "考前在经过科学校准的方格原稿纸上进行全真模拟手写，是确保写作高分的最坚实保障。",
        "es": "Practicar en hojas oficiales antes del examen evita deducciones innecesarias.",
        "id": "Berlatih di kertas naskah sebelum hari ujian adalah cara terbaik mengamankan skor.",
        "vn": "Luyện tập trên giấy ô vuông thực tế trước ngày thi là cách tốt nhất để không bị trừ điểm oan."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Download Free Official Wongoji Templates",
      "jp": "公式仕様の原稿用紙PDFを無料でダウンロード",
      "cn": "免费下载考级标准方格原稿纸PDF",
      "es": "Descarga plantillas de papel cuadriculado Wongoji",
      "id": "Unduh Lembar Latihan Kotak Wongoji Resmi",
      "vn": "Tải miễn phí mẫu giấy thi ô vuông Wongoji chuẩn"
    },
    "desc": {
      "en": "Write Hangul generates calibrated 200-character and 400-character squared sheets ready for printing.",
      "jp": "Write Hangulでは、TOPIK本番と同一のマス目比率を持つ高解像度練習用紙をワンクリックで印刷できます。",
      "cn": "本站自动生成与TOPIK真实考场纸张规格完全一致的高清格线练习帖，即开即打。",
      "es": "Genera hojas cuadriculadas con proporciones idénticas a las del examen real.",
      "id": "Buat lembar berpetak yang proporsinya sama persis dengan lembar ujian.",
      "vn": "Tạo các trang bài tập có tỷ lệ ô kẻ tương đương bài thi thật chỉ với một cú nhấp chuột."
    },
    "btn": {
      "en": "Open Sheet Generator",
      "jp": "練習用紙を作成する",
      "cn": "即刻生成练字帖",
      "es": "Crear plantilla",
      "id": "Buat Lembar Kerja",
      "vn": "Tạo trang bài tập"
    },
    "href": "/#category"
  }
},
{
  "slug": "korean-titles-oppa-unnie-hyung",
  "category": "Kinship & Social Dynamics",
  "readTime": "6 min read",
  "date": "September 2026",
  "icon": "👥",
  "tags": [
    "Korean Titles",
    "Oppa",
    "Unnie",
    "Hyung",
    "Noona"
  ],
  "title": {
    "en": "The Culture of Korean Kinship Titles: How to Use Oppa, Unnie, Hyung, and Noona",
    "ko": "한국의 호칭 문화 완벽 정리: 오빠, 언니, 형, 누나의 올바른 사용법과 에티켓",
    "jp": "韓国の呼び方文化：オッパ、オンニ、ヒョン、ヌナの正しい使い方とマナー",
    "cn": "韩国称谓文化大揭秘：欧巴、欧尼、兄、努那的正确用法与社交界限",
    "es": "Cultura de títulos en Corea: cómo usar Oppa, Unnie, Hyung y Noona",
    "id": "Budaya Panggilan Akrab di Korea: Cara Menggunakan Oppa, Unnie, Hyung, dan Noona",
    "vn": "Văn hóa xưng hô trong tiếng Hàn: Cách dùng Oppa, Unnie, Hyung và Noona chuẩn xác"
  },
  "subtitle": {
    "en": "Understand how age, gender, and social distance dictate how Koreans address friends and elders.",
    "ko": "나이와 성별에 따라 결정되는 호칭의 미묘한 뉘앙스와 외국인이 흔히 하는 실수.",
    "jp": "年齢や性別によって決まる韓国独特の呼称ルールと、知っておくべき境界線。",
    "cn": "由年龄与性别严密界定的称谓规则：避免初学者常见尴尬误区的社交宝典。",
    "es": "Aprende las reglas de parentesco social que determinan cómo dirigirte a tus amigos en Corea.",
    "id": "Pahami bagaimana usia dan jenis kelamin menentukan panggilan yang tepat untuk teman.",
    "vn": "Hiểu rõ các quy tắc xưng hô dựa trên tuổi tác và giới tính để giao tiếp tinh tế hơn."
  },
  "summary": {
    "en": "Unlike English where anyone can be called by their first name, Korean culture uses relational kinship titles even among friends: a female calls an older male \"Oppa\" and an older female \"Unnie\", while a male calls an older male \"Hyung\" and an older female \"Noona\".",
    "ko": "한국에서는 동갑이 아닌 이상 친구 사이라도 나이에 따라 호칭이 달라집니다. 여성이 연상의 남성을 부르는 ‘오빠’, 여성을 부르는 ‘언니’, 남성이 연상의 남성을 부르는 ‘형’, 여성을 부르는 ‘누나’의 체계는 한국 사회의 유대감을 나타내는 핵심입니다.",
    "jp": "韓国では同い年でない限り、親しい間柄でも年齢差に応じて呼び名が変わります。女性から年上男性への「オッパ」、年上女性への「オンニ」、男性から年上男性への「ヒョン」、年上女性への「ヌナ」の使い分けを学びましょう。",
    "cn": "在韩国人际交往中，除同龄朋友外，长幼秩序决定了亲密称呼：女性称年长男性为“오빠（欧巴）”，称年长女性为“언니（欧尼）”；男性称年长男性为“형（兄）”，称年长女性为“누나（努那）”。",
    "es": "En Corea, la edad y el género determinan el título que usas para dirigirte a alguien mayor que tú.",
    "id": "Di Korea, usia dan jenis kelamin menentukan sebutan untuk teman yang lebih tua.",
    "vn": "Ở Hàn Quốc, việc gọi tên phụ thuộc vào tuổi tác và giới tính của cả người nói lẫn người nghe."
  },
  "sections": [
    {
      "heading": {
        "en": "1. The 2x2 Matrix of Kinship Titles",
        "ko": "1. 성별과 나이로 정리하는 2x2 호칭 매트릭스",
        "jp": "1. 性別と年齢で分かる呼称の基本マトリックス",
        "cn": "1. 基于性别与长幼的2x2称谓速查矩阵",
        "es": "1. La matriz 2x2 de títulos de cortesía",
        "id": "1. Matriks 2x2 Sebutan Berdasarkan Usia & Gender",
        "vn": "1. Bảng phân loại xưng hô 2x2 chuẩn xác"
      },
      "paragraphs": {
        "en": [
          "• If YOU are FEMALE: An older male friend is \"Oppa\" (오빠); an older female friend is \"Unnie\" (언니).",
          "• If YOU are MALE: An older male friend is \"Hyung\" (형); an older female friend is \"Noona\" (누나).",
          "• Crucial Etiquette Tip: Never use these titles with strangers or in formal business settings. In business, always use full names followed by \"-ssi\" (씨) or professional job titles like \"Daeri-nim\" or \"Gwajang-nim\"."
        ],
        "jp": [
          "• あなたが「女性」の場合：年上の親しい男性は「オッパ（오빠）」、年上の親しい女性は「オンニ（언니）」。",
          "• あなたが「男性」の場合：年上の親しい男性は「ヒョン（형）」、年上の親しい女性は「ヌナ（누나）」。",
          "• マナーの注意点：初対面の人やビジネスの場では絶対に使ってはいけません。職場では「名前＋シ（〜씨）」や「役職名＋ニム（〜님）」を使います。"
        ],
        "cn": [
          "• 若“发言者为女性”：年长男性朋友称“오빠（Oppa）”；年长女性朋友称“언니（Unnie）”；",
          "• 若“发言者为男性”：年长男性朋友称“형（Hyung）”；年长女性朋友称“누나（Noona）”；",
          "• 社交界限警示：切勿对陌生人或在严肃职场中使用这些称呼。职场沟通中一律使用“姓名+씨（某某氏）”或“职务头衔+님（某某长님）”。"
        ],
        "es": [
          "Las mujeres llaman Oppa a hombres mayores y Unnie a mujeres mayores.",
          "Los hombres llaman Hyung a hombres mayores y Noona a mujeres mayores. Nunca los uses en el trabajo."
        ],
        "id": [
          "Perempuan memanggil pria yang lebih tua Oppa dan wanita yang lebih tua Unnie.",
          "Pria memanggil pria yang lebih tua Hyung dan wanita yang lebih tua Noona. Hindari penggunaan di lingkungan kerja."
        ],
        "vn": [
          "Nữ giới gọi anh là Oppa, gọi chị là Unnie.",
          "Nam giới gọi anh là Hyung, gọi chị là Noona. Tránh dùng trong môi trường công sở trang trọng."
        ]
      },
      "keyTakeaway": {
        "en": "These kinship titles denote emotional closeness. Allow the older person to suggest using them first.",
        "jp": "これらの呼び方は親密さの証です。通常は年上の相手から「これからはオッパ／オンニと呼んでね」と提案されてから使うのがスマートです。",
        "cn": "亲昵称谓意味着彼此关系达到极高亲密度。通常应由年长一方主动提议“以后可以叫我欧巴/姐姐”后再行使用。",
        "es": "Estos títulos denotan cercanía. Es mejor esperar a que la persona mayor sugiera utilizarlos.",
        "id": "Panggilan ini menunjukkan keakraban. Tunggu hingga orang yang lebih tua mengizinkannya.",
        "vn": "Các danh xưng này thể hiện sự thân thiết. Hãy để người lớn tuổi hơn gợi ý trước khi xưng hô."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Write Korean Social Vocabulary",
      "jp": "韓国の呼称単語を手書き練習する",
      "cn": "手写练习社交称谓字帖",
      "es": "Practica caligrafía de títulos sociales",
      "id": "Latih Menulis Panggilan Akrab Korea",
      "vn": "Luyện viết các danh xưng tiếng Hàn"
    },
    "desc": {
      "en": "Practice writing Oppa, Unnie, Hyung, and Noona with proper stroke balance.",
      "jp": "オッパ、オンニ、ヒョン、ヌナの文字を正しい筆順で美しく書いてみましょう。",
      "cn": "在方格字帖中规范书写这几组最具代表性的韩式社交称谓。",
      "es": "Escribe estos títulos con el equilibrio de trazo adecuado.",
      "id": "Tulis sebutan-sebutan ini dengan proporsi huruf yang rapi.",
      "vn": "Luyện viết các từ xưng hô với thứ tự nét chuẩn xác."
    },
    "btn": {
      "en": "Open Practice Tool",
      "jp": "練習ツールを開く",
      "cn": "前往练习工具",
      "es": "Abrir herramienta",
      "id": "Buka Alat Latihan",
      "vn": "Mở công cụ luyện viết"
    },
    "href": "/#category"
  }
},
{
  "slug": "hangul-calligraphy-brush-pen-art",
  "category": "Art & Aesthetics",
  "readTime": "6 min read",
  "date": "September 2026",
  "icon": "🖌️",
  "tags": [
    "Calligraphy",
    "Seoye",
    "Brush Pen",
    "Korean Art"
  ],
  "title": {
    "en": "The Art of Hangul Calligraphy: Mastering Brush Pens and Ink Aesthetics",
    "ko": "한글 캘리그래피 입문: 붓펜과 만년필로 완성하는 손글씨 예술의 세계",
    "jp": "ハングルカリグラフィー入門：筆ペンと万年筆で楽しむ文字アートの美学",
    "cn": "韩文书法与艺术字入门：毛笔与软头笔下的线条美学指南",
    "es": "El arte de la caligrafía Hangul: pincel, tinta y estética moderna",
    "id": "Seni Kaligrafi Hangul: Menguasai Kuas Pena & Keindahan Tinta",
    "vn": "Nghệ thuật thư pháp Hangul: Làm chủ bút lông và vẻ đẹp nét mực"
  },
  "subtitle": {
    "en": "How to introduce pressure variations, rhythmic tempo, and creative flourishes to your Korean lettering.",
    "ko": "필압의 강약, 운필의 리듬, 여백의 미를 살려 나만의 감성 손글씨를 완성하는 팁.",
    "jp": "筆圧の強弱、運筆のリズム、余白の美しさを活かして心に響くアート文字を書くコツ。",
    "cn": "如何运用轻重提按、运笔律动与留白韵味，创作独具匠心的韩文手写艺术作品。",
    "es": "Aprende a controlar la presión y el ritmo para transformar tu escritura en arte visual.",
    "id": "Cara mengontrol tekanan kuas dan irama untuk menciptakan tulisan tangan yang artistik.",
    "vn": "Cách điều khiển lực bút và nhịp điệu để biến chữ viết tay thành một tác phẩm nghệ thuật."
  },
  "summary": {
    "en": "Traditional Korean calligraphy (Seoye) harmonizes ink flow, breath control, and structural geometry. Modern brush pen calligraphy adapts these ancient tenets to contemporary stationery, allowing anyone to turn Korean phrases into works of art.",
    "ko": "한국의 전통 서예는 먹의 농담, 호흡의 조절, 기하학적 균형미를 추구합니다. 현대의 붓펜 캘리그래피는 이러한 서예의 정신을 일상 필기구로 계승하여 누구나 아름다운 감성 손글씨를 창작할 수 있게 돕습니다.",
    "jp": "韓国の伝統書道（ソイェ）は墨の濃淡、呼吸のコントロール、幾何学的調和を重んじます。現代の筆ペンカリグラフィーはその美学を受け継ぎ、手軽に芸術的な手書き表現を楽しむことができます。",
    "cn": "韩国传统书法（书艺 / 서예）讲求墨色浓淡、呼吸吐纳与结字几何的深度和谐。现代软笔书法继承了这一经典文脉，让普通书写者也能用日常笔具挥洒诗意。",
    "es": "La caligrafía coreana combina la fluidez de la tinta con la geometría del Hangul para crear obras expresivas.",
    "id": "Kaligrafi Korea memadukan aliran tinta dan geometri Hangul untuk menciptakan karya seni bermakna.",
    "vn": "Thư pháp Hàn Quốc kết hợp giữa nét mực mềm mại và cấu trúc hình học của chữ Hangul để tạo nên vẻ đẹp trang nhã."
  },
  "sections": [
    {
      "heading": {
        "en": "1. Mastering Line Contrast (Thick vs Thin)",
        "ko": "1. 굵기의 대비: 누름(필압)과 올림(발묵)의 조화",
        "jp": "1. 線の抑揚：筆圧のコントロールによる太さと細さの表現",
        "cn": "1. 线条张力：提按轻重打造的粗细对比",
        "es": "1. Control del contraste de líneas (gruesas y finas)",
        "id": "1. Menguasai Kontras Garis (Tebal vs Tipis)",
        "vn": "1. Làm chủ độ tương phản của nét bút (Dày và Mảnh)"
      },
      "paragraphs": {
        "en": [
          "The secret to expressive calligraphy lies in contrast. When pulling vertical stems (like the pillar in \"ㅏ\" or \"ㅣ\"), apply firm downward pressure for a bold, confident spine.",
          "When lifting horizontally or tapering off tails, release hand pressure gently so the stroke resolves into a whisper-thin finish. This dynamic push-and-pull gives the character visual melody."
        ],
        "jp": [
          "文字に生命を吹き込む秘訣は「線の太さのコントラスト」にあります。「ㅏ」や「ㅣ」などの縦の柱を引くときはしっかり筆圧をかけて力強く書き下ろします。",
          "横線や払いへ移行するときはふっと力を抜いて繊細な細い線へと流します。この押し引きのリズムが、文字に心地よい音楽のような抑揚を与えます。"
        ],
        "cn": [
          "赋予书法艺术生命的秘诀在于极具张力的“粗细对比”。在书写“ㅏ”或“ㅣ”的主干立柱时，沉腕加力，下压出浑厚沉稳的脊梁。",
          "而在横向出锋或收笔撇捺时，指尖缓缓提笔，化作细腻轻盈的纤毫游丝。这种提按起伏赋予方块字块如音乐般的动人韵律。"
        ],
        "es": [
          "El secreto de la caligrafía radica en el contraste entre trazos gruesos y finos.",
          "Aplica presión firme en los trazos verticales y suelta suavemente en los horizontales."
        ],
        "id": [
          "Kunci dari kaligrafi yang indah adalah kontras antara garis tebal dan tipis.",
          "Tekan kuas pada garis vertikal dan kurangi tekanan saat membuat garis halus."
        ],
        "vn": [
          "Bí quyết của thư pháp nằm ở độ tương phản giữa các nét đậm và nét thanh.",
          "Nhấn mạnh tay vào các nét dọc và thả lỏng nhẹ nhàng ở các nét ngang để tạo nhịp điệu."
        ]
      },
      "keyTakeaway": {
        "en": "Good posture and steady breathing are just as crucial as the pen in your hand.",
        "jp": "正しい姿勢と穏やかな呼吸が、ブレのない美しい筆運びを生み出します。",
        "cn": "端正平稳的坐姿与从容匀称的呼吸，是运笔沉着有力、结构舒展大气的根本所在。",
        "es": "Una buena postura y respiración constante son tan importantes como el lápiz.",
        "id": "Postur tubuh yang baik dan napas yang teratur sangat membantu menjaga kestabilan goresan kuas.",
        "vn": "Tư thế ngồi chuẩn và nhịp thở đều đặn sẽ giúp nét bút đi thẳng và uyển chuyển hơn."
      }
    }
  ],
  "relatedTool": {
    "title": {
      "en": "Print Calligraphy Manuscript Grid Paper",
      "jp": "カリグラフィー専用マス目練習帳を印刷する",
      "cn": "打印高精度书法练字帖原稿纸",
      "es": "Plantillas de caligrafía en papel cuadriculado",
      "id": "Cetak Lembar Latihan Kaligrafi Berpetak",
      "vn": "In trang bài tập luyện viết thư pháp chữ Hàn"
    },
    "desc": {
      "en": "Use our calibrated guidelines to perfect your stroke weight, letter balance, and negative space.",
      "jp": "十字線のガイドが付いた高精細練習用紙で、文字の重心と余白の美しさを極めましょう。",
      "cn": "借助科学十字线基准，精准训练笔画粗细分配、重心平稳度与留白美学。",
      "es": "Utiliza nuestras guías para perfeccionar el grosor del trazo y el equilibrio.",
      "id": "Gunakan panduan kisi kami untuk melatih keseimbangan dan ketebalan huruf.",
      "vn": "Sử dụng các đường căn chuẩn để hoàn thiện độ đậm nhạt và sự cân đối của chữ viết."
    },
    "btn": {
      "en": "Generate Practice PDF",
      "jp": "練習PDFを生成する",
      "cn": "生成书法字帖PDF",
      "es": "Generar PDF",
      "id": "Buat PDF Latihan",
      "vn": "Tạo PDF bài tập"
    },
    "href": "/#category"
  }
}
];
