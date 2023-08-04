// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDKJp8EL7G0lblVB6itFZ8Hsjoz8sXeQVg",
  authDomain: "cara-e-commerce.firebaseapp.com",
  databaseURL: "https://cara-e-commerce-default-rtdb.firebaseio.com",
  projectId: "cara-e-commerce",
  storageBucket: "cara-e-commerce.appspot.com",
  messagingSenderId: "411177272317",
  appId: "1:411177272317:web:2897ee185e456791f18f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

