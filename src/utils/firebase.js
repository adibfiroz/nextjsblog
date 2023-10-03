// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextblog-4c369.firebaseapp.com",
  projectId: "nextblog-4c369",
  storageBucket: "nextblog-4c369.appspot.com",
  messagingSenderId: "451527284054",
  appId: "1:451527284054:web:cb92ce011467062f4b32f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
