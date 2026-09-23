export interface CategoryGuide {
  id: string;
  badge: Record<string, string>;
  title: Record<string, string>;
  intro: Record<string, string>;
  culturalContext: Record<string, string>;
  tips: Array<Record<string, string>>;
  funFact: Record<string, string>;
}

export const categoryGuides: Record<string, CategoryGuide> = {
  alphabet: {
    id: 'alphabet',
    badge: {
      en: 'Phonetic Foundation',
      jp: 'ハングルの文字体系',
      cn: '韩文字母系统基石',
      es: 'Base Fonética',
      id: 'Fondasi Fonetik',
      vn: 'Nền tảng ngữ âm',
    },
    title: {
      en: 'Mastering the Complete Korean Alphabet System',
      jp: 'ハングル字母体系の完全マスターガイド',
      cn: '韩文字母系统完全掌握指南',
      es: 'Dominando el sistema completo del alfabeto coreano',
      id: 'Menguasai Sistem Alfabet Korea Lengkap',
      vn: 'Làm chủ toàn bộ hệ thống bảng chữ cái tiếng Hàn',
    },
    intro: {
      en: 'Hangul is composed of 14 basic consonants and 10 basic vowels, combining into modular syllable blocks. Practicing them individually builds the muscle memory necessary for fluid handwriting.',
      jp: 'ハングルは14文字の基本子音と10文字の基本母音から成り立ち、それらが四角いマスの中で美しく組み合わさります。一文字ずつ丁寧に手書きすることで、正しい重心とバランス感覚が身につきます。',
      cn: '韩文由14个基础辅音和10个基础元音组成，它们在正方形字格中紧凑拼合。逐个亲笔练习不仅能掌握规范发音，更能深刻建立优美字形的肌肉记忆。',
      es: 'El Hangul se compone de 14 consonantes básicas y 10 vocales básicas que se combinan en bloques silábicos modulares.',
      id: 'Hangul terdiri dari 14 konsonan dasar dan 10 vokal dasar yang bergabung menjadi blok suku kata.',
      vn: 'Hangul bao gồm 14 phụ âm cơ bản và 10 nguyên âm cơ bản, kết hợp thành các khối âm tiết hài hòa.',
    },
    culturalContext: {
      en: 'Promulgated in 1446 by King Sejong the Great, Hangul is recognized by UNESCO as one of the world’s most scientific scripts because its characters visually depict the physical shape of human speech organs.',
      jp: '1446年に世宗大王によって公布されたハングルは、人体の発音器官を模して創られた世界で唯一の科学的文字としてユネスコにも高く評価されています。',
      cn: '由世宗大王于1446年颁布的《训民正音》被联合国教科文组织誉为世界级文化遗产，其字形直接反映发音器官形态，科学性无与伦比。',
      es: 'Promulgado en 1446 por el rey Sejong, el Hangul es reconocido por la UNESCO como uno de los alfabetos más científicos del mundo.',
      id: 'Diumumkan pada tahun 1446 oleh Raja Sejong, Hangul diakui UNESCO sebagai salah satu aksara paling ilmiah di dunia.',
      vn: 'Được Vua Sejong ban hành vào năm 1446, Hangul được UNESCO công nhận là một trong những hệ thống chữ viết khoa học nhất thế giới.',
    },
    tips: [
      {
        en: 'Maintain equal spacing within the 4-quadrant guideline boxes.',
        jp: 'マス目の中央にある十字線のガイドを意識し、四方の余白を均等に保ちましょう。',
        cn: '书写时紧扣方格内的十字参考线，保持上下左右留白均匀对称。',
        es: 'Mantén un espaciado uniforme dentro de las cuadrículas de cuatro cuadrantes.',
        id: 'Pertahankan jarak yang seimbang di dalam kisi panduan 4 kuadran.',
        vn: 'Duy trì khoảng cách đồng đều trong các ô lưới căn chỉnh 4 phần.',
      },
      {
        en: 'Follow the top-to-bottom and left-to-right stroke flow strictly.',
        jp: '「上から下へ」「左から右へ」の筆順を厳格に守ることで、手の疲れを半減できます。',
        cn: '严格恪守“自上而下、从左至右”的运笔法则，极大减少手部书写疲劳。',
        es: 'Sigue estrictamente el flujo de trazo de arriba a abajo y de izquierda a derecha.',
        id: 'Ikuti alur guratan dari atas ke bawah dan kiri ke kanan dengan disiplin.',
        vn: 'Tuân thủ nghiêm ngặt quy tắc viết từ trên xuống dưới và từ trái sang phải.',
      }
    ],
    funFact: {
      en: 'Korean is one of the only languages on Earth where we know precisely who created it, in what year, and with what exact scientific rationale.',
      jp: 'ハングルは、誰が、何年に、どのような哲学的・科学的根拠に基づいて創ったのかが記録として完全に残っている世界で唯一の文字です。',
      cn: '韩文是地球上极少数能明确确知创制人、颁布年份以及详尽创制哲学与科学原理的文字。',
      es: 'El Hangul es uno de los pocos alfabetos de la humanidad cuya fecha exacta de creación, autor y fundamentos científicos están documentados históricamente.',
      id: 'Hangul adalah salah satu dari sedikit aksara di dunia yang pencipta, tahun pembuatan, dan dasar ilmiahnya tercatat lengkap dalam sejarah.',
      vn: 'Hangul là một trong số ít chữ viết trên thế giới mà chúng ta biết chính xác người sáng tạo, năm ra đời và cơ sở khoa học rõ ràng.',
    }
  },
  greetings: {
    id: 'greetings',
    badge: {
      en: 'Daily Communication',
      jp: '日常の基本挨拶',
      cn: '日常核心礼貌用语',
      es: 'Saludos Diarios',
      id: 'Komunikasi Sehari-hari',
      vn: 'Giao tiếp hàng ngày',
    },
    title: {
      en: 'Essential Korean Greetings & Politeness Hierarchy',
      jp: '韓国語の基本挨拶と敬語表現のマスターガイド',
      cn: '韩语核心问候语与礼貌语境完全解析',
      es: 'Saludos esenciales en coreano y niveles de cortesía',
      id: 'Salam Penting Bahasa Korea & Tingkat Kesopanan',
      vn: 'Các lời chào tiếng Hàn thiết yếu và nghi thức lịch sự',
    },
    intro: {
      en: 'Greeting someone in Korean involves choosing the appropriate speech level. "Annyeonghaseyo" (안녕하세요) is the universal polite greeting that conveys warm respect in any social situation.',
      jp: '韓国語の挨拶は、相手との関係性や敬意の度合いによって表現を使い分けます。最も標準的で温かい敬意を表す「アンニョンハセヨ（안녕하세요）」は、あらゆる場面で使える万能な挨拶です。',
      cn: '在韩语中，问候语与对方的辈分和礼貌层级息息相关。最经典的“您好（안녕하세요）”适用于绝大多数社交生活场景，传递着温暖真挚的敬意。',
      es: 'Saludar en coreano implica elegir el nivel de cortesía adecuado. "Annyeonghaseyo" es el saludo universal que transmite respeto.',
      id: 'Menyapa dalam bahasa Korea memerlukan pemilihan tingkat kesopanan yang tepat. "Annyeonghaseyo" adalah salam universal yang sopan.',
      vn: 'Chào hỏi trong tiếng Hàn đòi hỏi phải chọn mức độ lịch sự phù hợp. "Annyeonghaseyo" là lời chào phổ biến nhất thể hiện sự tôn trọng.',
    },
    culturalContext: {
      en: 'Korean greetings are traditionally accompanied by a slight bow of the head (Insa), representing modesty and harmonious interpersonal relationships.',
      jp: '韓国では挨拶を交わす際、相手への敬意として軽く腰や頭を傾ける「お辞儀（インサ）」を添える文化が根付いています。',
      cn: '在韩国社交文化中，道出问候的同时通常伴随轻微鞠躬点头礼（인사），体现谦逊平和的人际相处之道。',
      es: 'Los saludos coreanos suelen ir acompañados de una ligera inclinación de cabeza como muestra de cortesía y armonía.',
      id: 'Salam dalam budaya Korea biasanya disertai dengan sedikit membungkuk (Insa) sebagai tanda kerendahan hati.',
      vn: 'Lời chào của người Hàn thường đi kèm với cái cúi đầu nhẹ (Insa), thể hiện sự khiêm nhường và lịch thiệp.',
    },
    tips: [
      {
        en: 'Write "안" with balanced horizontal width between the consonant ㅇ and vowel ㅏ.',
        jp: '「안」を書く際は、子音「ㅇ」と母音「ㅏ」、パッチム「ㄴ」の上下左右の比率が1:1になるよう意識しましょう。',
        cn: '书写“안”字时，注意初声“ㅇ”与中声“ㅏ”以及收音“ㄴ”的比例均衡，切忌下重上轻。',
        es: 'Escribe "안" equilibrando el ancho horizontal entre la consonante ㅇ y la vocal ㅏ.',
        id: 'Tulis "안" dengan lebar yang seimbang antara konsonan dan vokal.',
        vn: 'Viết chữ "안" với độ cân đối giữa phụ âm đầu, nguyên âm và phụ âm cuối.',
      }
    ],
    funFact: {
      en: '"Annyeong" literally translates to "peace and tranquility". Asking "Annyeonghaseyo?" literally asks: "Are you in peace and good health today?"',
      jp: '「アンニョン（安寧）」は漢字で「安らかであること」を意味します。「アンニョンハセヨ？」は文字通り「今日もお変わりなく平穏でいらっしゃいますか？」と相手の無事を気遣う温かい言葉です。',
      cn: '“안녕（安宁）”在汉字中即为平安宁静之意。因此“안녕하세요？”字面上的深意正是：“愿您今天身心安宁、一切安好吗？”。',
      es: '"Annyeong" se traduce literalmente como "paz y tranquilidad". Preguntar "Annyeonghaseyo" significa desear paz al prójimo.',
      id: '"Annyeong" secara harfiah berarti "damai dan tenteram". Menanyakan "Annyeonghaseyo" berarti menanyakan apakah Anda dalam kedamaian.',
      vn: '"Annyeong" có nghĩa là "An Ninh / Bình An". "Annyeonghaseyo" thực chất là lời hỏi thăm: "Hôm nay bạn có bình an và khỏe mạnh không?"',
    }
  },
  food: {
    id: 'food',
    badge: {
      en: 'Gastronomy & Culture',
      jp: '韓国の食文化',
      cn: '韩国饮食美学与风味',
      es: 'Gastronomía y Cultura',
      id: 'Kuliner & Budaya',
      vn: 'Ẩm thực & Văn hóa',
    },
    title: {
      en: 'Korean Culinary Vocabulary & Table Etiquette',
      jp: '韓国料理の必須単語と食卓マナー完全解説',
      cn: '地道韩国料理词汇与餐桌文化指南',
      es: 'Vocabulario gastronómico coreano y etiqueta en la mesa',
      id: 'Kosakata Kuliner Korea & Etika Meja Makan',
      vn: 'Từ vựng ẩm thực Hàn Quốc và nghi thức bàn ăn',
    },
    intro: {
      en: 'Korean cuisine (K-Food) is built upon fermentation, harmonious seasoning, and communal dining. Mastering food vocabulary unlocks authentic experiences at Korean barbecues, markets, and traditional restaurants.',
      jp: '韓国料理（K-Food）は、発酵の知恵、五味五色の調和、そして分かち合う食卓文化が特徴です。料理の名前を手書きで覚えることで、韓国旅行や外食が何倍も楽しくなります。',
      cn: '韩国饮食（K-Food）以发酵智慧、五色五味和谐以及聚餐共享文化为核心。掌握地道的料理词汇，能让您在韩国烤肉、传统市场与餐厅中如鱼得水。',
      es: 'La gastronomía coreana se basa en la fermentación y platos compartidos. Aprender su vocabulario enriquece cada experiencia.',
      id: 'Kuliner Korea berakar pada fermentasi dan kebersamaan. Menguasai kosakata makanan membuka pintu pengalaman otentik.',
      vn: 'Ẩm thực Hàn Quốc dựa trên nghệ thuật lên men và sự gắn kết gia đình. Nắm vững từ vựng món ăn giúp bạn thưởng thức trọn vẹn hương vị.',
    },
    culturalContext: {
      en: 'In Korean culture, food is considered the best medicine (Yak-sik-dong-won / 藥食同源). Sharing hearty side dishes (Banchan) symbolizes community trust and warmth.',
      jp: '韓国では「医食同源（薬食同源）」の精神が根付いており、健康的で滋味深いおかず（パンチャン）を食卓で皆で分け合うことが温かい絆の証とされています。',
      cn: '韩国文化秉持“药食同源”理念，丰富多样的小菜（Banchan）共同摆满餐桌，象征着热情好客与邻里亲朋间的亲密关怀。',
      es: 'En la cultura coreana se considera que la comida es la mejor medicina. Compartir guarniciones (Banchan) simboliza generosidad.',
      id: 'Makanan Korea dianggap sebagai obat alami. Berbagi lauk pauk (Banchan) melambangkan kehangatan komunitas.',
      vn: 'Trong văn hóa Hàn Quốc, thức ăn cũng chính là vị thuốc (Dược thực đồng nguyên). Việc chia sẻ các món ăn kèm (Banchan) thể hiện sự gắn kết.',
    },
    tips: [
      {
        en: 'Watch the double consonants in words like "찌개" (Jji-gae) or "불고기" (Bul-gogi).',
        jp: '「찌개」の「ㅉ」のように濃音（ダブル子音）を書く際は、2つの文字が重なりすぎず幅を均等に保ちましょう。',
        cn: '书写“찌개”中的浓音“ㅉ”时，两个“ㅈ”间距要紧密协调，整体宽度不超过单格正常字宽。',
        es: 'Presta atención a las consonantes dobles en palabras como "찌개" (Jji-gae).',
        id: 'Perhatikan konsonan ganda pada kata-kata seperti "찌개" (Jji-gae).',
        vn: 'Chú ý các phụ âm đôi trong những từ như "찌개" (Jji-gae) để đảm bảo độ vuông vắn.',
      }
    ],
    funFact: {
      en: 'Instead of simply asking "How are you?", Koreans traditionally ask "Have you eaten rice?" (Bap meogeosseoyo? / 밥 먹었어요?) to express deep care and affection.',
      jp: '韓国では親しい人への挨拶として「ご飯食べましたか？（밥 먹었어요?）」と尋ねることが日常的です。相手の健康と生活を心から気遣う愛情あふれる表現です。',
      cn: '如同中文里的“吃了吗？”，韩国人日常最亲切的关怀问候正是“밥 먹었어요?（吃饭了吗？）”，饱含着对彼此安康的深切体贴。',
      es: 'En lugar de un saludo formal, los coreanos suelen preguntar "¿Has comido arroz?" como muestra de afecto genuino.',
      id: 'Alih-alih sekadar menyapa, orang Korea sering bertanya "Sudah makan nasi?" sebagai ungkapan perhatian yang mendalam.',
      vn: 'Thay vì chỉ hỏi thăm bình thường, người Hàn thường hỏi "Bạn đã ăn cơm chưa?" (밥 먹었어요?) để thể hiện sự quan tâm ân cần.',
    }
  },
  travel: {
    id: 'travel',
    badge: {
      en: 'Navigation & Transit',
      jp: '旅行と交通',
      cn: '韩国旅行与实用出行',
      es: 'Viajes y Tránsito',
      id: 'Perjalanan & Transportasi',
      vn: 'Du lịch & Đi lại',
    },
    title: {
      en: 'Navigating South Korea: Essential Transit & Directional Terms',
      jp: '韓国旅行をスムーズにする交通・道案内必須単語',
      cn: '畅游韩国：地铁交通与问路方位核心词汇',
      es: 'Viajando por Corea del Sur: transporte y direcciones',
      id: 'Menjelajahi Korea Selatan: Istilah Transportasi & Petunjuk Arah',
      vn: 'Du lịch Hàn Quốc: Từ vựng giao thông và chỉ đường cần biết',
    },
    intro: {
      en: 'Seoul boasts one of the most efficient subway and transit networks in the world. Learning key station and direction words ensures effortless travel across Korean cities.',
      jp: 'ソウルの地下鉄網は世界最高峰の利便性を誇ります。「駅」「出口」「乗り換え」などの基本単語を手書きでインプットしておけば、現地での移動が劇的に快適になります。',
      cn: '首尔拥有全球顶尖的高效公共交通网络。熟记“车站”、“出口”、“换乘”等核心词汇并亲手练习，能让您的自由行毫无阻碍。',
      es: 'Seúl cuenta con una de las redes de metro más eficientes del mundo. Aprender estos términos facilita tus desplazamientos.',
      id: 'Jaringan transportasi umum di Korea adalah salah satu yang terbaik di dunia. Mempelajari kata-kata ini mempermudah perjalanan Anda.',
      vn: 'Hệ thống tàu điện ngầm và xe buýt tại Hàn Quốc cực kỳ hiện đại. Nắm vững từ vựng ga tàu giúp chuyến đi của bạn thuận tiện hơn bao giờ hết.',
    },
    culturalContext: {
      en: 'High-speed KTX trains connect Seoul to the southern port of Busan in under 2.5 hours, making regional travel and cultural immersion accessible in a single weekend.',
      jp: 'KTX（高速鉄道）を利用すれば、首都ソウルから南部の港町・釜山までわずか2時間半で結ばれ、手軽に豊かな地方文化を体験できます。',
      cn: '乘坐KTX高速列车，仅需两个半小时即可从首尔飞驰至南部海港釜山，让周末跨城深度文化体验变得轻而易举。',
      es: 'El tren de alta velocidad KTX conecta Seúl con Busan en menos de 2 horas y media, facilitando recorrer todo el país.',
      id: 'Kereta cepat KTX menghubungkan Seoul ke Busan dalam waktu kurang dari 2,5 jam, memudahkan penjelajahan antar kota.',
      vn: 'Tàu cao tốc KTX kết nối Seoul với Busan chỉ trong vòng 2,5 giờ, giúp việc khám phá văn hóa các vùng miền trở nên thật dễ dàng.',
    },
    tips: [
      {
        en: 'Write "역" (Station) with a sharp, well-anchored final consonant ㄱ.',
        jp: '「역（駅）」を書くときは、終声（パッチム）の「ㄱ」が右下にしっかり収まるよう意識して書きましょう。',
        cn: '书写“역（站）”字时，底部的收音“ㄱ”要收笔干脆利落，稳稳托住上方结构。',
        es: 'Escribe "역" asegurando que la consonante final ㄱ esté bien apoyada en la base.',
        id: 'Tulis "역" dengan memastikan konsonan akhir ㄱ menopang bagian atas dengan kokoh.',
        vn: 'Viết chữ "역" với nét phụ âm cuối ㄱ dứt khoát làm bệ đỡ vững chắc cho toàn bộ chữ.',
      }
    ],
    funFact: {
      en: 'South Korea has over 3,000 islands along its coastline, with Jeju Island being a designated New 7 Wonders of Nature.',
      jp: '韓国の海岸線には3,000以上の島々があり、中でも済州島（チェジュド）は「世界新7大自然景観」にも選出された美しいリゾート地です。',
      cn: '韩国沿海拥有超过3000座秀丽岛屿，其中济州岛更是被评选为“世界新七大自然奇观”之一。',
      es: 'Corea del Sur cuenta con más de 3,000 islas costeras, siendo la isla de Jeju una de las 7 Maravillas Naturales del Mundo.',
      id: 'Korea Selatan memiliki lebih dari 3.000 pulau, dengan Pulau Jeju sebagai salah satu dari 7 Keajaiban Alam Baru.',
      vn: 'Hàn Quốc có hơn 3.000 hòn đảo ven biển, trong đó đảo Jeju được vinh danh là một trong 7 Kỳ quan Thiên nhiên Mới của thế giới.',
    }
  },
  kpop: {
    id: 'kpop',
    badge: {
      en: 'Entertainment & Media',
      jp: 'K-POPと現代カルチャー',
      cn: 'K-Pop流行文化与娱乐',
      es: 'Entretenimiento y K-Pop',
      id: 'Hiburan & Media',
      vn: 'Giải trí & Âm nhạc K-Pop',
    },
    title: {
      en: 'K-Pop Lyrics & Fandom Vocabulary Guide',
      jp: 'K-POP歌詞とファンダム用語の徹底解説',
      cn: 'K-Pop歌词常用词与粉丝文化专有词汇指南',
      es: 'Guía de vocabulario de letras de K-Pop y cultura fandom',
      id: 'Kosakata Lirik K-Pop & Panduan Istilah Fandom',
      vn: 'Cẩm nang từ vựng lời bài hát K-Pop và văn hóa Fandom',
    },
    intro: {
      en: 'K-Pop has transformed Korean language learning across the globe. Understanding lyrical motifs such as "Sarang" (Love), "Chueok" (Memory), and "Kkum" (Dream) brings music to life.',
      jp: 'K-POPの世界的なブームにより、世界中で韓国語を学ぶ人が急増しています。「愛（사랑）」「思い出（추억）」「夢（꿈）」などの頻出歌詞を手書きで練習し、音楽を深く味わいましょう。',
      cn: 'K-Pop风靡全球，让韩语成为全球青年最具吸引力的语言之一。掌握歌词中反复吟唱的“爱（사랑）”、“回忆（추억）”、“梦想（꿈）”，能让旋律更加动人心弦。',
      es: 'El K-Pop ha impulsado el aprendizaje del coreano en todo el mundo. Conocer palabras líricas clave te conecta con tus artistas favoritos.',
      id: 'K-Pop telah memicu antusiasme belajar bahasa Korea di seluruh dunia. Memahami kata-kata kunci membuat lirik lagu lebih bermakna.',
      vn: 'K-Pop đã truyền cảm hứng học tiếng Hàn cho hàng triệu người. Hiểu các từ khóa trong lời bài hát giúp bạn cảm nhận âm nhạc sâu sắc hơn.',
    },
    culturalContext: {
      en: 'Fandom culture in Korea is deeply supportive, featuring fan-chants (Eung-won), synchronized lightsticks, and birthday celebration café events organized by fans.',
      jp: '韓国のファンダム文化は非常に熱心で、曲に合わせた掛け声（応援法）やオリジナルペンライト、ファンの手による記念カフェイベントなどが名物です。',
      cn: '韩国独特的粉丝文化极具正能量，统一整齐的现场应援（응원법）、荧光棒灯海以及应援咖啡厅文化，构成亮丽的当代文化景观。',
      es: 'La cultura de los fandoms en Corea es muy apasionada, con cánticos coordinados y eventos comunitarios en cafés.',
      id: 'Budaya fandom di Korea sangat solid, terkenal dengan fan-chant serempak dan proyek amal yang diprakarsai penggemar.',
      vn: 'Văn hóa fandom ở Hàn Quốc rất nhiệt huyết với các bài fanchant đồng đều và các sự kiện mừng sinh nhật thần tượng độc đáo.',
    },
    tips: [
      {
        en: 'The word "꿈" (Dream) contains a double consonant ㄲ and final consonant ㅁ. Keep both halves compact.',
        jp: '「꿈（夢）」のように濃音「ㄲ」とパッチム「ㅁ」が合わさる文字は、縦長のプロポーションを意識してコンパクトにまとめましょう。',
        cn: '书写“꿈（梦想）”时，上部的双辅音“ㄲ”与底部收音“ㅁ”要紧凑呼应，避免字身过高超出方格。',
        es: 'En palabras como "꿈", mantén la consonante doble ㄲ y la final ㅁ compactas.',
        id: 'Pada kata "꿈", jaga agar konsonan ganda ㄲ dan konsonan akhir ㅁ tetap rapat.',
        vn: 'Với từ "꿈", hãy giữ cho phụ âm đôi ㄲ và phụ âm cuối ㅁ thật gọn gàng để chữ không bị dài quá khổ.',
      }
    ],
    funFact: {
      en: 'Many famous K-Pop lyrics deliberately blend rhythmic Korean onomatopoeia (like "Ddu-du ddu-du" or "Ring Ding Dong") to maximize catchy phonetic energy.',
      jp: 'K-POPのヒット曲には、韓国語特有のリズミカルな擬音語・擬態語が巧みに織り交ぜられ、中毒性のあるキャッチーなメロディを生み出しています。',
      cn: '许多风靡全球的K-Pop名曲巧妙融入了韩语特有的拟声词与节奏韵律，打造出令人无法自拔的洗脑旋律。',
      es: 'Muchas canciones famosas de K-Pop incorporan onomatopeyas rítmicas coreanas para crear estribillos inolvidables.',
      id: 'Banyak lirik K-Pop menggunakan onomatope berirama untuk memaksimalkan energi lagu yang mudah diingat.',
      vn: 'Nhiều bài hát K-Pop sử dụng từ tượng thanh và tượng hình tiếng Hàn để tạo nên giai điệu bắt tai khó quên.',
    }
  },
  business: {
    id: 'business',
    badge: {
      en: 'Workplace & Career',
      jp: 'ビジネス韓国語',
      cn: '商务职场与专业沟通',
      es: 'Negocios y Carrera',
      id: 'Bisnis & Profesional',
      vn: 'Kinh doanh & Công sở',
    },
    title: {
      en: 'Professional Korean: Workplace Expressions & Formal Registers',
      jp: '職場で即戦力になるビジネス韓国語表現とフォーマル敬語',
      cn: '职场立足必备：商务韩国语敬语体系与沟通准则',
      es: 'Coreano profesional: expresiones laborales y registro formal',
      id: 'Bahasa Korea Profesional: Ekspresi Tempat Kerja & Etika Formal',
      vn: 'Tiếng Hàn thương mại: Giao tiếp công sở và phong thái chuyên nghiệp',
    },
    intro: {
      en: 'Working with Korean enterprises requires mastery of formal verb endings (-siop-sio / -im-ni-da) and professional business vocabulary for meetings, emails, and contracts.',
      jp: '韓国企業との協業や就職では、「〜でございます（-습니다/십니까）」などの最高敬語やビジネス用語の正確な使い分けが信頼関係の鍵となります。',
      cn: '在韩企职场或涉韩商务合作中，熟练运用最高规格的敬语终结词尾（-습니다 / -십니까）及正式公文词汇，是展现职业素养的核心基石。',
      es: 'Trabajar con empresas coreanas requiere dominar las terminaciones formales (-imnida) y vocabulario corporativo.',
      id: 'Bekerja dengan perusahaan Korea membutuhkan penguasaan akhiran kata kerja formal (-imnida) dalam rapat dan email.',
      vn: 'Làm việc trong môi trường doanh nghiệp Hàn Quốc đòi hỏi bạn phải sử dụng thành thạo đuôi câu trang trọng (-imnida) và từ vựng văn phòng.',
    },
    culturalContext: {
      en: 'Business card exchange (Myeong-ham) is performed with both hands, accompanied by a polite bow and careful review of the other party’s title before placing it on the table.',
      jp: '名刺（ミョンハム）交換は必ず両手で行い、軽くお辞儀をして相手の役職を敬意を込めて確認するのが韓国のビジネスマナーの鉄則です。',
      cn: '在韩国商务礼仪中，交换名片（명함）必须双手递交并伴随微微鞠躬，接过后需认真端详对方头衔以示尊重。',
      es: 'El intercambio de tarjetas de visita (Myeongham) siempre se realiza con ambas manos y una reverencia formal.',
      id: 'Pertukaran kartu nama (Myeongham) selalu dilakukan dengan kedua tangan sebagai tanda penghormatan profesional.',
      vn: 'Nghi thức trao danh thiếp (Myeongham) luôn được thực hiện bằng cả hai tay cùng cái cúi đầu lịch sự.',
    },
    tips: [
      {
        en: 'Formal endings like "~합니" require precise balance between ㅎ and the bottom ㅂ.',
        jp: '「~합니다」の「합」を書く際は、上の「ㅎ」と下のパッチム「ㅂ」の比率を美しく整えましょう。',
        cn: '书写“~합니다”的“합”字时，注意上方“ㅎ”的横画跨度与下方收音“ㅂ”的稳固对齐。',
        es: 'Mantén las terminaciones formales como "합" con proporciones nítidas y claras.',
        id: 'Tulis akhiran formal seperti "합" dengan proporsi yang rapi dan tegas.',
        vn: 'Viết các đuôi câu trang trọng như "합" với sự cân đối chính xác giữa nét trên và nét dưới.',
      }
    ],
    funFact: {
      en: 'In Korean companies, colleagues often address each other by their formal position title rather than personal name (e.g. Kim Daeri-nim, Park Bujan-nim).',
      jp: '韓国の職場では名前で呼び合うことは少なく、「キム代理様（대리님）」「パク部長様（부장님）」のように役職名に敬称をつけて呼ぶのが通例です。',
      cn: '在韩国职场中，同事间极少直呼姓名，而是习惯以“姓氏+职位头衔+敬称（如：金代理님、朴部长님）”相互称呼。',
      es: 'En las empresas coreanas, los colegas se llaman por su título profesional en lugar del nombre personal.',
      id: 'Di kantor Korea, rekan kerja saling memanggil dengan gelar jabatan formal daripada nama pribadi.',
      vn: 'Tại các công ty Hàn Quốc, nhân viên thường gọi nhau bằng chức danh kèm kính ngữ thay vì gọi tên riêng.',
    }
  },
  slang: {
    id: 'slang',
    badge: {
      en: 'Modern Culture',
      jp: '新造語と若者言葉',
      cn: '韩国Z世代流行语与新造词',
      es: 'Jerga y Tendencias',
      id: 'Bahasa Gaul Modern',
      vn: 'Tiếng lóng & Xu hướng giới trẻ',
    },
    title: {
      en: 'Modern Korean Slang, Internet Acronyms & Neologisms',
      jp: '若者が毎日使う最新の韓国語スラングとネット略語',
      cn: '韩国年轻人天天用的最新网络缩写与流行俚语',
      es: 'Jerga coreana moderna, acrónimos de internet y neologismos',
      id: 'Bahasa Gaul Korea Modern & Singkatan Internet Populer',
      vn: 'Tiếng lóng hiện đại, từ viết tắt và ngôn ngữ mạng Hàn Quốc',
    },
    intro: {
      en: 'South Korea’s hyper-connected internet culture invents creative neologisms every month. Terms like "Daebak" (Awesome) and "TMI" reflect dynamic contemporary communication.',
      jp: '世界屈指のデジタル先進国である韓国では、毎月のようにウィットに富んだ新造語が生まれています。「テバク（대박・最高）」などの定番から最新スラングまでを楽しく学びましょう。',
      cn: '作为高度互联的数字化国度，韩国互联网文化催生了海量富有创意的缩写与新造词。“대박（绝了/太棒了）”等词汇生动折射出当代青年的蓬勃活力。',
      es: 'La cultura digital surcoreana crea nuevos términos constantemente. Palabras como "Daebak" reflejan la vida moderna.',
      id: 'Budaya internet Korea yang sangat dinamis menciptakan istilah baru setiap bulan seperti kata "Daebak" yang populer.',
      vn: 'Văn hóa internet phát triển của Hàn Quốc liên tục sáng tạo ra các từ lóng thú vị như "Daebak" (Tuyệt vời).',
    },
    culturalContext: {
      en: 'Korean text messaging widely uses consonant acronyms like "ㅋㅋ" (laughter) and "ㅠㅠ" (crying eyes), turning alphabet glyphs into expressive emoticons.',
      jp: 'カカオトークなどのチャットでは「ㅋㅋ（クク・笑い）」や「ㅠㅠ（涙目）」など、子音や母音そのものを絵文字のように使う表現が日常化しています。',
      cn: '在KakaoTalk即时聊天中，韩国年轻人极度热衷使用单字母表情符号，如“ㅋㅋ（呵呵笑声）”或“ㅠㅠ（流泪眼睛）”，充满生动表现力。',
      es: 'En los mensajes de texto coreanos es común usar consonantes como emoticonos: "ㅋㅋ" para risas y "ㅠㅠ" para llorar.',
      id: 'Dalam obrolan pesan singkat, konsonan sering digunakan sebagai emotikon, seperti "ㅋㅋ" untuk tertawa.',
      vn: 'Trong nhắn tin, người Hàn rất hay dùng các phụ âm làm biểu tượng cảm xúc như "ㅋㅋ" (tiếng cười) hoặc "ㅠㅠ" (khóc).',
    },
    tips: [
      {
        en: 'Slang often uses strong, punchy consonants. Keep exclamation energy in your strokes!',
        jp: 'スラングは感情を強く込めて発音されるため、手書きでもハキハキとした力強い筆致を意識すると雰囲気が出ます。',
        cn: '流行俚语通常伴随浓烈的情绪张力，书写时运笔要利落干脆，富有节奏感。',
        es: 'La jerga a menudo utiliza consonantes fuertes; ¡mantén energía en tus trazos!',
        id: 'Bahasa gaul sering menggunakan konsonan yang tegas; tulislah dengan penuh semangat!',
        vn: 'Tiếng lóng thường có sắc thái mạnh mẽ; hãy viết các nét dứt khoát để thể hiện đúng tinh thần!',
      }
    ],
    funFact: {
      en: 'The phrase "Hwaiting!" (화이팅) is a uniquely Korean cheer adapted from English "Fighting", used universally to wish someone courage and luck.',
      jp: '「ファイティン！（화이팅/파이팅）」は英語の「Fighting」から生まれた韓国独自の応援フレーズで、「頑張って！」の意味であらゆる世代に愛されています。',
      cn: '“화이팅（Fighting / 加油！）”是由英语词汇演变而来的韩国国民应援语，无论考试、运动还是面对工作挑战，人人都会以此互相打气。',
      es: '"¡Hwaiting!" es el grito de ánimo coreano más famoso, utilizado para desear fuerza y suerte a cualquiera.',
      id: '"Hwaiting!" adalah seruan penyemangat khas Korea yang diadaptasi dari bahasa Inggris untuk menyemangati orang lain.',
      vn: '"Hwaiting!" (화이팅) là câu khẩu hiệu cổ vũ đặc trưng của người Hàn, được dùng để chúc nhau cố gắng và may mắn.',
    }
  },
  proverbs: {
    id: 'proverbs',
    badge: {
      en: 'Ancestral Wisdom',
      jp: '韓国のことわざと古人の知恵',
      cn: '韩国传统谚语与历史哲思',
      es: 'Sabiduría Ancestral',
      id: 'Kebijaksanaan Leluhur',
      vn: 'Trí tuệ dân gian & Tục ngữ',
    },
    title: {
      en: 'Timeless Korean Proverbs (Sok-dam) & Calligraphic Expressions',
      jp: '心に響く韓国の伝統ことわざ（ソクダム）と名言の書道手本',
      cn: '经典韩国传统谚语（俗谈）与书法手写心悟',
      es: 'Proverbios coreanos atemporales (Sok-dam) y caligrafía',
      id: 'Peribahasa Tradisional Korea (Sok-dam) Penuh Makna',
      vn: 'Tục ngữ tiếng Hàn truyền thống (Sok-dam) và nghệ thuật thư pháp',
    },
    intro: {
      en: 'Korean proverbs (Sok-dam) distill centuries of agrarian wisdom, philosophical humor, and observations about human nature into poetic, memorable phrases.',
      jp: '韓国のことわざ（속담・ソクダム）は、何世紀にもわたる農耕社会の知恵や人間の本質を見つめる温かいユーモアが凝縮された珠玉の名句です。',
      cn: '韩国传统谚语（속담）凝聚了数百年农耕农时、处世哲学以及对人性的敏锐洞察，文辞优美且富含人生哲理。',
      es: 'Los proverbios coreanos (Sok-dam) resumen siglos de sabiduría popular y metáforas poéticas.',
      id: 'Peribahasa Korea (Sok-dam) merangkum kebijaksanaan berabad-abad menjadi ungkapan yang sarat akan makna.',
      vn: 'Tục ngữ Hàn Quốc (Sok-dam) đúc kết trí tuệ dân gian sâu sắc qua nhiều thế hệ thành những câu nói súc tích.',
    },
    culturalContext: {
      en: 'Practicing proverbs is the traditional gold standard in Korean calligraphy because longer sentences train rhythm, cadence, and consistent character sizing.',
      jp: '韓国の伝統書道では、ことわざを練習することが基本とされます。複数の文字が連なる文章を書くことで、行の揃え方や文字間の余白の美が養われるからです。',
      cn: '书写长句名言自古便是练习书法的最高标准。通过通篇练习谚语，能在连贯书写中全面训练行气、节奏感与字形大小的一致性。',
      es: 'Practicar proverbios es el estándar clásico en caligrafía coreana para dominar el ritmo y el tamaño constante de las letras.',
      id: 'Menulis peribahasa adalah standar terbaik dalam kaligrafi Korea untuk melatih ritme penulisan kalimat panjang.',
      vn: 'Luyện viết tục ngữ là bài tập kinh điển trong thư pháp Hàn Quốc để rèn luyện nhịp điệu và sự đồng đều của con chữ.',
    },
    tips: [
      {
        en: 'Leave subtle breathing room between words (Eojeol) to ensure maximum reading rhythm.',
        jp: '韓国語の分かち書き（オジョル）のスペースを均等に空けることで、文章全体のリズムと読みやすさが劇的に向上します。',
        cn: '注意韩语文段词与词之间的分写空格（Eojeol），留出适度的“呼吸空间”，大幅增强全篇可读性。',
        es: 'Deja un espacio sutil y uniforme entre cada palabra para asegurar un buen ritmo de lectura.',
        id: 'Beri jarak spasi yang teratur antar kata untuk menjaga ritme dan kerapian tulisan.',
        vn: 'Để khoảng cách ngắt từ (Eojeol) thật đều đặn để câu văn có nhịp điệu tự nhiên và dễ đọc nhất.',
      }
    ],
    funFact: {
      en: 'The proverb "Starting is half the journey" (시작이 반이다) reminds learners that simply picking up a pen and writing your first Korean syllable is already half the battle won!',
      jp: '「始まりが半分だ（시작이 반이다）」ということわざは、「最初の一歩を踏み出せば、すでに半分達成したも同然だ」という意味です。ペンを握って最初の文字を書いた瞬間、あなたの韓国語学習の旅はすでに大きく前進しています！',
      cn: '韩国著名谚语“良好开端等于成功一半（시작이 반이다）”时刻鼓舞着学习者：只要您今日拿起笔在字格中落下第一个笔划，成功的大门便已为您敞开了一半！',
      es: 'El famoso proverbio "El comienzo es la mitad del camino" nos recuerda que dar el primer paso ya es un gran logro.',
      id: 'Peribahasa "Memulai adalah separuh dari perjalanan" mengingatkan bahwa mengambil pena untuk belajar adalah awal kesuksesan!',
      vn: 'Câu tục ngữ "Vạn sự khởi đầu nan, bắt đầu là đã xong một nửa" (시작이 반이다) luôn nhắc nhở người học rằng đặt bút viết nét đầu tiên là bạn đã tiến rất xa!',
    }
  }
};
