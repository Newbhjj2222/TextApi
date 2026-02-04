import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyfRYol2H7jL1HbQNnkyU4v9BfvagDBoU",
  authDomain: "sample-fad00.firebaseapp.com",
  projectId: "sample-fad00",
  messagingSenderId: "1003375658787",
  appId: "1:1003375658787:web:8260a5730e1d2defd06e96",
};

// Re-use existing Firebase app if already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
