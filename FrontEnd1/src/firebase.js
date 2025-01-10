// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQRNoQu-maP2MlYqUEZ7YlL00jzUf-ddo",
  authDomain: "paddy-distributing.firebaseapp.com",
  projectId: "paddy-distributing",
  storageBucket: "paddy-distributing.firebasestorage.app",
  messagingSenderId: "824556318471",
  appId: "1:824556318471:web:b9f265e61dd3a22c841fa2",
  measurementId: "G-E8KDH6J1CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);