// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyg3LGtEwqleGS06x-6K-9jYX_0oHyUos",
  authDomain: "test-76fad.firebaseapp.com",
  projectId: "test-76fad",
  storageBucket: "test-76fad.appspot.com",
  messagingSenderId: "193534079381",
  appId: "1:193534079381:web:479b33b4c04e9a69d7469c",
  measurementId: "G-VJFJV12CVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);