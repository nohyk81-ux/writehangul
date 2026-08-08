export interface DailyContent {
  hangul: string;
  en: string;
  jp: string;
  cn: string;
  es: string;
  id: string;
  vn: string;
}

// Map of MM-DD to Daily Content
// The owner can easily export an Excel sheet to this JSON format
export const dailyContentMap: Record<string, DailyContent> = {
  "08-01": { hangul: "환영합니다", en: "Welcome", jp: "歓迎します", cn: "欢迎", es: "Bienvenido", id: "Selamat datang", vn: "Chào mừng" },
  "08-02": { hangul: "반갑습니다", en: "Nice to meet you", jp: "お会いできて嬉しいです", cn: "很高兴见到你", es: "Encantado de conocerte", id: "Senang bertemu denganmu", vn: "Rất vui được gặp bạn" },
  "08-03": { hangul: "감사합니다", en: "Thank you", jp: "ありがとうございます", cn: "谢谢", es: "Gracias", id: "Terima kasih", vn: "Cảm ơn" },
  "08-04": { hangul: "죄송합니다", en: "I am sorry", jp: "申し訳ありません", cn: "对不起", es: "Lo siento", id: "Maaf", vn: "Xin lỗi" },
  "08-05": { hangul: "사랑합니다", en: "I love you", jp: "愛しています", cn: "我爱你", es: "Te amo", id: "Aku mencintaimu", vn: "Tôi yêu bạn" },
  "08-06": { hangul: "축하합니다", en: "Congratulations", jp: "おめでとうございます", cn: "祝贺", es: "Felicidades", id: "Selamat", vn: "Chúc mừng" },
  "08-07": { hangul: "잘 부탁드립니다", en: "Please look favorably on me", jp: "よろしくお願いします", cn: "请多关照", es: "Por favor, cuide de mí", id: "Mohon bantuannya", vn: "Mong được giúp đỡ" },
  "08-08": { hangul: "안녕하세요", en: "Hello", jp: "こんにちは", cn: "你好", es: "Hola", id: "Halo", vn: "Xin chào" },
  "08-09": { hangul: "내일 뵙겠습니다", en: "See you tomorrow", jp: "また明日", cn: "明天见", es: "Hasta mañana", id: "Sampai jumpa besok", vn: "Hẹn gặp lại vào ngày mai" },
  "08-10": { hangul: "수고하셨습니다", en: "Good work", jp: "お疲れ様でした", cn: "辛苦了", es: "Buen trabajo", id: "Kerja bagus", vn: "Làm tốt lắm" },
};
