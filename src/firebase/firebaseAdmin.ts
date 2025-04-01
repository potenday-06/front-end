import admin from 'firebase-admin'

// Firebase Admin SDK가 이미 초기화되었는지 확인
if (!admin.apps.length) {
  const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

  if (!serviceAccountBase64) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY_BASE64 환경 변수가 없습니다.')
  }

  const serviceAccount = JSON.parse(
    Buffer.from(serviceAccountBase64, 'base64').toString('utf-8')
  )

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
  })
}

export default admin
