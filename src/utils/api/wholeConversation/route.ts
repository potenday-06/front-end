import Cookies from 'js-cookie'

export type MessageType = {
  type: 'AI' | 'USER'
  message: string
}

export const wholeConversation = async (conversationId: number) => {
  const accessToken = Cookies.get('accessToken1')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/conversations/${conversationId}/chats`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        credentials: 'include',
      },
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error(`대화 전체 조회 실패: ${res.status}`)
  }

  const response = await res.json()

  return response.data
}
