'use client'

import Image from 'next/image'
import Link from 'next/link'
import { starList } from '../api/stars/route'
import Star from './Star'
import { useEffect, useState } from 'react'

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
    <div className='relative flex flex-col justify-between'>
      <header className='relative flex flex-col items-center'>
        <Link href='/'>
          <Image
            className='absolute left-[2%]'
            src='/assets/icons/button-prev-gray.svg'
            width={24}
            height={24}
            alt='뒤로가기'
          />
        </Link>
        <h1 className='text-24-700'>우리가 만든 우주</h1>
        <h3 className='text-16-500'>별들을 누르면 이전 대화를 볼 수 있어!</h3>
      </header>

      <div className='flex flex-col items-center'>
        {chatList.map((star: StarProps) => (
          <Star key={star.starId} star={star} />
        ))}
      </div>

      {hasPreviousPage && (
        <Image
          onClick={handlePrevPageClick}
          className='absolute bottom-0 left-[2%] cursor-pointer'
          src='/assets/icons/button-previous.svg'
          width={24}
          height={24}
          alt='이전페이지'
        />
      )}
      {hasNextPage && (
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
