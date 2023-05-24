
import 'firebase/compat/firestore';
import 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5pDK-1ipPNhm2Ik8z6cHxCvL8fvAr5C8",
  authDomain: "twitter-clone-49bda.firebaseapp.com",
  projectId: "twitter-clone-49bda",
  storageBucket: "twitter-clone-49bda.appspot.com",
  messagingSenderId: "711463254431",
  appId: "1:711463254431:web:46f4c7e629dfead742a5aa",
  measurementId: "G-1WWPSM0ZV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};