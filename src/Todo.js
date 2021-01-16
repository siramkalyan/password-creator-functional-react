import React from 'react';


const Todos = ({todos,markComplete}) => {
 

    return (
        <div className={"todo-list"}>
                {
                   

                    todos.map((todo, index) => (
                        
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