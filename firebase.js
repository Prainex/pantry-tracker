// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbDfvtvM89yeL3_DNSmbCkDBioBNMW3n0",
  authDomain: "inventory-management-app-9c3e0.firebaseapp.com",
  projectId: "inventory-management-app-9c3e0",
  storageBucket: "inventory-management-app-9c3e0.appspot.com",
  messagingSenderId: "603161485197",
  appId: "1:603161485197:web:d60e19059fe4dd2c3ee7c4",
  measurementId: "G-C85H3TTQQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}