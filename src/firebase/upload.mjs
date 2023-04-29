import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

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
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})