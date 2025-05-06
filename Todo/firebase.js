import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuuuIK_X465Z8t6r0k-o9saEaPo2nAJSQ",
  authDomain: "authentication-d89bb.firebaseapp.com",
  projectId: "authentication-d89bb",
  storageBucket: "authentication-d89bb.firebasestorage.app",
  messagingSenderId: "506455549617",
  appId: "1:506455549617:web:9efd4eca578bcc9c05a490",
  measurementId: "G-S8M4L16DTV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
