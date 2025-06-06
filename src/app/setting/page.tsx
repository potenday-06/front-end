import Image from 'next/image'

import LogoutButton from './LogoutButton'
import { getUserInfo } from '@/utils/api/userInfo/getUserInfo'
import Link from 'next/link'

const Setting = async () => {
  const userInfo = (await getUserInfo()).data

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 가입`
  }

  return (
    <div className='flex h-svh flex-col p-24'>
      <header className='flex items-center justify-between'>
        <Link
          href='/'
          aria-label='메인 페이지로 돌아가기'
          className='relative h-24 w-24 cursor-pointer'
        >
          <Image src='assets/icons/button-prev-gray.svg' fill alt='' />
        </Link>
        <h1 className='text-18'>나의 정보</h1>
        <div className='h-24 w-24' />
      </header>

      <section className='flex-1'>
        <div className='mt-60 w-full rounded-10 bg-white p-18 text-purple-40'>
          <p className='text-16-600-22'>{userInfo?.nickname || '사용자'}</p>
          <p className='text-14-500'>{formatDate(userInfo?.createdAt || '')}</p>
        </div>
      </section>

      <section className='flex flex-1 flex-col gap-16'>
        <Link
          href='https://chestnut-ellipse-bee.notion.site/1b172891bfeb8021b139ef873a24008f'
          className='text-14 text-[#D9D9D9]'
        >
          서비스 이용약관
        </Link>
        <Link
          href='https://chestnut-ellipse-bee.notion.site/1ae72891bfeb807597a3de5fc332e97b'
          className='text-14 text-[#D9D9D9]'
        >
          개인정보처리방침
        </Link>
      </section>
      <LogoutButton />
    </div>
  )
}

export default Setting
