import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ success: true })

  // accessToken 쿠키 삭제
  response.cookies.set('accessToken', '', {
    path: '/',
    expires: new Date(0), // 토큰 즉시 만료
  })

  return response
}
