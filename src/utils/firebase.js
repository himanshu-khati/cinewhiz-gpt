// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtobTs8Cni1yMq6vhTY4_47glD_ctoAz8",
  authDomain: "netflixgpt0711.firebaseapp.com",
  projectId: "netflixgpt0711",
  storageBucket: "netflixgpt0711.appspot.com",
  messagingSenderId: "305702747473",
  appId: "1:305702747473:web:612e49c7b3ade184722770",
  measurementId: "G-9V92ZJD346",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
