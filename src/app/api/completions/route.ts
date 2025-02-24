import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // 클라이언트로부터 messages만 전달받음
    const { messages } = await request.json()

    // 나머지 파라미터는 서버에서 하드코딩
    const completionRequest = {
      messages,
      topP: 0.8,
      topK: 0,
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

    // 예시에서는 채팅 완성 API 엔드포인트 사용 (HCX-DASH-001 모델)
    const completionsUrl = `${host}/testapp/v1/chat-completions/HCX-DASH-001`

    const res = await fetch(completionsUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-NCP-CLOVASTUDIO-REQUEST-ID': requestId,
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

    // 스트리밍 응답을 단순하게 전체 텍스트로 받아옴
    const responseText = await res.text()

    return NextResponse.json({ data: responseText })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
