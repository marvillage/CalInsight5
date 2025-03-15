
// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // Import database functionality

const firebaseConfig = {
  apiKey: "AIzaSyDoXYJXMnUhYaM-XsczqWaHo8eEscDrmqQ",
  authDomain: "marvinthon-42df6.firebaseapp.com",
  databaseURL: "https://marvinthon-42df6-default-rtdb.firebaseio.com",  // Make sure this is set correctly
  projectId: "marvinthon-42df6",
  storageBucket: "marvinthon-42df6.appspot.com",
  messagingSenderId: "893533900532",
  appId: "1:893533900532:web:9fcfd219902b6d9323d8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);  // Initialize and export database

export { db };
