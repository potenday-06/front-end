'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Setting = () => {
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('accessToken1')
    router.push('/login')
  }

  return (
    <div className='flex flex-col items-center p-24'>
      <h1 className='text-24-700'>나의 정보</h1>
      <button
        className='text-gray-[#d9d9d9] flex cursor-pointer justify-center text-16 underline'
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  )
}

export default Setting
