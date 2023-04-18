import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNLw-XGvLJKQoBMI-aMampOyW1-bGDglo",
  authDomain: "new-authentication-fe25f.firebaseapp.com",
  projectId: "new-authentication-fe25f",
  storageBucket: "new-authentication-fe25f.appspot.com",
  messagingSenderId: "93369948833",
  appId: "1:93369948833:web:7360beee238a9f8d3feee0"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

export const db =app.firestore()

export default app