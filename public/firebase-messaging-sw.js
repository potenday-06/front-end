importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: 'AIzaSyCTCA9I3rwf36j6Vf_5zZdb78THjn-pfrs',
  authDomain: 'next-pwa-dd8a6.firebaseapp.com',
  projectId: 'next-pwa-dd8a6',
  storageBucket: 'next-pwa-dd8a6.firebasestorage.app',
  messagingSenderId: '326049825993',
  appId: '1:326049825993:web:87c418ba62493c62c37918',
  measurementId: 'G-9VZ01RCGZY',
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
