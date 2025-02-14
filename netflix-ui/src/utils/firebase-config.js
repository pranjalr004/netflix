import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBUf8k5VKSMUB0Qj62byCLqY1baGlk9FRk",
    authDomain: "netflix-clone-734a1.firebaseapp.com",
    projectId: "netflix-clone-734a1",
    storageBucket: "netflix-clone-734a1.firebasestorage.app",
    messagingSenderId: "772869349553",
    appId: "1:772869349553:web:c74ed11705bdc13d1b0290",
    measurementId: "G-HET7T94YFV"
  };

const app=initializeApp(firebaseConfig)

export const firebaseAuth=getAuth(app)