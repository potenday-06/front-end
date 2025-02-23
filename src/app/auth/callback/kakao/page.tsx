'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const KakaoRedirect = () => {
  const router = useRouter()
  const [kakaoCode, setKakaoCode] = useState<string | null>(null)

  useEffect(() => {
    // 클라이언트 사이드 보장
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')

      if (code) {
        setKakaoCode(code)
        console.log('카카오 인가 코드:', code)

        // todo: router.push('/다음페이지')
      } else {
        console.log('인가 코드를 찾을 수 없습니다.')
        router.push('/onboarding')
      }
    }
  }, [router])

  if (!kakaoCode) {
    return <div>로딩 중...</div>
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <p>카카오 로그인 성공!</p>
      <p>인가 코드: {kakaoCode}</p>
    </div>
  )
}

export default KakaoRedirect
