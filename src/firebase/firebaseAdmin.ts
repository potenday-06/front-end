import admin from 'firebase-admin'

// Firebase Admin SDK가 이미 초기화되었는지 확인
if (!admin.apps.length) {
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const clientEmail = process.env.NEXT_PUBLIC_CLIENT_EMAIL
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID

  if (!privateKey || !clientEmail || !projectId) {
    throw new Error('Firebase 환경변수가 누락되었습니다.')
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey,
      clientEmail,
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  })
}

export default admin
