import Image from 'next/image'
import { MessageProps } from './MessageWrapper'

const AIMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <>
      <Image
        width={36}
        height={33}
        src='/assets/icons/tori-footer.svg'
        alt='토리'
        className='relative top-2 z-50'
      />
      <div className='w-max max-w-[80%] rounded-12 border border-solid border-[#b49df1] px-24 py-10'>
        {content ? (
          <div className='text-14-500'>{content}</div>
        ) : (
          <p className='text-14-500' tabIndex={0}>
            같이 대화해서 좋아!
            <br />
            오늘 기분 어떤지 이야기해줄래?
          </p>
        )}
      </div>
    </>
  )
}

export default AIMessage
