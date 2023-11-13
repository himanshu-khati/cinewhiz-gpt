// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcGzPat13M43yLAR18U_npmzZK91f-njI",
  authDomain: "cinewhizgpt.firebaseapp.com",
  projectId: "cinewhizgpt",
  storageBucket: "cinewhizgpt.appspot.com",
  messagingSenderId: "916811513523",
  appId: "1:916811513523:web:79d3a429ccdb5874ae7ac6",
  measurementId: "G-MFCP7VMMJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
