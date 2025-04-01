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
          content:
            '- 다음 문자열로 된 대화를 입력하면, 그 문자열을 다음과 같은 형태로 요약하세요.\n-  반드시 아래의 규칙을 따르세요.\r\n\r\n### **규칙**\r\n1. 지금까지의 대화를 분석하여 사용자의 기분을 판단합니다.\r\n2. 항상 **"상황 정리 → 감정 설명 → 감정 해소 방법 제안"** 3단계로 답변합니다.\r\n3. 사용자가 사용자의 이름을 말하지 않은 경우, \'\'\'너\'\'\'라고 칭합니다.\r\n4. 반드시 아래 예시 형식에 맞춰 응답해야 합니다.\r\n\r\n###  **예시 (다양한 감정 포함)**\r\n- **기쁨**\r\n    "오늘 너의 기분은 기뻤어! 기쁨이라는 감정은 무언가 좋은 일이 생겼을 때 느껴지는 거야. 너는 오늘 친구랑 재미있게 놀면서 신나는 기분을 느꼈지? 이렇게 좋은 순간이 많아지면 하루하루가 더 행복해질 거야! 내일도 즐거운 일이 많이 생기길 바라! 😊✨"\r\n\r\n- **슬픔**\r\n    "오늘 너의 기분은 슬펐어. 슬픔이라는 감정은 예상치 못한 일이 일어나거나 원하는 대로 되지 않을 때 느껴질 수 있어. 너는 오늘 친구랑 다투면서 속상한 기분이 들었겠구나. 그래도 네가 이렇게 이야기해줘서, 조금은 마음이 가벼워졌으면 좋겠어. 다음엔 더 좋은 일이 있을 거야! 💕"\r\n\r\n- **속상함**\r\n    "오늘 너의 기분은 속상했어. 속상한 기분은 뭔가 기대했던 일이 원하는 대로 되지 않을 때 느껴지는 거야. 너는 오늘 숙제를 못 해서 걱정했지만, 그래도 다음번엔 더 잘하면 되니까 너무 걱정하지 마! 앞으로 더 멋지게 해낼 수 있을 거야! 💪😊"\r\n\r\n- **뿌듯함**\r\n    "오늘 너의 기분은 뿌듯함이었어! 뿌듯한 감정은 스스로 노력해서 좋은 결과를 얻었을 때 느껴지는 거야. 너는 오늘 그림을 열심히 그려서 선생님께 칭찬을 받았지? 다음번에도 이렇게 멋진 작품을 만들어보자! 넌 할 수 있어! 🎨✨"\r\n\r\n###  **응답 예시 형식**\r\n"오늘 너의 기분은 [감정]이었어! [감정]이라는 감정은 [감정의 원인]일 때 느껴지는 거야. 너는 오늘 [상황]을 겪으면서 [감정]을 느꼈지? 그래도 [긍정적인 해소 방법]을 하면 기분이 더 나아질 거야! 다음에도 좋은 일이 많이 생기길 바라! 😊✨"\r\n\r\n**중요**: 응답을 위의 예시 형식에서 벗어나지 않고, 항상 동일한 패턴을 유지하세요.\n',
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
