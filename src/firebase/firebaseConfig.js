// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMQ46523yU6Bm26aJHG_ZH-Sl4KflyVi8",
  authDomain: "dylvault-landing.firebaseapp.com",
  projectId: "dylvault-landing",
  storageBucket: "dylvault-landing.firebasestorage.app",
  messagingSenderId: "559710155646",
  appId: "1:559710155646:web:9b1737c674ce149b48f92f",
  measurementId: "G-SC0HHJYS4L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
