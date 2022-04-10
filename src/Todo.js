/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import db from './Firebase';
import { collection,  query , onSnapshot, deleteDoc, doc, setDoc , where} from "firebase/firestore"; 
import {AiOutlineDelete , AiOutlineReload} from 'react-icons/ai';
import './App.css'
var CryptoJS= require("crypto-js")
const Todos = ({todos,markComplete}) => {
     const [todo1, settodo1] = React.useState([])
     let user = localStorage.getItem('user') || '';
    React.useEffect( async () => {
        const q = query(collection(db, "password-saver"),where("email", "==", user));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push([doc.data(), doc.id]);
                console.log(doc.data());
            });
            settodo1(cities);
            console.log("Current cities in CA: ", cities.join(", "));
          });
          return () => unsubscribe();
    }, [todos]);
    console.log(todo1,"🥮🥮🥮🥮")
    return (
        <div className="todo-list">
                {
                   

                    todo1.map((todo, index) => (
                        
                        <Todo todo={todo[0]} key={index} index={index} markComplete={markComplete} doc1 = {todo[1]} />
                        
                    ))
                }
        </div>
    );
};
const delete1 = async(e) =>{
    console.log(e.target.id)
    await deleteDoc(doc(db, "password-saver", e.target.id.toString()));
}
function generateP() { 
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
     var i = 0; 
    for ( i = 1; i <= 8; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 
  }
const updatepass = (e) =>{
    let result = generateP();
    var pass1 = CryptoJS.AES.encrypt(result, 'secret key 123').toString();
    console.log(result);
    const cityRef = doc(db, 'password-saver', e.target.id.toString());
    setDoc(cityRef, { password: pass1 }, { merge: true })

}
const Todo = ({todo, index,markComplete, doc1}) =>(
    <div className="todo">
        {/*<p style={{textDecoration : todo.isCompleted ? "line-through" : ""}} >
            <input type={"checkbox"} onChange={() => markComplete(index)}  name={"completed"} id={todo.id} />{' '}*/}
            {todo.name} {'Password is :-'} {CryptoJS.AES.decrypt(todo.password, 'secret key 123').toString(CryptoJS.enc.Utf8)}
        <AiOutlineDelete onClick={delete1} id = {doc1} />
        <AiOutlineReload onClick={updatepass} id={doc1}/>
    </div>
);

export default Todos;