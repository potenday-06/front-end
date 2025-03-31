'use client'

import { useEffect } from 'react'
import { getMessaging, onMessage, isSupported } from 'firebase/messaging'
import { firebaseApp } from '@/firebase'

const FirebaseMessagingInit = () => {
  useEffect(() => {
    const setupFCM = async () => {
      if (!('Notification' in window)) return

      const permission = Notification.permission

      const supported = await isSupported()
      if (!supported) return

      if (permission === 'default') {
        // 자동 권한 요청
        const newPermission = await Notification.requestPermission()

        if (newPermission !== 'granted') return
      }
    }

    setupFCM()
  }, [])

  useEffect(() => {
    const listenForeground = async () => {
      const supported = await isSupported()
      if (!supported) return

      const messaging = getMessaging(firebaseApp)

      // 포그라운드 메시지 수신
      onMessage(messaging, (payload) => {
        if (Notification.permission === 'granted') {
          const notification = new Notification(
            payload.notification?.title || '알림',
            {
              body: payload.notification?.body || '',
              icon: '/assets/pwa/192.png',
            }
          )

          notification.onclick = () => {
            window.open('/', '_blank')?.focus()
          }
        }
      })
    }

    listenForeground()
  }, [])

  return null
}

export default FirebaseMessagingInit
