import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "account-book-da88b.firebaseapp.com",
  databaseURL: "https://account-book-da88b.firebaseio.com",
  projectId: "account-book-da88b",
  // storageBucket: "account-book-da88b.appspot.com",
  // messagingSenderId: "967378259670",
  appId: "1:967378259670:web:438ce8ea65bfcb4ce2c377"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
