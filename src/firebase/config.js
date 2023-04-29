import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE--huOnqJxl-CwMsMmf46cwu8Nj7sR44",
  authDomain: "jpm-reactfinal.firebaseapp.com",
  projectId: "jpm-reactfinal",
  storageBucket: "jpm-reactfinal.appspot.com",
  messagingSenderId: "143515541450",
  appId: "1:143515541450:web:0af4fdc0306f4aa5ed3933"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()