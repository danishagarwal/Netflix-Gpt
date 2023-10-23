// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdWH6O3z6V7Sb0mKw5dQSjjO2byb0Rew4",
  authDomain: "netflix-83944.firebaseapp.com",
  projectId: "netflix-83944",
  storageBucket: "netflix-83944.appspot.com",
  messagingSenderId: "1097571099015",
  appId: "1:1097571099015:web:5e73e475f6313483553322",
  measurementId: "G-FLWEJ7MY8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
