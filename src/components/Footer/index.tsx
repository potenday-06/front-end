import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'

interface FooterProps {
  children: ReactNode
  type: 'onboarding' | 'chatOnboarding' | 'chat'
}

const Footer = ({ children, type }: FooterProps) => {
  const footerStyle = clsx(
    'fixed max-w-414 mx-auto bottom-0 left-0 right-0 flex flex-col h-[20svh] rounded-t-10 bg-white text-center text-black-10', // 기본 스타일
    {
      'justify-between gap-31 h-[30svh] px-24 py-38': type === 'onboarding',
      'justify-between gap-31 h-[30svh] px-24 py-36': type === 'chatOnboarding',
      ' px-24 py-20 h-[30lvh]': type === 'chat',
    }
  )

  return (
    <div className={footerStyle}>
      {type === 'chatOnboarding' && (
        <Image
          className='absolute top-[-75px]'
          src='/assets/icons/tori-footer.svg'
          width={87}
          height={81}
          alt='토리'
        />
      )}
      {children}
    </div>
  )
}

export default Footer
