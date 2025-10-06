import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDbm2YhUiE7dg4HHXuJcJDNI2ABwZegrZU",
  authDomain: "netflix-clone-ca438.firebaseapp.com",
  projectId: "netflix-clone-ca438",
  storageBucket: "netflix-clone-ca438.firebasestorage.app",
  messagingSenderId: "294853616119",
  appId: "1:294853616119:web:2645df4d5b48d0fe7a0ef2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      EmailAuthProvider: "local",
      email,
    });
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
    console.log(error.code);
    // alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signUp, logout };
