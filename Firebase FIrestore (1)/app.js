import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { db } from "./firebase.js";
const todoElement = document.getElementById('todo');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    const collectionRef = collection(db, "todos");
    const data = { todo: todoElement.value };
    addDoc(collectionRef, data).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
})