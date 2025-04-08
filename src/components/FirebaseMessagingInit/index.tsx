'use client'

import { useEffect } from 'react'
import { getMessaging, onMessage, isSupported } from 'firebase/messaging'
import { firebaseApp } from '@/firebase'

const FirebaseMessagingInit = () => {
  useEffect(() => {
    const listenForeground = async () => {
      const supported = await isSupported()
      if (!supported) return

      const messaging = getMessaging(firebaseApp)

      // 포그라운드 메시지를 서비스 워커에서 처리
      onMessage(messaging, (payload) => {
        if (
          'serviceWorker' in navigator &&
          navigator.serviceWorker.controller
        ) {
          navigator.serviceWorker.controller.postMessage(payload)
        }
      })
    }

    listenForeground()
  }, [])

  return null
}

export default FirebaseMessagingInit
