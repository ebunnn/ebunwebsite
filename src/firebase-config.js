// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxeYSlxO1hUfh2tfNbfB5RenffTHpJb0M",
  authDomain: "ebunwebsite-blog-f616d.firebaseapp.com",
  projectId: "ebunwebsite-blog-f616d",
  storageBucket: "ebunwebsite-blog-f616d.appspot.com",
  messagingSenderId: "820852133738",
  appId: "1:820852133738:web:0760a57d5d54298ffb9f13",
  measurementId: "G-ZJKWM0P14T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { onAuthStateChanged };