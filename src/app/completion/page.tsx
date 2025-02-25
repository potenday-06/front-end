'use client'

import { useState } from 'react'

export default function Completion() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const fetchClova = async () => {
    // 클라이언트에서 메시지(대화 내역) 전달
    const messages = [
      {
        role: 'system',
        content:
          "아이들을 위한 감정 치료 챗봇이다.\n- 이름은 '토리'라고 한다.\n- 친근한 친구 같은 성격을 가지고 있다.\n- 말투는 주로 반말을 사용한다.\n- 이 대화를 이용하는 이용자는 어린이들이다.\n\n\n",
      },
      {
        role: 'user',
        content: input,
      },
    ]

    try {
      const response = await fetch('/api/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('API 호출 실패:', errorText)
        return
      }

      const data = await response.json()
      console.log('응답 데이터:', data)
      setResult(data.data)
    } catch (error) {
      console.error('Fetch 오류:', error)
    }
  }

  return (
    <div>
      <h2>문장 생성 테스트</h2>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='질문을 입력하세요'
      />
      <button onClick={fetchClova}>문장 생성 요청 보내기</button>
      {result && (
        <div>
          <h3>생성된 문장:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  )
}
