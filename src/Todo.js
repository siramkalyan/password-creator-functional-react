/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import db from './Firebase';
import { collection, addDoc , doc ,setDoc , query , onSnapshot} from "firebase/firestore"; 

const Todos = ({todos,markComplete}) => {
     const [todo1, settodo1] = React.useState([])
    React.useEffect( async () => {
        const q = query(collection(db, "password-saver"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data());
                console.log(doc.data());
            });
            settodo1(cities);
            console.log("Current cities in CA: ", cities.join(", "));
          });
          return () => unsubscribe();
    }, [todos]);

    return (
        <div className={"todo-list"}>
                {
                   

                    todo1.map((todo, index) => (
                        
                        <Todo todo={todo} key={index} index={index} markComplete={markComplete} />
                        
                    ))
                }
        </div>
    );
};

const Todo = ({todo, index,markComplete}) =>(
    <div className="todo">
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}} >
            <input type={"checkbox"} onChange={() => markComplete(index)}  name={"completed"} id={todo.id} />{' '}
            {todo.name} {'Password is :-'} {todo.password}
        </p>
    </div>
);

export default Todos;