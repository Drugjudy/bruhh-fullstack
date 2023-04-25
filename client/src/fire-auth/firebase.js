import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_vlUiMGNoWdqSKIjMFEy9bIrGvPLmSMM",
  authDomain: "auth-login-6d2d4.firebaseapp.com",
  projectId: "auth-login-6d2d4",
  storageBucket: "auth-login-6d2d4.appspot.com",
  messagingSenderId: "738992627952",
  appId: "1:738992627952:web:d0908922b99c65597ce235"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;