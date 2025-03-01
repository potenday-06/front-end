'use client'

import Image from 'next/image'
import Link from 'next/link'

import Star from './Star'
import { useEffect, useState } from 'react'
import { starList } from '@/utils/api/stars/route'

export interface StarProps {
  starId: number
  name: string
  createdAt: string
}
export interface StarData {
  totalCount: number
  isFirst: boolean
  isLast: boolean
  content: StarProps[]
}

const SaveChat = () => {
  const [data, setData] = useState<StarData>()
  const [page, setPage] = useState(1)

  const chatList = data?.content || []

  const hasPreviousPage = !data?.isFirst || false
  const hasNextPage = !data?.isLast || false

  const isEmpty = data?.totalCount === 0

  useEffect(() => {
    const fetchStarList = async () => {
      const data = await starList(page)
      setData(data)
    }

    fetchStarList()
  }, [page])

  const handlePrevPageClick = () => {
    setPage((prev) => prev - 1)
  }

  const handleNextPageClick = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className='relative flex flex-col justify-between px-24 py-38'>
      <header className='relative flex justify-between'>
        <Link href='/' className='mt-4'>
          <Image
            src='/assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <div className='flex flex-col items-center'>
          <h1 className='text-24-700'>우리가 만든 우주</h1>
          <h3 className='text-16-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
        </div>
        <div className='h-24 w-24' />
      </header>

      {!isEmpty ? (
        <div className='flex flex-col items-center'>
          {chatList.map((star: StarProps) => (
            <Star key={star.starId} star={star} />
          ))}
        </div>
      ) : null}

      {hasPreviousPage && !isEmpty && (
        <Image
          onClick={handlePrevPageClick}
          className='absolute bottom-0 left-[2%] cursor-pointer'
          src='/assets/icons/button-previous.svg'
          width={24}
          height={24}
          alt='이전페이지'
        />
      )}
      {hasNextPage && !isEmpty && (
        <Image
          onClick={handleNextPageClick}
          className='absolute bottom-0 right-[2%] cursor-pointer'
          src='/assets/icons/button-next-purple.svg'
          width={24}
          height={24}
          alt='다음페이지'
        />
      )}
    </div>
  )
}

export default SaveChat
