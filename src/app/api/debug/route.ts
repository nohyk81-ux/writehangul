import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured in Vercel environment variables.' }, { status: 500 });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ 
        error: 'Failed to list models', 
        status: response.status,
        details: err,
        key_length: apiKey.length,
        key_start: apiKey.substring(0, 5)
      });
    }

    const data = await response.json();
    return NextResponse.json({
      key_length: apiKey.length,
      key_start: apiKey.substring(0, 5),
      models: data.models?.map((m: any) => m.name) || [],
      full_response: data
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
