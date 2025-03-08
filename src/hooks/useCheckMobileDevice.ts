import { useEffect, useState } from 'react'

const useCheckMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileRegex =
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      setIsMobile(mobileRegex.test(userAgent))
    }

    checkMobileDevice()
    window.addEventListener('resize', checkMobileDevice)

    return () => {
      window.removeEventListener('resize', checkMobileDevice)
    }
  }, [])

  return isMobile
}

export default useCheckMobileDevice
