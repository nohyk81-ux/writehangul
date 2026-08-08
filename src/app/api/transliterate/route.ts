import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Rate limiting map
const ipRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 50; // generous for text transliteration
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
    const now = Date.now();
    const userLimit = ipRateLimitMap.get(ip);
    
    if (userLimit && now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
      if (userLimit.count >= RATE_LIMIT) {
        return NextResponse.json({ error: 'Daily limit exceeded' }, { status: 429 });
      }
      userLimit.count += 1;
    } else {
      ipRateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const { name } = await req.json();

    if (!name || typeof name !== 'string' || name.length > 50) {
      return NextResponse.json({ error: 'Invalid name provided' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    // Call Gemini 1.5 Flash API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { 
              text: `Translate the following name into its phonetic Korean (Hangul) equivalent. 
              Only return the Hangul characters. No extra words, punctuation, or spaces.
              If the name is already in Korean, return it as is.
              Example 1: Michael -> 마이클
              Example 2: 田中 -> 타나카
              Example 3: José -> 호세
              Name to translate: ${name}`
            }
          ]
        }]
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errBody}`);
    }

    const data = await response.json();
    const extractedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleanKoreanChars = extractedText.replace(/[^가-힣ㄱ-ㅎㅏ-ㅣ]/g, '');

    return NextResponse.json({ hangul: cleanKoreanChars });

  } catch (error) {
    console.error('Transliterate Error:', error);
    return NextResponse.json({ error: 'Failed to translate name' }, { status: 500 });
  }
}
