import Image from 'next/image'
import AIMessage from '../chat/AiMessage'

const MainContent = ({ step }: { step: number }) => {
  return (
    <>
      {step === 1 && (
        <div className='w-full pt-24'>
          <AIMessage />
          <div
            tabIndex={0}
            className='ml-auto mt-24 flex w-max items-center justify-center rounded-12 border border-solid border-[#b49df1] bg-white px-23 py-13 text-14-500 text-purple-40'
          >
            나는 오늘 너무 기분 좋았어!
          </div>
        </div>
      )}
      {step === 2 && (
        <Image
          width={92}
          height={106}
          src='/assets/icons/tori-hug-star.svg'
          alt='토리'
          priority
        />
      )}
      {step === 3 && (
        <div className='px-24 pt-38'>
          <Image
            className='absolute left-1/2 top-[18%] -translate-x-1/2'
            width={146}
            height={136}
            src='/assets/icons/star-with-ring.svg'
            alt='별'
            priority
          />
          <Image
            className='absolute left-1/2 top-[45%] -translate-x-1/2'
            width={103}
            height={103}
            src='/assets/icons/star.svg'
            alt='별'
            priority
          />
        </div>
      )}
    </>
  )
}

export default MainContent
