import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD8Ei3a_gOgOTQIsg0YVNFFJNC0_Kqka0U',
  authDomain: 'toristar-pwa.firebaseapp.com',
  projectId: 'toristar-pwa',
  storageBucket: 'toristar-pwa.firebasestorage.app',
  messagingSenderId: '777760746951',
  appId: '1:777760746951:web:52a2a42333c3f31725fde2',
  measurementId: 'G-33J5XFYGT8',
}

// firebase 초기화
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
