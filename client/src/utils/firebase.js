
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authprepbuddy.firebaseapp.com",
  projectId: "authprepbuddy",
  storageBucket: "authprepbuddy.firebasestorage.app",
  messagingSenderId: "588170494479",
  appId: "1:588170494479:web:60ae1419c0227cd717d97a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
