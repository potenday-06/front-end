'use client'

import Image from 'next/image'

const StepThree = () => {
  return (
    <div className='px-24 pt-38'>
      <Image
        className='absolute left-1/2 top-[18%] -translate-x-1/2'
        width={146}
        height={136}
        src='/assets/icons/star-with-ring.svg'
        alt='별'
      />
      <Image
        className='absolute left-1/2 top-[45%] -translate-x-1/2'
        width={103}
        height={103}
        src='/assets/icons/star.svg'
        alt='별'
      />
    </div>
  )
}

export default StepThree
