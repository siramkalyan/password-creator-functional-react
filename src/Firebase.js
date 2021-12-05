import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyAJTihH8JkI-znX0vaytX7CdYR8u6JNEMQ",

  authDomain: "uber-eats-clone-eaa56.firebaseapp.com",

  databaseURL: "https://uber-eats-clone-eaa56-default-rtdb.firebaseio.com",

  projectId: "uber-eats-clone-eaa56",

  storageBucket: "uber-eats-clone-eaa56.appspot.com",

  messagingSenderId: "958443395901",

  appId: "1:958443395901:web:f07248095ca24e32a38354"

};


const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore();
export default db;