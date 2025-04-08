import * as functions from 'firebase-functions/v2'
import * as admin from 'firebase-admin'

admin.initializeApp()

const firestore = admin.firestore()

export const dailyNotification = functions.scheduler.onSchedule(
  {
    schedule: '0 12 * * *',
    timeZone: 'Asia/Seoul',
  },
  async (_event: functions.scheduler.ScheduledEvent): Promise<void> => {
    const usersSnapshot = await firestore.collection('users').get()

    const promises: Promise<string>[] = []

    usersSnapshot.forEach((doc: FirebaseFirestore.QueryDocumentSnapshot) => {
      const data = doc.data()
      const fcmToken = data.fcmToken

      if (fcmToken && typeof fcmToken === 'string') {
        const message: admin.messaging.Message = {
          notification: {
            title: '토리와 오늘 있었던 이야기를 나눠보세요',
            body: '오늘 하루는 어땠나요? 토리와 함께 이야기 해봐요🐰',
          },
          token: fcmToken,
          data: {
            redirectUrl: '/chat',
          },
        }

        promises.push(admin.messaging().send(message))
      }
    })

    try {
      await Promise.all(promises)
      console.log('모든 사용자에게 알림을 성공적으로 보냈습니다.')
    } catch (err) {
      console.error('알림 전송 중 오류 발생:', err)
    }
  }
)
