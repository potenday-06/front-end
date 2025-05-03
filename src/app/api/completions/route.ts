import { parseClovaResponse } from '@/lib/parseClovaResponse'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // 클라이언트로부터 messages를 전달받음
    const { input } = await request.json()

    const messages = [
      {
        role: 'system',
        content: process.env.CHAT_PROMPT,
      },
      {
        role: 'user',
        content: input,
      },
    ]

    const completionRequest = {
      messages,
      topP: 0.8,
      topK: 6,
      maxTokens: 256,
      temperature: 0.5,
      repeatPenalty: 5.0,
      stopBefore: [],
      includeAiFilters: true,
      seed: 0,
    }

    const host = process.env.CLOVA_HOST
    const apiKey = process.env.CLOVA_API_KEY
    const requestId = process.env.CLOVA_REQUEST_ID

    if (!host || !apiKey || !requestId) {
      return NextResponse.json(
        { error: '환경 변수 설정이 누락되었습니다.' },
        { status: 500 }
      )
    }

    const completionsUrl = `${host}/testapp/v1/chat-completions/HCX-DASH-001`

    const res = await fetch(completionsUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-NCP-CLOVASTUDIO-REQUEST-ID': '66dd64cd1c494c14807904a391d96ddc',
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify(completionRequest),
    })

    if (!res.ok) {
      const errorText = await res.text()
      return NextResponse.json(
        { error: 'Clova API 호출 실패', details: errorText },
        { status: res.status }
      )
    }

    const responseText = await res.text()
    const finalMessage = parseClovaResponse(responseText)
    return NextResponse.json({ data: finalMessage })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
