import './App.css';
import React,{useState} from 'react';
import Todos from './Todo';
import TodoForm from './TodoForm';
import db from './Firebase';
import { collection, addDoc } from "firebase/firestore"; 
function App()
{
  const [state,setState] = useState([{
    id:1,
    name : "Wake Up bud",
    password : "Check password",
    isCompleted : false , 
  },
{
  id : 2,
  name : " brush both teeth and brain",
  password : "Test examples ",
  isCompleted : false,
},]);

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
const addTodo = (todo) =>
{
  const pass = generateP();
  let user = localStorage.getItem('user') || '';
  setState([...state,{name : todo,password : pass}]);
  //const addpassRef = doc(db, "password-saver", "users1")
  //const addpass =  setDoc(addpassRef, {name : todo,password : pass},{merge : true});
  const addp = addDoc(collection(db,"password-saver"),{name : todo,password : pass,email : user });
  console.log({state});
  
}
const markComplete = (index) => {
  const newState = [...state];
  newState[index].isCompleted = !newState[index].isCompleted;
  setState(newState);
}
return (
  <div className="parent-container">
      <div className="container top-container">
          <div className="App-header">
              <div className="todoform">
                  <TodoForm addTodo={addTodo} />
                  <Todos todos={state}  markComplete={markComplete} />
              </div>
          </div>
      </div>
  </div>
);
}



export default App;
