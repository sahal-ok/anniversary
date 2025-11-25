// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


 const firebaseConfig = {
    apiKey: "AIzaSyBLLgWcAGVEoVJkPC3jDvWKy0qap745Ql4",
    authDomain: "anniwesery.firebaseapp.com",
    databaseURL: "https://anniwesery-default-rtdb.firebaseio.com",
    projectId: "anniwesery",
    storageBucket: "anniwesery.firebasestorage.app",
    messagingSenderId: "486345817092",
    appId: "1:486345817092:web:8e606e2ed5eaf985e84951",
    measurementId: "G-VMDHRW4YX9"
  };



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
