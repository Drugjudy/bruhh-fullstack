import firebase from './firebase';


import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyC_vlUiMGNoWdqSKIjMFEy9bIrGvPLmSMM",
  authDomain: "auth-login-6d2d4.firebaseapp.com",
  projectId: "auth-login-6d2d4",
  storageBucket: "auth-login-6d2d4.appspot.com",
  messagingSenderId: "738992627952",
  appId: "1:738992627952:web:d0908922b99c65597ce235"
};



firebase.initializeApp(firebaseConfig);

export default firebase;