// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore,collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAba2PpA3X7udSxy83slfQVuxWrHdA8f6M",
  authDomain: "todoproject600.firebaseapp.com",
  projectId: "todoproject600",
  storageBucket: "todoproject600.appspot.com",
  messagingSenderId: "715009558239",
  appId: "1:715009558239:web:879c4f910afa69afcf8b6a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const todoRef = collection(db, 'todos');

// Initialize Firebase
export { db };