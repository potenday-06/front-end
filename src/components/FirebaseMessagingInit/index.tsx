'use client'

import { useEffect } from 'react'
import { getMessaging, onMessage, isSupported } from 'firebase/messaging'
import { firebaseApp } from '@/firebase'
import { useRouter } from 'next/navigation'

const FirebaseMessagingInit = () => {
  const router = useRouter()

  useEffect(() => {
    const listenForeground = async () => {
      const supported = await isSupported()
      if (!supported) {
        console.warn('브라우저가 FCM을 지원하지 않습니다.')
        return
      }

      try {
        const messaging = getMessaging(firebaseApp)

        // 포그라운드 메시지 수신 리스너 설정
        onMessage(messaging, (payload) => {
          if (Notification.permission === 'granted') {
            const title = payload.data?.title || '알림'
            const body = payload.data?.body || ''
            const redirectUrl = payload.data?.redirectUrl || '/'

            const notificationOptions = {
              body: body,
              icon: '/assets/pwa/192.png',
              data: {
                redirectUrl: redirectUrl,
              },
            }

            const notification = new Notification(title, notificationOptions)

            notification.onclick = (event) => {
              event.preventDefault()
              window.focus()
              notification.close()

              if (redirectUrl) {
                router.push(redirectUrl)
              }
            }
          }
        })
      } catch (error) {
        console.error('포그라운드 메시지 리스너 설정 오류:', error)
      }
    }

    listenForeground()
  }, [router])

  return null
}

export default FirebaseMessagingInit
