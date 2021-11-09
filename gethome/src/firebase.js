// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { auth } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_YscJWHNCfHzqNj8ImjB6C-TNUORJbQ",
  authDomain: "get-home-1.firebaseapp.com",
  databaseURL: "https://get-home-1-default-rtdb.firebaseio.com",
  projectId: "get-home-1",
  storageBucket: "get-home-1.appspot.com",
  messagingSenderId: "834790648522",
  appId: "1:834790648522:web:baefe759aafc19e6b26233",
  measurementId: "G-F9ZKWZB4W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
