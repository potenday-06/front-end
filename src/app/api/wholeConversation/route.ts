import { getCookie } from 'cookies-next'

export type MessageType = {
  type: 'AI' | 'USER'
  message: string
}

export const wholeConversation = async (conversationId: number) => {
  const accessToken = getCookie('accessToken')

  const res = await fetch(`/api/v1/conversations/${conversationId}/chats`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      credentials: 'include',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`대화 전체 조회 실패: ${res.status}`)
  }

  const response = await res.json()

  return response.data
}
