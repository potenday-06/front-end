import { ChatMode } from '@/app/chat/Chat'
import { useEffect, useRef, useState } from 'react'

const useUpdateHeight = ({ chatMode }: { chatMode: ChatMode | undefined }) => {
  const [containerHeight, setContainerHeight] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 메시지 리스트 컨테이너 높이 계산
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    // 컴포넌트가 마운트된 후 약간의 지연을 두고 다시 높이 계산
    const timeoutId = setTimeout(updateHeight, 100)

    return () => {
      window.removeEventListener('resize', updateHeight)
      clearTimeout(timeoutId)
    }
  }, [chatMode])

  return { containerHeight, containerRef }
}

export default useUpdateHeight
