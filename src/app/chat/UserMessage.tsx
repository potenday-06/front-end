import { MessageProps } from './MessageWrapper'

const UserMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <div className='inline-block w-max max-w-[80%] rounded-30 border border-white bg-purple-5 px-16 py-8 text-left text-18-600'>
      {content}
    </div>
  )
}

export default UserMessage
