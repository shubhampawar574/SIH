import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe2kl9EfIms9iLvWi6jO_X17anoMuFdmA",
  authDomain: "reactquestionbank.firebaseapp.com",
  projectId: "reactquestionbank",
  storageBucket: "reactquestionbank.appspot.com",
  messagingSenderId: "468220147098",
  appId: "1:468220147098:web:d82a69189d12e417473623",
  measurementId: "G-F0GX93T00L",
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();

export default FirebaseApp;
export { db };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
