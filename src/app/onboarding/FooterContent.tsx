'use client'

import { useEffect, useRef } from 'react'

const FooterContent = ({ step }: { step: number }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus()
    }
  }, [step])

  return (
    <>
      {step === 1 && (
        <>
          <div className='text-16-500 text-purple-40 outline-none' tabIndex={0}>
            안녕? 여기는 토리가 있는 토리별이야!
            <br />
            토리는 아이들과 대화하는 AI토끼야.
            <br />
            <div className='flex justify-center'>
              기분을 물어보고&nbsp;
              <p className='text-16-600-28'>함께 대화를 나눌거야.</p>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <div
          className='text-16-500 text-purple-40 outline-none'
          tabIndex={0}
          ref={contentRef}
        >
          <p>우리 대화가 끝나면 토리가 그걸</p>
          <p>정리해서 우주의 별로 만들거야.</p>

          <div className='flex justify-center'>
            <p className='text-16-600-28'>소중한 마음을&nbsp;</p> 우주에 가득
            담아보자
          </div>
        </div>
      )}

      {step === 3 && (
        <div
          className='text-16-500 text-purple-40 outline-none'
          tabIndex={0}
          ref={contentRef}
        >
          우리가 함께 만든 별은 우주에서 다시 볼 수 있고
          <br />
          어떤 이야기를 나누고, 기분을 느꼈는지 알 수 있어
          <br />
          <p className='text-16-600-28'>
            우리가 느끼는 기분, 감정은 소중하니까
          </p>
        </div>
      )}
    </>
  )
}

export default FooterContent
