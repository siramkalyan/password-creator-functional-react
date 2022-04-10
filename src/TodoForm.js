import React, {useState} from 'react'

const TodoForm = ({addTodo}) =>{
    const [value, setvalue] = useState('');

    const handleChange = (e) => {   //to handle change in form input (when user is typing)
        setvalue(e.target.value);         //e.target gives the value of current value the user is typing
    };

    const handleAdd = (e) => {
        e.preventDefault();     //to prevent DOM from reloading the page
        if (!value)             //if user submits empty form, do nothing
            return;
        addTodo(value);
        setvalue('');           //set the value to be empty again to get ready for next input
    };
    
    return(
        <div className={"container"}>
            <div className="App">Passowrd Creator</div>
            <form  className="App"  onSubmit={handleAdd}>
                <input   className={"form-control col-md-8 "} type={"textarea"} placeholder={"Website Name"} value={value} onChange={handleChange}/>
                <input className={"form-control btn-primary col-md-4 submit-button"} type={"submit"} value={"Add"}/>
            </form>
        </div>
    )
};

export default TodoForm;