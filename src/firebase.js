import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBlYuuRflM2pBPRqfa9-VHN8So21mvaosc",
  authDomain: "blog-site-akki.firebaseapp.com",
  projectId: "blog-site-akki",
  storageBucket: "blog-site-akki.appspot.com",
  messagingSenderId: "72272686190",
  appId: "1:72272686190:web:64aead9ad582be6f6c4a7f",
  measurementId: "G-MVRB28HGNQ"
};
firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore();

const fb = firebase;

export default fb;