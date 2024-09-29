import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWSzdYDG7BAsdCaqgQ2qRkxorKSJJstyk",
    authDomain: "ecommerce-12c98.firebaseapp.com",
    projectId: "ecommerce-12c98",
    storageBucket: "ecommerce-12c98.appspot.com",
    messagingSenderId: "414495495964",
    appId: "1:414495495964:web:3157473accaac37628ccd9",
    measurementId: "G-CFCKRH7LGB"
};

const cong = () => {
  return initializeApp(firebaseConfig);
};

export default cong;
