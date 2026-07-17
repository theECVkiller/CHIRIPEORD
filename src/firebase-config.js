// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg0983bZgfuuMQ3s24NpQ0drjVkusOfE4",
  authDomain: "chiripeo-rd.firebaseapp.com",
  projectId: "chiripeo-rd",
  storageBucket: "chiripeo-rd.firebasestorage.app",
  messagingSenderId: "291197484390",
  appId: "1:291197484390:web:6d19c598dab0f18f9b9ca7",
  measurementId: "G-L2VTFREWBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
