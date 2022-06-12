import { getApp, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKkTMQhnSHEhCTSy6fFEi_wH8Nqys2zcI",
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase only if there is no previous instance of firebase initialized
const firebaseClient = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

// initialization for firebase authentication
const auth = getAuth(firebaseClient);
// connectAuthEmulator(auth, "http://localhost:4000");

// initialization for firebase firestore
// Returns the existing Firestore instance
// that is associated with the provided @firebase/app#FirebaseApp.
// If no instance exists, initializes a new instance with default settings.
const db = getFirestore(firebaseClient);
// collection ref
const usersColRef = collection(db, "users");

export default auth;
