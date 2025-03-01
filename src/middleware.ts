import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken1')
  const { pathname } = req.nextUrl

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  const pathToRedirect = ['/', '/chat', '/setting', '/save-chat']

  if (pathname.startsWith('/chat')) {
    return NextResponse.rewrite(new URL('/login', req.url))
  }

  if (pathname.startsWith('/save-chat')) {
    return NextResponse.rewrite(new URL('/login', req.url))
  }

  if (pathToRedirect.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/chat',
    '/chat/:path',
    '/setting',
    '/save-chat',
    '/save-chat/:path',
  ],
}
