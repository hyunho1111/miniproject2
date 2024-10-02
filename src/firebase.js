// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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