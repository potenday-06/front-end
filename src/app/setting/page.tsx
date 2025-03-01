'use client'

import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Setting = () => {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('accessToken1')
    router.push('/login')
  }

  return (
    <div className='relative flex min-h-dvh flex-col items-center p-24'>
      <div className='mb-60 flex w-full justify-start'>
        <Image
          className='cursor-pointer'
          onClick={() => router.push('/')}
          src='assets/icons/button-prev-gray.svg'
          width={24}
          height={24}
          alt='뒤로가기'
        />
        <Image
          className='ml-[36%]'
          src='assets/icons/setting-header.svg'
          width={73}
          height={38}
          alt='설정 헤더'
        />
      </div>
      <div className='w-368 rounded-10 bg-white p-18 text-black-10'>
        <p className='text-20-700'>박서영</p>
        <p className='18-600'>2025.3.1 가입</p>
      </div>

      <button
        className='absolute bottom-[3%] flex cursor-pointer justify-center text-16 text-[#D9D9D9] underline'
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  )
}

export default Setting
