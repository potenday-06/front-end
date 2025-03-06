'use client'

import Image from 'next/image'

const StepTwo = () => {
  return (
    <div>
      <Image
        className='absolute left-1/2 top-1/2 -translate-x-1/2'
        width={92}
        height={106}
        src='/assets/icons/tori-hug-star.svg'
        alt='토리'
      />
    </div>
  )
}

export default StepTwo
