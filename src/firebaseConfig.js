// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4L6hRQG0qLqdzBxHywxRAE6S1c_gJQCM",
  authDomain: "dorotea-9d701.firebaseapp.com",
  projectId: "dorotea-9d701",
  storageBucket: "dorotea-9d701.appspot.com",
  messagingSenderId: "631063702684",
  appId: "1:631063702684:web:c053f13134621595e71159",
  measurementId: "G-S1QDM8NWSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore (app)

export default db