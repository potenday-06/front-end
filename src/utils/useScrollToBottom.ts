import { useEffect } from 'react'

const useScrollToBottom = (deps: React.DependencyList = []) => {
  useEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    const footerElement = document.getElementsByTagName('footer')[0]
      .firstChild as HTMLElement
    const main = document.getElementsByTagName('main')[0]

    if (main && header && footerElement) {
      const mainHeight = `calc(100% - ${header.scrollHeight}px - ${footerElement.scrollHeight}px)`
      main.style.height = mainHeight
      main.scrollTop = main.scrollHeight
    }
  }, [deps])
}

export default useScrollToBottom
