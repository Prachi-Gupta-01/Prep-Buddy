
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authexamnotes-db081.firebaseapp.com",
  projectId: "authexamnotes-db081",
  storageBucket: "authexamnotes-db081.firebasestorage.app",
  messagingSenderId: "356239890494",
  appId: "1:356239890494:web:9f5ea6cf11bb2d3ee4196f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };