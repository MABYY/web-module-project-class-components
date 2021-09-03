import React from 'react';
import Todo from '../components/Todo.js';

const TodoList = (props) =>{

    
    return(
        <div>
             <button  type ="submit" onClick ={(e) => props.compledtedHandle()}> 
                        Clear Completed </button>
                        
             {props.tasks.map((item) => (
                <Todo key = {item.id} item = {item} toggleTask = {props.toggleTask} />
                ))}  
        </div>
    )
}

export default TodoList;

