import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDCtRBgRb28ogrAL4o4R5Uvh-76Cghyh0E",
  authDomain: "clone-63f84.firebaseapp.com",
  projectId: "clone-63f84",
  storageBucket: "clone-63f84.appspot.com",
  messagingSenderId: "342153612260",
  appId: "1:342153612260:web:5f142459fbfd314c9595f1",
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// auth below will be used in fututre to chekc authentication and other stuff
export const auth = getAuth(app);
export const gprovider = new GoogleAuthProvider();
// export default firebase.auth();
