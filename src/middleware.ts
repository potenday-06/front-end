// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // 쿠키에서 토큰 가져오기 (예: 'accessToken')
  const token = req.cookies.get('accessToken')
  const { pathname } = req.nextUrl

  // 1) /login 페이지인데 쿠키에 토큰이 이미 있으면 -> 루트로
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // 2) / 루트인데 쿠키에 토큰이 없으면 -> /login
  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // 그 외 페이지는 통과
  return NextResponse.next()
}

// 이 미들웨어를 적용할 경로 설정
export const config = {
  matcher: ['/', '/login'],
}
