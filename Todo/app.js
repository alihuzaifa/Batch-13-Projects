// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// import { auth } from "./firebase.js";
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("user", user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorCode", errorCode);
//       console.log("errorMessage", errorMessage);
//     });
// });

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { auth, db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
const inputEl = document.getElementById("inputEl");
const btn = document.getElementById("btn");

let userId;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    userId = uid;
  } else {
    console.log("User is signout");
    // window.location.href = ''
    // User is signed out
  }
});

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }

btn.addEventListener("click", () => {
  const value = inputEl.value;
  const collectionRef = collection(db, "todos");
  const data = {
    todo: value,
    id: Date.now(),
    userId: userId,
  };
  addDoc(collectionRef, data)
    .then((response) => {
      inputEl.value = "";
      console.log("response", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

const getAllData = () => {
  const q = query(
    collection(db, "todos"),
    where("userId", "==", "mb2L1jwf9rMOsYepeTuBIyVu0083")
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const newData = {
        ...doc.data(),
        objectId: doc.id,
      };
      todos.push(newData);
    });
    console.log("todos", todos);
  });
};
getAllData();
