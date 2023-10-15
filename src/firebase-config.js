// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWtTD5wtvFXVlnWyFzptG6Q4Ur10r29DY",
  authDomain: "ebunwebsite-blog.firebaseapp.com",
  projectId: "ebunwebsite-blog",
  storageBucket: "ebunwebsite-blog.appspot.com",
  messagingSenderId: "38090979927",
  appId: "1:38090979927:web:70ade008288c131bbe4112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();