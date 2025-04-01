import Cookies from 'js-cookie'

export interface Conversation {
  conversationId: number
  createdAt: number
  summary: string
}

interface StarConversations {
  createdAt: string
  content: Conversation[]
}

export async function getConversations(
  starId: string
): Promise<StarConversations | null> {
  const accessToken = Cookies.get('accessToken1')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/stars/${starId}/conversations`,
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
    throw new Error(`채팅 목록 조회 실패: ${res.status}`)
  }

  const response = await res.json()

  return response.data
}
