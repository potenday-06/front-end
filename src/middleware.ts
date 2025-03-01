import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken1')
  const { pathname } = req.nextUrl

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login'],
}
