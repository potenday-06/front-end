import { MessageType } from './api/wholeConversation/route'

export const saveConversation = async (
  messages: MessageType[],
  summary: string
) => {
  try {
    const payload = {
      summary,
      chats: messages.map((msg) => ({
        type: msg.type.toUpperCase() as 'AI' | 'USER',
        message: msg.message,
      })),
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}v1/conversations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      throw new Error(`대화 저장 실패: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('대화 저장 중 오류 발생:', error)
    return null
  }
}
