import { UserInfo } from '@/app/chat/onboarding/page'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export interface UserInfoType extends UserInfo {
  createdAt: string
}

export async function getUserInfo() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Access Token이 없습니다.' },
      { status: 403 }
    )
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}v1/members`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error(`회원 정보 조회 실패: ${res.status}`)
  }

  return await res.json()
}
