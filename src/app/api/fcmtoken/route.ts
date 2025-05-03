import { NextResponse } from 'next/server'
import { db } from '@/firebase'
import { doc, setDoc } from 'firebase/firestore'

export async function POST(request: Request) {
  try {
    const { userId, fcmToken } = await request.json()
    const userRef = doc(db, 'users', userId)

    await setDoc(userRef, {
      fcmToken,
      updatedAt: new Date().toISOString(),
    })

    if (!userId) {
      return NextResponse.json(
        { success: false, message: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'fcmToken 토큰 저장 완료',
    })
  } catch (error) {
    console.error('fcmToken 저장 중 오류 발생:', error)
    return NextResponse.json(
      { success: false, message: 'fcmToken 저장 중 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
