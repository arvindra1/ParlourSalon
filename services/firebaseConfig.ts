// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCP1WoC6CGHa2NPL8VIOdJXeNoju8Tzu-4",
    authDomain: "parlour-9a6c8.firebaseapp.com",
    projectId: "parlour-9a6c8",
    storageBucket: "parlour-9a6c8.appspot.com",
    messagingSenderId: "274550977665",
    appId: "1:274550977665:web:0e4abbbc0966f2ad5cc980",
    measurementId: "G-6Z3Y2R74FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore(app);