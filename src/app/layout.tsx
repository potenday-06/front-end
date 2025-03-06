/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import KakaoScript from './KakaoScript/page'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://toristar.site/onboarding'),
  title: '토리별',
  description: '달나라 토끼들의 꿈에서 태어난 토리와 대화해보세요',
  icons: {
    icon: '/assets/favicon.ico',
  },
  openGraph: {
    title: '토리별',
    description: '달나라 토끼들의 꿈에서 태어난 토리와 대화해보세요',
    url: 'https://toristar.site/onboarding',
    siteName: '토리별',
    images: [
      {
        url: 'https://toristar.site/onboarding/opengraph-image.png',
        alt: '토리별 오픈그래프',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: 'https://toristar.site/onboarding/twitter-image.png',
        alt: '토리별 트위터',
      },
    ],
  },
}

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const suit = localFont({
  src: '../fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-suit',
})

declare global {
  interface Window {
    Kakao: any
    naver: any
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' className={`${suit.variable}`}>
      <body
        suppressHydrationWarning
        className='m-0 flex h-svh items-center justify-center bg-[#f2f2f2]'
      >
        <div className='relative flex h-svh min-h-svh w-full max-w-414 flex-col bg-purple-20'>
          {children}
        </div>
        <KakaoScript />
        <Script
          src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js'
          strategy='beforeInteractive'
        />
      </body>
    </html>
  )
}
