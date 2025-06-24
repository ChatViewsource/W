// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCLsz4Syv8Y6ubnLs9kIhAWXFtiilTQul0",
  authDomain: "w-app-d7348.firebaseapp.com",
  projectId: "w-app-d7348",
  storageBucket: "w-app-d7348.firebasestorage.app",
  messagingSenderId: "1043651378633",
  appId: "1:1043651378633:web:c9d3ee76ee5f5f40dbfc18",
  measurementId: "G-GSYBXP1VFM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
