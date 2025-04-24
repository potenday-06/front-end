import { NextResponse } from 'next/server'
import { db } from '@/firebase'
import { doc, getDoc } from 'firebase/firestore'
import admin from '@/firebase/firebaseAdmin'

export async function POST(request: Request) {
  try {
    const { userId, title, body: notificationBody, data } = await request.json()

    if (!userId || !title || !notificationBody) {
      return NextResponse.json(
        { success: false, message: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      )
    }

    // Firestore에서 FCM 토큰 가져오기
    const userRef = doc(db, 'users', userId)
    const userDoc = await getDoc(userRef)

    if (!userDoc.exists() || !userDoc.data().fcmToken) {
      return NextResponse.json(
        { success: false, message: 'FCM 토큰을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const fcmToken = userDoc.data().fcmToken

    const message = {
      data: {
        title,
        body: notificationBody,
        redirectUrl: data.redirectUrl || '/',
      },
      token: fcmToken,
    }

    // Firebase Admin으로 메시지 전송
    await admin.messaging().send(message)

    return NextResponse.json({
      success: true,
      message: '알림이 성공적으로 전송되었습니다.',
    })
  } catch (error) {
    console.error('알림 전송 중 오류 발생:', error)
    return NextResponse.json(
      { success: false, message: '알림 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
