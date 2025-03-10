import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function getStarList(page: number) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken1')?.value

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Access Token이 없습니다.' },
      { status: 403 }
    )
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/stars?page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      credentials: 'include',
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error(`별 목록 조회 실패: ${res.status}`)
  }

  return await res.json()
}
