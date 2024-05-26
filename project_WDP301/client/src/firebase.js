// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtId4FVtEE3iRfm1TJ94WcCyCBh4yNL3A",
  authDomain: "tien-ong-dit-bu.firebaseapp.com",
  projectId: "tien-ong-dit-bu",
  storageBucket: "tien-ong-dit-bu.appspot.com",
  messagingSenderId: "530463726373",
  appId: "1:530463726373:web:e7152dd130b8dcbe6558cc",
  measurementId: "G-0HG1E43073"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);