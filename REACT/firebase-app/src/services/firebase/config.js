// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDASavEFBlT5aaelYYdQNjYPDvfM1vnbb0",
  authDomain: "bootcampfsj27.firebaseapp.com",
  projectId: "bootcampfsj27",
  storageBucket: "bootcampfsj27.firebasestorage.app",
  messagingSenderId: "386642502513",
  appId: "1:386642502513:web:32b71dcce0bdef11388cd0",
  measurementId: "G-M6J339NTW5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);