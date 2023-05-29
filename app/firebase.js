import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT8EyFnw9Xdzzuk1NQ0F2uTouT-t-CPes",
  authDomain: "nextjs-firebase-c4267.firebaseapp.com",
  projectId: "nextjs-firebase-c4267",
  storageBucket: "nextjs-firebase-c4267.appspot.com",
  messagingSenderId: "152109044180",
  appId: "1:152109044180:web:9a4983a95c347a42a7c641"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
