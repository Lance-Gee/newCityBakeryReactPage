import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAgYfLwNVOJFd-cu58VYxgTlseRp6JINk4",
  authDomain: "newcitybakery-7c51d.firebaseapp.com",
  databaseURL: "https://newcitybakery-7c51d-default-rtdb.firebaseio.com",
  projectId: "newcitybakery-7c51d",
  storageBucket: "newcitybakery-7c51d.appspot.com",
  messagingSenderId: "760023398461",
  appId: "1:760023398461:web:834f20fa7abdb017369254",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
