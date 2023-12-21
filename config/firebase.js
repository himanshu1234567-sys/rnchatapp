import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
const firebaseConfig = {
  apiKey: "AIzaSyBOThbnL0fQdwpQJOAFwy9DZqyTOtKCJ30",
  authDomain: "fir-chatapp-9b4d3.firebaseapp.com",
  projectId: "fir-chatapp-9b4d3",
  storageBucket: "fir-chatapp-9b4d3.appspot.com",
  messagingSenderId: "420404113065",
  appId: "1:420404113065:web:56e79f15fca4f9e25503b8",
  measurementId: "G-VRG9SREXT1"

};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
