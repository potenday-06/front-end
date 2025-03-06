'use client'

import Image from 'next/image'

const StepOne = () => {
  return (
    <>
      <div className='mt-61 flex items-center gap-16'>
        <Image
          width={70}
          height={70}
          src='assets/icons/tori-face.svg'
          alt='토리'
        />
        <p className='text-18-600-25'>
          같이 대화해서 좋아!
          <br />
          오늘 기분 어떤지 이야기해줄래?
        </p>
      </div>
      <div className='ml-auto mt-24 flex w-250 items-center justify-center rounded-30 bg-purple-30 px-23 py-13 text-18-600'>
        나는 오늘 너무 기분 좋았어!
      </div>
    </>
  )
}

export default StepOne
