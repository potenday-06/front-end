importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: 'AIzaSyD8Ei3a_gOgOTQIsg0YVNFFJNC0_Kqka0U',
  authDomain: 'toristar-pwa.firebaseapp.com',
  projectId: 'toristar-pwa',
  storageBucket: 'toristar-pwa.firebasestorage.app',
  messagingSenderId: '777760746951',
  appId: '1:777760746951:web:52a2a42333c3f31725fde2',
  measurementId: 'G-33J5XFYGT8',
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
