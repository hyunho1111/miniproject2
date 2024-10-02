// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const loginUser = async (email, password) => {
    try {
        // auth: firebase.js에서 생성한 auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
};
const registerUser = async (email, password) => {
    try {
        // auth: firebase.js에서 생성한 auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
};

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvJ33IQ2iH-IC9d55XeHrGHx3_lBx2byU",
    authDomain: "miniprojcet2.firebaseapp.com",
    projectId: "miniprojcet2",
    storageBucket: "miniprojcet2.appspot.com",
    messagingSenderId: "440562512090",
    appId: "1:440562512090:web:818cb01ea8f44e508b75e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);