import Image from 'next/image'

import LogoutButton from './LogoutButton'
import { getUserInfo } from '@/utils/api/userInfo/route'
import Link from 'next/link'
import { Suspense } from 'react'
import SettingSkeleton from './SettingSkeleton'

const Setting = async () => {
  const userInfo = (await getUserInfo()).data

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 가입`
  }

  return (
    <div className='flex h-svh flex-col p-24'>
      <header className='flex h-24 w-full justify-start'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <Image
          className='ml-[36%]'
          src='assets/icons/setting-header.svg'
          width={73}
          height={38}
          alt='설정 헤더'
        />
      </header>

      <main className='flex-1'>
        <div className='mt-60 w-full rounded-10 bg-white p-18 text-black-10'>
          <p className='text-20-700'>{userInfo?.nickname || '사용자'}</p>
          <p className='18-600'>{formatDate(userInfo?.createdAt || '')}</p>
        </div>
      </main>

      <LogoutButton />
    </div>
  )
}

const SettingPage = () => {
  return (
    <Suspense fallback={<SettingSkeleton />}>
      <Setting />
    </Suspense>
  )
}

export default SettingPage
