import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSJ2d-ujt0R-rvffTlAiV1CsAjneF5PTQ",
  authDomain: "linkdin-clone-f73ca.firebaseapp.com",
  projectId: "linkdin-clone-f73ca",
  storageBucket: "linkdin-clone-f73ca.appspot.com",
  messagingSenderId: "510730393204",
  appId: "1:510730393204:web:5788cb123c9660499f2321",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
