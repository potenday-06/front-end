import Image from 'next/image'
import { MessageProps } from './MessageWrapper'

const AIMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <div className='flex items-start gap-8'>
      <Image
        width={72}
        height={72}
        src='/assets/icons/tori-face.svg'
        alt='토리'
      />
      <div className='w-max text-18-600-25'>{content}</div>
    </div>
  )
}

export default AIMessage
