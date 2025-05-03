import { parseClovaResponse } from '@/lib/parseClovaResponse'
import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const formattedMessages = messages
      .map(
        (msg: MessageType) =>
          `${msg.type === 'USER' ? '사용자' : 'AI'}: ${msg.message}`
      )
      .join('\n\n')

    const completionRequest = {
      messages: [
        {
          role: 'system',
          content: process.env.SUMMARY_PROMPT,
        },
        {
          role: 'user',
          content: formattedMessages,
        },
      ],
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

    const completionsUrl = `${host}/testapp/v1/chat-completions/HCX-003`

    const res = await fetch(completionsUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-NCP-CLOVASTUDIO-REQUEST-ID': '2d38e53d6cd54d02b6b30d76fa1f0363',
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify(completionRequest),
    })

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Clova API 호출 실패' },
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
