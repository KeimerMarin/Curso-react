import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxZIRDgy01riuZYHa70HvXbmF7iJMTkeY",
  authDomain: "keypad-react.firebaseapp.com",
  projectId: "keypad-react",
  storageBucket: "keypad-react.appspot.com",
  messagingSenderId: "586194112267",
  appId: "1:586194112267:web:4cf6d68d3fd923d1bbdc0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)