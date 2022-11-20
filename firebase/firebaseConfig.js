// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9tr1-UQusb__bI8e7LE_ZVMR9aVooP2s",
  authDomain: "menu-97255.firebaseapp.com",
  projectId: "menu-97255",
  storageBucket: "menu-97255.appspot.com",
  messagingSenderId: "396237380222",
  appId: "1:396237380222:web:7e383c430e3b4b2215d62f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const dbr = getDatabase(app);