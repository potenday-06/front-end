'use client'
import { setCookie } from 'cookies-next'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const AuthRedirect = () => {
  const router = useRouter()
  const params = useParams()
  const provider = params.slug ? params.slug[params.slug.length - 1] : null

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // 클라이언트 사이드 보장
    if (typeof window === 'undefined') return

    const fetchSocialLogin = async (provider: string, code: string) => {
      try {
        setIsLoading(true)

        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_AUTH_API}/${provider}`

        // 네이버는 액세스 토큰을, 카카오는 인가 코드를 쿼리 파라미터로 전송
        const url = `${apiUrl}?code=${encodeURIComponent(code)}`

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          // 쿠키를 자동 포함
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error(`API 요청 실패: ${response.status}`)
        }

        const data = await response.json()

        if (data.success === false) {
          throw new Error(data.message || '로그인 처리 중 오류가 발생했습니다')
        }

        const token = data.data.accessToken

        setCookie('accessToken1', token)

        router.push('/')
      } catch (err) {
        console.error('인증 처리 중 오류 발생:', err)
        setError(
          err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다'
        )
      } finally {
        setIsLoading(false)
      }
    }

    const handleAuth = async () => {
      switch (provider) {
        case 'kakao': {
          const urlParams = new URLSearchParams(window.location.search)
          const code = urlParams.get('code')
          if (code) {
            await fetchSocialLogin('kakao', code)
          } else {
            console.error('카카오 인가 코드를 찾을 수 없습니다.')
            setError('카카오 로그인 인가 코드를 찾을 수 없습니다.')
            router.push('/login')
          }
          break
        }
        case 'naver': {
          const hashString = window.location.hash.replace(/^#/, '')
          const hashParams = new URLSearchParams(hashString)
          const accessToken = hashParams.get('access_token')
          if (accessToken) {
            await fetchSocialLogin('naver', accessToken)
          } else {
            console.error('네이버 인가 토큰을 찾을 수 없습니다.')
            setError('네이버 인가 토큰을 찾을 수 없습니다.')
            router.push('/login')
          }
          break
        }
        default:
          console.error('알 수 없는 provider:', provider)
          setError('알 수 없는 인증 수단입니다.')
          router.push('/login')
          break
      }
    }

    handleAuth()
  }, [router, provider])

  if (isLoading) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-white'></div>
        <p className='mt-4 text-white'>로그인 처리 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center text-white'>
        <p className='text-red-500'>오류가 발생했습니다</p>
        <p>{error}</p>
        <button
          onClick={() => router.push('/login')}
          className='mt-4 rounded-30 bg-white px-4 py-2 text-[#7A4AFF]'
        >
          다시 시도하기
        </button>
      </div>
    )
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className='text-white'>로그인 성공! 페이지 이동 중...</p>
    </div>
  )
}

export default AuthRedirect
