importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

// 백그라운드 메시지 수신
messaging.onBackgroundMessage((payload) => {
  const title = payload.data.title
  const notificationOptions = {
    body: payload.data.body,
    icon: '/assets/pwa/192.png',
    data: payload.data,
  }

  self.registration.showNotification(title, notificationOptions)
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  const redirectUrl =
    event?.notification?.data?.redirectUrl || event.data?.redirectUrl

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function (clientList) {
      for (const client of clientList) {
        if (client.url === redirectUrl && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(redirectUrl)
      }
    })
  )
})
