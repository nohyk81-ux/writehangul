import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Basic rate limiting (in-memory for Edge, resets often but okay for simple limits)
// For a robust solution on Cloudflare, we should use KV or Durable Objects.
const ipRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
    const now = Date.now();
    const userLimit = ipRateLimitMap.get(ip);
    
    if (userLimit && now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
      if (userLimit.count >= RATE_LIMIT) {
        return NextResponse.json({ error: 'Daily limit exceeded (10 scans/day)' }, { status: 429 });
      }
      userLimit.count += 1;
    } else {
      ipRateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // 2. Parse FormData
    const formData = await req.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 5MB limit' }, { status: 413 });
    }

    // 3. Prepare for Gemini API
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    const buffer = await file.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString('base64');

    // 4. Call Gemini 1.5 Flash API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: "Extract only the Korean characters from this image. Do not include spaces, English, numbers, or punctuation. Just return a continuous string of Korean characters." },
            {
              inline_data: {
                mime_type: file.type,
                data: base64Image
              }
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

    return NextResponse.json({ characters: cleanKoreanChars });

  } catch (error: any) {
    console.error('Scan Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to analyze image' }, { status: 500 });
  }
}
