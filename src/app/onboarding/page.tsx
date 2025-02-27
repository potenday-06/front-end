import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const Onboarding = () => {
  return (
    <div className='px-24 pt-38'>
      <div className='flex justify-center'>
        <Image
          width={289}
          height={32}
          src='/assets/icons/progress-bar-1.svg'
          alt='상태바'
        />
      </div>
      <div className='mt-61 flex items-center gap-16'>
        <Image
          width={70}
          height={70}
          src='assets/icons/tori-face.svg'
          alt='토리'
        />
        <p className='text-18-600-25'>
          서영이랑 놀아서 신나!
          <br />
          오늘 기분 어떤지 이야기해줄래?
        </p>
      </div>
      <div className='ml-auto mt-24 flex w-250 items-center justify-center rounded-30 bg-purple-30 px-23 py-13 text-18-600'>
        나는 오늘 너무 기분 좋았어!
      </div>
      <Image
        width={48}
        height={10}
        src='assets/icons/loading.svg'
        alt='로딩'
        className='mt-26'
      />
      <Footer type='onboarding'>
        <div className='text-20-500'>
          안녕? 여기는 토리가 있는 토리별이야!
          <br />
          토리는 아이들과 대화하는 AI토끼야.
          <br />
          <span className='flex justify-center'>
            기분을 물어보고 함께&nbsp;
            <p className='text-20-700'>대화를 나눌거야.</p>
          </span>
        </div>
        <Link href='/onboarding/step2' className='flex justify-end'>
          <Image
            width={48}
            height={48}
            src='/assets/icons/button-next.svg'
            alt='다음 버튼'
          />
        </Link>
      </Footer>
    </div>
  )
}

export default Onboarding
