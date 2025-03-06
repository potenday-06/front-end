import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'

interface FooterProps {
  children: ReactNode
  type: 'onboarding' | 'chatOnboarding' | 'chat'
}

const Footer = ({ children, type }: FooterProps) => {
  const footerStyle = clsx(
    'flex flex-col relative rounded-t-10 bg-white text-center text-black-10', // 기본 스타일
    {
      'gap-24 px-24 py-38': type === 'onboarding',
      'gap-31 px-24 py-36': type === 'chatOnboarding',
      'px-24 py-20': type === 'chat',
    }
  )

  return (
    <div className={footerStyle}>
      {type === 'chatOnboarding' && (
        <Image
          className='absolute top-[-62px]'
          src='/assets/icons/tori-footer.svg'
          width={72}
          height={67}
          alt='토리'
        />
      )}
      {children}
    </div>
  )
}

export default Footer
