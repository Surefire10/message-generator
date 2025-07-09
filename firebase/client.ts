// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_firebaseApiKey,
  authDomain: process.env.NEXT_PUBLIC_firebaseAuthDomain,
  projectId: process.env.NEXT_PUBLIC_firebaseProjectId,
  storageBucket: process.env.NEXT_PUBLIC_firebaseStorageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_firebaseMessagingSenderId,
  appId: process.env.NEXT_PUBLIC_firebaseAppId,
  measurementId: process.env.NEXT_PUBLIC_firebaseMeasurementId,
};
// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig, "app") : getApps()[0]; // reuse already initialized app

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
