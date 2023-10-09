// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAioioxOTATdPq1jI5GyoDnfMUK9O6DfMU",
  authDomain: "refactor-4a58a.firebaseapp.com",
  projectId: "refactor-4a58a",
  storageBucket: "refactor-4a58a.appspot.com",
  messagingSenderId: "890363538385",
  appId: "1:890363538385:web:2ca7e132287d83c53f0ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
