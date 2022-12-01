import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// NODE_ENV KEY ADDED TO VERCEL AS ENVIRONMENT VARIABLES
export const firebaseConfig = {
  apiKey: process.env.NODE_ENV,
  authDomain: "eshop-a3598.firebaseapp.com",
  projectId: "eshop-a3598",
  storageBucket: "eshop-a3598.appspot.com",
  messagingSenderId: "235164182183",
  appId: "1:235164182183:web:2cc5578d0f39d4198fdd82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;