// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9iwEES9lhA-HrlWximU4MW1RI5YTk-4g",
  authDomain: "ecoloop-e4dd2.firebaseapp.com",
  projectId: "ecoloop-e4dd2",
  storageBucket: "ecoloop-e4dd2.firebasestorage.app",
  messagingSenderId: "855333923203",
  appId: "1:855333923203:web:3daeef1a2faa96fb296eb6",
  measurementId: "G-90SKLS2KPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);