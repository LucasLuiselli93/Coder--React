
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFYQtpSmcZKPBd1_H8V5TrsXafUTh6tC8",
  authDomain: "react-coder-89b8e.firebaseapp.com",
  projectId: "react-coder-89b8e",
  storageBucket: "react-coder-89b8e.appspot.com",
  messagingSenderId: "477218898533",
  appId: "1:477218898533:web:d9ff0bf399bbd5797efc8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app)