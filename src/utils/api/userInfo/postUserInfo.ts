import { UserInfo } from '@/app/chat/onboarding/page'
import Cookies from 'js-cookie'

export async function postUserInfo({ nickname, age, gender }: UserInfo) {
  const accessToken = Cookies.get('accessToken1')

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
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
