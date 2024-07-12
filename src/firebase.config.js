// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9peGpn7QcqU8pUef4hd9fICOs7uU--o0",
    authDomain: "axial-journal-425916-s7.firebaseapp.com",
    projectId: "axial-journal-425916-s7",
    storageBucket: "axial-journal-425916-s7.appspot.com",
    messagingSenderId: "409837878717",
    appId: "1:409837878717:web:8741aee46ece64ebd8a6d4",
    measurementId: "G-TL8Q2C5E0L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
