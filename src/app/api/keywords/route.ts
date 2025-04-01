import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    const keywordsRequest = {
      text,
      start: '',
      restart: '',
      includeTokens: false,
      topP: 0.8,
      topK: 4,
      maxTokens: 300,
      temperature: 0.85,
      repeatPenalty: 5.0,
      stopBefore: ['<|endoftext|>'],
      includeProbs: false,
      includeAiFilters: true,
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

    const completionsUrl = `${host}/testapp/v1/tasks/efa1f1zd/completions`

    const res = await fetch(completionsUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'X-NCP-CLOVASTUDIO-REQUEST-ID': 'b5432e36545a48b38f9d68ec31a75ef3',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(keywordsRequest),
    })

    if (!res.ok) {
      const errorText = await res.text()
      return NextResponse.json(
        { error: 'Clova API 호출 실패', details: errorText },
        { status: res.status }
      )
    }

    const data = await res.json()
    return NextResponse.json({ data })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
