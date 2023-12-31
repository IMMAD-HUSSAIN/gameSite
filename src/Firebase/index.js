import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzhFlyTMxtn_IrjA-YbISascky899QyDE",
  authDomain: "gaming-site-9481e.firebaseapp.com",
  projectId: "gaming-site-9481e",
  storageBucket: "gaming-site-9481e.appspot.com",
  messagingSenderId: "642491977321",
  appId: "1:642491977321:web:905106991a22c1da6fdcf8",
  measurementId: "G-NSZ7XR1SRR",
};

// Initialize the Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Cloud Firestore service
const db = getFirestore(firebaseApp);

export default db;