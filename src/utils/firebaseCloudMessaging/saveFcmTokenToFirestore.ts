import { getMessaging, getToken, isSupported } from 'firebase/messaging'
import { firebaseApp } from '@/firebase'
import Cookies from 'js-cookie'

/**
 * FCM 토큰을 발급하고 Firestore에 저장합니다.
 * @param userId Firestore users 컬렉션 내 문서 ID로 사용할 유저 ID
 */

export const saveFcmTokenToFirestore = async (userId: string) => {
  const accessToken = Cookies.get('accessToken1')
  if (typeof window === 'undefined') return

  try {
    const supported = await isSupported()
    if (!supported) {
      console.warn('브라우저가 FCM을 지원하지 않습니다.')
      return
    }

    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      console.warn('알림 권한이 없습니다.')
      return
    }

    const messaging = getMessaging(firebaseApp)

    const fcmToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    })

    if (!fcmToken) {
      console.warn('FCM 토큰이 없습니다.')
      return
    }

    const response = await fetch(`/api/fcmtoken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId,
        fcmToken,
      }),
    })

    if (!response.ok) {
      throw new Error('fcmToken 저장 실패')
    }

    console.log('FCM 토큰 Firestore 저장 완료')
  } catch (error) {
    console.error('FCM 저장 중 오류 발생:', error)
  }
}
