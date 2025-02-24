'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AuthRedirect = () => {
  const router = useRouter()
  // useParams를 이용해 URL 경로의 slug를 가져옵니다.
  // 예를 들어, /auth/kakao라면 slug는 ['kakao']가 됩니다.
  const params = useParams()
  const provider = params.slug ? params.slug[params.slug.length - 1] : null

  const [authCode, setAuthCode] = useState<string | null>(null)

  useEffect(() => {
    // 클라이언트 사이드 보장
    if (typeof window === 'undefined') return

    switch (provider) {
      case 'kakao': {
        const urlParams = new URLSearchParams(window.location.search)
        // 카카오 인가 코드는 ?code= 쿼리 파라미터로 받음
        const code = urlParams.get('code')
        if (code) {
          setAuthCode(code)
          // todo: router.push('/다음페이지')
        } else {
          console.error('카카오 code를 찾을 수 없습니다.')
          router.push('/onboarding')
        }
        break
      }
      case 'naver': {
        const hashString = window.location.hash.replace(/^#/, '') // 맨 앞의 '#' 제거
        // 네이버 인가 코드는 #access_token= 형태의 해시로 받음
        const hashParams = new URLSearchParams(hashString)
        const accessToken = hashParams.get('access_token')
        if (accessToken) {
          console.log('네이버 access_token:', accessToken)
          setAuthCode(accessToken)
          // todo: router.push('/다음페이지')
        } else {
          console.error('네이버 access_token을 찾을 수 없습니다.')
          router.push('/onboarding')
        }
        break
      }
      default:
        console.error('알 수 없는 provider:', provider)
        router.push('/onboarding')
        break
    }
  }, [router, provider])

  if (!authCode) {
    return <div>로딩 중...</div>
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <p>{provider} 로그인 성공!</p>
      <p>
        {provider === 'kakao' ? '인가 코드' : '액세스 토큰'}: {authCode}
      </p>
    </div>
  )
}

export default AuthRedirect
