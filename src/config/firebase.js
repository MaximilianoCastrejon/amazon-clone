// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import env from "react-dotenv";

const firebaseConfig = {
  apiKey: `${env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "clone-080422.firebaseapp.com",
  projectId: "clone-080422",
  storageBucket: "clone-080422.appspot.com",
  messagingSenderId: "644504796682",
  appId: "1:644504796682:web:1fada2f1f10b95ce25e9f3",
  measurementId: "G-ND1HMML23Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
