// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm5F6nv4szgTncXn8F-rSjar28e9k05jM",
    authDomain: "healthapp-lecttu.firebaseapp.com",
    projectId: "healthapp-lecttu",
    storageBucket: "healthapp-lecttu.appspot.com",
    messagingSenderId: "318224153390",
    appId: "1:318224153390:web:3ef704d398c9a7d17d98bf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firebase Firestore (NoSQL data base)
export const firestore = getFirestore(app)

export const analytics = getAnalytics(app)
export const messaging = getMessaging(app)