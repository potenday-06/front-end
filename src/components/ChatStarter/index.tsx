import Image from 'next/image'
import React from 'react'

const ChatStarter = () => {
  return (
    <div className='relative w-max rounded-12 border border-[#b49df1] px-24 py-10'>
      <Image
        width={36}
        height={33}
        src='/assets/icons/tori-footer.svg'
        alt='토리'
        className='absolute left-0 top-[-32px]'
      />
      <p className='text-14-500'>
        같이 대화해서 좋아!
        <br />
        오늘 기분 어떤지 이야기해줄래?
      </p>
    </div>
  )
}

export default ChatStarter
