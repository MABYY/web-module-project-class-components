import { render } from '@testing-library/react';
import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state={
            inputValue: "",
        };
    }
    
handleChanges = (e) => {
    this.setState({
        inputValue:e.target.value
    })
}

handleSubmit = (e)=>{
    e.preventDefault();
    this.props.eventInput(this.state.inputValue)
    this.setState({inputValue:""})
}


render() {
        return(
             <form onSubmit={this.handleSubmit}>
                 <br></br>
                <input type = 'text' name = 'task' 
                        onChange={this.handleChanges} 
                        placeholder= "__todo" 
                        value={this.state.inputValue}/>
                        
                <button  type ="submit" > Add Todo </button>

            </form>
            
        );

    }
}
export default TodoForm;