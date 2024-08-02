// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVUgZ52858j3xizWKcjFiJ0xX7NxqENHU",
  authDomain: "worldrelay-20922.firebaseapp.com",
  projectId: "worldrelay-20922",
  storageBucket: "worldrelay-20922.appspot.com",
  messagingSenderId: "981509675004",
  appId: "1:981509675004:web:430a7e97462155c6ce4479",
  measurementId: "G-81DJWNB86F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);