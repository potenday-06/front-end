import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCTCA9I3rwf36j6Vf_5zZdb78THjn-pfrs',
  authDomain: 'next-pwa-dd8a6.firebaseapp.com',
  projectId: 'next-pwa-dd8a6',
  storageBucket: 'next-pwa-dd8a6.firebasestorage.app',
  messagingSenderId: '326049825993',
  appId: '1:326049825993:web:87c418ba62493c62c37918',
  measurementId: 'G-9VZ01RCGZY',
}

// firebase 초기화
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
