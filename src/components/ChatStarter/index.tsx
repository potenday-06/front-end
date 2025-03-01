import Image from 'next/image'
import React from 'react'

const ChatStarter = () => {
  return (
    <div className='flex items-center gap-16'>
      <Image
        width={72}
        height={72}
        src='/assets/icons/tori-face.svg'
        alt='토리'
      />
      <p className='text-18-600-25'>
        같이 대화해서 좋아!
        <br />
        오늘 기분 어떤지 이야기해줄래?
      </p>
    </div>
  )
}

export default ChatStarter
