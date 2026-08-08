import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'edge';

// Memory-based Rate Limit Map for Edge runtime (isolated per edge node, but sufficient for basic throttling)
const ipRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export async function POST(req: NextRequest) {
  try {
    // 1. IP-based Rate Limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
    const now = Date.now();
    const userLimit = ipRateLimitMap.get(ip);
    
    if (userLimit && now - userLimit.timestamp < RATE_LIMIT_WINDOW) {
      if (userLimit.count >= RATE_LIMIT) {
        return NextResponse.json({ error: 'Daily limit exceeded (10 requests/day)' }, { status: 429 });
      }
      userLimit.count += 1;
    } else {
      ipRateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // 2. File Validation
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only JPG, PNG, and WebP are supported.' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File is too large. Maximum size is 5MB.' }, { status: 400 });
    }

    // 3. Gemini API Integration
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString('base64');

    const imageParts = [
      {
        inlineData: {
          data: base64Data,
          mimeType: file.type
        }
      }
    ];

    const prompt = `Analyze this image and identify the primary Korean word or text shown.
If there are multiple words, pick the most prominent one.
Provide the response strictly as a JSON object with exactly these three keys:
- "korean": The Hangul text.
- "romanization": The English romanization of the pronunciation.
- "meaning": The English translation/meaning.
Do not include any other text, markdown blocks, or formatting outside of the JSON.`;

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    // Clean up potential markdown formatting (```json ... ```)
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
    
    try {
      const parsedData = JSON.parse(cleanText);
      return NextResponse.json(parsedData);
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', text);
      return NextResponse.json({ error: 'Failed to extract valid data from image' }, { status: 500 });
    }

  } catch (error) {
    console.error('Analyze Image Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
