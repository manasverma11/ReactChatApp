// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL-UoLDuAUkZGwepYS8gICiMhWvM_a46U",
  authDomain: "chatapp-53387.firebaseapp.com",
  projectId: "chatapp-53387",
  storageBucket: "chatapp-53387.appspot.com",
  messagingSenderId: "1079550152106",
  appId: "1:1079550152106:web:165d6c4195f5ddbb22afd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);