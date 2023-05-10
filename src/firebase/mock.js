// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set, } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAtJtr2U7chNmcfl_07jGotv9G8IzD4EOc",
    authDomain: "authwithsocialmedia-a71dd.firebaseapp.com",
    databaseURL: "https://authwithsocialmedia-a71dd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authwithsocialmedia-a71dd",
    storageBucket: "authwithsocialmedia-a71dd.appspot.com",
    messagingSenderId: "735600230281",
    appId: "1:735600230281:web:bbd033d688d450aaf5eb58",
    measurementId: "G-0DNMMWS7X7"
};


export const app = initializeApp( firebaseConfig );


