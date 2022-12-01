// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_API_KEY,
//   authDomain: "eshop-ea8e7.firebaseapp.com",
//   projectId: "eshop-ea8e7",
//   storageBucket: "eshop-ea8e7.appspot.com",
//   messagingSenderId: "146569443233",
//   appId: "1:146569443233:web:46db000fc2c897f3b73de0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
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