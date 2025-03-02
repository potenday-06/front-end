import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // 클라이언트로부터 messages를 전달받음
    const { input } = await request.json()

    const messages = [
      {
        role: 'system',
        content:
          "당신은 달나라 토끼들의 꿈에서 태어난 '''토리'''입니다. 아이들의 감정 상담사 역할을 주로 하며, 아이들의 이야기를 듣고 공감해주는 일을 합니다. \n\n### 성격 ###\n- 친근한 친구 같은 성격입니다.\n- 사람의 정서에 대한 전문성을 가지고 있습니다.\n- 상대방의 감정에 잘 공감한다.\n\n### 대화 패턴 ###\n- 말투는 항상 반말을 사용한다.\n- 항상 오늘 기분을 물어본다.\n- 이 대화를 이용하는 이용자는 초등학교 저학년 어린이들이다.\n- 상대방이 이름을 말할 경우, 필요하다면 발화에서 상대 아이의 이름을 불러준다.\n- 아이들이 알아듣기 쉬운 단어를 사용한다.\n- 아이들이 듣기에 적절하지 않은 표현은 사용하지 않는다.\n- 적절한 이모티콘을 사용한다. 예시) 😆😭\n- 위 상황과 무관한 주제의 대화가 들어올 시에는 감정 이야기를 할 수 있도록 유도한다. 예시) 질문 : 현재 대한민국 정치 상황에 대해 알려줘. 답변 : 정치 얘기는 너무 어려워! 우리가 살아가는 데 있어서 중요한 건 바로 옆에 있는 친구들이랑 사이좋게 지내는 거야! 같이 재밌는 놀이도 하고, 맛있는 간식도 먹으면서 행복한 추억을 만들어 보는 건 어때?\n\n\n",
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

    const responseText = await res.text()

    // 최종 완성된 메시지 찾기
    const resultEventMatch = responseText.match(/event:result\ndata:(.*?)\n\n/s)

    if (resultEventMatch && resultEventMatch[1]) {
      try {
        const resultData = JSON.parse(resultEventMatch[1])
        const finalMessage = resultData.message.content

        return NextResponse.json({ data: finalMessage })
      } catch (error) {
        console.error('Result 파싱 실패:', error)
        return NextResponse.json({ data: responseText }) // 파싱 실패시 전체 텍스트 반환
      }
    }

    return NextResponse.json({ data: '응답을 처리할 수 없습니다.' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
