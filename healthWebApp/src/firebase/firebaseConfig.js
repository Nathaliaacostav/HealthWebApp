import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCm5F6nv4szgTncXn8F-rSjar28e9k05jM",
  authDomain: "healthapp-lecttu.firebaseapp.com",
  projectId: "healthapp-lecttu",
  storageBucket: "healthapp-lecttu.appspot.com",
  messagingSenderId: "318224153390",
  appId: "1:318224153390:web:3ef704d398c9a7d17d98bf"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Authentication
export const auth = getAuth(app);

// Inicializa Firestore (base de datos NoSQL)
export const firestore = getFirestore(app);

// Inicializa Analytics
export const analytics = getAnalytics(app);

// Inicializa Cloud Messaging
export const messaging = getMessaging(app);