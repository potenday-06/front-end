/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import Script from 'next/script'
import KakaoScript from '@/components/KakaoScript'
import FirebaseMessagingInit from '@/components/FirebaseMessagingInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://toristar.site'),
  title: '토리별',
  description: '달나라 토끼들의 꿈에서 태어난 토리와 대화해보세요',
  icons: {
    icon: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  openGraph: {
    title: '토리별',
    siteName: '토리별',
    description: '달나라 토끼들의 꿈에서 태어난 토리와 대화해보세요',
    url: 'https://toristar.site',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://i.ibb.co/JwsgRR6m/opengraph-image.png',
        alt: '토리별 오픈그래프',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: 'https://i.ibb.co/JwsgRR6m/opengraph-image.png',
        alt: '토리별 트위터',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const suit = localFont({
  src: '../fonts/SUIT-Variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-suit',
})

export const viewport: Viewport = {
  themeColor: '#f2f2f2',
}

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
        className='m-0 flex h-full min-h-svh items-center justify-center bg-[#f2f2f2]'
      >
        <FirebaseMessagingInit />
        <div className='relative flex h-full min-h-svh w-full max-w-414 flex-col bg-purple-20'>
          {children}
        </div>
        <KakaoScript />
        <Script
          src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js'
          strategy='beforeInteractive'
        />
        <Script src='/service-worker.js' />
      </body>
    </html>
  )
}
