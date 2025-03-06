import Image from 'next/image'
import { MessageProps } from './MessageWrapper'

const AIMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <div className='relative w-max max-w-[80%] rounded-12 border border-solid border-[#b49df1] px-24 py-10'>
      <Image
        width={36}
        height={33}
        src='/assets/icons/tori-footer.svg'
        alt='토리'
        className='absolute left-0 top-[-32px] z-50'
      />
      {content ? (
        <div className='text-14-500'>{content}</div>
      ) : (
        <p className='text-14-500'>
          같이 대화해서 좋아!
          <br />
          오늘 기분 어떤지 이야기해줄래?
        </p>
      )}
    </div>
  )
}

export default AIMessage
