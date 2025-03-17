import { MessageType } from '@/utils/api/wholeConversation/getWholeConversation'
import { VirtuosoMessageListMethods } from '@virtuoso.dev/message-list'
import { useEffect, useMemo, useRef } from 'react'

const useScrollToBottom = ({
  messages,
  viewOnly,
}: {
  messages: MessageType[]
  viewOnly: boolean | undefined
}) => {
  const virtuoso = useRef<VirtuosoMessageListMethods<MessageType>>(null)

  const messagesWithTrigger = useMemo(() => {
    const triggerMessage = {
      type: 'AI' as MessageType['type'],
      message: '',
    }
    return [triggerMessage, ...messages]
  }, [messages])

  useEffect(() => {
    // virtuoso에서 제공하는 메서드, 기존 데이터를 전부 삭제한 뒤, 새로운 데이터로 교체
    virtuoso.current?.data.replace(messagesWithTrigger)
    if (viewOnly) return
    // AI 고정 메시지, 유저 채팅을 포함한 전체 리스트의 길이 - 1 위치(가장 아래)로 스크롤
    virtuoso.current?.scrollToItem(messagesWithTrigger.length - 1)
  }, [messagesWithTrigger, viewOnly])

  return { messagesWithTrigger, virtuoso }
}

export default useScrollToBottom
