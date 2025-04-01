import { MessageType } from '../wholeConversation/getWholeConversation'

export const postSummary = async (messages: MessageType[]) => {
  try {
    const response = await fetch('/api/summary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('요약 API 호출 실패:', errorText)
      return
    }

    const data = await response.json()

    return data.data
  } catch (error) {
    console.error('Fetch 오류:', error)
  }
}
