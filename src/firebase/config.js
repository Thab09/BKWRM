// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2rrUEswdDVDhEscTgEIKfPyvJvw508Q",
  authDomain: "bkwrm-305a6.firebaseapp.com",
  projectId: "bkwrm-305a6",
  storageBucket: "bkwrm-305a6.appspot.com",
  messagingSenderId: "1013091102345",
  appId: "1:1013091102345:web:1abaa51a85c9d4cebb6058",
  measurementId: "G-FCM528Z56D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
