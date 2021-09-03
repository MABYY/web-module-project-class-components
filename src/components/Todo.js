import React from 'react';
import './Todo.css'

const Todo = (props) =>{
    const handleClick = (e) => {
        e.preventDefault();
        props.toggleTask(props.item.id);
    }
    return(
        <div className={(props.item.completed === true)? ' completed' : ''} onClick={handleClick} >
            <h4>{props.item.task} </h4>
        </div>
    )
}

export default Todo;