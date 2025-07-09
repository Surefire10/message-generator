// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId,
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig, "app") : getApps()[0]; // reuse already initialized app

// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
