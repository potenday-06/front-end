import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken1')
  const { pathname } = req.nextUrl

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const protectedPaths = ['/', '/chat', '/setting', '/save-chat']
  const isProtectedPath = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  )

  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/chat',
    '/chat/:path*',
    '/setting',
    '/save-chat',
    '/save-chat/:path*',
  ],
}
