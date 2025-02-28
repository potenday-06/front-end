import { MessageProps } from './MessageWrapper'

const UserMessage = ({ content }: Pick<MessageProps, 'content'>) => {
  return (
    <div className='inline-block w-max rounded-30 border border-white bg-purple-5 px-16 py-8 text-18-600'>
      {content}
    </div>
  )
}

export default UserMessage
