'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function KakaoScript() {
  const [kakaoLoaded, setKakaoLoaded] = useState(false)

  useEffect(() => {
    const handleKakaoInit = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT)
        }
      } else {
        console.error('Kakao SDK not loaded')
      }
    }

    if (kakaoLoaded) {
      handleKakaoInit()
    }
  }, [kakaoLoaded])

  return (
    <Script
      src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js'
      integrity={
        'sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka'
      }
      crossOrigin='anonymous'
      onLoad={() => setKakaoLoaded(true)}
    />
  )
}
