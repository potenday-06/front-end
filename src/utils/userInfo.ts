import { UserInfo } from '@/app/chat/onboarding/page'

export async function postUserInfo({ nickname, age, gender }: UserInfo) {
  const res = await fetch(`/api/v1/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    credentials: 'include',
    body: JSON.stringify({
      nickname,
      age,
      gender,
    }),
  })

  if (!res.ok) {
    throw new Error(`회원 정보 저장 실패: ${res.status}`)
  }

  return await res.json()
}
