// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuPZwB6OhG2o491uUWKmOIf9vwW7fhiFw",
  authDomain: "ecommerce-cultura-visitante.firebaseapp.com",
  projectId: "ecommerce-cultura-visitante",
  storageBucket: "ecommerce-cultura-visitante.appspot.com",
  messagingSenderId: "872790406874",
  appId: "1:872790406874:web:ed21ca81cf7324c10ad7e3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
