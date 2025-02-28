import { getCookie } from 'cookies-next'

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
  const accessToken = getCookie('accessToken')
  console.log(accessToken)

  const res = await fetch(`/api/v1/stars/${starId}/conversations`, {
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
    throw new Error(`채팅 목록 조회 실패: ${res.status}`)
  }

  const response = await res.json()

  return response.data
}
