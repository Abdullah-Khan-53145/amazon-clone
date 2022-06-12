// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCahgxUEf5JJCGHpoVggKFSQGFM-Q1oN_E",
  authDomain: "clone-e5efb.firebaseapp.com",
  projectId: "clone-e5efb",
  storageBucket: "clone-e5efb.appspot.com",
  messagingSenderId: "120158349780",
  appId: "1:120158349780:web:73c4c3f70cefce97bf4e41",
  measurementId: "G-FK6HFQF0PQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
